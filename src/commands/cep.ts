import logger from '../utils/logger';
import ora from 'ora';
import axios from 'axios';

interface CepOptions {
  verbose?: boolean;
  // other options can be added if needed
}

// Using ViaCEP API - https://viacep.com.br/
const VIA_CEP_URL = 'https://viacep.com.br/ws';

export default async function cepCommand(cep: string, options: CepOptions) {
  const cleanedCep = cep.replace(/\D/g, ''); // Remove non-digits

  if (options.verbose) {
    logger.info(`Fetching address for CEP: ${cleanedCep}`);
  }

  if (cleanedCep.length !== 8) {
    logger.error('Invalid CEP format. CEP must have 8 digits.');
    return;
  }

  const spinner = ora(`Searching for CEP ${cleanedCep}...`).start();

  try {
    const response = await axios.get(`${VIA_CEP_URL}/${cleanedCep}/json`);

    if (response.data && !response.data.erro) {
      spinner.succeed('CEP found!');
      logger.success(`Address for CEP ${cleanedCep}:`);
      logger.log(`  Street: ${response.data.logradouro || 'N/A'}`);
      logger.log(`  Neighborhood: ${response.data.bairro || 'N/A'}`);
      logger.log(`  City: ${response.data.localidade || 'N/A'}`);
      logger.log(`  State: ${response.data.uf || 'N/A'}`);
      logger.log(`  IBGE: ${response.data.ibge || 'N/A'}`);
      if (options.verbose) {
        logger.info('Full response:');
        logger.json(response.data);
      }
    } else {
      spinner.fail('CEP not found or error in response.');
      if(response.data.erro){
        logger.warning('The provided CEP does not exist or was not found in the database.')
      } else {
        logger.error('Could not retrieve CEP information.');
      }
    }
  } catch (error: any) {
    spinner.fail('Failed to fetch CEP information.');
    if (axios.isAxiosError(error) && error.response) {
      logger.error(`API Error: ${error.response.status} - ${error.message}`);
      if (error.response.status === 404) {
         logger.warning('The provided CEP was not found (404 error).');
      } else if (error.response.status === 400) {
        logger.warning('Invalid CEP format according to the API (400 error).');
      }
    } else {
      logger.error(`An unexpected error occurred: ${error.message}`);
    }
    if (options.verbose) {
      console.error(error);
    }
  }
} 
import logger from '../utils/logger';
import ora from 'ora';
import axios from 'axios';

interface ConvertOptions {
  verbose?: boolean;
  // other options can be added if needed
}

// Using a free API: ExchangeRate-API (https://www.exchangerate-api.com)
// IMPORTANT: You will need to sign up for a free API key at https://www.exchangerate-api.com/ 
// and replace 'YOUR_API_KEY' below or use an environment variable.
const API_KEY = '74872edc50fd46536ea099d4'; // Replace with your actual API key
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair`;

export default async function convertCommand(
  fromCurrency: string,
  toCurrency: string,
  amount: number,
  options: ConvertOptions
) {
  if (options.verbose) {
    logger.info(`Starting currency conversion from ${fromCurrency} to ${toCurrency} for amount ${amount}`);
  }

  // Assuming API_KEY is correctly set directly in the code above.
  // For production, consider loading from environment variables.
  // Original check for placeholder removed as API_KEY is now hardcoded with a new value.

  const spinner = ora(`Converting ${amount} ${fromCurrency} to ${toCurrency}...`).start();

  try {
    const response = await axios.get(`${API_URL}/${fromCurrency}/${toCurrency}/${amount}`);
    
    if (response.data && response.data.result === 'success') {
      spinner.succeed('Conversion successful!');
      logger.success(`${amount} ${fromCurrency} = ${response.data.conversion_result.toFixed(2)} ${toCurrency}`);
      if (options.verbose) {
        logger.info(`Conversion rate: 1 ${fromCurrency} = ${response.data.conversion_rate} ${toCurrency}`);
      }
    } else {
      spinner.fail('Conversion failed.');
      logger.error(response.data.error_type || 'Unknown error from API');
    }
  } catch (error: any) {
    spinner.fail('Failed to convert currency.');
    if (axios.isAxiosError(error) && error.response) {
      logger.error(`API Error: ${error.response.status} - ${error.response.data?.['error-type'] || error.message}`);
    } else {
      logger.error(`An unexpected error occurred: ${error.message}`);
    }
    if (options.verbose) {
      console.error(error);
    }
  }
} 
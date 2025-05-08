import logger from '../utils/logger';
import ora from 'ora';
import fs from 'fs';
import csv from 'csv-parser';

interface CsvOptions {
  output?: 'json' | 'console';
  verbose?: boolean;
}

export default async function csvCommand(filePath: string, options: CsvOptions) {
  if (options.verbose) {
    logger.info(`Parsing CSV file: ${filePath}`);
    logger.info(`Output format: ${options.output || 'console'}`);
  }

  if (!fs.existsSync(filePath)) {
    logger.error(`File not found: ${filePath}`);
    return;
  }

  const results: any[] = [];
  const spinner = ora(`Processing CSV file: ${filePath}...`).start();

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      spinner.succeed('CSV file processed successfully.');
      if (options.output === 'json') {
        if (options.verbose) {
          logger.info('Outputting as JSON:');
        }
        logger.json(results);
      } else {
        if (options.verbose) {
          logger.info('Outputting to console:');
        }
        // Pretty print to console (basic table format)
        if (results.length > 0) {
          const headers = Object.keys(results[0]);
          console.log(headers.join(' | '));
          console.log(headers.map(() => '---').join(' | '));
          results.forEach(row => {
            console.log(headers.map(header => row[header]).join(' | '));
          });
        } else {
          logger.info('CSV file is empty or contains no data rows.');
        }
      }
    })
    .on('error', (error) => {
      spinner.fail('Error processing CSV file.');
      logger.error(error.message);
      if (options.verbose) {
        console.error(error);
      }
    });
} 
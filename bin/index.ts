#!/usr/bin/env node

import { Command, OptionValues } from 'commander';
import convertCommand from '../src/commands/convert';
import cepCommand from '../src/commands/cep';
import csvCommand from '../src/commands/csv';
// Importing specific fields from package.json. Ensure resolveJsonModule is true in tsconfig.json
import pkg from '../package.json';

const program = new Command();

program
  .version(pkg.version)
  .description(pkg.description);

interface ConvertActionOptions extends OptionValues {
  from: string;
  to: string;
  amount: string; // Commander reads options as strings initially
  verbose?: boolean;
}

program
  .command('convert')
  .description('Convert currencies')
  .option('-f, --from <currency>', 'Source currency (e.g., USD)')
  .option('-t, --to <currency>', 'Target currency (e.g., BRL)')
  .option('-a, --amount <number>', 'Amount to convert')
  .option('--verbose', 'Output detailed information')
  .action(async (options: ConvertActionOptions) => {
    // Commander options are typically passed as a single object when defined with .option
    // The direct arguments (like <cep_number>) come first, then the options object.
    // For commands with only options, the first arg to action is the options object.
    if (!options.from || !options.to || !options.amount) {
      console.error('Error: Missing required options for convert command. Use --help for more info.');
      process.exit(1); // For process, ensure @types/node is working
    }
    // Pass the verbose flag from commander options to the command handler
    const commandSpecificOptions = { verbose: options.verbose };
    await convertCommand(options.from, options.to, parseFloat(options.amount), commandSpecificOptions);
  });

interface CepActionOptions extends OptionValues {
  verbose?: boolean;
}

program
  .command('cep <cep_number>')
  .description('Fetch address information for a given CEP (Brazilian postal code)')
  .option('--verbose', 'Output detailed information')
  .action(async (cep_number: string, options: CepActionOptions) => {
    await cepCommand(cep_number, { verbose: options.verbose });
  });

interface CsvActionOptions extends OptionValues {
  output: 'json' | 'console';
  verbose?: boolean;
}

program
  .command('csv <filePath>')
  .description('Parse a CSV file and print its content or convert to JSON')
  .option('--output <format>', 'Output format (e.g., json)', 'console')
  .option('--verbose', 'Output detailed information')
  .action(async (filePath: string, options: CsvActionOptions) => {
    await csvCommand(filePath, { output: options.output, verbose: options.verbose });
  });

program.parse(process.argv); // For process, ensure @types/node is working

// Show help if no arguments are passed (excluding node and script path)
if (!process.argv.slice(2).length) { // For process, ensure @types/node is working
  program.outputHelp();
} 
import chalk from 'chalk';

const logger = {
  info: (message: string) => {
    console.log(chalk.blue(message));
  },
  success: (message: string) => {
    console.log(chalk.green(message));
  },
  warning: (message: string) => {
    console.log(chalk.yellow(message));
  },
  error: (message: string) => {
    console.log(chalk.red(message));
  },
  log: (message: string) => {
    console.log(message);
  },
  json: (data: any) => {
    console.log(chalk.cyan(JSON.stringify(data, null, 2)));
  }
};

export default logger; 
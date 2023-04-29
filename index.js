/**
 * CLI Alerts.
 *
 * Cross platform CLI Alerts with colors.
 * Works on macOS, Linux, and Windows.
 * Alerts: `success`, `info`, `warning`, `error`.
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */
const chalk = require('chalk');
const sym = require('log-symbols');
const green = chalk.green;
const greenI = chalk.green.inverse;
const red = chalk.red;
const redI = chalk.red.bold.inverse;
const orange = chalk.keyword('orange');
const orangeI = chalk.keyword('orange').inverse;
const blue = chalk.blue;
const blueI = chalk.blue.inverse;

module.exports = options => {
	const defaultOptions = {
		type: `error`,
		msg: `You forgot to define all options.`,
		name: ``,
		lineBreak: true
	};
	const opts = {...defaultOptions, ...options};
	const {type, msg, name} = opts;
	const printName = name ? name : type.toUpperCase();
	const lineBreak = opts.lineBreak ? `\n` : ``;

	if (type === `success`) {
		console.log(`${lineBreak}${sym.success} ${greenI(` ${printName} `)} ${green(msg)}${lineBreak}`);
	}

	if (type === `warning`) {
		console.log(`${lineBreak}${sym.warning} ${orangeI(` ${printName} `)} ${orange(msg)}${lineBreak}`);
	}

	if (type === `info`) {
		console.log(`${lineBreak}${sym.info} ${blueI(` ${printName} `)} ${blue(msg)}${lineBreak}`);
	}

	if (type === `error`) {
		console.log(`${lineBreak}${sym.error} ${redI(` ${printName} `)} ${red(msg)}${lineBreak}`);
	}
};

import { nanoid } from "nanoid";

/** generates a pseudo Random Number Between two given (inclusive) */
export const rnb = (min: number, max: number, precision = 0) => parseFloat((Math.random() * (max - min) + min).toFixed(precision));

/** rounds a number to specified precision */
export const round = (n: number, precision = 2) => {
	const mul = Math.pow(10, precision);
	return Math.round(n * mul) / mul;
};

export const uid = () => nanoid(7);

/** probability = {0.0...1.0}, where 1.0 is 100% probability of getting true */
export const testProbability = (probability: number) => Math.random() < probability;

/** calculates the difference between two numbers in percentage {0...1} */
export const calcPercentDelta = (a: number, b: number) => round(Math.abs(a - b) / ((a + b)/2));

/** limits the number between minimum and maximum (inclusive) */
export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
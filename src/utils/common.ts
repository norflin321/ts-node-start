import { rnb } from "@/utils/math";

/** shuffles an array in place */
export const arrShuffle = <T>(arr: T[]) => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
};

/** returns a shuffled copy */
export const arrShuffleCopy = <T>(arr: T[]) => {
	const arrCopy = [...arr];
	arrShuffle(arrCopy);
	return arrCopy;
};

/** the same as Object.keys but typesafe */
export const getObjKeys = Object.keys as <T extends object>(obj: T) => (keyof T)[];

/** example usage: (arr: [1, 2, 3, 4], chunkLength: 2) => [[1, 2], [3, 4]] */
export const getSplitedByChunks = <T>(arr: T[], chunkLength: number) => {
	const out: T[][] = [];
	for (let i = 0; i < arr.length; i += chunkLength) {
		const chunk = arr.slice(i, i + chunkLength);
		out.push(chunk);
	}
	return out;
}

/** get a random item from an array */
export const selectRandomly = <T>(items: T[]) => items[rnb(0, items.length - 1)];

/** get a random item from an array taking into account its probability (sum of all items probabilities should be equal to 1) */
export const selectByProbability = <T extends { probability: number }>(items: T[]) => {
	const rand = Math.random();
	let acc = 0;
	for (const item of items) {
		acc += item.probability;
		if (rand < acc) return item;
	}
	return items[0];
};
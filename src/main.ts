import { uid } from "@/utils/math";

export abstract class Main {
	private static id = uid();

	static start() {
		console.log("hello world:", this.id);
	}
}

Main.start();
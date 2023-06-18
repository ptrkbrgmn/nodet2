import { isOdd } from "./shared/math-utils";

export function isEven(n: number): boolean {
  return !isOdd(n);
}

const factor = 2;
const result = isEven(factor) ? "is even" : "is not even";

// eslint-disable-next-line no-console
console.log(`Hello from Core! ${factor} ${result}`);

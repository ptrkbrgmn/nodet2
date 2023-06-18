import { isEven } from "@nodet2/core";
import { isOdd } from "@nodet2/core/dist/shared/math-utils";

const factor = 2;
const result = isEven(factor) ? "is even" : "is not even";
// eslint-disable-next-line no-console
console.log(`Hello from event! ${factor} ${result}`);

const foo = isOdd(3);
// eslint-disable-next-line no-console
console.log(`Hello from event! ${foo}`);

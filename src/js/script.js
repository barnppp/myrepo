export default function calcFunc(a, b, c) {
  const argA = a;
  const argB = b;
  const argC = c;

  const result = (argA + argB) * argC;

  return result;
}

// eslint-disable-next-line no-console
console.log(calcFunc(10, 10, 3));

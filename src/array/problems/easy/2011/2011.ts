type Operation = "X++" | "++X" | "X--" | "--X";

function finalValueAfterOperations(operations: Operation[]): number {
  const map = new Map<"add" | "sub", number>();

  operations.map((ops) => {
    if (ops === "X++" || ops === "++X") {
      map.set("add", map.has("add") ? map.get("add") + 1 : 1);
    }
    if (ops === "X--" || ops === "--X") {
      map.set("sub", map.has("sub") ? map.get("sub") + 1 : 1);
    }
  });

  let c: number = 0;
  map.forEach((val, key) => {
    if (key === "sub") {
      c -= val;
    } else {
      c += val;
    }
  });
  return c;
}

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));

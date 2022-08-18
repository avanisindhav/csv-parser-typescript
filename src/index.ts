import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

// Man United no of times team won
let noOfTimesManWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === "H") {
    noOfTimesManWins++;
  } else if (match[2] === "Man United" && match[5] === "A") {
    noOfTimesManWins++;
  }
}

console.log(`Man United won ${noOfTimesManWins} games`);

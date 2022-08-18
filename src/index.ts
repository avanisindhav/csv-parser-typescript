import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResults } from "./models";

const reader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(reader);
matchReader.load();
const matches = matchReader.matches;
// console.log(matches[0]);

// Man United no of times team won
let noOfTimesManWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
    noOfTimesManWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
    noOfTimesManWins++;
  }
}

console.log(`Man United won ${noOfTimesManWins} games`);

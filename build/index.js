"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const models_1 = require("./models");
const reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
const matches = reader.data;
// console.log(matches[0]);
// Man United no of times team won
let noOfTimesManWins = 0;
for (let match of matches) {
    if (match[1] === "Man United" && match[5] === models_1.MatchResults.HomeWin) {
        noOfTimesManWins++;
    }
    else if (match[2] === "Man United" && match[5] === models_1.MatchResults.AwayWin) {
        noOfTimesManWins++;
    }
}
console.log(`Man United won ${noOfTimesManWins} games`);

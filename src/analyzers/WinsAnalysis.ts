import { csvRow, MatchResults } from '../models';
import { Analyzer } from '../Summary';
export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: csvRow[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResults.HomeWin) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResults.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.teamName} won ${wins} games`;
  }
}

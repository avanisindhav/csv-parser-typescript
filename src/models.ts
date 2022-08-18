export enum MatchResults {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

export type csvRow = [
  date: Date,
  homeTeamName: string,
  awayTeamName: string,
  homeTeamScore: number,
  awayTeamScore: number,
  matchResult: MatchResults,
  coachName: string
];

export interface DataReader {
  read(): void;
  data: string[][];
}

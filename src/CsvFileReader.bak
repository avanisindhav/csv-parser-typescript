import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResults, csvRow } from "./models";

export class CsvFileReader {
  data: csvRow[] = [];

  constructor(public fileName: string) {}

  //   parse([date:Date,homeTeamName:string]) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): csvRow => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          +row[3],
          +row[4],
          row[5] as MatchResults, // H,A,D
          row[6],
        ];
      });
  }
}

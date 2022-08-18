import { dateStringToDate } from "./utils";
import { MatchResults, csvRow, DataReader } from "./models";

export class MatchReader {
  matches: csvRow[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): csvRow => {
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

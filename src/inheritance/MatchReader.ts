import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { MatchResults, csvRow } from "./models";

export class MatchReader extends CsvFileReader<csvRow> {
  constructor(fileName: string) {
    super(fileName);
  }

  parseRow(row: string[]): csvRow {
    {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        +row[3],
        +row[4],
        row[5] as MatchResults, // H,A,D
        row[6],
      ];
    }
  }
}

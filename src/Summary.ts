import { csvRow } from './models';
export interface Analyzer {
  run(matches: csvRow[]): string;
}

export interface OutPutTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutPutTarget) {}

  buildAndPrintReport(matches: csvRow[]): void {
    const outputString = this.analyzer.run(matches);
    this.outputTarget.print(outputString);
  }
}

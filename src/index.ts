import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsolReport';
import { HtmlReport } from './reportTargets/HtmlReport';

const reader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(reader);
matchReader.load();
const matches = matchReader.matches;
const summary = new Summary(new WinsAnalysis('Burnley'), new HtmlReport());
summary.buildAndPrintReport(matches);

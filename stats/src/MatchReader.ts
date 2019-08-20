interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  constructor(public reder: DataReader) {}
}

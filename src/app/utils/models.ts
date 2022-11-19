export interface IPlayer {
  id: number;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  country: {
    picture: string;
    code: string;
  };
  picture: string;
  data: {
    rank: number;
    points: number;
    weight: number;
    height: number;
    age: number;
    last: number[];
  }
};

export interface IStatistics {
  averageImc: number;
  heightsMedian: number;
  winCountry: {
    code: string;
    picture: string;
  }
}

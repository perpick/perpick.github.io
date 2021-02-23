export type PerfumeSource = {
  base_main: string;
  base_sub: string[];
  brand: string;
  density: string;
  gender: string;
  img_url: string;
  launching_month: string;
  launching_year: string[];
  main_scent: string[];
  middle_main: string;
  middle_sub: string[];
  reviews: string[];
  sub_scent: string[];
  title: string;
  top_main: string;
  top_sub: string[];
};

export type Perfume = {
  _id: string;
  _index: string;
  _score: number;
  _source: PerfumeSource;
  _type: string;
};

export type SearchedPerfume = {
  hits: {
    max_score: number;
    hits: Perfume[];
  };
  total: {
    relation: string;
    value: number;
  };
  timed_out: boolean;
  took: number;
  _shards: {
    total: number;
    successful: number;
    skipped: number;
    failed: number;
  };
};

export type PerfumeDocument = {
  _id: string;
  ids: string[];
  selects: string[];
  email: string;
  maxScore: number;
  search: string;
  sources: string;
};

export type Perfumes = {
  results: PerfumeDocument;
  total: number;
};

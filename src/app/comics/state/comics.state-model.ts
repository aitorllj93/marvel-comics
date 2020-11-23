
export interface Comic {
  id: string;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    resourceURI: string;
    name: string;
  };
}

export interface ComicsStateModel {
  comics: Array<Comic>;
  loadingComics: boolean;
  page: number;
  count: number;
  limit: number;
  offset: number;
  total: number;
  selectedComic: Comic;
  loadingSelectedComic: boolean;
}

export interface APIResponse<DataType = any> {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<DataType>;
  };
}

export type ComicAPIResponse = APIResponse<Comic>;

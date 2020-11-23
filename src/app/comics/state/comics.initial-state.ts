import { ComicsStateModel } from './comics.state-model';


export const comicsInitialState: ComicsStateModel = {
  comics: [],
  loadingComics: false,
  page: 0,
  count: 0,
  limit: 20,
  offset: 0,
  total: 0,
  selectedComic: null,
  loadingSelectedComic: false,
};

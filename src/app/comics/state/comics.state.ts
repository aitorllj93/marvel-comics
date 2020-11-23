
import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { produce } from 'immer';
import { tap } from 'rxjs/operators';

import { FetchComicsDetail, FetchComicsList } from './comics.actions';
import { ComicAPIResponse, ComicsStateModel } from './comics.state-model';
import { comicsInitialState } from './comics.initial-state';

@State<ComicsStateModel>({
  name: 'comics',
  defaults: comicsInitialState
})
@Injectable()
export class ComicsState {

  @Selector()
  static comics(state: ComicsStateModel) {
    return state.comics;
  }

  @Selector()
  static loadingComics(state: ComicsStateModel) {
    return state.loadingComics;
  }

  @Selector()
  static comicsListMetadata({
    page,
    count,
    limit,
    offset,
    total
  }: ComicsStateModel) {
    return {
      page,
      count,
      limit,
      offset,
      total
    };
  }

  @Selector()
  static selectedComic(state: ComicsStateModel) {
    return state.selectedComic;
  }

  @Selector()
  static loadingSelectedComic(state: ComicsStateModel) {
    return state.loadingSelectedComic;
  }

  constructor(
    private http: HttpClient
  ) {}

  @Action(FetchComicsList)
  fetchComicsList(
    {
      getState,
      setState
    }: StateContext<ComicsStateModel>,
    {
      characterId,
      page = getState().page
    }: FetchComicsList
  ) {
    setState(produce(getState(), (draft) => {
      draft.loadingComics = true;
    }));

    return this.http.get<ComicAPIResponse>(
      `http://gateway.marvel.com/v1/public/characters/${characterId}/comics`,
      {
        params: {
          offset: (page * getState().limit).toString(),
          limit: getState().limit.toString()
        }
      }
    )
    .pipe(
      tap(
        (response) => {
          const state = produce(getState(), (draft) => {
            draft.comics = response.data.results;
            draft.page = page;
            draft.count = response.data.count;
            draft.limit = response.data.limit;
            draft.offset = response.data.offset;
            draft.total = response.data.total;
            draft.loadingComics = false;
          });

          setState(state);

        }
      )
    );

  }

  @Action(FetchComicsDetail)
  fetchComicsDetail(
    {
      getState,
      setState
    }: StateContext<ComicsStateModel>,
    action: FetchComicsDetail
  ) {
    setState(produce(getState(), (draft) => {
      draft.loadingSelectedComic = true;
    }));

    return this.http.get<ComicAPIResponse>(
      `http://gateway.marvel.com/v1/public/comics/${action.comicId}`
    )
    .pipe(
      tap(
        (response) => {
          const state = produce(getState(), (draft) => {
            draft.selectedComic = response.data.results[0];
            draft.loadingSelectedComic = false;
          });

          setState(state);

        }
      )
    );
  }

}


import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { produce } from 'immer';

import { FetchComicsDetail, FetchComicsList } from './comics.actions';
import { ComicsStateModel } from './comics.state-model';
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
  static selectedComic(state: ComicsStateModel) {
    return state.selectedComic;
  }

  @Action(FetchComicsList)
  fetchComicsList(
    {
      getState,
      setState
    }: StateContext<ComicsStateModel>,
    action: FetchComicsList
  ) {
    console.log('fetchComicsList', action.characterId);

    const state = produce(getState(), (draft) => {
      draft.comics = [{
        title: 'Fake Comic'
      }];
    });

    setState(state);
  }

  @Action(FetchComicsDetail)
  fetchComicsDetail(
    {
      getState,
      setState
    }: StateContext<ComicsStateModel>,
    action: FetchComicsDetail
  ) {
    console.log('fetchComicsDetail', action.comicId);

    const state = produce(getState(), (draft) => {
      draft.selectedComic = {
        title: 'Fake Comic'
      };
    });

    setState(state);
  }

}

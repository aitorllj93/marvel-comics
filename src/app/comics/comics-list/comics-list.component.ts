import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { FetchComicsList } from '../state/comics.actions';
import { ComicsState } from '../state/comics.state';
import { Comic } from '../state/comics.state-model';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss']
})
export class ComicsListComponent implements OnInit {

  @Select(ComicsState.comics) comics$: Observable<Comic[]>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchComicsList(environment.characterId));
  }

}

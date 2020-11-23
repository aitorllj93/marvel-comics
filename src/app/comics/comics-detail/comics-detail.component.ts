import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchComicsDetail } from '../state/comics.actions';

import { ComicsState } from '../state/comics.state';
import { Comic } from '../state/comics.state-model';

@Component({
  selector: 'app-comics-detail',
  templateUrl: './comics-detail.component.html',
  styleUrls: ['./comics-detail.component.scss']
})
export class ComicsDetailComponent implements OnInit {

  @Select(ComicsState.selectedComic) selectedComic$: Observable<Comic>;
  @Select(ComicsState.loadingSelectedComic) loadingSelectedComic$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        if (!params.id) {
          return;
        }

        this.store.dispatch(new FetchComicsDetail(params.id));
      }
    );
  }

}

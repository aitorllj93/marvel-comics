import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Select, Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
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
  @Select(ComicsState.loadingComics) loadingComics$: Observable<boolean>;
  @Select(ComicsState.comicsListMetadata) metadata$: Observable<{
    page: number;
    total: number;
    limit: number;
  }>;

  page = 0;
  limit = 0;
  total = 0;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchComicsList(environment.characterId));

    this.metadata$.subscribe(
      metadata => {
        this.page = metadata.page;
        this.limit = metadata.limit;
        this.total = metadata.total;
      }
    );
  }

  onPageChange(page: PageEvent) {
    this.store.dispatch(new FetchComicsList(environment.characterId, page.pageIndex));
  }

  onComicClick(comic: Comic) {
    this.store.dispatch(new Navigate(['/comics', comic.id]));
  }

}

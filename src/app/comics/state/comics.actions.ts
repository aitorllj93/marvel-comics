
export class FetchComicsList {
  static readonly type = '[Comics] Fetch List';
  constructor(public characterId: string) {}
}

export class FetchComicsDetail {
  static readonly type = '[Comics] Fetch Detail';
  constructor(public comicId: string) {}
}


export class FetchComicsList {
  static readonly type = '[Comics] Fetch List';
  constructor(
    public characterId: string,
    public page?: number,
  ) {}
}

export class FetchComicsDetail {
  static readonly type = '[Comics] Fetch Detail';
  constructor(public comicId: string) {}
}

import { makeAutoObservable } from "mobx";
import { Store } from "../store";

export class ViewBounties {
  private _store: Store;

  constructor(store: Store) {
    makeAutoObservable(this, {}, { deep: false, autoBind: true });

    this._store = store;
  }
}

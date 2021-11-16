import { makeAutoObservable } from "mobx";
import { Store } from "../store";

export default class BountyStore {
  private _store: Store;

  constructor(store: Store) {
    makeAutoObservable(this, {}, { deep: false, autoBind: true });

    this._store = store;
  }

  allBounties = null;

  // Gets all bounties from the api
  async getAllBounties() {
    const data = await this._store.api.getBounties();
    console.log({ data });
    // this.allBounties =
    // console.log({ allBounties: this.allBounties });
  }
}

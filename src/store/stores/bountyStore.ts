import { makeAutoObservable } from "mobx";
import { Bounty } from "../../model";
import { Store } from "../store";

export default class BountyStore {
  private _store: Store;

  constructor(store: Store) {
    makeAutoObservable(this, {}, { deep: false, autoBind: true });

    this._store = store;
  }

  allBounties: Bounty[] | null = null;

  // Gets all bounties from the api
  async getAllBounties() {
    const data = await this._store.api.getBounties();
    this.allBounties = data;
  }
}

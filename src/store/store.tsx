import { makeAutoObservable } from "mobx";
import API from "../api";
import BountyStore from "./stores/bountyStore";
import { ViewBounties } from "./presenters";

export class Store {
  // Child Stores
  bountyStore = new BountyStore(this);

  // UI Logic state - all the state for all user interaction
  viewBounties = new ViewBounties(this);

  api: API;

  constructor(api: API) {
    makeAutoObservable(this, {}, { deep: false, autoBind: true });
    this.api = api;
  }
}

export const createStore = () => {
  const api = new API();
  return new Store(api);
};

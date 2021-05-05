import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddCountryLikeAction, RemoveCountryLikeAction } from './favorites.actions';
import { FavoritesStateModel } from './favorites.models';

export const initialState: FavoritesStateModel = {
  listData: ['DZA', 'AGO', 'BEN'],
};

@State<FavoritesStateModel>({
  name: 'favirites',
  defaults: initialState,
})
@Injectable()
export class FaviritesState {
  constructor() {}

  @Action(AddCountryLikeAction)
  addCountryLikeAction(ctx: StateContext<FavoritesStateModel>, action: AddCountryLikeAction) {
    const state = ctx.getState();

    const index = state.listData.indexOf(action.alpha3Code);
    if (index > -1) {
      return;
    }

    ctx.setState({
      ...state,
      listData: [...state.listData, action.alpha3Code],
    });
  }

  @Action(RemoveCountryLikeAction)
  removeCountryLikeAction(ctx: StateContext<FavoritesStateModel>, action: RemoveCountryLikeAction) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      listData: state.listData.filter((like) => like !== action.alpha3Code),
    });
  }
}

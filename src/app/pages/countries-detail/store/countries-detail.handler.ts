import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Actions } from '@ngxs/store';

@Injectable({ providedIn: 'root' })
export class CountriesDetailHandler {
  constructor(private actions$: Actions, private navController: NavController) {}
}
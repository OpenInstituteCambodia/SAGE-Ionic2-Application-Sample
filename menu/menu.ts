import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DatabaseController } from '../../app/database';
import { DebugController } from '../../debug/debug';

import { UnitPage } from '../unit/unit';
import { HelperPage } from '../helper/helper';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  public app_name = 'Biology for Grade 12';
  public menu_id: string = 'root';
  public menu_title: string = '';
  public menu_level: number = 1;
  public menu_group_id: string = '';
  public menus: Array<any> = [];

  private _db = new DatabaseController();

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
    if(typeof this.navParams.get('menu_id') != 'undefined') {
      this.menu_id = this.navParams.get('menu_id');
    }
    if(typeof this.navParams.get('menu_level') != 'undefined') {
      this.menu_level = this.navParams.get('menu_level');
    }
    if(typeof this.navParams.get('menu_group_id') != 'undefined') {
      this.menu_group_id = this.navParams.get('menu_group_id');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    this.init();
  }

  private init() {
    let pending = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    pending.present();

    let groupSelector = this.menu_group_id == '' ?  '' : ' AND menu_group_id == "'+this.menu_group_id+'"';

    this._db.executeSQL("SELECT * FROM menus WHERE menu_level == "+this.menu_level+groupSelector, []).then((menuData) => {
      for (let i = 0; i < menuData.rows.length; i++) {
        this.menus.push(menuData.rows.item(i));
      }
      console.log(this.menus);
      console.log("SELECT * FROM menus WHERE menu_level == "+this.menu_level+groupSelector);
      pending.dismiss();
    }).catch( err => console.log(err));
  }

  private menu(id, title, level, group) {
    this.navCtrl.push(
      MenuPage, {
        menu_id: id,
        menu_title: title,
        menu_group_id: group,
        menu_level: level+1
      }
    );
  }

  private navigate(id) {
    let pending = this.loadingCtrl.create({
      spinner: 'dots'
    });
    pending.present();

    this._db.executeSQL("SELECT * FROM units WHERE unit_id == '"+id+"'", []).then((unitData) => {
      console.log(unitData.rows.item(0));
      this.navCtrl.push(
        UnitPage, {
          data: unitData.rows.item(0)
        }
      );
      pending.dismiss();
    });

  }

  private toggleDebug() {
    this.navCtrl.push(DebugController);
  }
}

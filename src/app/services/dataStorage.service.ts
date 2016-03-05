import { Injectable } from 'angular2/core';
/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implemenation that doesn't use window.confirm
 */
@Injectable()
export class DataStorageService {
  /**
   * Ask user to confirm an action. `message` explains the action and choices.
   * Returns promise resolving to `true`=confirm or `false`=cancel
   */
  private _data: any;
  public get(model) {
    let dataStoraged = JSON.parse(this._data);

    for (let key in dataStoraged) {
      if (dataStoraged.hasOwnProperty(key)) {
        model[key] = dataStoraged[key];
      }
    }
  }

  public set(data) {
    this._data = JSON.stringify(data);
  }
}

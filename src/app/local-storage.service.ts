import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'favMovies-id';

@Injectable()
export class LocalStorageService {

    newFavList =[];

    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {

    }

    public storeOnLocalStorage(id: number): void {
      // console.log('dataTables_processing');

      let currentFavs = this.storage.get(STORAGE_KEY) || [];

      // if(currentFavs.find( id => {

      // } )
      currentFavs.push(+id);

      currentFavs = currentFavs.filter((movieId, index) => {
        return currentFavs.indexOf(movieId) === index;
      });

      this.storage.set(STORAGE_KEY, currentFavs);

    }

    public deleteFromLocalStorage(id: number): void {
      console.log('Removing');

      const currentFavs = this.storage.get(STORAGE_KEY) || [];

      // if(currentFavs.find( id => {

      // } )

      var index = currentFavs.indexOf(id);
      if (index > -1) {
          currentFavs.splice(index, 1);
      }
      this.storage.set(STORAGE_KEY, currentFavs);

    }

    public returnLocalStorage() {
      return this.storage.get(STORAGE_KEY) || [];


    }
}

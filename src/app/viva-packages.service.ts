import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VivaPackagesService {
  PACKAGES_URL = 'https://qa-protool.vivanuncios.com.mx/api//Packages';

  constructor(private http: HttpClient) { }

  getPackages(): Observable<any> {
    return this.http.get(this.PACKAGES_URL);
  }
}

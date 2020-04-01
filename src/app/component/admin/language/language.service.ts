import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICategory} from '../category/ICategory';
import {ILanguage} from './ILanguage';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  url = `${environment.API_BOOK_STORE}/language`;

  constructor(private http: HttpClient) {
  }

  getLanguageList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getLanguage(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createLanguage(language): Observable<any> {
    return this.http.post(this.url, language);
  }

  editLanguage(language): Observable<any> {
    return this.http.put(this.url + '/' + language.id, language);
  }

  deleteLanguage(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  findAllByNameContaining(name: string): Observable<ILanguage[]> {
    return this.http.post<ILanguage[]>(this.url + '/findAllByName', name);
  }
}

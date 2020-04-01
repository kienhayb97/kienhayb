import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComment} from './IComment';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = `${environment.APIURL}/comment`;

  constructor(private http: HttpClient) {
  }

  getCommentList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  findAllByBook_Id(idBook): Observable<IComment[]> {
    return this.http.get<any[]>(this.url + '/book/' + idBook);
  }

  getComment(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createComment(comment): Observable<any> {
    console.log(comment);
    return this.http.post(this.url, comment);
  }

  editComment(comment): Observable<any> {
    console.log(comment);
    return this.http.put(this.url + '/' + comment.id, comment);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  _id?: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  //private API_URL = 'http://localhost:3008/api/items';
  //private API_URL = 'http://mean-multicapa-balancer-991662869.us-east-1.elb.amazonaws.com/api/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API_URL);
  }

  createItem(name: string): Observable<Item> {
    return this.http.post<Item>(this.API_URL, { name });
  }

  updateItem(id: string, name: string): Observable<Item> {
    return this.http.put<Item>(`${this.API_URL}/${id}`, { name });
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}


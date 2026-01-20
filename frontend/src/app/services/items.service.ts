import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

export interface Item {
  _id?: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  //private API_URL = '/api/items';
  //private API_URL = 'http://mean-multicapa-balancer-991662869.us-east-1.elb.amazonaws.com/api/items';
  private API_URL:string;
  
  constructor( 
    private http: HttpClient, 
    private env: EnvService) 
  { 
    this.API_URL = `${this.env.apiUrl}/items`; 
  }

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


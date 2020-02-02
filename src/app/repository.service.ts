import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RepositoryService {
  
  constructor(private http: HttpClient) {
    
   
  }

  getArticles() {
  return this.http.get<any>('https://conduit.productionready.io/api/articles');
}

}
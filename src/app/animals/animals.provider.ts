import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AnimalsProvider {
  constructor(private http: HttpClient) {}

  public getAnimals() {
    return this.http.get('http://localhost:8080/allAnimals');
  }
}

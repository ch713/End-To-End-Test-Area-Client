import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestClassModel } from './Models/TestClass';

@Injectable({
  providedIn: 'root'
})
export class TestRequestsService {

  constructor(private http: HttpClient) { }

  getTestItem() {
    return this.http.get<TestClassModel>("https://localhost:5001/api/Test");
  }
}

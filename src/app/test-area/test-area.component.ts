import { Component, OnInit } from '@angular/core';
import { TestRequestsService } from '../test-requests.service';
import { TestClassModel } from '../Models/TestClass';

@Component({
  selector: 'app-test-area',
  templateUrl: './test-area.component.html',
  styleUrls: ['./test-area.component.css']
})
export class TestAreaComponent implements OnInit {

  myTestObject: TestClassModel;

  constructor(private TestReqService:TestRequestsService) { 
    TestReqService.getTestItem().subscribe(
      (data: TestClassModel) => {
        this.myTestObject = { ...data };

        console.log(this.myTestObject.home)
      });

  }

  ngOnInit(): void {
  }

}

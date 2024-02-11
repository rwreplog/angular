import { Component, OnInit } from '@angular/core';
import { TempServiceService } from '../../services/temp-service.service';
import { model } from '../../models/test-model';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tempData: model[] = [];
  constructor(private tempService: TempServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.tempService.getData().subscribe((data) => {
      this.tempData = data;
    })
  }
}

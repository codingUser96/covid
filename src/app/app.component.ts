import { Component } from '@angular/core';
import { CovidService } from './covid.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid';
  options = [];

  constructor(
    private covid: CovidService,
  ) {

  }

  ngOnInit() {
    this.covid.covidCount().pipe(first())
    .subscribe(
      (res: any) => { 
        console.log(res)
        res.forEach((x) => {
          if(x.state === "Tamil Nadu")
          this.options = x.districtData;
        })
        console.log(this.options)
      });
  }
}

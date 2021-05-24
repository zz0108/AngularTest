import { Component, Pipe, PipeTransform } from '@angular/core';
import { stationList } from './station-list.const';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  condition = false;
  list = stationList;
  color = '';
}

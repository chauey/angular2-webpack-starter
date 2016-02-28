import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'dashboard',
  directives: [],
  providers: [],
  pipes: [],
  styles: [require('bootstrap/dist/css/bootstrap.min.css'), require('./dashboard.component.css')],
  template: require('./dashboard.component.html')
})
export class DashboardComponent implements OnInit {

  totalSavedToDate = 1244.42;
  totalSavedLastOrder = 14.124;

  constructor() {

  }

  ngOnInit() {
    // TODO: calculate report info, get from server, probably not big calculation on client:

    console.log('ngOnInit Dashboard component');
  }

}


// import {Component, EventEmitter} from 'angular2/core';
// import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';

// import {CHART_DIRECTIVES} from '../../../node_modules/ng2-charts/ng2-charts';

// // webpack html imports
// let template = require('./base-chart-demo.html');

// @Component({
//   selector: 'base-chart-demo',
//   template: template,
//   directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
// })
// export class BaseChartDemo {

//   constructor() {
//     console.log('foo demo');
//   }

//   // lineChart
//   private lineChartData:Array<any> = [
//     [65, 59, 80, 81, 56, 55, 40],
//     [28, 48, 40, 19, 86, 27, 90]
//   ];
//   private lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   private lineChartSeries:Array<any> = ['Series A', 'Series B', 'Series C'];
//   private lineChartOptions:any = {
//     multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>'
//   };
//   private lineChartType:string = 'Line';
//   private pieChartType:string = 'Pie';

//   // Pie
//   private pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
//   private pieChartData = [300, 500, 100];

//   private randomizeType() {
//     this.lineChartType = this.lineChartType === 'Line' ? 'Bar' : 'Line';
//     this.pieChartType = this.pieChartType === 'Doughnut' ? 'Pie' : 'Doughnut';
//   }

//   chartClicked(e:any) {
//     console.log(e);
//   }

//   chartHovered(e:any) {
//     console.log(e);
//   }

// }

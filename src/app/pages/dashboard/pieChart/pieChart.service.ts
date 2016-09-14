import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'My Open Jobs',
        stats: '57,820',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Fees Due',
        stats: '€889,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Job Bids',
        stats: '28,391',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Returning Customers',
        stats: '3,292',
        icon: 'refresh',
      }
    ];
  }
}

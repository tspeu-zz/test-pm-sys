import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 2000,
        color: dashboardColors.bid,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Bid',
        percentage: 87,
        order: 4,
      }, {
        value: 1500,
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Waiting for PO',
        percentage: 22,
        order: 3,
      }, {
        value: 1000,
        color: dashboardColors.preBilled,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Pre-Billed',
        percentage: 70,
        order: 2,
      }, {
        value: 1200,
        color: dashboardColors.tobeBilled,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'To be billed',
        percentage: 38,
        order: 1,
      }, {
        value: 1500,
        color: dashboardColors.closed,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Closed',
        percentage: 68,
        order: 0,
      },
    
    ];
  }
}

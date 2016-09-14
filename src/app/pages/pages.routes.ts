import {RouterConfig} from '@angular/router';
import {AuthGuard} from '../../app/auth.guard';
import {AuthService} from '../../app/auth.service';

import {Pages} from './pages.component';

import {Dashboard} from './dashboard/dashboard.component';
// import {Charts} from './charts/charts.component';
// import {ChartistJs} from './charts/components/chartistJs/chartistJs.component';
// import {Ui} from './ui/ui.component';
// import {Typography} from './ui/components/typography/typography.component';
// import {Buttons} from './ui/components/buttons/buttons.component';
// import {Icons} from './ui/components/incons/icons.component';
// import {Grid} from './ui/components/grid/grid.component';
// import {Forms} from './forms/forms.component';
// import {Inputs} from './forms/components/inputs/inputs.component';
// import {Layouts} from './forms/components/layouts/layouts.component';
// import {BasicTables} from './tables/components/basicTables/basicTables.component';
// import {Tables} from './tables/tables.component';
// import {Maps} from './maps/maps.component';
// import {GoogleMaps} from './maps/components/googleMaps/googleMaps.component';
// import {LeafletMaps} from './maps/components/leafletMaps/leafletMaps.component';
// import {BubbleMaps} from './maps/components/bubbleMaps/bubbleMaps.component';
// import {LineMaps} from './maps/components/lineMaps/lineMaps.component';
// import {Editors} from './editors/editors.component';
// import {Ckeditor} from './editors/components/ckeditor/ckeditor.component';
// import {Components} from './components/components.component';
// import {TreeView} from './components/components/treeView/treeView.component';
import {Login}  from './login/login.component';

import {Jobs} from './jobs/jobs.component';
import {JobTable} from './jobs/components/jobTable/jobTable.component';
import {NewJob} from './jobs/components/newJob/newJob.component';
import {EditJob} from './jobs/components/editJob/editJob.component';

import {Stores, StoresMap, StoreList, newStore} from './stores/index';

import {Resources} from './resources/resources.component';
import {ResourcesMap} from './resources/components/resourcesMap/resourcesMap.component';
import {ResourcesList} from './resources/components/resourcesList/resourcesList.component';
import {newResource} from './resources/components/newResource/newResource.component';

import {Clients} from './clients/clients.component';

import {Finance} from './finance/finance.component';

import {Currency} from './currency/currency.component';

import {Teams} from './teams/teams.component';

import {Brands} from './brands/brands.component';

import {Users} from './users/users.component';

import {Countries} from './countries/countries.component';

//noinspection TypeScriptValidateTypes
export const PagesRoutes:RouterConfig = [
  {
    path: 'pages',
    component: Pages,
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        } 
      },
      {
        path: 'jobs',
        component: Jobs,
        data: {
          menu: {
            title: 'Jobs',
            icon: 'ion-ios-calculator',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'jobList',
            component: JobTable,
            data: {
              menu: {
                title: 'Job List',
                icon: 'ion-ios-book'
              }
            }
          },
          {
            path: 'newJob',
            component: NewJob,
            data: {
              menu: {
                title: 'New Job',
                icon: 'ion-ios-plus-outline'
              }
            }
          },
          { 
            path: 'editJob/:id',
            component : EditJob,
          }
        ]
      },
      {
        path: 'stores',
        component: Stores,
        data: {
          menu: {
            title: 'Stores',
            icon: 'ion-bag',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
           {
            path: 'storesList',
            component: StoreList,
            data: {
              menu: {
                title: 'Stores List',
                icon: 'ion-briefcase'
              }
            }
          },{
            path: 'storesMap',
            component: StoresMap,
            data: {
              menu: {
                title: 'Store Map',
                icon: 'ion-map'
              }
            }
          },
          {
            path: 'newStore',
            component: newStore,
            data: {
              menu: {
                title: 'New Store ',
                icon: 'ion-ios-plus-outline'
              }
            }
          }
        ]
      },
      {
        path: 'resources',
        component: Resources,
        data: {
          menu: {
            title: 'Resources',
            icon: 'ion-ios-bolt',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'resourcesList',
            component: ResourcesList,
            data: {
              menu: {
                title: 'Resouces List',
                icon: 'ion-wrench'
              }
            }
          },
          {
            path: 'resourcesMap',
            component: ResourcesMap,
            data: {
              menu: {
                title: 'Resouces Map',
                icon: 'ion-map'
              }
            }
          },
          {
            path: 'newResource',
            component: newResource,
            data: {
              menu: {
                title: 'New Resource',
                icon: 'ion-ios-plus-outline'
              }
            }
          }
        ]
      },
      {
        path: 'clients',
        component: Clients,
        data: {
          menu: {
            title: 'Clients',
            icon: 'ion-android-contacts',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
         
        ]
      },
      {
        path: 'finance',
        component: Finance,
        data: {
          menu: {
            title: 'Finance',
            icon: 'ion-social-euro',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
         
        ]
      },
      {
        path: 'currency',
        component: Currency,
        data: {
          menu: {
            title: 'Currency',
            icon: 'ion-social-usd',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
         
        ]
      },
      {
        path: 'teams',
        component: Teams,
        data: {
          menu: {
            title: 'Teams',
            icon: 'ion-person-stalker',
            expanded: false,
            order: 100,
          }
        },
        children: [
         
        ]
      },
      {
        path: 'brands',
        component: Brands,
        data: {
          menu: {
            title: 'Brands',
            icon: 'ion-pricetags',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
         
        ]
      },
      {
        path: 'users',
        component: Users,
        data: {
          menu: {
            title: 'Users',
            icon: 'ion-android-person',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
         
        ]
      },
      {
        path: 'countries',
        component: Countries,
        data: {
          menu: {
            title: 'Countries',
            icon: 'ion-earth',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
         
        ]
      },
      // {
      //   path: 'editors',
      //   component: Editors,
      //   data: {
      //     menu: {
      //       title: 'Editors',
      //       icon: 'ion-edit',
      //       selected: false,
      //       expanded: false,
      //       order: 100,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'ckeditor',
      //       component: Ckeditor,
      //       data: {
      //         menu: {
      //           title: 'Ckeditor',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'components',
      //   component: Components,
      //   data: {
      //     menu: {
      //       title: 'Components',
      //       icon: 'ion-gear-a',
      //       selected: false,
      //       expanded: false,
      //       order: 250,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'treeview',
      //       component: TreeView,
      //       data: {
      //         menu: {
      //           title: 'Tree View',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'charts',
      //   component: Charts,
      //   data: {
      //     menu: {
      //       title: 'Charts',
      //       icon: 'ion-stats-bars',
      //       selected: false,
      //       expanded: false,
      //       order: 200,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'chartist-js',
      //       component: ChartistJs,
      //       data: {
      //         menu: {
      //           title: 'Chartist.Js',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'ui',
      //   component: Ui,
      //   data: {
      //     menu: {
      //       title: 'UI Features',
      //       icon: 'ion-android-laptop',
      //       selected: false,
      //       expanded: false,
      //       order: 300,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'typography',
      //       component: Typography,
      //       data: {
      //         menu: {
      //           title: 'Typography',
      //         }
      //       }
      //     },
      //     {
      //       path: 'buttons',
      //       component: Buttons,
      //       data: {
      //         menu: {
      //           title: 'Buttons',
      //         }
      //       }
      //     },
      //     {
      //       path: 'icons',
      //       component: Icons,
      //       data: {
      //         menu: {
      //           title: 'Icons',
      //         }
      //       }
      //     },
      //     {
      //       path: 'grid',
      //       component: Grid,
      //       data: {
      //         menu: {
      //           title: 'Grid',
      //         }
      //       }
      //     },
      //   ]
      // },
      // {
      //   path: 'forms',
      //   component: Forms,
      //   data: {
      //     menu: {
      //       title: 'Form Elements',
      //       icon: 'ion-compose',
      //       selected: false,
      //       expanded: false,
      //       order: 400,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'inputs',
      //       component: Inputs,
      //       data: {
      //         menu: {
      //           title: 'Form Inputs',
      //         }
      //       }
      //     },
      //     {
      //       path: 'layouts',
      //       component: Layouts,
      //       data: {
      //         menu: {
      //           title: 'Form Layouts',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'tables',
      //   component: Tables,
      //   data: {
      //     menu: {
      //       title: 'Tables',
      //       icon: 'ion-grid',
      //       selected: false,
      //       expanded: false,
      //       order: 500,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'basictables',
      //       component: BasicTables,
      //       data: {
      //         menu: {
      //           title: 'Basic Tables',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'maps',
      //   component: Maps,
      //   data: {
      //     menu: {
      //       title: 'Maps',
      //       icon: 'ion-ios-location-outline',
      //       selected: false,
      //       expanded: false,
      //       order: 600,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'googlemaps',
      //       component: GoogleMaps,
      //       data: {
      //         menu: {
      //           title: 'Google Maps',
      //         }
      //       }
      //     },
      //     {
      //       path: 'leafletmaps',
      //       component: LeafletMaps,
      //       data: {
      //         menu: {
      //           title: 'Leaflet Maps',
      //         }
      //       }
      //     },
      //     {
      //       path: 'bubblemaps',
      //       component: BubbleMaps,
      //       data: {
      //         menu: {
      //           title: 'Bubble Maps',
      //         }
      //       }
      //     },
      //     {
      //       path: 'linemaps',
      //       component: LineMaps,
      //       data: {
      //         menu: {
      //           title: 'Line Maps',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'login',
      //   component: Login,
      //   data: {
      //     menu: {
      //       title: 'Menu Level 1',
      //       icon: 'ion-ios-more',
      //       selected: false,
      //       expanded: false,
      //       order: 700,
      //     }
      //   },
      //   children: [
      //     {
      //       path: '',
      //       component: Login,
      //       data: {
      //         menu: {
      //           title: 'Menu Level 1.1'
      //         }
      //       }
      //     },
      //     {
      //       path: '',
      //       data: {
      //         menu: {
      //           title: 'Menu Level 1.2',
      //           url: '#'
      //         }
      //       },
      //       children: [
      //         {
      //           path: '',
      //           data: {
      //             menu: {
      //               title: 'Menu Level 1.2.1',
      //               url: '#'
      //             }
      //           }
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'External Link',
      //       url: 'http://akveo.com',
      //       icon: 'ion-android-exit',
      //       order: 800,
      //       target: '_blank'
      //     }
      //   }
      // }
      // }

    ]
  }
];

import LayoutHeader from './LayoutHeader';
import LayoutSidebar from './LayoutSidebar';
import Home from './Home';
import About from './About';
import Tacos from './Tacos';
import Chicken from './Chicken';
import Veggie from './Veggie';
import Missed from './Missed';

export default [
  {
    component: LayoutHeader,
    routes: [
      { path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/about',
        component: About,
        name: 'About',
      },
    ],
  },
  {
    component: LayoutSidebar,
    routes: [
      { path: '/tacos',
        component: Tacos,
        routes: [
          { path: '/tacos/chicken',
            component: Chicken,
          },
          { path: '/tacos/veggie',
            component: Veggie,
          }
        ]
      },
      {
        component: Missed,
      },
    ],
  },
]

import {
  Voucher,
  Home,
  Login,
  Register,
  Cart,
  ShipDetail,
  PaymentSuccess,
} from '../pages';
import { Admin, ContactUs, UserInfo} from '../pages';
import { Order } from '../pages';
import { OrderDetail } from '../pages';
import { ProductDT } from '../pages';
import { Burger, Combo, Sidedish, Sandwich, Hotdog, Baguette, Pizza, Drink, ComboDetail, ComboDetail2, ComboDetail3 } from '../pages';


const router = [
  { path: '/order', component: Order },
  { path: '/order/:orderId', component: OrderDetail },
  { path: '/contact', component: ContactUs },
  { path: '/admin', component: Admin },
  { path: '/user', component: UserInfo },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/voucher', component: Voucher },
  { path: '/cart', component: Cart },
  { path: '/ship-detail', component: ShipDetail },
  { path: '/payment-success', component: PaymentSuccess },

  { path: '/sidedish/:productId', component:ProductDT  },
  { path: '/burger/:productId', component:ProductDT  },
  { path: '/sandwich/:productId', component:ProductDT  },
  { path: '/pizza/:productId', component:ProductDT  },
  { path: '/hotdog/:productId', component:ProductDT  },
  { path: '/baguette/:productId', component:ProductDT  },
  { path: '/drink/:productId', component:ProductDT  },


  { path: '/burger', component: Burger },
  { path: '/combo', component: Combo },
  { path: '/sidedish', component: Sidedish },
  { path: '/sandwich', component: Sandwich },
  { path: '/pizza', component: Pizza },
  { path: '/baguette', component: Baguette },
  { path: '/hotdog', component: Hotdog},
  { path: '/drink', component: Drink },
  { path: '/combo/:productID', component: ComboDetail },
  { path: '/combo2', component: ComboDetail2 },
  { path: '/combo3', component: ComboDetail3 },



 
];

export { router };

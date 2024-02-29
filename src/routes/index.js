import {
  Voucher,
  Home,
  Login,
  Register,
  Cart,
  ShipDetail,
  PaymentSuccess,
} from '../pages';
import { Admin, Blogpost, ContactUs, UserInfo } from '../pages';
import { Order } from '../pages';
import { OrderDetail } from '../pages';
import { ProductDetail } from '../pages';
import { Burger, Combo, Sidedish, Sandwich, Hotdog, Baguette, Pizza, Drink, ComboDetail } from '../pages';


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
  { path: '/foundation/:productId', component:ProductDetail  },
  { path: '/blusher&highlighter/:productId', component:ProductDetail  },
  { path: '/makeupbase/:productId', component:ProductDetail  },
  { path: '/power&pact/:productId', component:ProductDetail  },
  { path: '/concealer/:productId', component:ProductDetail  },
  { path: '/cushion/:productId', component:ProductDetail  },
  { path: '/category/:productId', component:ProductDetail  },

  { path: '/burger', component: Burger },
  { path: '/combo', component: Combo },
  { path: '/sidedish', component: Sidedish },
  { path: '/sandwich', component: Sandwich },
  { path: '/pizza', component: Pizza },
  { path: '/baguette', component: Baguette },
  { path: '/hotdog', component: Hotdog},
  { path: '/drink', component: Drink },
  { path: '/combo/:productID', component: ComboDetail },



 
];

export { router };

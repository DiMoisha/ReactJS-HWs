import { Home } from "./Home";
import { Chates } from "./Chates";
import { Profile } from "./Profile";

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/chates',
    component: Chates,
  },
  {
    path: '/profile',
    component: Profile,
  }
]
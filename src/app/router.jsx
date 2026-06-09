import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';
import Cart from '../pages/cart/cart';
import Login from '../pages/auth/Login';
import NotFound  from '../pages/NotFound'


export const router = createBrowserRouter([
    {path:'/', element: <Home />},
    {path:'/shop', element: <Shop />},
    {path:'/cart', element: <Cart />},
    {path:'/login', element: <Login />},
    {path:'*', element: <NotFound />},
])
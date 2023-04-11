import React, { ReactNode , useEffect} from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { Bread } from './components/pages/Bread';
import { Customers } from './components/pages/Customers';
import { Dairy } from './components/pages/Dairy';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { Orders } from './components/pages/Orders';
import { Navigator } from './components/navigators/Navigator';
import { ShoppingCart } from './components/pages/ShoppingCart';
import { NavLink, Outlet } from "react-router-dom"
import GoHome from './components/navigators/GoHome';

export const App: React.FC = () => {
  
     return (<BrowserRouter>
          <GoHome/>
          <Routes>
               <Route path='/' element={<Navigator 
                                                       menuItems={[
                                                            {path:'/', text:'Home'},
                                                            {path:'customers', text:'Customers'},
                                                            {path:'orders', text:'Orders'},
                                                            {path:'shoppingcart', text:'Shopping cart'},
                                                            {path:'products', text:'Products'},
                                                            ]}
                                                       isSublist={false}/>
                                                   }>
                    <Route index element={<Home />} />
                    <Route path='customers' element={<Customers />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='shoppingcart' element={<ShoppingCart />} />
                    <Route path='products' element={<Navigator 
                                                       menuItems={[
                                                            {path:'dairy', text:'Dairy Products'},
                                                            {path:'bread', text:'Brad'}]}
                                                       isSublist={true}/>
                                                   }>
                         <Route path='dairy' element={<Dairy />} />
                         <Route path='bread' element={<Bread />} />
                    </Route>
               </Route>

               <Route path='/*' element={<NotFound />} />

          </Routes>
     </BrowserRouter>);
}

export default App;
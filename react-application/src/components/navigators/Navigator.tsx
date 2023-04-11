import { NavLink, Outlet } from "react-router-dom"
import { ReactNode } from "react"
import './navigators.css'

export type MenuItem = {
  path:string;
  text:string;
}

type Props={
  menuItems:MenuItem[];
  isSublist:boolean;
}

export const Navigator: React.FC<Props> = ({menuItems,isSublist}) => {
  
  function getMenuItems() : ReactNode{
    return menuItems.map((item)=> (<li className="navigator-item">
                                    <NavLink to={item.path}>{item.text}</NavLink>
                                   </li>));
  }

  function getClassName():string{
    return isSublist ? "navigator-list navigator-sublist" :
                       "navigator-list";
  }

    return  (<div>
              <nav>
                  <ul className={getClassName()}>
                    {getMenuItems()}
                  </ul>
              </nav>
              <Outlet />
          </div>);
}
import {NavLink} from "react-router-dom";
const NavDropdown = ({ submenu }) => {
  console.log(submenu)
  return (
    <>
      <ul className="sub-menu">
        {
          submenu.map((item,index)=>{
            return(
              <li className="menu-item" key={index}>
                <NavLink to={item.url}> 
                  {item.title}
                </NavLink>
                </li>
              
            )
          })
        }
        
      </ul>
    </>
  );
};
export default NavDropdown;

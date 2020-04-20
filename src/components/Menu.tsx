import * as React from "react";
import { push as BurgerMenu } from "react-burger-menu";
import { NavLink} from "react-router-dom";
import "../styles/burger-menu.css";
import { connect } from "react-redux";
import { toggleMenu } from "../actions/index.js";


const mapStateToProps = state => {
  return { isMenuOpen: state.isMenuOpen };
};


function mapDispatchToProps(dispatch) {
  return {
    toggleMenu: isOpen => dispatch(toggleMenu(isOpen))
  };
}


const Menu = ({isMenuOpen,toggleMenu}) => {

  return (

    <BurgerMenu pageWrapId={"page-wrap"} 
                outerContainerId={"app"} 
                isOpen={isMenuOpen}
                onStateChange={(state) => toggleMenu(state.isOpen)}>

          <NavLink to="/" className="menu-item" onClick={() => toggleMenu(false)} >
            Strona powitalna
          </NavLink>
          <NavLink to="/system" className="menu-item" onClick={() => toggleMenu(false)}>
            Informacje o systemie
          </NavLink>
          <NavLink to="/network/adapter" className="menu-item" onClick={() => toggleMenu(false)}>
            Informacje o adapterze sieciowym
          </NavLink>
          <NavLink to="/ram" className="menu-item" onClick={() => toggleMenu(false)}>
            Informacje o RAM
          </NavLink>
          <NavLink to="/cpu" className="menu-item" onClick={() => toggleMenu(false)}>
            Informacje o CPU
          </NavLink>
          <NavLink to="/disc" className="menu-item" onClick={() => toggleMenu(false)}>
            Informacje o dysku
          </NavLink>
          <NavLink to="/monitor" className="menu-item" onClick={() => toggleMenu(false)}>
            Informacje o monitorze
          </NavLink>
        </BurgerMenu>
  )
}


export default connect(mapStateToProps,mapDispatchToProps)(Menu);
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
                onStateChange={(state) => toggleMenu(state.isOpen)}
                disableAutoFocus
                >

          <NavLink to="/"  onClick={() => toggleMenu(false)} >
            Strona powitalna
          </NavLink>
          <NavLink to="/system"  onClick={() => toggleMenu(false)}>
            Informacje o systemie
          </NavLink>
          <NavLink to="/network/adapter" onClick={() => toggleMenu(false)}>
            Informacje o adapterze sieciowym
          </NavLink>
          <NavLink to="/ram"  onClick={() => toggleMenu(false)}>
            Informacje o RAM
          </NavLink>
          <NavLink to="/cpu"  onClick={() => toggleMenu(false)}>
            Informacje o CPU
          </NavLink>
          <NavLink to="/disc" onClick={() => toggleMenu(false)}>
            Informacje o dysku
          </NavLink>
          <NavLink to="/monitor" onClick={() => toggleMenu(false)}>
            Informacje o monitorze
          </NavLink>
        </BurgerMenu>
  )
}


export default connect(mapStateToProps,mapDispatchToProps)(Menu);
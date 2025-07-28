import { NavLink, useNavigate } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useSelector } from "react-redux";
import "./Navigation.css";


function Navigation() {
  const navigate = useNavigate();
  const sessionUser = useSelector(state=>state.session.user);

  return (
    <ul className="nav-bar">
      <li className="homepage-logo">
        <NavLink id='home-icon' to="/">CastleBnB</NavLink>
      </li>
      <div className="nav-bar-right-button">
      {
          sessionUser?
          <div className="menu-items">
            <button  className='discussion-nav-button'  onClick={()=>navigate('/spots/new')}>Add A Spot</button>
            <button  className='discussion-nav-button'  onClick={()=>navigate('/discussion')}>Discussion</button>
          </div>:null
        }
      <li>
        <ProfileButton className='profile-buttons-container' />
      </li>

      </div>
   
    </ul>
  );
}

export default Navigation;

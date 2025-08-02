import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkLogout,thunkLogin  } from "../../redux/session";
import {thunkGetCurrentSpot} from '../../redux/spot';
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';

function ProfileButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector(state => state.session.user);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    closeMenu();
    navigate('/')
  };

  const handleDemoUser=()=>{
    // e.preventDefault();
    return dispatch(thunkLogin({
      "email": "Demo-lition",
      "password": "password"
  }))
  }

  const manageYourSpotsHanlder=(e)=>{
    e.preventDefault();
    dispatch(thunkGetCurrentSpot());
    navigate('/spots/current');
  }
  const manageYourReviewsHanlder=(e)=>{
    e.preventDefault();
    // dispatch(getCurrentReviews());
    navigate('/reviews/current');
  }
  // const profileDropdwonClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  return (
    <>
      <button onClick={toggleMenu} className ='profile-button'> 
        <FaUserCircle size={28} color="black"  style={{ backgroundColor: 'white' }} />;
        {/* <i className="fas fa-user-circle" style={{ fontSize: '48px' }} /> */}
      </button>
      {showMenu && (
        <ul className={"profile-dropdown"} ref={ulRef}>
          {user ? (
            <>
              <li className='user-info'>{user.username}</li>
              <li className='user-info'>{user.email}</li>
              <li >
              <button onClick={manageYourSpotsHanlder}
              className='profile-dropdown-button'
              >manage spots</button>
              </li>
              <li >
                <button onClick={manageYourReviewsHanlder}
                className='profile-dropdown-button'
                >manage reviews</button>
              </li>
              <li>
                <button onClick={logout} className='profile-dropdown-button'  >Log Out</button>
              </li>
            </>
          ) : (
            <>
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
               <button 
              className='DemoUser'
              onClick={handleDemoUser}
              >Log in as Demo User</button>
            </>
          )}
        </ul>
      )}
    </>
  );
}

export default ProfileButton;

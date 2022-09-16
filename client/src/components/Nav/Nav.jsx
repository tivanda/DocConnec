import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../img/logoo.png";

import Home from "../../img/hommm.png";
import Exit from "../../img/exitt.png";
import Comment from "../../img/messs.png";
import Profil from "../../img/userr.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../actions/AuthAction";

const Navv = () => {
  const authData = useSelector((state) => state.authReducer.authData);
  const user = authData?.user;
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="Navbar">
      <img src={Logo} className="logo" />
      <div className="navIconn">
        <Link to="../home">
          <img src={Home} alt="" />
        </Link>

        <Link to="../chat">
          <img src={Comment} alt="" />
        </Link>
        {user && (
          <Link to={`/profile/${user._id}`}>
            <img src={Profil} alt="" />
          </Link>
        )}
      </div>

      <div className="nav-right"></div>
      <img className="exitbutton" src={Exit} alt onClick={handleLogOut} />
    </div>
  );
};

export default Navv;

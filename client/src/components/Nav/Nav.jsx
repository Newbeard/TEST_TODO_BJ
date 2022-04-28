import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/actions/auth.action';
import { useNavigate } from 'react-router-dom';


export default function Nav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const hendlerClick = (event) => {
    event.preventDefault()
    dispatch(userLogout())
    navigate('/')

  }
  return (
  <nav className="uk-navbar-container uk-margin navbeckgraund" uk-navbar="mode: click">
    <div className="uk-navbar-left">
     <ul className="uk-navbar-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">SignIn</Link></li>
      <li><Link to="/registation">SignUp</Link></li>
      <li><a onClick={hendlerClick}>Logout</a></li>
     </ul>
    </div>
  </nav>
  );
}

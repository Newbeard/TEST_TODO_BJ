import {Link} from "react-router-dom"


export default function Nav() {
  const hendlerClick = (event) => {
    event.preventDefault()

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

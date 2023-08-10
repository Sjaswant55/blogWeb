import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";
const Navbar = () => {
  const { user, isAuthenticated,logout,loginWithRedirect } = useAuth0();

  return (
    <nav className="navbar">
     <div className="img-logo">
     <img  src="./assets/sunilChhetri.jpeg" alt="logo"/>
      <h1>InsideFootballWorld</h1>
      </div>
      <div className="links">
       <div>
        <Link to="/"
        style={{ 
          color: 'white', 
          backgroundColor: 'green',
          borderRadius: '8px',
          border :  "1px solid greed"
        }}
        >Home</Link>
        </div>
       
        <div>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: 'green',
          borderRadius: '8px' 
        }}>New Blog</Link>
        </div>
        <div>
          {isAuthenticated ? (<p className="user-name">{user.name}</p>) : (<p></p>)}
        </div>
        <div 
           className="login-button"
        >
          {isAuthenticated ? (
            <div>
            <button className="log-out-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button> </div>
          ) : (
        <button className="log-in-button" onClick={() => loginWithRedirect()}>Log In</button>
   ) }
        </div>
       { /* <Link to="/login" style={{ 
          color: 'white', 
          backgroundColor: 'green',
          borderRadius: '8px' 
        }}>Log In</Link> */}
      </div>
    </nav>
  );
}
 
export default Navbar;
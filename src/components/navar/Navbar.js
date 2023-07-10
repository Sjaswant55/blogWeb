import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";

const Navbar = () => {
   
  const { user, isAuthenticated,logout,loginWithRedirect } = useAuth0();


  return (
    <nav className="navbar">
      <h1><span className="blog-logo"><i class="fa-brands fa-blogger-b fa-beat"></i></span>The Ashish Blog</h1>
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
          {isAuthenticated ? (<p>{user.name}</p>) : (<p></p>)}
        </div>
        <div c
           className="login-button"
        >
          {isAuthenticated ? (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Loout</button>
          ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
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
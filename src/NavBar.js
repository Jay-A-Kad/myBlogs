import { Link } from 'react-router-dom';

const NavBar= () => {
    return (
        <nav className="navbar">
            <h1>The kelpie-Blogs</h1>
            <h6>"Don't think just Write..."</h6>
           
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
                 

            </div>
        </nav>
      );
}

export default NavBar;
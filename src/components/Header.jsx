import { Link, redirect } from "react-router-dom";
import '../styles/Head.css'

function Header() {

  const logout = () => {
    localStorage.removeItem('SavedToken');
  }

  return (
    <>
      <header>
        <div className="title">
            <h1>Blog Name</h1>
        </div>
        <div className="pageLinks">
          {localStorage.getItem('SavedToken') ? 
            <Link to="/SignUp">
                Create Account
            </Link> : undefined
            }
            {localStorage.getItem('SavedToken') ? 
              <a href="" onClick={logout}>Logout</a> :
              <Link to="/Login">
                  Login
              </Link>
            }
            <Link to="/">
                Blog
            </Link>
            {localStorage.getItem('SavedToken') ? 
            <Link to="/unpublished">
                Unpublished Posts
            </Link> : undefined
            }
            {localStorage.getItem('SavedToken') ? 
            <Link to="/CreatePost">
                Create Post
            </Link> : undefined
            }
            
        </div>
      </header>
    </>
  )
}

export default Header
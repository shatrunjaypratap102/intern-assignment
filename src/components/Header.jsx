import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Header.css"
function Header({user}) {
   
  return <div className='header'>
      <Link to="/">Assignment</Link>
      <nav>
          {user && <ul>
              <li><span>{user.name}</span></li>
              <li><Link to="/orders">My orders</Link></li>
              <li><Link to="/logout">Logout</Link></li>
          </ul>}

          {
              !user && <ul>
                    <li><Link to="/auth/login/user">Login</Link></li>
              </ul>
          }
      </nav>
  </div>;
}



const mapStateToProps = (state) => ({
    user: state.appReducer.user
})

export default connect(mapStateToProps,null)(Header);
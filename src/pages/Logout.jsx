import Cookies from 'js-cookie';
import React from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {

    const history = useHistory();

    React.useEffect(()=>{
        Cookies.remove('token');
        Cookies.remove('account_type');
        history.push('/');
    },[]);
  return <div>
      <h1>Loging out....</h1>
  </div>;
}

export default Logout;

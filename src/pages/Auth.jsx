import Cookies from 'js-cookie';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import loginOwner from '../utils/login_owner';
import loginUser from '../utils/login_user';
import "./Auth.css"
function Auth({user_type,auth_type}) {
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [error,setError] = React.useState(null);
    const  [name,setName] = React.useState('');
    const history = useHistory();

    const handleLoginUser = (e)=>{
        e.preventDefault();
        loginUser(email,password).then((data)=>{
            console.log(data);
            const {account_type,token} = data;
            Cookies.set('token',token);
            Cookies.set('account_type',account_type);
            history.push('/');
        })
    }

    const handleLoginOwner =(e)=>{
        e.preventDefault();
        loginOwner(email,password).then((data)=>{
            console.log(data);
            const {account_type,token} = data;
            Cookies.set('token',token);
            Cookies.set('account_type',account_type);
            history.push('/');
        })
    }
  return <div className='auth'>
        <div className="auth-form">
            <h1>{auth_type==="login"?"Login":"Sign up"}</h1>
            <form onSubmit={auth_type=="login" ? user_type==="user"?handleLoginUser:handleLoginOwner:null}>
               { auth_type==="register" && <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder='Full Name' value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }} autoComplete='off'/>
                </div>}
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off'/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='off'/>
                </div>

                <button type="submit">{auth_type==="login"?"Login":"Sign Up"} as {user_type==="user"?"User":"Owner"}</button>
            </form>
           <div className="auth-switcher">
           <Link to={auth_type==="login"?`/auth/register/user`:`/auth/login/user`}>{auth_type==="login"?"Not have an user account?create one":"Already have user  account?login"}</Link>
            <Link to={auth_type==="login"?`/auth/register/owner`:`/auth/login/owner`}>{auth_type==="login"?"Not have an owner account?create one":"Already have owner  account?login"}</Link>
           </div>
        </div>
        </div>;
}

export default Auth;

import React from 'react';
import './login.css';

function login(){

return(
    <div>
        <div class="login-box">
            <h1>Login</h1>
            <form>
                <label>Email</label>
                <input type="email"></input>
                <label>Password</label>
                <input type="password"></input>
                <input type="button" value="Submit"></input>
            </form>
        </div>
        <p class="outside">Don't have an account? <a href="/signup">Signup</a></p>
    </div>
);
}

export default login;
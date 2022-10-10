import React from 'react';
import './signup.css';

function SignUp(){
    const [fname, setfname] = React.useState();
    const [lname, setlname] = React.useState();
    const [email, setemail] = React.useState();
    const [pass, setpass] = React.useState();
    const [cpass, setcpass] = React.useState();
    //errors Handlers
    const [fnameErr, setfnameErr] = React.useState(false);
    const [lnameErr, setlnameErr] = React.useState(false);
    const [emailErr, setemailErr] = React.useState(false);
    const [passErr, setpassErr] = React.useState(false);
    const [cpassErr, setcpassErr] = React.useState(false);

    function fnameErrHandler(e){
        let firstname = e.target.value;
        if (firstname.length <3){
            setfnameErr(true);
        }
        else{
            setfnameErr(false);
        }
        setfname(fname)
    }

    function lnameErrHandler(e){
        let lastname = e.target.value;
        if (lastname.length <2){
            setlnameErr(true);
        }
        else{
            setlnameErr(false);
        }
        setlname(lname)
    }

    function emailErrHandler(e){

    }
    var password = "";
    function passErrHandler(e){
        let passwd = e.target.value;
        password = passwd;
        if (passwd.length <8){
            setpassErr(true);
        }
        else{
            setpassErr(false);
        }
        setpass(pass)
    }

    function cpassErrHandler(e){
        let cpasswd = e.target.value;
        if (cpasswd===password){
            setcpassErr(true);
        }
        else{
            setcpassErr(false);
        }
        setcpass(cpass)
    }
    function dataSubmission(e){
        e.preventDefault();
        console.log(fname, lname, email, pass)
    }
return(
    <div>
    <div class="signup-box">
        <h1>Sign Up</h1>
        <h4>Its free and only takes a minute</h4>
        <form onSubmit={dataSubmission}>
            <label>First name</label>
            <input type="text" onChange={fnameErrHandler} />{fnameErr?<span>Invaild name</span>:""}

            <label>Last name</label>
            <input type="text" onChange={lnameErrHandler} />{lnameErr?<span>Invalid name</span>:""}

            <label>Email</label>
            <input type="email" onChange={emailErrHandler} />{emailErr?<span></span>:""}

            <label>Password</label>
            <input type="password" onChange={passErrHandler} />{passErr?<span>Password must contain minimum 8 charactors</span>:""}

            <label>Confirm Password</label>
            <input type="password" onChange={cpassErrHandler} />{cpassErr?<span>Password does not matched</span>:""}

            <input type="button" value="Submit" />
        </form>
        <p>By clicking the Sign Up botton, you agree to our <br></br>
        <a href="#">Term and Conditions</a> and <a href="#">Policy Privacy</a>
        </p>
    </div>
    <p class="outside">Already have an account? <a  href="#">Login here</a></p>
    </div>
);
}

export default SignUp;
import React, { useContext } from "react";
import "./adminlogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../authentication/UserContext";

function Adminlogin() {
  const { setUser } = useContext(UserContext);
  const [email_, setemail] = React.useState();
  const [pass, setpass] = React.useState();
  const navigate = useNavigate();

  function setter_email(e) {
    setemail(e.target.value);
  }
  function setter_pass(e) {
    setpass(e.target.value);
  }

  async function dataSubmission(e) {
    e.preventDefault();
    await axios
      .get(
        `http://localhost:5000/ecommerce/api/v1/login/admin/${email_}/${pass}`
      )
      .then((response) => {
        if (response.data.message === "sccessfully LoggedIn") {
          setUser(response.data.result);
          navigate("/admin");
        } else {
          document.querySelector(
            ".msg"
          ).innerHTML = `<p>${response.data.message}</p>`;
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="login-body">
      <div className="login-box">
        <h1>Admin Login</h1>
        <form onSubmit={dataSubmission}>
          <label>Email</label>
          <input type="email" onChange={setter_email}></input>
          <label>Password</label>
          <input type="password" onChange={setter_pass}></input>
          <span className="msg"></span>
          <button className="btn-login" value="Submit">
            Submit
          </button>
        </form>
        <p className="outside">
          Don't have an account? <Link to="/adminsignup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Adminlogin;

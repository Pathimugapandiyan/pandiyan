import React, { useState } from 'react'
import InputField from '../../Components/InputField'
import { Password } from 'primereact/password'
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import './index.scss'
interface data {
  email: string;
  password: string;
}

function Login() {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null)
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialEmail = queryParams.get("email") || "";
  const initialPassword = queryParams.get("password") || "";

  const handleSubmit = (values: data) => {

    if (values.email === initialEmail && values.password === initialPassword) {

      navigate("/dashboard");
    } else {
      setError("enter a valid Email & Password")
    }
    //alert(JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit} className='login input'>
        <InputField
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange("email")}
          onError={setEmailError}
        />
        <Password
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange("password")}
          feedback={false}
          tabIndex={1}
          placeholder='password'
          className='login_input'
        />
        {error && <div className='error_mess'>{error}</div>}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login;

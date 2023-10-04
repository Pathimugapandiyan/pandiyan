import React, { useState } from "react";
import { useFormik } from "formik"; // Import useFormik from 'formik' instead of destructuring Formik and Form
import InputField from "../../Components/InputField";
import Buttons from "../../Components/Button";
import { Password } from "primereact/password"
import { useNavigate } from "react-router-dom";
import './index.scss'
const SignupForm: React.FC = () => {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneNumberError, setPhoneNumberError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      name: "",
      password: "",
      confirmpassword: ""
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      navigate(`/login?email=${values.email}&password=${values.password}`);

    },
  });

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const confirmPassword = event.target.value;
    const password = formik.values.password;

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match2");
    } else {
      setPasswordError(null);
    }

    formik.handleChange(event);
  };
  const isFormEmpty = () => {
    const { name, email, phoneNumber, password, confirmpassword } = formik.values;
    return !name || !email || !phoneNumber || !password || !confirmpassword;
  };

  const isFormValid =
    !emailError &&
    !nameError &&
    !phoneNumberError &&
    !passwordError &&
    formik.isValid &&
    !isFormEmpty();


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={formik.handleSubmit} className="card p-4">
            <h2 className="mb-4">Signup Form</h2>
            <InputField
              name="name"
              type="name"
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              onError={setNameError}
            />
            {nameError && <div className="text-danger">{nameError}</div>}
            <InputField
              name="phoneNumber"
              type="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange("phoneNumber")}
              onError={setPhoneNumberError}
            />
            {phoneNumberError && (
              <div className="text-danger">{phoneNumberError}</div>
            )}
            <InputField
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onError={setEmailError}
            />
            {emailError && <div className="text-danger">{emailError}</div>}
            <div className="form-group">
             
              <Password
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                toggleMask
                tabIndex={1}
                
                 placeholder="Password"
              />
            </div>
            <div className="form-group">
             
              <Password
                name="confirmpassword"
                value={formik.values.confirmpassword}
                onChange={handleConfirmPasswordChange}
                feedback={false}
                tabIndex={2}
                className="form-control"
                placeholder="confirmPassword"
              />
              {passwordError && (
                <div className="text-danger">{passwordError}</div>
              )}
            </div>
            <Buttons
              type="submit"
              label="Submit"
              className="btn btn-primary"
              disabled={!isFormValid}
            />
          </form>
        </div>
      </div>
    </div>

  );
};

export default SignupForm;

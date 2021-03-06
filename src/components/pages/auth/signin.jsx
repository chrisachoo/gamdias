import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { InputForm, FullWidthButton, RemeberMe, SubText } from "../../index";
import "./auth.css";

const SignIn = ({ data }) => {
  let navigate = useNavigate()
  let location = useLocation()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (event) => {
    const updatedForm = { ...form };
    updatedForm[event.target.name] = event.target.value;

    // console.log('Form changed: ', updatedForm)
    setForm(updatedForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const showDataForm = () => {
    console.log("Form Data ", form)
    // navigate(-1)
  }

  return (
    <div className="section__padding">
      <div className="container">
        <div className="container__form">
          <div className="container__form-text">
            <h2>Welcome back</h2>
            <p>Welcome back! Please enter your details.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <InputForm
              label={`Email`}
              type={`email`}
              name={`email`}
              value={form.email}
              onChange={handleFormChange}
              placeholder={`Enter your email`}
            />

            <InputForm
              label={`Password`}
              type={`password`}
              name={`password`}
              value={form.password}
              onChange={handleFormChange}
              placeholder={`Enter password`}
            />

            <RemeberMe />
            <FullWidthButton
              type="submit"
              label={`Sign in`}
              disabled={!form.email && !form.password}
              onClick={showDataForm}
            />

            <SubText
              text={`Don't have an account?`}
              linkText={`Sign up for free`}
              onClick={() => navigate(location.pathname = '/signup')}
            />
          </form>
        </div>
        <div className="container__right">
          {data.slice(6, 7).map((x) => (
            <img key={x.id} src={x.avatar} alt={x.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
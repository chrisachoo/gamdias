import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { InputForm, FullWidthButton, RemeberMe, SubText } from "../../index";
import "./auth.css";

const SignUp = ({ data }) => {
  let navigate = useNavigate()
  let location = useLocation()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
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
            <p className='welcome-text'>start for free</p>
            <h2>Craate new account</h2>
            <span className="redirect-text">Already have an account? <i onClick={() => navigate(location.pathname = '/signin')}>SignIn</i></span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='inline__input'>
              <InputForm
                label={`First Name`}
                type={`text`}
                name={`firstName`}
                value={form.firstName}
                onChange={handleFormChange}
                placeholder={`First Name`}
              />

              <InputForm
                label={`Last Name`}
                type={`text`}
                name={`lastName`}
                value={form.lastName}
                onChange={handleFormChange}
                placeholder={`Last Name`}
              />
            </div>

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

            <FullWidthButton
              type="submit"
              label={`Sign up`}
              disabled={!form.email && !form.password}
              onClick={showDataForm}
            />

          </form>
        </div>
        <div className="container__right">
          {data.slice(11, 12).map((x) => (
            <img key={x.id} src={x.avatar} alt={x.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
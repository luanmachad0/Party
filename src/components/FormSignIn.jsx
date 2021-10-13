import React from 'react'
import validate from '../validateInfo';
import useForm from '../useForm';
import './Form.css';

export const FormSignIn = ({ submitForm }) => {
    const {handleChange, values, handleSubmit, errors} 
    = useForm(submitForm , validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your account by filling out the information below.</
                 h1>
                 <div className="form-inputs">
                     <label 
                     htmlFor="email" 
                     className="form-label">
                        Email
                     </label>
                     <input
                        id="email" 
                        type="email" 
                        name="email" 
                        className="form-input" 
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p>{errors.email}</p>}
                 </div>
                 <div className="form-inputs">
                     <label 
                     htmlFor="password" 
                     className="form-label">
                        Password
                     </label>
                     <input
                        id="password" 
                        type="password" 
                        name="password" 
                        className="form-input" 
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                      />
                      {errors.password && <p>{errors.password}</p>}
                 </div>
                 <button className="form-input-btn" 
                 type="submit">
                     Sign in
                 </button>
                 <span className="form-input-login">
                     Need to create an account? <a
                     href="#"> Click here </a>
                 </span>
            </form>
        </div>
    )
}

export default FormSignIn


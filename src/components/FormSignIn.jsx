import React from 'react'
import validate from '../validateInfo';
import useForm from '../useForm';
import '../Form.css';

export const FormSignIn = ({ submitForm, callLogin }) => {
    const {handleChange, values, handleSubmit, errors, handleRegisterClick} 
    = useForm(submitForm, callLogin, validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Welcome back!</
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
                     href="#" onClick={handleRegisterClick}> Click here </a>
                 </span>
            </form>
        </div>
    )
}

export default FormSignIn


import React, {useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css';

function Form() {
    const [IsSubmitted, setIsSubmitted] = useState(false);

    function submitForm (){
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="form-container">
            <span className="close-btn"></span>
            <div className="form-content-left">
                <img src="img/logo2.png" alt="spaceship" width="200px" height="200px"
                className="form-img" />
            </div>
            {!IsSubmitted ? <FormSignup submitForm=
            {submitForm} /> : <FormSuccess />}
        </div>
        </>
    )
}

export default Form

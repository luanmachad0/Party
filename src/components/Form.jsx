import React, {useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import '../Form.css';
import FormSignIn from './FormSignIn';

function Form() {
    const [IsSubmitted, setIsSubmitted] = useState(false);
    const [IsLoginCalled, setIsLoginCalled] = useState(false);

    function submitForm (){
        setIsSubmitted(true);
    }

    function callLogin (call){
        setIsLoginCalled(call);
    }

    if (IsLoginCalled) {
        return (
            <>
            <div className="form-container">
                <span className="close-btn"></span>
                <div className="form-content-left">
                    <img src="img/logo2.png" alt="spaceship" width="200px" height="200px"
                    className="form-img" />
                </div>
                <FormSignIn submitForm={submitForm} callLogin={callLogin} />
            </div>
            </>
        )
    } 
    else {
        return (
            <>
            <div className="form-container">
                <span className="close-btn"></span>
                <div className="form-content-left">
                    <img src="img/logo2.png" alt="spaceship" width="200px" height="200px"
                    className="form-img" />
                </div>
                {!IsSubmitted ? <FormSignup submitForm=
                {submitForm} callLogin={callLogin} /> : <FormSuccess />}
            </div>
            </>
        )
    }
}

export default Form

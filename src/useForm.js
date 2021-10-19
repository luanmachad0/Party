import { useState, useEffect } from "react";

const useForm = (submitForm, callLogin, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState
    (false)

    const handleChange = e => {
        const { name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    }

    const handleLoginClick = e => {
        e.preventDefault();
        callLogin(true)
    }

    const handleRegisterClick = e => {
        e.preventDefault();
        callLogin(false)
    }

    useEffect(() => {
        if(Object.keys(errors).length == 0 && isSubmitting)
        {
            submitForm();
        }
    }, [errors])

    return { handleChange, values, handleSubmit, errors, handleLoginClick, handleRegisterClick };
}

export default useForm;
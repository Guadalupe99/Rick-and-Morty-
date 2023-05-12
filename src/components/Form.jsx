import { useState } from 'react';
import validation from './Validation';

const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState ({
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(userData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            login(userData);
        }
        //login(userData);
    }


    const handleChange = (event) => {
        setUserData ({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input name='email' type="email" placeholder='Ingrese su email' value={userData.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            
            <br/> <br/>
            
            <label htmlFor="password">Password:</label>
            <input name='password' type="password" placeholder='Ingrese su password' value={userData.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
           
            <br/><br/>
           
            <button type= 'submit' >Submit</button>
        </form>
    )
}

export default Form;
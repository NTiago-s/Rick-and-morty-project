import validate from "../validation";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Login = ({ login }) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        showPassword: false
    });

    const passwordVisibility = () => {
        setData({
            ...data,
            showPassword: !data.showPassword
        });
    };

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        const validationErrors = validate({
            ...data,
            [event.target.name]: event.target.value
        });
        setErrors(validationErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(data);
    };

    const spans = Array.from({ length: 400 }, (_, index) => <span key={index}></span>);

    return (
        <section >
            {spans}
            <div className="signin">
                <div className="content">
                    <h2>Sign in </h2>
                    <h2>The Rick and Morty APP</h2>
                    <div className="form">
                        <div className="inputBox">
                            <input type="email" onChange={handleChange} className='form-input' value={data.email} name="email" required />
                            <i>Email</i>
                            {errors.email ? <p>{errors.email}</p> : ''}
                        </div>
                        <div className="inputBox">
                            <input type={data.showPassword ? 'text' : 'password'} onChange={handleChange} className='form-input' value={data.password} name='password' required />
                            <div className="eyeBox" onClick={passwordVisibility}>
                                {data.showPassword ? (
                                    <FontAwesomeIcon icon={faEye} className="eye" />
                                ) : (
                                    <FontAwesomeIcon icon={faEyeSlash} className="eyeSlash" />
                                )}
                            </div>
                            <i className="passwordI">Password</i>
                            {errors.password ? <p>{errors.password}</p> : ''}
                        </div>
                        <div className="links">
                            <a href="#">Forgot Password</a>
                            <Link to={'/registrer'}>
                                Sing Up
                            </Link >
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Login" onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
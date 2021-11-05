import { Button } from 'antd';
import { useHistory, Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from "../store";
import { loginUser } from "../store/actions";
import React from 'react';
import LoginForm from '../components/LoginForm';
import 'antd/dist/antd.css';
import './Login.css';

function Login() {
    const history = useHistory()
    const handler = () => {
        history.push("/posts") 
    }

    const [state, dispatch] = useContext(Context)

    function itemSubmitHandler(number, data) {
        if(number === 1) {
            handler();
            dispatch(loginUser(data));
        } else {
            alert("Sisselogimine ebaõnnestus!");
        }
    }

    return (
        <>
            <h1>Logi sisse</h1>
            <LoginForm onLoginUser={itemSubmitHandler} />
            <Link to="/register">
                <Button type="primary" id="newAccount">Loo uus kasutaja</Button>
            </Link>
        </>
    )
}

export default Login;
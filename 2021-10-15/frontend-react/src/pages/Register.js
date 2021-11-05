import { Form, Input, Button, Layout } from 'antd';
import { useState } from 'react'
import "./Register.css"

function Register({history}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFinish = async (e) => {
        setEmail(e.email)
        setLastName(e.lastname)
        setFirstName(e.firstname)
        setPassword(e.password)
        const newUser = {
            email,
            firstName,
            lastName,
            password,
        }

    if(!e.email || !e.password || !e.firstname || !e.lastname || !e.confirmpassword) {
        alert('Kõik väljad peavad olema täidetud!');
    } else if(e.password !== e.confirmpassword) {
        alert('Paroolid ei kattu!');
    } else {
        const response = await fetch('http://localhost:8081/api/auth/signup/', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        if(response.ok) {
            history.push("/login")
        } else {
            alert(data.msg[0].param + ": " + data.msg[0].msg);
        }
    }
}

    return (
        <Layout>
            <h1>Loo uus kasutaja</h1>
            <Form
                labelCol = {{span: 8}}
                wrapperCol = {{span: 8}}
                name = "basic"
                onFinish = {onFinish}
            >
                <Form.Item
                    label = "E-maili aadress"
                    name = "email"
                    required
                >
                    <Input
                        placeholder = "email@domain.com"
                        type = "email"
                        required
                    />
                </Form.Item>
                <Form.Item
                    label = "Eesnimi"
                    name = "firstname"
                    required
                >
                    <Input
                        placeholder = "Kalle"
                        type = "text"
                        required
                    />
                </Form.Item>
                <Form.Item
                    label = "Perenimi"
                    name = "lastname"
                    required
                >
                    <Input
                        placeholder = "Kaalikas"
                        type = "text"
                        required
                    />
                </Form.Item>
                <Form.Item
                    label = "Parool"
                    name = "password"
                    required
                >
                    <Input
                        type = "password"
                        required
                    />
                </Form.Item>
                <Form.Item
                    label = "Kinnita parool"
                    name = "confirmpassword"
                >
                    <Input
                        type="password"
                        required
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" id="register_button">Registreeri</Button>
                </Form.Item>
            </Form>
        </Layout>
    );
}

export default Register
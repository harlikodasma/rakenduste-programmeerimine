import { Layout, Form, Input, Button } from 'antd';
import "./LoginForm.css"

function LoginForm(props) {

    const onFinish = (values) => {
        try {
            fetch('http://localhost:8081/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { 'Content-Type' : 'application/json' }
            }).then(
                response => response.json())
            .then(
                data => {
                    if(data.hasOwnProperty('msg')) {
                        props.onLoginUser(0);
                    } else {
                        alert("Sisselogimine õnnestus! Vajuta OK, et liikuda edasi.");
                        props.onLoginUser(1, data);
                    }
                });
        } catch(error) {
            alert(error);
        }
    };

    const onFinishFailed = (errorInfo) => {
        alert('Ebaõnnestus: ' + errorInfo);
        props.onLoginUser(0);
    };

    return (
        <Layout>
            <Form
                labelCol={{span: 8}}
                wrapperCol={{span: 8}}
                name = "basic"
                initialValues = {{ remember: true }}
                onFinish = {onFinish}
                onFinishFailed = {onFinishFailed}
                autoComplete = "off"
            >
                <Form.Item
                    label = "E-maili aadress"
                    name = "email"
                    required
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label = "Parool"
                    name = "password"
                    required
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="danger primary" htmlType="submit" id="login_button">
                        Logi sisse
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}

export default LoginForm;
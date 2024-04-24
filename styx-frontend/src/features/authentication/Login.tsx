/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, Col, Divider, Form, FormProps, Input, Row, Typography  } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { login } from "./currentUser";
import { Footer } from "antd/es/layout/layout";
const Login: React.FC = () => {
    const dispatch = useDispatch();
    type FieldType = {
        nid?: string;
        password?: string;
    };
    //@ts-ignore
    const state = useSelector(state => state.user);
    // const navigate = useNavigate();
    const { Title } = Typography;
    const onFinish: FormProps<FieldType>['onFinish'] = async (values: any) => {
        //@ts-ignore
        await dispatch(login({ username: values.nid , password: values.password }))
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Row className="login-container" justify={'center'}>
                <Col className="login-div" span={10}>
                    <Row justify={'center'}>
                        <Col span={21}>
                            <Col style={{ marginTop: '10vh', textAlign: 'center'}}>                    
                                <Title className="login-title">تسجيل الدخول</Title>
                                <Divider />
                            </Col>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            disabled={state.loading}
                        >
                            <Form.Item<FieldType>
                                name="nid"
                                labelCol={{ span: 24 , style: {textAlign: "right"}}}
                                wrapperCol={{span : 24}}
                                label="رقم الهوية"
                                labelAlign="left"
                                rules={[{ required: true, message: '!من فضلك ادخل رقم الهوية' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                labelCol={{ span: 24 , style: {textAlign: "right"}}}
                                wrapperCol={{span : 24}}
                                label="كلمه المرور"
                                name="password"
                                rules={[{ required: true, message: '!من فضلك ادخل كلمه المرور' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Col style={{ marginTop: '1vh', textAlign: 'center'}}>                   
                                نسيت كلمة المرور؟<a>اضغط هنا </a>
                                <Divider />
                            </Col>
                            <Form.Item style={{marginTop: '3vh'}} wrapperCol={{ offset: 1 }}>
                                <Button className="login-button" type="primary" htmlType="submit" block>
                                    دخول
                                </Button>
                            </Form.Item>
                        </Form>
                        </Col>

                    </Row>
                </Col>
            </Row>
            <Footer style={{ textAlign: 'left' }}>
        <span style={{fontWeight: 'bold'}}> المملكة العربية السعودية
</span></Footer>
        </>
    )
}
export default Login
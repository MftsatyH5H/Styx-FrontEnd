import { Space } from "antd"

const Login :React.FC = () => {
    return(
        <>
        <div className="login-container">
            <div className="login-div">
                <Space  size={'middle'}>
                    <span>تسجيل الدخول</span>
                </Space>
            </div>
        </div>
        </>
    )
}
export default Login
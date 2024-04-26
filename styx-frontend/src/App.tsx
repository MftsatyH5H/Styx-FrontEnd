import { ConfigProvider } from "antd";
import "./style/style.less";
import AppRouter from "./router/router";
function App() {
  return (
    <>
      <ConfigProvider
        direction="rtl"
        theme={{
          token: {

          },
        }}
      >
        <AppRouter></AppRouter>
      </ConfigProvider>
    </>
  );
}

export default App;

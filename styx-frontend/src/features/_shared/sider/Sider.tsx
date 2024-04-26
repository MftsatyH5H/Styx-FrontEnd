/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useSelector } from 'react-redux'
function SiderCom() {
    //@ts-ignore
    const userType = useSelector(state => state.user.userType);
    //@ts-ignore
    const collapsed = useSelector(state => state.home.collapse);
    const Items = () => {
        if (userType === '3'){
            return [
                {
                    key: '1',
                    label: 'المستخدمين',
                    value: '/users'
                },
                {
                    key: '2',
                    label: 'الأرشيف'
                },
                {
                    key: '3',
                    label: 'اضافه بلاغ'
                },
                {
                    key: '4',
                    label: 'الحالات الواردة'
                },
            ]
        }
        if (userType === '2'){
            return [
                {
                    key: '1',
                    label: 'nav 1'
                },
                {
                    key: '2',
                    label: 'nav 2'
                },
                {
                    key: '3',
                    label: 'nav 3'
                }
            ]
        }
    }
  return (
    <Sider trigger={null} theme='light' collapsible style={{height: '80vh'}} collapsed={collapsed}>
        <div  />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={Items()}
        />
      </Sider>
  )
}

export default SiderCom
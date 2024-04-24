/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MenuFoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Header } from 'antd/es/layout/layout'
// import { useSelector } from 'react-redux'
function HeaderCom() {
    //@ts-ignore
    // const collapsed = useSelector(state => state.home.collapse)
    // const dispatch = useDispatch()
    return (
        <Header style={{ padding: 0 , backgroundColor: 'white', alignContent: 'end', alignItems: 'end'}}>
            <Button
                type="text"
                icon={<MenuFoldOutlined />}
                // onClick={() => }
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
        </Header>
    )
}

export default HeaderCom
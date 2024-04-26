/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./usersSlice";
import { Button, Col, Row, Space, Table, TableColumnsType } from "antd";
import UserEditModal from "./userEditModal";
import UserAddModal from "./userAddModal";

function UsersView() {
    //@ts-ignore
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  //@ts-ignore
  const token = useSelector(state => state.user.jwt)
  console.log(users)
  const columns: TableColumnsType = [
    {
      title: 'الاسم',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'الرقم القومى',
      dataIndex: 'nid',
      key: 'nid',
      // sorter: {
      //   compare: (a, b) => a.price - b.price,
      //   multiple: 3,
      // },
    },
    {
      title: 'البريد الألكترونى',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'نوع المستخدم',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: '',
      key:'nid',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render: (_, record) => (
        <>
          <Row justify={'center'}>
            <Space size={'middle'}>
              <UserEditModal />
              <Button type="primary">
                حذف
              </Button>
            </Space>
          </Row>
          

        </>
      )
    }
  ];
  useEffect(() => {
    //@ts-ignore
    dispatch(getUsers({page: 1, jwt: token}));
  },[]) 
  return (
    <>
    <Row style={{marginTop: 15}}>
      <Col span={20}>
        <span style={{marginRight: 25}}>المستخدمين():</span>
      </Col>
      <Col span={2}>
        <UserAddModal></UserAddModal>
      </Col>
    </Row>
    <Row style={{marginTop: 23}} justify={'center'}>
      <Col span={23}>
        <Table columns={columns} dataSource={users} />
      </Col>
    </Row>
    </>
  )
}

export default UsersView
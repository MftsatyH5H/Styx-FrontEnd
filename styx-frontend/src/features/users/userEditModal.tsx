import { Button, Modal } from 'antd'
import { useState } from 'react'

function UserEditModal() {
    const [isModalOpen,setIsModalOpen] = useState(false);
  return (<>
  <Button type="primary" onClick={() => setIsModalOpen(true)}>
        تعديل المستخدم
      </Button>
      <Modal
        title="تعديل المستخدم"
        centered
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

export default UserEditModal
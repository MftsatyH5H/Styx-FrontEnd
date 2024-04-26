import { Button, Modal } from 'antd'
import { useState } from 'react'

function UserAddModal() {
    const [isModalOpen,setIsModalOpen] = useState(false);
  return (<>
  <Button type="primary" onClick={() => setIsModalOpen(true)}>
        اضافة مستخدم
      </Button>
      <Modal
        title="اضافة مستخدم"
        centered
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        
      </Modal>
    </>
  )
}

export default UserAddModal
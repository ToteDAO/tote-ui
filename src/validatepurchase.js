import { Button, Modal, Input, } from 'antd';
import React, { useState } from 'react';

const Validatepurchase = () =>{

    const [isModalVisible, setIsModalVisible] = useState(true);

    const handleSubmit =()=>{
        setIsModalVisible(false);
    };

return(
    <>
    <Modal title="Validate My Purchase"  visible={isModalVisible}
        footer={null}>
       <Input placeholder='SKU Id' size="large" style={{ marginBottom: "20px" }}
                />
                <div style={{ textAlign: "center" }}>
                <Button type='primary' onClick={() => handleSubmit()}>Validate</Button>
                </div>
    </Modal>
    </>
    );
};

export default Validatepurchase;
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Label } from '@windmill/react-ui'
import { AiOutlineInfoCircle, AiOutlineEdit, AiOutlinePrinter, AiOutlineDelete } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import '../../../../styles/addStudent.css'
import {
  TableCell,
  TableRow,
  Avatar,
  Badge,
  Input,
  Select
} from '@windmill/react-ui'
import { useHistory } from 'react-router-dom';
import printHtmlToPDF from "print-html-to-pdf";

const Index = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const history = useHistory()
  console.log('props', props.data)
  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }
  const printIDCard = async () => {

    const node = document.getElementById("idCard");
    const pdfOption = {
      jsPDF: {
        unit: 'px',
        format: 'a4',
      },
      spin: false,
      fileName: props.data?.grNumber,
      margin: {
        top: 4,
        bottom: 4,

      },
    }
    console.log(props.data?.grNumber);
    await printHtmlToPDF.print(node, pdfOption);
  }
  return (
    <>
      <TableRow key={props.data.i}>
        <TableCell>
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold">{props.data.number}</p>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold">{props.data.name}</p>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <span style={{ width: '70%', display: 'flex', justifyContent: 'center' }} className="text-sm">{props.data.date}</span>
        </TableCell>
        <TableCell>
          <span style={{ width: '70%', display: 'flex', justifyContent: 'center' }} className="text-sm">{!props.data.status ? 'False' : 'True'}</span>
        </TableCell>
        <TableCell>
          <span style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
            <Badge>{props.data.status}</Badge>
          </span>
        </TableCell>
        <TableCell>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
            <div onClick={openModal} className='icon-container'><acronym title="Edit info"><AiOutlineEdit size={18} /></acronym></div>
            <div onClick={() => console.log('delete')} className='icon-container'><acronym title="Basic Info"><AiOutlineDelete size={18} /></acronym></div>
          </div>
        </TableCell>
      </TableRow>

      {/* Modal */}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalBody>
          <div>
            <Label className='mt-5'>
              <span>Inquiry Number</span>
              <Input type="text"
                name="inquiryNumber"
                disabled
                value={props.data.number}
                className="mt-1" />
            </Label>
            <Label className='mt-5'>
              <span>Inquiry Name</span>
              <Input type="text"
                placeholder="Enter Inquiry Name"
                name="name"
                value={props.data.name}
                className="mt-1" />
            </Label>
            <Label className="mt-4">
                        <span>Status</span>
                        <Select
                            name="studentClass"
                            value={props.data.status} className="mt-1">
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </Select>
                    </Label>
                    <Button className="mt-4" style={{width:'100%'}}>Update</Button>
          </div>
        </ModalBody>
      </Modal>

      {/* Modal */}
    </>
  );
}

export default Index;

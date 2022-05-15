import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'
import { AiOutlineInfoCircle, AiOutlineEdit, AiOutlinePrinter } from 'react-icons/ai';
import ProfileImage from '../../../../assets/img/profile.JPG'
import studentDp from '../../../../assets/img/studentDp.png'
import signature from '../../../../assets/img/signature.PNG'
import '../../../../styles/addStudent.css'
import {
  TableCell,
  TableRow,
  Avatar,
  Badge,
} from '@windmill/react-ui'
import { useHistory } from 'react-router-dom';
import printHtmlToPDF from "print-html-to-pdf";

const Index = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const history = useHistory()

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
            <Avatar className="hidden mr-3 md:block" src={props.data.image} />
            <div>
              <p className="font-semibold">{props.data.studentName}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{props.data.fatherName}</p>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <span style={{ width: '70%', display: 'flex', justifyContent: 'center' }} className="text-sm">{props.data.grNumber}</span>
        </TableCell>
        <TableCell>
          <span style={{ width: '70%', display: 'flex', justifyContent: 'center' }} className="text-sm">{props.data.studentClass}</span>
        </TableCell>
        <TableCell>
          <span style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
            <Badge>{props.data.status}</Badge>
          </span>
        </TableCell>
        <TableCell>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
            <div onClick={() => history.push(`/app/student/edit/${props.data.grNumber}`)} className='icon-container'><acronym title="Edit info"><AiOutlineEdit size={18} /></acronym></div>
            <div onClick={openModal} className='icon-container'><acronym title="Basic Info"><AiOutlineInfoCircle size={18} /></acronym></div>
          </div>
        </TableCell>
      </TableRow>

      {/* Modal */}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalBody className="m-auto">
          <div className='idCardModal' id="idCard">
            <div className='form-id-card'>
              <div className='form-id-card-header'>
                <p>Pak Skills Improvement</p>
              </div>
              <div className='form-profile-container'>
                <img src={studentDp} />
              </div>
              <div>
                <div className='form-id-card-name-section'>
                  <p className='form-studentName'>
                    {props.data.studentName}
                  </p>
                  <p className='form-fatherName'>
                    {props.data.gender ? props.data.gender === 'Male' ? 's/o' : 'd/o' : ''} {props.data.fatherName}
                  </p>
                </div>
              </div>
              <div className='form-id-card-details'>

                {/* gr and dob */}

                <div className='form-gr-section'>
                  <div>
                    <p className='form-heading'>
                      GR No.
                    </p>
                    <p className='form-value'>
                      {props.data.grNumber}
                    </p>
                  </div>
                  <div className='form-second-div'>
                    <p className='form-heading'>
                      Date Of Birth:
                    </p>
                    <p className='form-value'>
                      {props.data.dateofbirth}
                    </p>
                  </div>
                </div>

                {/* gr and dob */}

                {/* gender and class */}
                <div className='form-gender-section'>
                  <div>
                    <p className='form-heading'>
                      Gender:
                    </p>
                    <p className='form-value'>
                      {props.data.gender}
                    </p>
                  </div>
                  <div className='form-second-div'>
                    <p className='form-heading'>
                      Class
                    </p>
                    <p className='form-value'>
                      {props.data.studentClass}
                    </p>
                  </div>
                </div>

                {/* gender and class */}

                {/* extra */}

                <div className='form-extra-section'>
                  <div>
                    <p>+9234569067</p>
                    <p>info@psi.com</p>
                    <p className='form-website-link'>www.pakskills.com</p>
                  </div>
                </div>

                {/* extra */}
                {/* extra */}

                <div className='form-signature-section'>
                  <img src={signature} />
                  <p>Signature</p>
                </div>

                {/* extra */}

              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className='modal-footer'>
            <div>
              <Button onClick={printIDCard}>
                <span>Download ID Card</span>
                <span style={{ marginLeft: 15 }}><AiOutlinePrinter size={20} /></span>
              </Button>
            </div>
          </div>
        </ModalFooter>
      </Modal>

      {/* Modal */}
    </>
  );
}

export default Index;

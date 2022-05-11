import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'
import { AiOutlineInfoCircle, AiOutlineEdit, AiOutlinePrinter } from 'react-icons/ai';
import ProfileImage from '../../assets/img/profile.JPG'
import signature from '../../assets/img/signature.PNG'
import {
  TableCell,
  TableRow,
  Avatar,
  Badge,
} from '@windmill/react-ui'
import { useHistory } from 'react-router-dom';

const Index = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const history = useHistory()

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
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
            <div onClick={()=> history.push(`/app/student/edit/${props.data.grNumber}`)} className='icon-container'><acronym title="Edit info"><AiOutlineEdit size={18} /></acronym></div>
            <div onClick={openModal} className='icon-container'><acronym title="Basic Info"><AiOutlineInfoCircle size={18} /></acronym></div>
          </div>
        </TableCell>
      </TableRow>

      {/* Modal */}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalBody>
          <div className='modal-id-card'>
            <div className='profile-container'>
              <img src={ProfileImage} />
            </div>
            <div className='id-card-header'>
              <p>Pak Skills Improvement</p>
            </div>
            <div>
              <div className='id-card-name-section'>
                <p className='studentName'>
                  {props.data.studentName}
                </p>
                <p className='fatherName'>
                  s/o {props.data.fatherName}
                </p>
              </div>
            </div>
            <div className='id-card-details'>

              {/* gr and dob */}

              <div className='gr-section'>
                <div>
                  <p className='heading'>
                    GR No.
                  </p>
                  <p className='value'>
                    {props.data.grNumber}
                  </p>
                </div>
                <div className='second-div'>
                  <p className='heading'>
                    Date Of Birth:
                  </p>
                  <p className='value'>
                    {props.data.dob}
                  </p>
                </div>
              </div>

              {/* gr and dob */}

              {/* gender and class */}
              <div className='gender-section'>
                <div>
                  <p className='heading'>
                    Gender:
                  </p>
                  <p className='value'>
                    {props.data.gender}
                  </p>
                </div>
                <div className='second-div'>
                  <p className='heading'>
                    Class
                  </p>
                  <p className='value'>
                    {props.data.studentClass}
                  </p>
                </div>
              </div>

              {/* gender and class */}

              {/* extra */}

              <div className='extra-section'>
                <div>
                  <p>+9234569067</p>
                  <p>info@psi.com</p>
                  <p className='website-link'>www.pakskillsimrovement.com</p>
                </div>
              </div>

              {/* extra */}
              {/* extra */}

              <div className='signature-section'>
                <img src={signature} />
                <p>Signature</p>
              </div>

              {/* extra */}

            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className='modal-footer'>
            <div>
              <Button>
                <span>Print</span>
                <span style={{marginLeft:15}}><AiOutlinePrinter size={20} /></span>
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

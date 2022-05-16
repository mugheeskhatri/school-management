import React, { useState } from 'react';
import { AiOutlineInfoCircle, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { IoAddCircleOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import '../../../styles/manageclasses.css'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'
import {
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    Input,
    TableRow,
    Badge,
    Label
} from '@windmill/react-ui';
import studentDp from '../../../assets/img/studentDp.png';
import PageTitle from '../../../components/Typography/PageTitle'
import signature from '../../../assets/img/signature.PNG';
import '../../../styles/addStudent.css'

const GenerateFamilyNumber = () => {
    const [classInputValue, setClassInputValue] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const classes = ["first", "second"]
    function addClass() {
        classes.push(...classes, classInputValue);
        setClassInputValue("")
        console.log(classes);
    }
    function openModal() {
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false)
    }
    return (
        <>
            <PageTitle>Generate Family Number</PageTitle>
            <div className='classInputContainer'>
                <div className='familyInputContainer'>
                    <div className='familyInputFirst'>
                        <Label className='mb-5'>
                            <Input type="text"
                                placeholder="Family Number"
                                // name="classname"
                                className="mt-1"
                                value={classInputValue}
                                onChange={(e) => { setClassInputValue(e.target.value) }} />
                        </Label>

                    </div>
                    <div className='familyInputSecond'>
                        <Label className='mb-5'>
                            <Input type="text"
                                placeholder="GR Number"
                                // name="classname"
                                className="mt-1"
                                value={classInputValue}
                                onChange={(e) => { setClassInputValue(e.target.value) }} />
                        </Label>
                    </div>

                </div>

                <div className='familyNumberAddContainer'>
                    <div className="familyNumberAdd" onClick={addClass}>Generate Family Number</div>
                </div>
            </div>

            <TableContainer>
                <Table>
                    <TableHeader>
                        <tr>
                            <TableCell>Family Number</TableCell>
                            <TableCell>Students</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell><span style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>Action</span></TableCell>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {
                            classes?.map((e, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>
                                            <div className="flex items-center text-sm" style={{ width: "100%" }}>
                                                <div>
                                                    <p className="font-semibold">{e}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span style={{ width: '25%', display: 'flex', justifyContent: 'center', textAlign: 'center' }} className="text-sm">123</span>
                                        </TableCell>
                                        <TableCell>
                                            <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }} className="text-sm"></span>
                                        </TableCell>
                                        <TableCell>
                                            <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                                <Badge></Badge>
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                                                {/* <div className='icon-container'><acronym title="Edit Class"><IoAddCircleOutline size={18} /></acronym></div> */}
                                                <div className='icon-container'><acronym title="Delete Class"><AiOutlineDelete size={18} /></acronym></div>
                                                <div onClick={openModal} style={{ marginLeft: "1rem" }} className='icon-container'><acronym title="Delete Class"><BsInfoCircle size={18} /></acronym></div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>


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
                                        Shahbaz Ali
                                    </p>
                                    <p className='form-fatherName'>
                                        {/* {props.data.gender ? props.data.gender === 'Male' ? 's/o' : 'd/o' : ''} {props.data.fatherName} */}
                                        S/o
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
                                            732487
                                        </p>
                                    </div>
                                    <div className='form-second-div'>
                                        <p className='form-heading'>
                                            Date Of Birth:
                                        </p>
                                        <p className='form-value'>
                                            23/04/2002
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
                                            Male
                                        </p>
                                    </div>
                                    <div className='form-second-div'>
                                        <p className='form-heading'>
                                            Class
                                        </p>
                                        <p className='form-value'>
                                            Matric
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
                            {/* <Button onClick={printIDCard}>
                                <span>Download ID Card</span>
                                <span style={{ marginLeft: 15 }}><AiOutlinePrinter size={20} /></span>
                            </Button> */}
                        </div>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default GenerateFamilyNumber;

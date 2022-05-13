import React, { useState, useEffect } from 'react'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import PageTitle from '../../../components/Typography/PageTitle'
import { Button } from '@windmill/react-ui';
import signature from '../../../assets/img/signature.PNG';
import ProfileImage from '../../../assets/img/profile.JPG'
import '../../../styles/studentManage.css'
import '../../../styles/addStudent.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import studentDp from '../../../assets/img/studentDp.png'
import printHtmlToPDF from "print-html-to-pdf";
import { toast } from 'react-toastify';

function ManageStudents() {
    const [studentInfo, setStudentInfo] = useState(true)
    const params = useParams()
    const data = useSelector(state => state)
    const allStudents = [...data.registeredStudents, ...data.admittedStudents]
    const currentDate = new Date();
    const [newAddmission, setNewAddmission] = useState(
        {
            studentName: '',
            fatherName: '',
            contactNumber: '',
            grNumber: '',
            bForm: '',
            studentClass: 1,
            lastQualification: 1,
            gender: '',
            dateofbirth: '',
            fee: 0,
            addmissionEffectiveDate: '',
            familyNumber: '',
            image: '',
            guardianName: '',
            addmissionDate: currentDate,
            address: ""

        }
    );
    useEffect(() => {
        let newObject = window.localStorage.getItem("studentData");
    }, [])

    useEffect(() => {
        const studentData = allStudents?.filter((student) => student.grNumber == params.id)
        setNewAddmission(
            {
                studentName: studentData[0]?.studentName,
                fatherName: studentData[0]?.fatherName,
                contactNumber: studentData[0]?.contactNumber,
                grNumber: studentData[0]?.grNumber,
                bForm: studentData[0]?.bForm,
                studentClass: studentData[0]?.studentClass,
                lastQualification: studentData[0]?.lastQualification,
                gender: studentData[0]?.gender,
                dateofbirth: studentData[0]?.dateofbirth,
                lastQualification: studentData[0]?.lastQualification,
                fee: studentData[0]?.fee,
                addmissionEffectiveDate: studentData[0]?.addmissionEffectiveDate,
                familyNumber: studentData[0]?.familyNumber,
                image: studentData[0]?.image,
                guardianName: studentData[0]?.guardianName,
                addmissionDate: studentData[0]?.addmissionDate,
                address: studentData[0]?.address,
            }
        )
        console.log('newAddmission', newAddmission)
        console.log('StudentData', studentData)
    }, [])

    const handleSubmit = (e) => {
        // const formData = new FormData();
        // formData.append('studentName', newAddmission.studentName);
        // formData.append('detail', newAddmission.detail);
        // formData.append('fatherName', newAddmission.fatherName);
        // formData.append('contactNumber', newAddmission.contactNumber);
        // formData.append('fatherNic', newAddmission.fatherNic);
        // formData.append('bForm', newAddmission.bForm);
        // formData.append('bForm', newAddmission.bForm);
        // formData.append('class', newAddmission.class);
        // formData.append('fee', newAddmission.fee);
        const formData = {
            studentName: newAddmission?.studentName,
            fatherName: newAddmission?.fatherName,
            contactNumber: newAddmission?.contactNumber,
            grNumber: newAddmission?.grNumber,
            bForm: newAddmission?.bForm,
            studentClass: newAddmission?.studentClass,
            lastQualification: newAddmission?.lastQualification,
            gender: newAddmission?.gender,
            dateofbirth: newAddmission?.dateofbirth,
            lastQualification: newAddmission?.lastQualification,
            fee: newAddmission?.fee,
            addmissionEffectiveDate: newAddmission?.addmissionEffectiveDate,
            familyNumber: newAddmission?.familyNumber,
            image: newAddmission?.image,
            guardianName: newAddmission?.guardianName,
            addmissionDate: newAddmission?.addmissionDate,
            address: newAddmission?.address,
        }
        // axios.post('http://localhost:5000/api/Student', formData)
        //   .then(res => {
        //     console.log('res', res);
        //   })
        //   .catch(err => {
        //     console.log('err', err);
        //   });
        // localStorage.setItem("studentData", JSON.stringify(formData));
    }
    const handleChange = (e) => {
        setNewAddmission({ ...newAddmission, [e.target.name]: e.target.value });
    }
    const handlePhoto = (e) => {
        setNewAddmission({ ...newAddmission, image: e.target.files[0] });
    }
    const printIDCard = async () => {
        if (newAddmission.grNumber == undefined) {
            toast.error("Enter GR Number", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
        else {
            const node = document.getElementById("idCard");
            const pdfOption = {
                jsPDF: {
                    unit: 'px',
                    format: 'a4',
                },
                spin: false,
                fileName: newAddmission?.grNumber,
                margin: {
                    top: 4,
                    bottom: 4,

                },
            }
            await printHtmlToPDF.print(node, pdfOption);
        }

    }
    return (
        <>
            <PageTitle>Student Information</PageTitle>
            <div className='form-container'>
                {/* Student Name  */}
                <div className='width'>
                    <Label>
                        <span className='my-3 bolder'>Student Name</span>
                        <Input type="text"
                            placeholder="Enter Student Name"
                            name="studentName"
                            maxlength="27"
                            value={newAddmission.studentName}
                            onChange={handleChange} className="mt-1" />
                    </Label>
                    {/* Father Name  */}
                    <Label className='mt-5'>
                        <span className='my-3 bolder'>Father Name</span>
                        <Input type="text"
                            placeholder="Father Name"
                            name="fatherName"
                            maxlength="30"
                            value={newAddmission.fatherName}
                            onChange={handleChange} className="mt-1" />
                    </Label>
                    {/* Contact Number  */}
                    <Label className='mt-5'>
                        <span>Contact Number</span>
                        <Input type="text"
                            placeholder="Enter Contact Number"
                            name="contactNumber"
                            maxlength="12"
                            value={newAddmission.contactNumber}
                            onChange={handleChange} className="mt-1" />
                    </Label>
                </div>
                {/* Student Card Start  */}
                <div className='idCard' id="idCard">
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
                                    {newAddmission.studentName}
                                </p>
                                <p className='form-fatherName'>
                                    {newAddmission.gender ? newAddmission.gender === 'Male' ? 's/o' : 'd/o' : ''} {newAddmission.fatherName}
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
                                        {newAddmission.grNumber}
                                    </p>
                                </div>
                                <div className='form-second-div'>
                                    <p className='form-heading'>
                                        Date Of Birth:
                                    </p>
                                    <p className='form-value'>
                                        {newAddmission.dateofbirth}
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
                                        {newAddmission.gender}
                                    </p>
                                </div>
                                <div className='form-second-div'>
                                    <p className='form-heading'>
                                        Class
                                    </p>
                                    <p className='form-value'>
                                        {newAddmission.studentClass}
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

                {/* Student Card End  */}

                <div className='width'>
                    <Label className='mt-5'>
                        <span>GR Number</span>
                        <Input type="text"
                            placeholder="Enter GR Number"
                            name="grNumber"
                            maxlength="11"
                            value={newAddmission.grNumber}
                            onChange={handleChange} className="mt-1" />
                    </Label>
                </div>
                <div className='width'>
                    <Label className='mt-5'>
                        <span>Student B Form Number</span>
                        <Input type="text"
                            placeholder="Student B Form Number"
                            name="bForm"
                            maxlength="18"
                            value={newAddmission.bForm}
                            onChange={handleChange} className="mt-1" />
                    </Label>
                </div>

                <div className='width'>
                    <Label className="mt-4">
                        <span>Class</span>
                        <Select
                            name="studentClass"
                            value={newAddmission.studentClass}
                            onChange={handleChange} className="mt-1">
                            <option value={1}>Select Class</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>Matric</option>
                            <option value={11}>First Year</option>
                            <option value={12}>Second Year</option>
                            <option value={'BA'}>B.A</option>
                            <option value={'BCom'}>B.Com</option>
                        </Select>
                    </Label>
                </div>
                <div className='width'>
                    <Label className="mt-4">
                        <span>Last Qualification</span>
                        <Select
                            name="lastQualification"
                            value={newAddmission.lastQualification}
                            onChange={handleChange} className="mt-1">
                            <option value={1}>Select Class</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>Matric</option>
                            <option value={11}>First Year</option>
                            <option value={12}>Second Year</option>
                            <option value={'BA'}>B.A</option>
                            <option value={'BCom'}>B.Com</option>
                        </Select>
                    </Label>
                </div>
                <div className='width'>
                    <Label className="mt-4">
                        <span>Gender</span>
                        <Select
                            name="gender"
                            value={newAddmission.gender}
                            onChange={handleChange} className="mt-1">
                            <option value={1}>Select Class</option>
                            <option value={'Male'}>Male</option>
                            <option value={'Female'}>Female</option>

                        </Select>
                    </Label>
                </div>
                <div className='width'>
                    <Label className='mt-5'>
                        <span>Date Of Birth</span>
                        <Input type="date"
                            placeholder="Date Of Birth"
                            name="dateofbirth"
                            value={newAddmission.dateofbirth}
                            onChange={handleChange} className="mt-1" />
                    </Label>
                </div>
                <div className='width'>
                    <Label className="mt-4">
                        <span>Fee</span>
                        <Input type="number"
                            placeholder="Enter fee"
                            name="fee"
                            value={newAddmission.fee}
                            onChange={handleChange} className="mt-1" />
                    </Label>
                </div>
                <div className='width'>
                    <Label className='mt-5'>
                        <span>Addmission Effective Date</span>
                        <Input type="date"
                            placeholder="Addmission Effective Date"
                            name="addmissionEffectiveDate"
                            value={newAddmission.addmissionEffectiveDate}
                            onChange={handleChange} className="mt-1" />
                    </Label>
                </div>
                <div className='width'>
                    <Label className='mt-5'>
                        <span>Family Number</span>
                        <Input type="text"
                            placeholder="Family Number"
                            name="familyNumber"
                            value={newAddmission.familyNumber}
                            onChange={handleChange} className="mt-1" />
                    </Label>
                </div>
                <div className='width'>
                    <Label className="mt-4">
                        <span>Image</span>
                        <Input type="file"
                            accept=".png, .jpg, .jpeg"
                            name="image"
                            onChange={handlePhoto} className="mt-1" />
                    </Label>
                </div>
                <div className='width'>
                    <Label className='mt-5'>
                        <span>Guardian Name</span>
                        <Input type="text"
                            placeholder="Guardian Name"
                            name="guardianName"
                            value={newAddmission.guardianName}
                            onChange={handleChange} className="mt-1" />
                    </Label>
                </div>
                <div className='width'>
                    <Label className='mt-5'>
                        <span>Address</span>
                        <Input type="text"
                            placeholder="Address"
                            name="address"
                            value={newAddmission.address}
                            onChange={handleChange} className="mt-1" />
                    </Label>
                </div>
                <div className='width m-5'>
                    <Button onClick={handleSubmit} className="my-2">Add New Addmission</Button>
                    <Button className="my-2 mx-5" onClick={printIDCard}>Download ID Card</Button>
                </div>
                <div className='width mt-5'>
                    <Button className="my-2 mx-5" style={{ marginLeft: "68%" }}>Print Blank Form</Button>
                </div>
            </div>
        </>
    )
}

export default ManageStudents;




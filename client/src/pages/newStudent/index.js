import React, { useState, useEffect } from 'react'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import PageTitle from '../../components/Typography/PageTitle'
import { Button } from '@windmill/react-ui';
import signature from '../../assets/img/signature.PNG';
import ProfileImage from '../../assets/img/profile.JPG'
import '../../styles/studentManage.css'
import '../../styles/addStudent.css'
import axios from 'axios';



function NewStudent() {
  const [studentInfo, setStudentInfo] = useState(true)
  useEffect(() => {
    let newObject = window.localStorage.getItem("studentData");
    console.log(JSON.parse(newObject));
  }, [])
  const [newStudent, setNewStudent] = useState(
    {
      studentName: '',
      fatherName: '',
      detail: '',
      fee: 0,
      image: '',
      contatNumber: '',
      fatherNic: '',
      bForm: '',
      studentClass: 1,
      fatherContatNumber: '',
      lastQualification: 1,
      gender: 'Male',
      grNumber: '',
      status: 'Register',
      date: '',
    }
  );

  const handleSubmit = (e) => {
    // const formData = new FormData();
    // formData.append('studentName', newStudent.studentName);
    // formData.append('detail', newStudent.detail);
    // formData.append('fatherName', newStudent.fatherName);
    // formData.append('contactNumber', newStudent.contactNumber);
    // formData.append('fatherNic', newStudent.fatherNic);
    // formData.append('bForm', newStudent.bForm);
    // formData.append('bForm', newStudent.bForm);
    // formData.append('class', newStudent.class);
    // formData.append('fee', newStudent.fee);
    const formData = {
      studentName: newStudent.studentName,
      fatherName: newStudent.fatherName,
      studentClass: newStudent.studentClass,
      image: newStudent.fee,
      contatNumber: newStudent.contatNumber,
      fatherNic: newStudent.fatherNic,
      bForm: newStudent.bForm,
      fee: newStudent.fee,
      detail: newStudent.detail,
      fatherContatNumber: newStudent.fatherContatNumber,
      lastQualification: newStudent.lastQualification,
      gender: newStudent.gender,
      grNumber: newStudent.grNumber,
      status: newStudent.status,
    }
    console.log(formData)
    // axios.post('http://localhost:5000/api/Student', formData)
    //   .then(res => {
    //     console.log('res', res);
    //   })
    //   .catch(err => {
    //     console.log('err', err);
    //   });
    localStorage.setItem("studentData", JSON.stringify(formData));
  }
  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  }
  const handlePhoto = (e) => {
    setNewStudent({ ...newStudent, image: e.target.files[0] });
  }
  return (
    <>

      {studentInfo ?
        //student data
        <>
          <PageTitle>Student Information</PageTitle>
          <div className='form-container'>
            <div className='width'>
              <Label>
                <span>Student Name</span>
                <Input type="text"
                  placeholder="Enter Student Name"
                  name="studentName"
                  value={newStudent.studentName}
                  onChange={handleChange} className="mt-1" />
              </Label>

              <Label className='my-3'>
                <span>Student B.Form Number</span>
                <Input type="number"
                  placeholder="Enter Student B.Form Number"
                  name="bForm"
                  value={newStudent.bForm}
                  onChange={handleChange} className="mt-1" />
              </Label>
              <Label className='my-3'>
                <span>Contact Number</span>
                <Input type="number"
                  placeholder="Enter Contact Number"
                  name="contatNumber"
                  value={newStudent.contatNumber}
                  onChange={handleChange} className="mt-1" />
              </Label>
            </div>

            <div className='width'>
              <div className='form-id-card'>
                <div className='form-id-card-header'>
                  <p>Pak Skills Improvement</p>
                </div>
                <div className='form-profile-container'>
                  <img src={ProfileImage} />
                </div>
                <div>
                  <div className='form-id-card-name-section'>
                    <p className='form-studentName'>
                      {newStudent.studentName}
                    </p>
                    <p className='form-fatherName'>
                      {newStudent.gender ? newStudent.gender === 'Male' ? 's/o' : 'd/o' : ''} {newStudent.fatherName}
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
                        {newStudent.grNumber}
                      </p>
                    </div>
                    <div className='form-second-div'>
                      <p className='form-heading'>
                        Date Of Birth:
                      </p>
                      <p className='form-value'>
                        {newStudent.dob}
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
                        {newStudent.gender}
                      </p>
                    </div>
                    <div className='form-second-div'>
                      <p className='form-heading'>
                        Class
                      </p>
                      <p className='form-value'>
                        {newStudent.studentClass}
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

            <div className='width'>
              <Label className='my-3'>
                <span>GR Number</span>
                <Input type="number"
                  placeholder="Enter GR Number"
                  name="grNumber"
                  value={newStudent.grNumber}
                  onChange={handleChange} className="mt-1" />
              </Label>
            </div>

            <div className='width'>
              <Label className="mt-4">
                <span>Class</span>
                <Select
                  name="studentClass"
                  value={newStudent.studentClass}
                  onChange={handleChange} className="mt-1">
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
                  value={newStudent.lastQualification}
                  onChange={handleChange} className="mt-1">
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
                  value={newStudent.gender}
                  onChange={handleChange} className="mt-1">
                  <option value={'Male'}>Male</option>
                  <option value={'Female'}>Female</option>

                </Select>
              </Label>
            </div>
            <div className='width'>
              <Label className="mt-4">
                <span>Status</span>
                <Select
                  name="status"
                  value={newStudent.status}
                  onChange={handleChange} className="mt-1">
                  <option value={'registered'}>Register</option>
                  <option value={'admitted'}>Admission</option>

                </Select>
              </Label>
            </div>
            <div className='width'>
              <Label className="mt-4">
                <span>Fee</span>
                <Input type="number"
                  placeholder="Enter fee"
                  name="fee"
                  value={newStudent.fee}
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
              <div className="mt-4 mb-4">
                <Button onClick={() => setStudentInfo(false)}>Father's Info</Button>
              </div>
            </div>
          </div>
        </> :
        // father data

        <>
          <PageTitle>Father's Information</PageTitle>
          <div className='form-container'>

            <div className='width'>
              <Label className='my-3'>
                <span>Father Name</span>
                <Input type="text"
                  placeholder="Enter Father Name"
                  name="fatherName"
                  value={newStudent.fatherName}
                  onChange={handleChange} className="mt-1" />
              </Label>

              <Label className='my-3'>
                <span>Father's NIC Number</span>
                <Input type="number"
                  placeholder="Enter Father's NIC Number"
                  name="fatherNic"
                  value={newStudent.fatherNic}
                  onChange={handleChange} className="mt-1" />
              </Label>
              <Label className='my-3'>
                <span>Contact Number</span>
                <Input type="number"
                  placeholder="Enter Contact Number"
                  name="fatherContatNumber"
                  value={newStudent.fatherContatNumber}
                  onChange={handleChange} className="mt-1" />
              </Label>
              <div className="mt-4 mb-4">
                <Button onClick={() => setStudentInfo(true)}>Student's Info</Button>
              </div>
              <div className="mt-4 mb-4">
                <Button onClick={() => handleSubmit()}>Add Student</Button>
              </div>
            </div>
            <div className='width'>
              <div className='form-id-card'>
                <div className='form-id-card-header'>
                  <p>Pak Skills Improvement</p>
                </div>
                <div className='form-profile-container'>
                  <img src={ProfileImage} />
                </div>
                <div>
                  <div className='form-id-card-name-section'>
                    <p className='form-studentName'>
                      {newStudent.studentName}
                    </p>
                    <p className='form-fatherName'>
                      {newStudent.gender ? newStudent.gender === 'Male' ? 's/o' : 'd/o' : ''} {newStudent.fatherName}
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
                        {newStudent.grNumber}
                      </p>
                    </div>
                    <div className='form-second-div'>
                      <p className='form-heading'>
                        Date Of Birth:
                      </p>
                      <p className='form-value'>
                        {newStudent.dob}
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
                        {newStudent.gender}
                      </p>
                    </div>
                    <div className='form-second-div'>
                      <p className='form-heading'>
                        Class
                      </p>
                      <p className='form-value'>
                        {newStudent.studentClass}
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
          </div>
        </>}
    </>
  )
}

export default NewStudent;




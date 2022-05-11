import React, { useState, useEffect } from 'react'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import PageTitle from '../../components/Typography/PageTitle'
import { Button } from '@windmill/react-ui';
import axios from 'axios';

function NewStaff() {
  const [personalInfo, setPersonalInfo] = useState(true)
  useEffect(() => {
    let newObject = window.localStorage.getItem("staffData");
    console.log(JSON.parse(newObject));
  }, [])
  const [newStaff, setnewStaff] = useState(
    {
      staffName: '',
      fatherName: '',
      detail: '',
      salary: '',
      image: '',
      contatNumber: '',
      nic: '',
      fatherContatNumber: '',
      lastQualification: '',
      qualificationYear:2010,
      cv:'',
    }
  );

  const handleSubmit = (e) => {
    // const formData = new FormData();
    // formData.append('staffName', newStaff.staffName);
    // formData.append('detail', newStaff.detail);
    // formData.append('fatherName', newStaff.fatherName);
    // formData.append('contactNumber', newStaff.contactNumber);
    // formData.append('fatherNic', newStaff.fatherNic);
    // formData.append('bForm', newStaff.bForm);
    // formData.append('bForm', newStaff.bForm);
    // formData.append('class', newStaff.class);
    // formData.append('fee', newStaff.fee);
    const formData = {
      staffName: newStaff.staffName,
      fatherName: newStaff.fatherName,
      image: newStaff.image,
      contatNumber: newStaff.contatNumber,
      nic: newStaff.nic,
      salary: newStaff.salary,
      detail: newStaff.detail,
      lastQualification: newStaff.lastQualification,
      qualificationYear:newStaff.qualificationYear,
      cv:newStaff.cv,
    }
    console.log(formData)
    // axios.post('http://localhost:5000/api/staff', formData)
    //   .then(res => {
    //     console.log('res', res);
    //   })
    //   .catch(err => {
    //     console.log('err', err);
    //   });
    localStorage.setItem("staffData", JSON.stringify(formData));
  }
  const handleChange = (e) => {
    setnewStaff({ ...newStaff, [e.target.name]: e.target.value });
  }
  const handlePhoto = (e) => {
    setnewStaff({ ...newStaff, [e.target.name]: e.target.files[0] });
  }
  return (
    <>

      {personalInfo ?
        //staff data
        <>
          <PageTitle>Personal Information:</PageTitle>
          <Label>
            <span>Staff Name:</span>
            <Input type="text"
              placeholder="Enter staff Name"
              name="staffName"
              value={newStaff.staffName}
              onChange={handleChange} className="mt-1" />
          </Label>
          <Label className='mt-4'>
            <span>Father Name:</span>
            <Input type="text"
              placeholder="Enter Father Name"
              name="fatherName"
              value={newStaff.fatherName}
              onChange={handleChange} className="mt-1" />
          </Label>

          <Label className='my-3'>
            <span>CNIC Number:</span>
            <Input type="number"
              placeholder="Enter CNIC Number"
              name="nic"
              value={newStaff.nic}
              onChange={handleChange} className="mt-1" />
          </Label>

          <Label className='my-3'>
            <span>Contact Number:</span>
            <Input type="number"
              placeholder="Enter Contact Number"
              name="contatNumber"
              value={newStaff.contatNumber}
              onChange={handleChange} className="mt-1" />
          </Label>
          <Label className="mt-4">
            <span>Image (optional:)</span>
            <Input type="file"
              accept=".png, .jpg, .jpeg"
              name="image"
              onChange={handlePhoto} className="mt-1" />
          </Label>
          <div className="mt-4 mb-4">
            <Button onClick={() => setPersonalInfo(false)}>Working Bio</Button>
          </div>

        </> :
        // working data

        <>
          <PageTitle>Working Information:</PageTitle>

          <Label className="mt-4">
            <span>Qualification:</span>
            <Select
              name="lastQualification"
              value={newStaff.lastQualification}
              onChange={handleChange} className="mt-1">
              <option value={10}>Matric</option>
              <option value={11}>First Year</option>
              <option value={12}>Second Year</option>
              <option value={'BA'}>B.A</option>
              <option value={'BCom'}>B.Com</option>
            </Select>
          </Label>
          <Label className="mt-4">
            <span>Qualification Year:</span>
            <Input type="number"
              placeholder="Enter Qualification Year"
              name="qualificationYear"
              value={newStaff.qualificationYear}
              onChange={handleChange} className="mt-1" />
          </Label>
          <Label className="mt-4">
            <span>Discussed Salary:</span>
            <Input type="number"
              placeholder="Enter Salary which is discussed"
              name="salary"
              value={newStaff.salary}
              onChange={handleChange} className="mt-1" />
          </Label>
          <Label className="mt-4">
            <span>Resume:</span>
            <Input type="file"
              accept=".png, .jpg, .jpeg"
              name="cv"
              onChange={handlePhoto} className="mt-1" />
          </Label>
          <div className="mt-4 mb-4">
            <Button onClick={() => setPersonalInfo(true)}>Personal Info</Button>
          </div>
          <div className="mt-4 mb-4">
            <Button onClick={() => handleSubmit()}>Add staff</Button>
          </div>
        </>}
    </>
  )
}

export default NewStaff;




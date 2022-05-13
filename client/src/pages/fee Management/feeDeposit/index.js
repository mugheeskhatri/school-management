import React, { useState } from 'react';
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import '../../../styles/feeVoucher.css'
import { useSelector } from 'react-redux';

const Index = () => {
    const state = useSelector(state => state)
    const [studentGrNumber, setStudentGrNumber] = useState()
    const student = state.admittedStudents.filter(student => student.grNumber == studentGrNumber)
    const date = new Date();
    const currentDate = `${date.getFullYear()} ${date.getDate()} ${date.getMonth()}`
   
    const [studentName, setStudentName] = useState()
    const [fatherName, setFatherName] = useState()
    const [studentClass, setStudentClass] = useState()
    const [feeDate , setFeeDate]  = useState(currentDate)
    console.log(studentName,fatherName,studentClass)
    const setStudentByGr = () => {
        setStudentName(student[0]?.studentName)
        setFatherName(student[0]?.fatherName)
        setStudentClass(student[0]?.studentClass)
    }

    return (
        <div>
            <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
            <div style={{width:'48%'}}>
            <Label className='my-3'>
                <span className='my-3 bolder'>GR Number:</span>
                <Input type="text"
                    placeholder="Enter GR Number"
                    name="studentName"
                    maxlength="27"
                    value={studentGrNumber}
                    onChange={(e) => {
                        setStudentGrNumber(e.target.value)
                        setStudentByGr()
                    }} className="mt-1" />
            </Label>
            </div>
            <div style={{width:'48%'}}>
            <Label className='my-3'>
                <span className='my-3 bolder'>Student Name:</span>
                <Input type="text"
                    placeholder="Enter GR Number"
                    name="studentName"
                    maxlength="27"
                    value={studentName}
                    onChange={(e) => {
                        setStudentName(e.target.value)
                    }} className="mt-1" />
            </Label>
            </div>
            <div style={{width:'48%'}}>
            <Label className='my-3'>
                <span className='my-3 bolder'>Father Name:</span>
                <Input type="text"
                    placeholder="Enter GR Number"
                    name="studentName"
                    maxlength="27"
                    value={fatherName}
                    onChange={(e) => {
                        setFatherName(e.target.value)
                    }} className="mt-1" />
            </Label>
            </div>
            <div style={{width:'48%'}}>
            <Label className="mt-4">
                <span>Class:</span>
                <Select
                  name="class"
                  value={studentClass}
                  onChange={(e)=> setStudentClass(e.target.value)} className="mt-1">
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
            <div style={{width:'48%'}}>
            <Label className="mt-4">
                <span>Select Month:</span>
                <Select
                  name="class"
                  value={studentClass}
                  onChange={(e)=> setStudentClass(e.target.value)} className="mt-1">
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
            <div style={{width:'48%'}}>
            <Label className='my-3'>
                <span className='my-3 bolder'>Date:</span>
                <Input type="date"
                    placeholder="Enter Date"
                    name="date"
                    maxlength="27"
                    value={fatherName}
                    onChange={(e) => {
                        setFatherName(e.target.value)
                    }} className="mt-1" />
            </Label>
            </div>
            <div style={{width:'48%'}}>

            </div>
           
            
            </div>
        </div>
    );
}

export default Index;

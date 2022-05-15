import React, { useState } from 'react';
import { Input, HelperText, Label, Select, Textarea, Button } from '@windmill/react-ui'
import '../../../styles/feeVoucher.css'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Index = () => {
    const state = useSelector(state => state)
    const [studentGrNumber, setStudentGrNumber] = useState()
    const student = state.admittedStudents.filter(student => student.grNumber == studentGrNumber)
    const date = new Date();
    const currentDate = `${date.getFullYear()} ${date.getDate()} ${date.getMonth()}`
    const history = useHistory()

    const [studentName, setStudentName] = useState()
    const [fatherName, setFatherName] = useState()
    const [studentClass, setStudentClass] = useState()
    const [feeMonth, setFeeMonth] = useState()
    var months = []
    const [feeDate, setFeeDate] = useState(currentDate)
    console.log(studentName, fatherName, studentClass)
    const setStudentByGr = () => {
        setStudentName(student[0]?.studentName)
        setFatherName(student[0]?.fatherName)
        setStudentClass(student[0]?.studentClass)
    }


    const addMonth = () => {
        var list = document.getElementById('dropdown-list')
        var item = document.getElementById('month-dropdown');
        var clone = item.cloneNode(true);
        clone.id = '';
        list.appendChild(clone);
    };
    return (
        <div>
            <div className='fee-voucher-header'>
                <div className='fee-voucher-heading-section'>
                    <p className='my-6 text-l font-semibold text-gray-600 dark:text-gray-300 fee-voucher-heading'>Fee Deposit Voucher</p>
                </div>
                <div className='fee-voucher-btn-section'>
                    <Button onClick={() => history.push('/app/deposit-by-family')}>
                        Collect By Family Number
                    </Button>
                    <Button>
                        Download Blank Form
                    </Button>
                </div>
            </div>
            <div className='fee-voucher-form-section'>
                <div style={{ width: '48%' }}>
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
                <div style={{ width: '48%' }}>
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
                <div style={{ width: '48%' }}>
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
                <div style={{ width: '48%' }}>
                    <Label className="mt-4">
                        <span>Class:</span>
                        <Select
                            name="class"
                            value={studentClass}
                            onChange={(e) => setStudentClass(e.target.value)} className="mt-1">
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
                <div style={{ width: '100%' }} id='dropdown-list'>
                    <div id='month-dropdown' style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        <div style={{ width: '75%' }}>
                            <Label className="mt-4">
                                <span>Select Month:</span>
                                <Select
                                    name="class"
                                    value={feeMonth}
                                    onChange={(e) => {
                                        months.push(...months, { name: e.target.value })
                                        console.log(months)
                                    }} className="mt-1">
                                    <option value={'January'}>January</option>
                                    <option value={'February'}>February</option>
                                    <option value={'March'}>March</option>
                                    <option value={'April'}>April</option>
                                    <option value={'May'}>May</option>
                                    <option value={'June'}>June</option>
                                    <option value={'July'}>July</option>
                                    <option value={'August'}>August</option>
                                    <option value={'September'}>September</option>
                                    <option value={'October'}>October</option>
                                    <option value={'November'}>November</option>
                                    <option value={'December'}>December</option>
                                </Select>
                            </Label>
                        </div>
                        <div style={{ width: '20%' }}>
                            <Label className="mt-4">
                                <span>Select year:</span>
                                <Select
                                    name="class"
                                    value={studentClass}
                                    onChange={(e) => setStudentClass(e.target.value)} className="mt-1">
                                    <option value={2015}>2015</option>
                                    <option value={2016}>2016</option>
                                    <option value={2017}>2017</option>
                                    <option value={2018}>2018</option>
                                    <option value={2019}>2019</option>
                                    <option value={2020}>2020</option>
                                    <option value={2021}>2021</option>
                                    <option value={2022}>2022</option>
                                    <option value={2023}>2023</option>
                                    <option value={2024}>2024</option>
                                    <option value={2025}>2025</option>
                                    <option value={2026}>2026</option>
                                    <option value={2027}>2027</option>

                                </Select>
                            </Label>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', padding: 10 }}>
                    <Button onClick={() => addMonth()} style={{ width: '100%', marginTop: 10 }}>Add Month</Button>
                </div>
                <div style={{ width: '100%' }}>
                    <Label className="mt-4">
                        <span>Other Charges:</span>
                        <Select
                            name="class"
                            value={studentClass}
                            onChange={(e) => setStudentClass(e.target.value)} className="mt-1">
                            <option value={1}>Annual Charges</option>
                            <option value={2}>Examination Fee</option>
                            <option value={3}>Picnic Charges</option>
                            <option value={4}>Activity Charges</option>
                        </Select>
                    </Label>
                </div>
                <div className='total-amount'>
                    <div className='amount-section'>
                        <div>
                            <h1 className="mt-3 text-l font-semibold text-gray-600 dark:text-gray-300">Total Amount</h1>
                        </div>
                        <div>
                            <p className="mt-3 text-l font-semibold text-gray-600 dark:text-gray-300">Rs.12000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
                <div className='save-btn-section'>
                    <Button>Save</Button>
                    <Button>Save and Print</Button>
                </div>
            </div>
        </div>
    );
}

export default Index;

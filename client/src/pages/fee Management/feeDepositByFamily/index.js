import React, { useState } from 'react';
import {
    Input, Label, Select, Button, TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableFooter,
    Pagination,
} from '@windmill/react-ui'
import '../../../styles/feeVoucher.css'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Row from './TableRow'


const Index = () => {
    const state = useSelector(state => state)
    console.log(state)
    const [familyNumber, setFamilyNumber] = useState()
    const student = state.admittedStudents.filter(student => student.grNumber == familyNumber)
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
                    <p className="my-6 text-l font-semibold text-gray-600 dark:text-gray-300 fee-voucher-heading">Deposit By Family Voucher</p>
                </div>
                <div className='fee-voucher-btn-section'>
                    <Button onClick={() => history.push('/app/fee-deposit-voucher')}>
                        Collect By Gr Number
                    </Button>
                    <Button>
                        Download Blank Form
                    </Button>
                </div>
            </div>
            <div className='fee-voucher-form-section'>
                <div style={{ width: '48%' }}>
                    <Label className='my-3'>
                        <span className='my-3 bolder'>Family Number:</span>
                        <Input type="text"
                            placeholder="Enter Family Number"
                            name="familyNumber"
                            maxlength="27"
                            value={familyNumber}
                            onChange={(e) => {
                                setFamilyNumber(e.target.value)
                                setStudentByGr()
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

                {/* students list */}

                <TableContainer>
                    <Table>
                        <TableHeader>
                            <tr>
                                <TableCell>Student Name</TableCell>
                                <TableCell><span style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>GR Number</span></TableCell>
                                <TableCell><span style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>Class</span></TableCell>
                                <TableCell><span style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>Status</span></TableCell>
                                <TableCell></TableCell>
                            </tr>
                        </TableHeader>
                        <TableBody>
                            {state.admittedStudents?.map((v, i) => (
                                <><Row data={v} /></>
                            ))}
                        </TableBody>
                    </Table>
                    <TableFooter>
                    </TableFooter>
                </TableContainer>

                {/* students list */}



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

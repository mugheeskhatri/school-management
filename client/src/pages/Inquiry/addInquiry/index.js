import React, { useState, useEffect } from 'react'
import PageTitle from '../../../components/Typography/PageTitle'
import response from '../../../utils/demo/tableData'
import { useSelector } from 'react-redux'
import '../../../styles/studentManage.css';
import Row from '../addInquiry/TableRow'

import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Button,
  Select,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input
} from '@windmill/react-ui'


function Dashboard() {
  const state = useSelector(state => state)
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [user, setUser] = useState()
  const [name, setName] = useState()
  const date = new Date();
  const currentDate = `${date.getFullYear()} ${date.getDate()} ${date.getMonth()}`
  const [showData, setShowData] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inquiry, setInquiry] = useState(
    {
      number: state.inquiry.length + 2001,
      name: '',
      date: '',
      inquiryEntryDate: currentDate,
      status: false,
      active: true
    }
  );

  const handleChange = (e) => {
    setInquiry({ ...inquiry, [e.target.name]: e.target.value });
}

const handeSubmit = ()=>{
  const formData = {
    number: inquiry.number,
    name: inquiry.name,
    date: inquiry.date,
    inquiryEntryDate: currentDate,
    status: inquiry.status,
    active: inquiry.active
  } 
  console.log(formData)
  setIsModalOpen(false)
}

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }
  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])
  useEffect(() => {
    setShowData(state.inquiry)
  }, [])

  useEffect(() => {
    user ?
      setName(user.userName) : setName("")
  }, [name])

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }


  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '70%' }}>
          <PageTitle className='text-gray-600 dark:text-gray-400'>Fee Recieveables</PageTitle>
        </div>
        <div style={{ width: '30%', display: 'flex', justifyContent: 'end', paddingRight: 20 }}>
          <Button onClick={openModal}>+ Add Inquiry</Button>
        </div>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Inquiry Name</TableCell>
              <TableCell>Inquiry Number</TableCell>
              <TableCell><span style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>Date</span></TableCell>
              <TableCell><span style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>Status</span></TableCell>
              <TableCell></TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {showData?.map((v, i) => (
              <><Row data={v} /></>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>

      </TableContainer>
      {/* Modal */}
      <Modal style={{ width: '100%' }} isOpen={isModalOpen} onClose={closeModal}>
        <ModalBody>
          <div>
            <Label className='mt-5'>
              <span>Inquiry Number</span>
              <Input type="text"
                name="number"
                disabled
                value={inquiry.number}
                className="mt-1"
                onChange={handleChange} />
            </Label>
            <Label className='mt-5'>
              <span>Inquiry Name</span>
              <Input type="text"
                placeholder="Enter Inquiry Name"
                name="name"
                value={inquiry.name}
                className="mt-1"
                onChange={handleChange} />
            </Label>
            <Label className='mt-5'>
              <span>Date Of Inquiry</span>
              <Input type="date"
                placeholder="Enter Inquiry Name"
                name="date"
                value={inquiry.date}
                className="mt-1"
                onChange={handleChange} />
            </Label>
            <Label className="mt-4">
              <span>Status</span>
              <Select
                name="status"
                value={inquiry.status} className="mt-1"
                onChange={handleChange}>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </Select>
            </Label>
            <Button onClick={handeSubmit} className="mt-4" style={{ width: '100%' }}>Add Inquiry</Button>
          </div>
        </ModalBody>
      </Modal>

      {/* Modal */}
    </>
  )
}

export default Dashboard



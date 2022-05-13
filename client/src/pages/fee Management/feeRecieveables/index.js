import React, { useState, useEffect } from 'react'
import PageTitle from '../../../components/Typography/PageTitle'
import response from '../../../utils/demo/tableData'
import { useSelector } from 'react-redux'
import '../../../styles/studentManage.css';
import Row from '../../../components/TableRow'

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
} from '@windmill/react-ui'


function Dashboard() {
  const state = useSelector(state => state)
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [user, setUser] = useState()
  const [name, setName] = useState()
  const [filterDiv, setFilterDiv] = useState(false)
  const [classFilter, setClassFilter] = useState('All Classes')
  const [showData , setShowData] = useState()

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
    setShowData(state.admittedStudents)
  }, [])

  useEffect(() => {
    user ?
      setName(user.userName) : setName("")
  }, [name])
    const setAboutFilter = ()=>{
        if(classFilter === 'All Classes'){
            setShowData(state.admittedStudents)
        }else{
          const filtered = state.admittedStudents.filter((student)=> student.studentClass == classFilter);
          setShowData(filtered)
          console.log('classFilter',classFilter)
          console.log(filtered)
        }
      }
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '70%' }}>
          <PageTitle>{name}</PageTitle>
        </div>
        <div className='filter-button-div'>
          <div style={{ fontWeight: 'bold', color: 'rgb(81, 80, 80)' }}>
            Select Class:
          </div>
          <div>
            <Select
              name="class"
              value={classFilter}
              onChange={(e) => {
                setClassFilter(e.target.value)
                setAboutFilter()
              }
              } className="mt-1">
              <option value={'All Classes'}>All Classes</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={'Matric'}>Matric</option>
              <option value={'First Year'}>First Year</option>
              <option value={'Second Year'}>Second Year</option>
              <option value={'BA'}>B.A</option>
              <option value={'BCom'}>B.Com</option>
            </Select>
          </div>
        </div>
      </div>
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
    </>
  )
}

export default Dashboard
{/* <Button layout="outline" onClick={closeModal}>
Cancel
</Button> */}

{/* <div className="hidden sm:block">
           
</div>
<div className="hidden sm:block">
  <Button>Accept</Button>
</div>
<div className="block w-full sm:hidden">
  <Button block size="large" layout="outline" onClick={closeModal}>
    Cancel
  </Button>
</div>
<div className="block w-full sm:hidden">
  <Button block size="large">
    Accept
  </Button>
</div> */}
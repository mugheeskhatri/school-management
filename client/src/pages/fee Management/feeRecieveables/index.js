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
  const [studentGender , setStudentGender] = useState('All Students')


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


    const setAboutGenderFilter = ()=>{
        if(studentGender === 'All Students'){
          if(classFilter === 'All Classes'){
            setShowData(state.admittedStudents)
              }else{
                  const classFilterInGender = state.admittedStudents.filter((student)=> student.studentClass == classFilter);
                  setShowData(classFilterInGender)
                }
        }else{
          if(classFilter === 'All Classes'){
            const filtered = state.admittedStudents.filter((student)=> student.gender == studentGender);
            setShowData(filtered)
          }else{
            const classFilterInGender = state.admittedStudents.filter((student)=> student.studentClass == classFilter);
            const genderFilter = classFilterInGender.filter(student => student.gender === studentGender)      
            setShowData(genderFilter)
                  console.log(showData)
                  console.log(studentGender)
          }
        }
        console.log(studentGender)
      }


    const setAboutClassFilter = ()=>{
        if(classFilter === 'All Classes'){
          if(studentGender === 'All Students'){
            setShowData(state.admittedStudents)
              }else{
                  const genderFilterInClass = state.admittedStudents.filter((student)=> student.gender == studentGender);
                  setShowData(genderFilterInClass)
                  console.log(genderFilterInClass)
                }
        }else{
          if(studentGender === 'All Students'){
            const filtered = state.admittedStudents.filter((student)=> student.studentClass == classFilter);
            setShowData(filtered)
          }else{
            const genderFilterInClass = state.admittedStudents.filter((student)=> student.gender == studentGender);
            const filteredClass = genderFilterInClass.filter(student => student.studentClass === classFilter)      
            setShowData(filteredClass)
            console.log(filteredClass)
          }
        }
      }


  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '70%' }}>
          <PageTitle className='text-gray-600 dark:text-gray-400'>Fee Recieveables</PageTitle>
        </div>
        <div className='filter-button-div'>
          <div>
          <Select
              name="class"
              value={studentGender}
              onChange={(e) => {
                setStudentGender(e.target.value)
                setAboutGenderFilter()
              }
              } className="mt-1">
              <option value={'All Students'}>All Students</option>
              <option value={'Male'}>Male</option>
              <option value={'Female'}>Female</option>
             
            </Select>
          </div>
          <div>
            <Select
              name="class"
              value={classFilter}
              onChange={(e) => {
                setClassFilter(e.target.value)
                setAboutClassFilter()
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
import React, { useState } from 'react';
import { AiOutlineInfoCircle, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { IoAddCircleOutline } from "react-icons/io5";
import '../../../styles/manageclasses.css'
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
import { useHistory } from 'react-router-dom';
import PageTitle from '../../../components/Typography/PageTitle'

const GenerateFamilyNumber = () => {
    const [classInputValue, setClassInputValue] = useState()

    const classes = ["first", "second"]
    function addClass() {
        classes.push(...classes, classInputValue);
        setClassInputValue("")
        console.log(classes);
    }
    return (
        <>
            <PageTitle>Manage Classes</PageTitle>
            <div className='classInputContainer'>
                <div className='classInput'>
                    <Label className='mb-5'>
                        <Input type="text"
                            placeholder="Enter Class Name"
                            // name="classname"
                            className="mt-1"
                            value={classInputValue}
                            onChange={(e) => { setClassInputValue(e.target.value) }} />
                    </Label>
                </div>
                <div className='classaddbtnContainer'>
                    <div className="classaddBtn" onClick={addClass}><IoAddCircleOutline size={33} color="white" /></div>
                </div>
            </div>

            <TableContainer>
                <Table>
                    <TableHeader>
                        <tr>
                            <TableCell>Class Name</TableCell>
                            <TableCell></TableCell>
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
                                                {/* <Avatar className="hidden mr-3 md:block" src={props.data.image} /> */}
                                                <div>
                                                    <p className="font-semibold">{e}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }} className="text-sm"></span>
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
                                                <div className='icon-container'><acronym title="Edit Class"><AiOutlineEdit size={18} /></acronym></div>
                                                <div style={{ marginLeft: "1rem" }} className='icon-container'><acronym title="Delete Class"><AiOutlineDelete size={18} /></acronym></div>
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
        </>
    );
}

export default GenerateFamilyNumber;

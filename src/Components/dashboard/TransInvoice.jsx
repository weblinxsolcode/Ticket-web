import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import HeaderDashboard from './HeaderDashboard'
import SidebarDashboard from './SidebarDashboard'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { selectMode } from '../../features/modeSlice';
import axios from 'axios';
import config from '../../config'
const TransInvoice = () => {
    const scroll = () => {
        window.scrollTo(0,0); 
    
        console.log("scroll value reset")
      }
    const modeState = useSelector(selectMode)
    const userState = useSelector(selectUser)
    const [getdata, setgetdata] = useState("")
    const [userdata, setuserdata] = useState("")
    const [plandata, setplandata] = useState("")
    let { id } = useParams();
    const getHistory = async () => {
       await axios.post(`${config.baseURL}/get-history.php`, {
            token: userState.token,
            email: userState.email,
        }).then(async (response) => {
            setgetdata( response.data[0])
            setuserdata(getdata.user)
            setplandata(getdata.plan)
            // console.warn(plandata)
        })
    }
    useEffect(() => {
        getHistory();
        scroll();
    }, [])

    return (
        <>
            <div className={modeState == 0 ? 'light-dashboard-body' : 'dark-dashboard-body'}>
                <div className="dashboard-body">
                    <div className='ws-nav-bg'>
                        <img src="/assets/images/bg-effect.png" alt="" />
                    </div>
                    <div className="ws-nav">
                        <HeaderDashboard />
                    </div>
                    <div className="container ws-container dashboard-main">
                        <div className="w-100 px-lg-0 px-3 d-flex flex-lg-row flex-column">
                            <div className="ws-side-col pt-lg-0 pt-4">
                                <SidebarDashboard />
                            </div>
                            <div className="ws-side-main">
                                <div className="ps-lg-4">
                                    <div className="d-flex align-items-center justify-content-between pt-3 pb-4">
                                        <span className='fs-6 fw-500 text-light'>Invoice</span>
                                        <span className='fs-7 text-light '> <Link to="dashboard" className='text-light text-faded text-decoration-none'>Dashboard </Link>   <span className='text-faded fs-8'>/</span>  <Link to="transaction" className='text-light text-faded text-decoration-none'>Invoice</Link></span>
                                    </div>
                                    <div className="w-100">
                                        <div className="card ws-card mb-4" bis_skin_checked={1}>
                                            <div className="card-body p-4" bis_skin_checked={1}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="">
                                                            <div className="card-body">
                                                                <div className="invoice-title">
                                                                    <h4 className="float-end fs-7">#{id}</h4>
                                                                    {/* <h4 className="float-end fs-7">Order # 12345</h4> */}
                                                                    <div className="mb-4">

                                                                        <strong className='fs-7 text-faded'>Cryptossky</strong>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <div className='text-faded fs-7'>
                                                                            {/* {id == userdata.id ? userdata?.name  : "name" } */}
                                                                            <br />
                                                                            {userdata?.email}
                                                                            <br />
                                                                            {userdata?.phone}
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <div className="py-2 mt-3">
                                                                    <h3 className="fs-6 fw-bold">Order summary</h3>
                                                                </div>
                                                                <div className="table-responsive">
                                                                    <table className="table table-nowrap">
                                                                        <thead className='text-faded'>
                                                                            <tr className="text-faded">
                                                                                <th style={{ width: "70px" }} >#id</th>
                                                                                <th >Plan Name</th>
                                                                                <th className="text-end " >Price</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr className='text-faded'>
                                                                                <td>{plandata?.id}</td>
                                                                                <td>{plandata?.title}</td>
                                                                                <td className="text-end">${plandata?.amount}</td>
                                                                            </tr>

                                                                            
                                                                            <tr className='text-faded'>
                                                                                <td colspan="2" className="text-end">Sub Total</td>
                                                                                <td className="text-end">${plandata?.amount}</td>
                                                                            </tr>
                                                                            
                                                                            <tr className='text-faded'>
                                                                                <td colspan="2" className="border-0 text-end">
                                                                                    <strong>Total</strong>
                                                                                </td>
                                                                                <td className="border-0 text-end">
                                                                                    <h4 className="m-0 fw-bold fs-5">${plandata?.amount}</h4>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TransInvoice

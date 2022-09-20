import React, { useEffect, useState } from 'react'
import HeaderDashboard from './HeaderDashboard'
import SidebarDashboard from './SidebarDashboard'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import axios from 'axios';
import config from '../../config'
import { selectMode } from '../../features/modeSlice';
import swal from 'sweetalert';

const columns = [
    { field: 'date', headerName: 'Date', width: 170 },
    { field: 'id', headerName: 'Id no.', width: 170 },
    { field: 'billing_name', headerName: 'Billing Name', width: 170 },
    { field: 'amount', headerName: 'Amount', width: 170 },
    { field: 'payment_status', headerName: 'Payment Status', width: 170 },
];


function Tickets() {
    const scroll = () => {
        window.scrollTo(0, 0);
        console.log("scroll value reset")
    }
    const modeState = useSelector(selectMode)
    const userState = useSelector(selectUser)
    const [history, sethistory] = useState([])
    const [username, setusername] = useState("")
    const [error, seterror] = useState("")
    // state: false,
    // text: "",
    // variant: "",
    const [qty, setqty] = useState("");
    const [amount, setamount] = useState("0");
    function totalsum() {
        setamount(25 * qty)
    }
    const getticket = async () => {
      await  axios.post(`${config.baseURL}/get-ticket.php`, {
            token: userState.token,
            email: userState.email,
            // username:username,
            // qty:qty,
            // amount:amount

        }).then((result) => {
            console.log(result.data)
            seterror({ variant: "success", data: "Ticket Purchase" })
            setusername(" ")
            setqty(" ")

            // alert("data submit")
        }).catch((error) => {
            console.log(error)
        })
    }
    const formSubmit = async () => {
        if (username.length < 1) {
            seterror({ variant: "success", data: "Enter Username" })
        } else {
            if (qty.length < 1) {
                seterror({ variant: "success", data: "Select Number of Ticket" })
            } else {
                await axios.post(`${config.baseURL}/ticket.php`, {
                    token: userState.token,
                    email: userState.email,
                    username: username,
                    qty: qty,
                    amount: amount

                }).then((result) => {
                    console.log(result.data)

                    seterror({ variant: "success", data: "Your ticket has been submit successfully" })
                    setamount("")

                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
    useEffect(() => {
        totalsum();
    }, [qty])
    useEffect(() => {
        setamount(25 * 0);
        scroll();
        getticket();
    }, []);
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
                                        <span className='fs-6 fw-500 text-light'>Tickets</span>
                                        <span className='fs-7 text-light '> <Link to="dashboard" className='text-light text-faded text-decoration-none'>Dashboard </Link>   <span className='text-faded fs-8'>/</span>  <Link to="deposit" className='text-light text-faded text-decoration-none'>Tickets</Link></span>
                                    </div>
                                    <div className="w-100">
                                        <div className="card ws-card mb-4" bis_skin_checked={1}>
                                            <div className="card-body p-4" bis_skin_checked={1}>
                                                <h4 className="mb-3  text-faded">Tickets</h4>
                                                <div>
                                                    {error != "" &&
                                                        <div className={"alert alert-" + error.variant} role="alert">
                                                            {error.data}
                                                        </div>
                                                    }
                                                    {/* {
                                                        checkPlans.length > 0 && < div className="alert alert-info" role="alert">You already buy {checkPlans[0].title} plan will expire in {checkPlans[0].left_days} days</div>
                                                    } */}
                                                    <div className="row" bis_skin_checked={1}>
                                                        <div className="col-md-12 mb-3" bis_skin_checked={1}>
                                                            <label className="form-label text-faded">User Name </label>
                                                            <input onChange={(e) => setusername(e.target.value)} type="text" value={username} className="form-control" placeholder='User Name' />
                                                        </div>
                                                        <div className="col-md-12 mb-3" bis_skin_checked={1}>
                                                            <label className="form-label text-faded">Number of tickets</label>
                                                            <select
                                                                value={qty}
                                                                onChange={(e) => setqty(e.target.value)}
                                                                className="form-control select2
                                                            
                                                            select2-hidden-accessible" data-select2-id={1} tabIndex={-1} aria-hidden="true">
                                                                <option value={0} disabled selected={true} >Number of Ticket</option>
                                                                <option value={1} >1</option>
                                                                <option value={2} >2</option>
                                                                <option value={3} >3</option>
                                                                <option value={4} >4</option>
                                                                <option value={5} >5</option>
                                                                <option value={6} >6</option>
                                                                <option value={7} >7</option>
                                                                <option value={8} >8</option>
                                                                <option value={9} >9</option>
                                                                <option value={10} >10</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-12" bis_skin_checked={1}>
                                                            <div className="mb-3" bis_skin_checked={1}>
                                                                <label className="form-label  text-faded">Amount</label>
                                                                <input className="form-control" required value={amount} type="text" disabled />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="row" bis_skin_checked={1}>
                                                        <div className="col-md-12" bis_skin_checked={1}>
                                                            <div className="mb-3" bis_skin_checked={1}>
                                                            <label className="form-label">Wallet Address</label>
                                                            <input onChange={(e) => setwallet(e.target.value)} className="form-control" required type="text" name placeholder="Enter USDT Wallet Address" />
                                                            </div>
                                                        </div>
                                                     </div> */}
                                                    <div className="row" bis_skin_checked={1}>
                                                        <div className="col-md-6" bis_skin_checked={1}>
                                                            <button onClick={() => formSubmit()} className="btn btn-success waves-effect waves-light ws-btn-1">Buy</button>
                                                            {/* {
                                                                checkPlans.length == 0 &&
                                                                <button onClick={() => formSubmit()} className="btn btn-success waves-effect waves-light ws-btn-1">{walletBtn}</button>
                                                            } */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card ws-card mb-4" bis_skin_checked={1}>
                                            <div className="card-body p-4" bis_skin_checked={1}>
                                                {/* <Box sx={{ height: 400, width: '100%' }}>
                                                    <DataGrid
                                                        rows={history}
                                                        columns={columns}
                                                        pageSize={5}
                                                        rowsPerPageOptions={[5]}
                                                        disableSelectionOnClick
                                                    />
                                                </Box> */}
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

export default Tickets
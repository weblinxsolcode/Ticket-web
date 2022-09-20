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
import CryptoJS from 'crypto-js';
import { selectMode } from '../../features/modeSlice';
// import Web3 from 'web3';

const columns = [
    { field: 'id', headerName: 'Id no.', width: 170 },
    { field: 'billing_name', headerName: 'Billing Name', width: 170 },
    { field: 'amount', headerName: 'Amount', width: 170 },
    { field: 'payment_status', headerName: 'Payment Status', width: 170 },
    { field: 'date', headerName: 'Date Payment', width: 170 },

];

function Dashboard() {
    const modeState = useSelector(selectMode);
    const userState = useSelector(selectUser);
    const [history, sethistory] = useState([]);
    const [balance, setbalance] = useState([]);
    const [plan, setplan] = useState();
    const [checkPlans, setcheckPlans] = useState()

    const getBalance = async () => {
        axios.post(`${config.baseURL}/account-blance.php`, {
            token: userState.token,
            email: userState.email,
        }).then(async (response) => {
            setbalance(await response.data);

        })
    }
    const scroll = () => {
        window.scrollTo(0, 0);

        console.log("scroll value reset")
    }
    const getHistory = async () => {
        sethistory([])
        await axios.post(`${config.baseURL}/get-history.php`, {
            token: userState.token,
            email: userState.email,
        }).then(async (response) => {
            setplan(response.data[0].plan)
            // console.log(plan)
            let response_data = response.data
            let tempArr = []
            response_data.forEach(element => {
                tempArr.push(
                    { date: element.history.created_at.split(" ")[0], id: "#" + element.history.id, billing_name: element.user.name, amount: element.plan.amount, payment_status: element.history.status == 1 ? "Payed" : "Canceled" },
                )
            });
            sethistory(tempArr);
        })
    }

    const copytoClipboard = (code) => {
        navigator.clipboard.writeText(code)
        alert('Link copy to clipboard')
    }
    const host = window.location.origin
    useEffect(() => {
        getBalance();
        getHistory();
        getUser();
        scroll();
        getCheckPlans()
    }, [])

    const [theme, settheme] = useState(0)

    function setmytheme() {
        settheme(!theme)
    }
    const [profile, setProfile] = useState({
        refrence: "",

    });
    const [userinfo, setuserinfo] = useState([])
    const getUser = async () => {
        axios.post(`${config.baseURL}/get-user-info.php`, {
            token: userState.token,
            email: userState.email,
        }).then(async (response) => {
            setuserinfo(await response.data)
            // setProfile({
            //     refrence:response.data.user_reference 

            // })

        })
    }
    const getCheckPlans = () => {
        axios.post(`${config.baseURL}/check-plans.php`, {
            token: userState.token,
            email: userState.email,
        }).then(async (response) => {
            setcheckPlans(await response.data[0])
            //   console.log(checkPlans.left_days)
        })
    }
    return (
        <div className={modeState == 0 ? 'light-dashboard-body' : 'dark-dashboard-body'}>
            <div className="dashboard-body">
                <div className='ws-nav-bg'>
                    <img src="/assets/images/bg-effect.png" alt="" />
                </div>
                <div className="ws-nav">
                    <HeaderDashboard data={setmytheme} />
                </div>
                <div className="container ws-container dashboard-main">
                    <div className="w-100 px-lg-0 px-3 d-flex flex-lg-row flex-column">
                        <div className="ws-side-col pt-lg-0 pt-4">
                            <SidebarDashboard />
                        </div>
                        <div className="ws-side-main">
                            <div className="ps-lg-4">
                                <div className="d-flex align-items-center justify-content-between pt-3 pb-4">
                                    <span className='fs-6 fw-500 text-light'>DASHBOARD</span>
                                    <span className='fs-7 text-light '> <Link to="dashboard" className='text-light text-faded text-decoration-none'> Dashboard </Link></span>
                                </div>
                                <div className="w-100 pt-3">
                                    <div className="row mx-0">
                                        <div className="col-lg-12 col-12 px-0 ">
                                            <div className="row mx-0 w-100">
                                                <div className="col-lg-3 col-12  pe-lg-2 px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column align-items-start">
                                                        <div className="d-flex align-items-center justify-content-between ">
                                                            <span className='text-faded  fs-7'>Account Balance</span>
                                                        </div>
                                                        <span className='text-faded fs-5 fw-500'>{parseFloat(balance?.balance)} USDT</span>
                                                        <span className="ws-badge mt-2 badge-soft-success ">Account Balance</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-12 px-lg-3 px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column align-items-start">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <span className='text-faded fs-7'>Total Deposits</span>
                                                        </div>
                                                        <span className='text-faded fs-5 fw-500'>{parseFloat(balance?.deposit)} USDT</span>
                                                        <span className="ws-badge mt-2 badge-soft-warning ">Deposits Amount</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-12  ps-lg-2 px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column align-items-start">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <span className='text-faded fs-7'>Total Earnings</span>
                                                        </div>
                                                        <span className='text-faded fs-5 fw-500'>{parseFloat(balance?.earning)} USDT</span>
                                                        <div className="d-flex align-items-center mt-2">
                                                            <span className="ws-badge  badge-soft-warning ">Account pending</span>
                                                            <span className='ps-2' style={{ fontSize: "12px", lineHeight: "15px" }}><strong className='fw-600'> {parseFloat(balance?.pending)} USDT</strong> </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-12 px-lg-3 px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column align-items-start">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                        
                                                            <span className='text-faded fs-7 fw-500'>End Period: <span className='mx-1 fs-8'>{parseFloat(checkPlans?.left_days)}</span> Days Left</span>
                                                        </div>
                                                        <span className='text-faded fs-7 fw-500'>{parseFloat(plan?.title)}  </span>
                                                        <span className="ws-badge mt-2 badge-soft-warning ">End Period</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mx-0 w-100">
                                                <div className="col-lg-12 col-12  px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column align-items-start">
                                                        <span className="fs-6 text-purple fw-500">Referral</span>
                                                        <span className='fs-8 py-3 pt-2 text-faded' style={{ lineHeight: "20px" }}>Although we do not want leaders to invite other people to our page and pay them a commission for that, we do have an incentive for them to send the link below these lines to those who may be interested in being part of our group. of investors. Aside from the fact that you can purchase tickets for a chance to win an apartment, we also want those who promote us to have a special incentive. Every six months the three best leaders will be able to win the first prize of 100 gram bullion of 24 karat gold. The second prize of 50 grams and a third of 20 grams. The winners will be the three investors with the most referrals.</span>
                                                        {/* <p>p {userinfo?.user_reference}</p> */}

                                                        <div className="d-flex flex-lg-row flex-column  align-items-center  refer-code p-lg-0 p-3 ">
                                                            <span className="ps-2">{host}/register?ref={userinfo?.user_reference}</span>
                                                            <button className='btn-3 py-1 ms-3' onClick={() => copytoClipboard(host + '/register?ref=' + userinfo?.user_reference)} > <i className="fa fa-copy"></i> Copy Refer Code</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-12  px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column">
                                                        <Box sx={{ height: 500, width: '100%' }}>
                                                            <DataGrid
                                                                rows={history}
                                                                columns={columns}
                                                                pageSize={12}
                                                                rowsPerPageOptions={[10]}
                                                                disableSelectionOnClick
                                                            />
                                                        </Box>
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
    )
}

export default Dashboard
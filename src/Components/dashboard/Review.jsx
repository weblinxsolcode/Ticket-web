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
// import Web3 from 'web3';


function Review() {

    const modeState = useSelector(selectMode)

    const userState = useSelector(selectUser)

    const [reviewData, setreviewData] = useState([])

    const [error, seterror] = useState("")
    const [reviewState, setReviewState] = useState("")


    const formSubmit = () => {
        if (reviewState.split(" ").length > 10) {
            axios.post(`${config.baseURL}/add-review.php`, {
                token: userState.token,
                email: userState.email,
                review: reviewState
            }).then(async (response) => {
                if (response.data.status = true) {
                    seterror({ variant: "success", data: response.data.data })
                    setReviewState("");
                }
            })
        } else {
            seterror({ variant: "danger", data: "Atleast 10 words " })
        }

        console.log(reviewState);

    }

    const getReview = async () => {
        setreviewData([])
        axios.post(`${config.baseURL}/get-review.php`, {
            token: userState.token,
            email: userState.email,
        }).then(async (response) => {
            let response_data = response.data
            response_data.forEach((element,index) => {
                if(response_data[index].status == 1){
                    response_data[index].status = 'Approved'
                }else{
                    response_data[index].status = 'Pending'
                }
            });
            console.log(response_data)
            setreviewData(response_data)
        })
    }
    useEffect(() => {
        getReview()
    }, [])

    const [history, sethistory] = useState([])
    const [rows, setrows] = useState([])
    const columns = [
        { field: 'id', headerName: 'Id', width: 50 },
        { field: 'review', headerName: 'Review', width: 670 },
        { field: 'status', headerName: 'Status', width: 170 },
    ];

    return (
        <>
            <div className={modeState == 0 ? 'light-dashboard-body' : 'dark-dashboard-body'}>
                <div class="dashboard-body">
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
                                        <span className='fs-6 fw-500 text-light'>REVIEW</span>
                                        <span className='fs-7 text-light '> <Link to="dashboard" className='text-light text-faded text-decoration-none'>Dashboard </Link>   <span className='text-faded fs-8'>/</span>  <Link to="review" className='text-light text-faded text-decoration-none'>Review</Link></span>
                                    </div>
                                    <div className="w-100 pt-3">
                                        <div className="row mx-0">
                                            <div className=" col-12 px-0 ">
                                                <div className="row mx-0 w-100">
                                                    <div className="col-lg-12 col-12  px-0">
                                                        <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column">
                                                            <div className="card-body p-3" >
                                                                <div>
                                                                    <h5 className="mb-3  text-faded">Write a Review</h5>

                                                                    {error != "" &&
                                                                        <div className={"alert alert-" + error.variant} role="alert">
                                                                            {error.data}
                                                                        </div>
                                                                    }
                                                                    <div className="row" >
                                                                        <div className="col-md-12" >
                                                                            <div className="mb-3" title="you can't change your email" >
                                                                                <textarea name="" onChange={(e) => setReviewState(e.target.value)} className='form-control' value={reviewState} cols="30" rows="10"></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row" >
                                                                        <div className="col-md-6" >
                                                                            <button className="btn btn-success waves-effect waves-light ws-btn-1" onClick={() => formSubmit()}>Submit</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-100 px-0">
                                                        <div className="card ws-card mb-4" bis_skin_checked={1}>
                                                            <div className="card-body p-4" bis_skin_checked={1}>
                                                                <Box sx={{ height: 700, width: '100%' }}>
                                                                    <DataGrid

                                                                        rows={reviewData}
                                                                        columns={columns}
                                                                        pageSize={5}
                                                                        rowsPerPageOptions={[5]}
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
            </div>
        </>
    )
}

export default Review
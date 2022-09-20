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
// import Web3 from 'web3';

const columns = [
  { field: 'id', headerName: 'Id no.', width: 160 },
  { field: 'billing_name', headerName: 'Billing Name', width: 170 },
  { field: 'amount', headerName: 'Amount', width: 170 },
  { field: 'payment_status', headerName: 'Payment Status', width: 170 },
  { field: 'date', headerName: 'Date', width: 150 },
];


function Transaction() {

  const modeState = useSelector(selectMode)

  const userState = useSelector(selectUser)

  const [history, sethistory] = useState([])
  const [rows, setrows] = useState([])




  const getHistory = async () => {
    sethistory([])
    axios.post(`${config.baseURL}/get-history.php`, {
      token: userState.token,
      email: userState.email,
    }).then(async (response) => {
      let response_data = response.data
      console.log(response_data)
      let tempArr = []
      response_data.forEach(element => {
        tempArr.push(
          { date: element.history.created_at, id: "#" + element.history.id, billing_name: element.user.name, amount: element.plan.amount, payment_status: element.history.status == 1 ? "Payed" : "Canceled" },
        )
      });
      sethistory(tempArr)
    })
  }

  // const getHistory = async () => {
  //   sethistory([])
  //   axios.post(`${config.baseURL}/get-review.php`, {
  //     token: userState.token,
  //     email: userState.email,
  //   }).then(async (response) => {
  //     let response_data = response.data
  //     console.log(response_data)
  //     // let tempArr = []
  //     // response_data.forEach(element => {
  //     //   tempArr.push(
  //     //     { date: element.history.created_at, id: "#" + element.history.id, billing_name: element.user.name, amount: element.plan.amount, payment_status: element.history.status == 1 ? "Payed" : "Canceled" },
  //     //   )
  //     // });
  //     // sethistory(tempArr)
  //   })
  // }



  useEffect(() => {
    getHistory()
  }, [])

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
                    <span className='fs-6 fw-500 text-light'>Transaction History</span>
                    <span className='fs-7 text-light '> <Link to="dashboard" className='text-light text-faded text-decoration-none'>Dashboard </Link>   <span className='text-faded fs-8'>/</span>  <Link to="transaction" className='text-light text-faded text-decoration-none'>Transaction</Link></span>
                  </div>
                  <div className="w-100">
                    <div className="card ws-card mb-4" bis_skin_checked={1}>
                      <div className="card-body p-4" bis_skin_checked={1}>
                        <Box sx={{ height: 700, width: '100%' }}>
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
    </>
  )
}

export default Transaction
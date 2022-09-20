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


function Deposite() {

  const modeState = useSelector(selectMode)

  const userState = useSelector(selectUser)

  const [plans, setplans] = useState([])
  const [history, sethistory] = useState([])
  const [checkPlans, setcheckPlans] = useState([])
  const [selectPlan, setSelectPlan] = useState("")
  const [planPrice, setPlanPrice] = useState("")
  const [wallet, setwallet] = useState("")
  const [rows, setrows] = useState([])
  const [walletBtn, setwalletBtn] = useState("Connect Wallet")
  const [error, seterror] = useState({
    state: false,
    text: "",
    variant: "",
  })

  useEffect(() => {
    plans.forEach(element => {
      if (element.id == selectPlan) {
        setPlanPrice(element.amount)
      }
    });
  }, [selectPlan])


  const getPlans = async () => {
    axios.post(`${config.baseURL}/plans.php`, {
      token: userState.token,
    }).then(async (response) => {
      setplans(await response.data)
      setSelectPlan(await response.data[0].id)
      setPlanPrice(await response.data[0].amount)
    })
  }
  const getAdminAddress = async () => {
    axios.post(`${config.baseURL}/get-admin-address.php`)
      .then(async (response) => {
        setwallet(await response.data.data)
      })
  }
  const getHistory = async () => {
    sethistory([])
    axios.post(`${config.baseURL}/get-history.php`, {
      token: userState.token,
      email: userState.email,
    }).then(async (response) => {
      let response_data = response.data
      let tempArr = []
      response_data.forEach(element => {
        tempArr.push(
          { date: element.history.created_at, id: "#" + element.history.id, billing_name: element.user.name, amount: element.plan.amount, payment_status: element.history.status == 1 ? "Payed" : "Canceled" },
        )
      });
      sethistory(tempArr)
    })
  }


  // Metamask
  let web3;

  const formSubmit = async () => {
    if (window.ethereum) {
      if (!window.ethereum.selectedAddress) {
        if (typeof window.ethereum !== 'undefined') {
          await window.ethereum.request({
            method: 'eth_requestAccounts'
          });
          web3 = new Web3(window.web3.currentProvider)
          setwalletBtn("Checkout")
          showAlert(false)
          detectChain()
        } else {
          alert("Please Install Meta Mask")
        }
      } else {
        web3 = new Web3(window.web3.currentProvider)
        let amount
        plans.forEach(element => {
          if (element.id == selectPlan) {
            amount = element.amount
          }
        });
        if (window.ethereum.networkVersion == '1' || 1) {

          web3.eth.sendTransaction({
            to: wallet,
            from: window.ethereum.selectedAddress,
            value: web3.toWei(amount, 'ether'),
            chainId: '0x1',

          }, async (err, result) => {
            if (err) {
              showAlert(true, 'danger', 'Transaction Failed')
            }
            if (result) {
              showAlert(true, 'info', `Please Wait ...`)
              axios.post(`${config.baseURL}/buy-plan.php`, {
                token: userState.token,
                email: userState.email,
                plan_id: selectPlan,
                wallet_address: window.ethereum.selectedAddress,
              }).then((result) => {
                showAlert(true, 'success', 'Transaction Success')
                getHistory()
              }).catch((error) => {
                showAlert(true, 'danger', error)
              })
            }
          })
        } else {
          detectChain()
        }
      }
    } else {
      alert("Please Install Meta Mask")
    }

  }


  window.onload = () => {
    if (window.ethereum) {
      if (window.ethereum.selectedAddress) {
        setwalletBtn("Checkout ")
        showAlert(false)
      }
      detectChain()
    }
  }

  if (window.ethereum) {
    window.ethereum.on('accountsChanged', (account) => {
      if (account.length == 0) {
        showAlert(true, 'warning', 'Wallet disconnected !')
        setwalletBtn("Connect Wallet")
      }
    });
  }

  if (window.ethereum) {
    window.ethereum.on('chainChanged', (chainId) => {
      if (chainId != '0x1' && checkPlans.length == 0) {
        showAlert(true, 'danger', 'Change your network to Mainnet')
      } else {
        showAlert(false)
      }
    });
  }

  const detectChain = (chain = null) => {
    if (window.ethereum.networkVersion != '1' && checkPlans.length == 0) {
      showAlert(true, 'danger', 'Change your network to Mainnet')
    } else {
      showAlert(false)
    }
  }

  const getCheckPlans = () => {
    axios.post(`${config.baseURL}/check-plans.php`, {
      token: userState.token,
      email: userState.email,
    }).then(async (response) => {
      setcheckPlans(await response.data)
    })
  }

  const showAlert = (state, variant = "", text = "",) => {
    seterror({
      state,
      variant,
      text,
    })
  }


  useEffect(() => {
    getPlans()
    getHistory()
    getAdminAddress()
    getCheckPlans()
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
                    <span className='fs-6 fw-500 text-light'>DEPOSITS</span>
                    <span className='fs-7 text-light '> <Link to="dashboard" className='text-light text-faded text-decoration-none'>Dashboard </Link>   <span className='text-faded fs-8'>/</span>  <Link to="deposit" className='text-light text-faded text-decoration-none'>Deposits</Link></span>
                  </div>
                  <div className="w-100">
                    <div className="card ws-card mb-4" bis_skin_checked={1}>
                      <div className="card-body p-4" bis_skin_checked={1}>
                        <h4 className="mb-3  text-faded">New Deposits</h4>
                        <div>
                          {
                            (error.state && checkPlans.length == 0) && < div class={"alert alert-" + error.variant} role="alert">{error.text}</div>
                          }
                          {
                            checkPlans.length > 0 && < div class="alert alert-info" role="alert">You already buy {checkPlans[0].title} plan will expire in {checkPlans[0].left_days} days</div>
                          }
                          <div className="row" bis_skin_checked={1}>
                            <div className="col-md-12 mb-3" bis_skin_checked={1}>
                              <label className="form-label text-faded">Select Plan</label>
                              <select onChange={(e) => setSelectPlan(e.target.value)} className="form-control select2 select2-hidden-accessible" data-select2-id={1} tabIndex={-1} aria-hidden="true">
                                {
                                  plans.map((element, index) => {
                                    return (
                                      <option value={element.id} >{element.title} {element.amount} USDT</option>
                                    )
                                  })
                                }
                              </select>
                            </div>
                            <div className="col-md-12" bis_skin_checked={1}>
                              <div className="mb-3" bis_skin_checked={1}>
                                <label className="form-label  text-faded">Amount</label>
                                <input className="form-control" required type="text" disabled value={planPrice} />
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
                              {
                                checkPlans.length == 0 &&
                                <button onClick={() => formSubmit()} className="btn btn-success waves-effect waves-light ws-btn-1">{walletBtn}</button>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card ws-card mb-4" bis_skin_checked={1}>
                      <div className="card-body p-4" bis_skin_checked={1}>
                        <Box sx={{ height: 400, width: '100%' }}>
                          <DataGrid
                            rows={history}
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
    </>
  )
}

export default Deposite
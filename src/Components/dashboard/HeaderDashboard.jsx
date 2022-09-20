import { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout, selectUser } from '../../features/userSlice';
import { toogle, selectMode } from '../../features/modeSlice';
import axios from 'axios';
import config from '../../config';

function HeaderDashboard(props) {
  const [mode, setmode] = useState(0);
  const userState = useSelector(selectUser)
  const dispatch = useDispatch();

  const modeState = useSelector(selectMode)

  const [userinfo, setuserinfo] = useState([])

  const getUser = async () => {
    axios.post(`${config.baseURL}/get-user-info.php`, {
      token: userState.token,
      email: userState.email,
    }).then(async (response) => {
      setuserinfo(await response.data)
    })
  }

  useEffect(() => {
    getUser()
  }, [])



  return (
    <div>

      <Navbar variant="dark" expand="lg">
        <div className='container ws-container'>
          <div>
            <div className='text-center'>
            <Link to='/' className="navbar-brand">
              <img src="/assets/images/cryptoskky-logo.png" className='ms-lg-3' alt="" />
            </Link>
            </div>
            <div className='d-lg-none d-flex'>
              <Nav className="ms-auto d-flex align-items-center">

              <div className="row mx-0 align-items-center">
              <div className='col-10'>

                 <NavDropdown title={
                  userinfo?.image != null ?
                    <>
                      <img className='ws-avater' src={`${config.baseURL}/images/${userinfo?.image}`} alt="" />
                      <span className='ws-avater-name'>{userinfo?.name}</span>
                    </>
                    :
                    <>
                      <img className='ws-avater' src="/assets/images/user_img.png" alt="" />
                      <span className='ws-avater-name'>{userinfo?.name}</span>
                    </>
                }
                  id="basic-nav-dropdown">
                  <div className='new'>
                <li className="dropdown-item pointer justify-content-center text-dark bg-light d-flex gap-3" onClick={() => dispatch(logout())}>
                  <span><i className="mdi mdi-logout"></i></span>
                  Logout</li>
                </div>
                </NavDropdown></div>
                <div className='col-2'>
                  <li className='ms-1'>
                    <div >
                      <div className="toogle-mode" onClick={() => dispatch(toogle(!modeState))}>
                        {
                          modeState == 0 ?
                            <i className="fa fa-moon"></i>
                            :
                            <i className="fa fa-sun"></i>

                        }
                      </div>
                    </div>
                  </li>
                </div>
              </div>
              </Nav>
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className=' d-none' />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto  align-items-center">

              <NavDropdown title={
                userinfo?.image != null ?
                  <>
                    <img className='ws-avater' src={`${config.baseURL}/images/${userinfo?.image}`} alt="" />
                    <span className='ws-avater-name'>{userinfo?.name} {userinfo?.surname}</span>
                    
                  </>
                  :
                  <>
                    <img className='ws-avater' src="/assets/images/user_img.png" alt="" />
                    <span className='ws-avater-name'>{userinfo?.surname}</span>
                  </>
              }
                id="basic-nav-dropdown  bg-light">
                <div className='new'>
                <li className="dropdown-item pointer justify-content-center text-dark bg-light d-flex gap-3" onClick={() => dispatch(logout())}>
                  <span><i className="mdi mdi-logout"></i></span>
                  Logout</li>
                </div>
              </NavDropdown>
              <li className='ms-1'>
                <div >
                  <div className="toogle-mode" onClick={() => dispatch(toogle(!modeState))}>
                    {
                      modeState == 0 ?
                        <i className="fa fa-moon"></i>
                        :
                        <i className="fa fa-sun"></i>

                    }
                  </div>
                </div>
              </li>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default HeaderDashboard
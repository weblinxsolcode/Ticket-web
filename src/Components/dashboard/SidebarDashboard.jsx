import React from 'react'
import { Link } from 'react-router-dom'

function SidebarDashboard() {
    return (
        <div className='ws-sidebar pt-2 pb-5 py-0 d-flex flex-column'>
            <span className='fs-8 text-faded ps-3'>MENU</span>
            <div class="ws-sidebar-menu" id="side-menu">
                <li>
                    <Link to="/dashboard" class="waves-effect ">
                        <i class="mdi mdi-airplay"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li class="mm-active">
                    <Link to="/deposit" class="waves-effect ">
                        <i class="mdi mdi-account-cash-outline"></i>
                        <span>Deposit</span>
                    </Link>
                </li>

                <li>
                    <Link to="/withdraw" class="waves-effect ">
                        <i class="mdi mdi-cash-multiple"></i>
                        <span>Withdraw</span>
                    </Link>
                </li>

                <li>
                    <Link to="/profile" class="waves-effect active">
                        <i class="mdi mdi-account-circle-outline"></i>
                        <span>Profile</span>
                    </Link>
                </li>

                <li>
                    <Link to="/transaction" class="waves-effect active">
                        <i class="mdi mdi-file-document-box-multiple-outline"></i>
                        <span>Transactions</span>
                    </Link>
                </li>

                <li>
                    <Link  to="/refer" class="waves-effect active">
                    <a class=" waves-effect">
                        <i class="mdi mdi-account-multiple-outline"></i>
                        <span>Referral</span>
                    </a>
                    </Link>
                </li>

                <li>
                    <Link to="/review" class=" waves-effect">
                        <i class="mdi mdi-account-multiple-outline"></i>
                        <span>Write a Review</span>
                    </Link>
                </li>

                <li>
                    <Link to="tickets" className=" waves-effect">
                        <a className=" waves-effect">
                            <i className="mdi mdi-ticket"></i>
                            <span>Lotto Tickets</span>
                        </a>
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default SidebarDashboard
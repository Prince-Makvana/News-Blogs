import React, { useContext } from 'react'
import { Outlet, Link } from "react-router-dom";
import { DarkModeContext } from "./DarkModeContext";


const Navbar = () => {

    const { isdark, setIsdark } = useContext(DarkModeContext);

    const hendleclick = ()=>{
        isdark?setIsdark(false):setIsdark(true);
    };

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg ${isdark?"navbar-dark bg-dark":"bg-body-tertiary"} `}>
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={hendleclick}/>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}

export default Navbar;

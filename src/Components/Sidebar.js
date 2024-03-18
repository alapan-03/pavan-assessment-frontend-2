// import list1 from "./../Assets/Dashboard Component.png"
// import list2 from "./../Assets/Add Menu Component.png"
// import list3 from "./../Assets/Component 8.png"
// import list4 from "./../Assets/Component 13.png"

import indicator from "./../Assets/Current Tab Indicator.png"
import logo1 from "./../Assets/Vector (1).png"
import logo2 from "./../Assets/food menu.png"
import logo3 from "./../Assets/order icon.png"
import logo4 from "./../Assets/Drink Serving.png"

import { Link } from "react-router-dom"

export default function Sidebar(props) {
    return(
        <>
        <div>
            <div className="side-inner">
                <p className="side-p">RestroDineTech</p>

                <div className="side-list">
                    {/* <Link to="/dashboard2"><img className="side-img" src={list1}/></Link> 
                    <Link to="/addItem"><img className="side-img" src={list2}/></Link>
                    <img className="side-img side-img-3" src={list3}/>
                    <img className="side-img" src={list4}/> */}

                    <div className="side-items side-img1">
                        {/* <img className="indicator" src={indicator}/> */}
                        
                        <img src={logo1}/>
                        <p>Dashboard</p>
                    </div>

                    <div className="side-items">
                        {/* <img className="indicator" src={indicator}/> */}
                        <img src={logo2}/>
                        <p>Add Menu</p>
                    </div>

                    <div className="side-items">
                        <img src={logo3}/>
                        <p>Orders</p>
                    </div>

                    <div className="side-items">
                        <img src={logo4}/>
                        <p>Service Request</p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
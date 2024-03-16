import list1 from "./../Assets/Dashboard Component.png"
import list2 from "./../Assets/Add Menu Component.png"
import list3 from "./../Assets/Component 8.png"
import list4 from "./../Assets/Component 13.png"
import { Link } from "react-router-dom"

export default function Sidebar(props) {
    return(
        <>
        <div>
            <div className="side-inner">
                <p className="side-p">RestroDineTech</p>

                <Link to="/dashboard"><img className="side-img" src={list1}/></Link> 
                <Link to="/addItem"><img className="side-img" src={list2}/></Link>
                <img className="side-img side-img-3" src={list3}/>
                <img className="side-img" src={list4}/>
            </div>
        </div>
        </>
    )
}
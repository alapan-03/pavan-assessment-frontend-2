import AddItem from "./AddItem";
import Sidebar from "./Sidebar";
import dashPic1 from "./../Assets/Group 47732.png";

export default function Root2(props) {
    return(
        <div className="root2">
        <Sidebar/>
        <div className="root2-inner">
            <AddItem/>
            <img className="dash-pic-1 dash-pic-2" src={dashPic1} />
        </div>
        </div>
    )
}
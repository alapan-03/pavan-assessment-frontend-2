import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

export default function Root(props) {
    return (
        <div className="root">
        <Sidebar/>
        <Dashboard/>
        </div>
    )
}
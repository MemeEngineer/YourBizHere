import Bar from '../components/BarGraph/BarGraph.js'
import "./AdminDashBoard.css"

function adminDashBoard(){
    return(
        <div className="dashboard">
            <h1>DASHBOARD</h1>
            <Bar/>
        </div>
    )
}

export default adminDashBoard;
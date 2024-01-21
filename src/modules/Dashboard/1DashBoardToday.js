import { useEffect, useState } from "react"
import env from "../../env"

function DashBoardDaily(props){
  const [data,setData] = useState('')
    useEffect(() => {
      const body={}
      const postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json',
          //"x-access-token":token&&token.token,"userId":token&&token.userId
        },
          body:JSON.stringify(body)
        }
    fetch(env.siteApi + "/report/totalOrders",postOptions)
    .then(res => res.json())
    .then(
      (result) => {
        setData('')
        setTimeout(()=> setData(result),200)
      },
      (error) => {
        console.log(error);
      }
      
  )},[])
    return(
        <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                        <i className="fas fa-credit-card"></i>
                    </div>
                    <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                        <p className="text-sm mb-0 text-capitalize">Today's Money</p>
                        <h4 className="mb-0">{data&&data.totalPrice}</h4>
                    </div>
                    </div>
                    <hr className="dark horizontal my-0"/>
                    <div className="card-footer p-3">
                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>than last week</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
              <i className="fas fa-user"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">Today's Users</p>
                <h4 className="mb-0">{data&&data.users}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <i className="fas fa-user-plus"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">New Clients</p>
                <h4 className="mb-0">3,462</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-danger text-sm font-weight-bolder">-2%</span> than yesterday</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-money"></i>
              </div>
              <div className={props.direction==="ltr"?
                      "text-end pt-1":"text-start pt-1"}>
                <p className="text-sm mb-0 text-capitalize">Sales</p>
                <h4 className="mb-0">$103,430</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default DashBoardDaily
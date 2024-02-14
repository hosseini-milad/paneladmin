import { useEffect, useState } from "react"
import WeekStatistic from "./charts/WeekStatistic"
import RXChart from "./charts/RXChart"
import env from "../../env"
import StockChart from "./charts/StockChart"
import UserChart from "./charts/UserChart"
function DashboardChart(props){
    
    return(
        <div class="row mt-4">
        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2 ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                <div class="chart">
                <RXChart lang={props.lang} direction={props.direction}
                  label={["","S","S","M","T","W","T","F"]}/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 ">فروش RX</h6>
              <p class="text-sm ">سفارشات سفارشی ثبت شده در هفته</p>
              <hr class="dark horizontal"/>
              <div class="d-flex ">
                <i class="fas fa-history"></i>
                <p class="mb-0 text-sm"> مشاهده جزئیات سفارشات </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2  ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                <div class="chart">
                <StockChart lang={props.lang} direction={props.direction}
                  label={["","S","S","M","T","W","T","F"]}/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 "> فروش Stock </h6>
              <p class="text-sm "> سفارشات استوک ثبت شده در هفته </p>
              <hr class="dark horizontal"/>
              <div class="d-flex ">
                <i class="fas fa-history"></i>
                <p class="mb-0 text-sm"> مشاهده جزئیات سفارشات </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-4 mb-3">
          <div class="card z-index-2 ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                <div class="chart">
                <UserChart lang={props.lang} direction={props.direction}
                  label={["","S","S","M","T","W","T","F"]}/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 ">واحدهای فروش</h6>
              <p class="text-sm ">ثبت سفارش کاربران فروش</p>
              <hr class="dark horizontal"/>
              <div class="d-flex ">
                <i class="fas fa-history"></i>
                <p class="mb-0 text-sm">مشاهده جزئیات فروش </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default DashboardChart
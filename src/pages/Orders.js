import Cookies from "universal-cookie";
import StatusBar from "../modules/Components/StatusBar";
import Paging from "../modules/Components/Paging";
import errortrans from "../translate/error";
import tabletrans from "../translate/tables";
import OrderTable from "../modules/Orders/OrderTable";
import OrderFilters from "../modules/Orders/OrderComponent/OrderFilters";
import { useEffect } from "react";
import { useState } from "react";
import env from "../env";
import OrderTab from "../modules/Orders/OrderComponent/OrderTab";
import {
  getFiltersFromUrl,
  updateUrlWithFilters,
  defaultFilterValues,
  handleFilterChange,
} from "../utils/filterUtils"; // Import the utility functions
const cookies = new Cookies();

function Orders(props){
    const direction = props.lang?props.lang.dir:errortrans.defaultDir;
    const lang = props.lang?props.lang.lang:errortrans.defaultLang;
    const [content,setContent] = useState("")
    const [filters, setFilters] = useState(getFiltersFromUrl());
    const [loading,setLoading] = useState(0)
    const token=cookies.get(env.cookieName)

    function handleFilterChange(newFilters) {
      setFilters(newFilters);
      updateUrlWithFilters(newFilters);
    }
    
    useEffect(() => {
      setLoading(1)
      const body={
          offset:filters.offset?filters.offset:"0",
          pageSize:filters.pageSize?filters.pageSize:"10",
          customer:filters.customer,
          category:filters.category,
          orderNo:filters.orderNo,
          status:filters.status,
          brand:filters.brand,
          gurantee:filters.gurantee,
          expressPrice:filters.expressPrice,
          dateFrom:filters.date&&filters.date.dateFrom,
          dateTo:filters.date&&filters.date.dateTo,
          access:"manager"
      }
      const postOptions={
          method:'post',
          headers: {'Content-Type': 'application/json',
          "x-access-token":token&&token.token,"userId":token&&token.userId},
          body:JSON.stringify(body)
        }
        console.log(postOptions)
    fetch(env.siteApi + "/panel/order/list",postOptions)
    .then(res => res.json())
    .then(
      (result) => {
        setLoading(0)
          setContent('')
          setTimeout(()=> setContent(result),200)
      },
        (error) => {
          setLoading(0);
          console.log(error);
        }
      );
  }, [filters]);

  //window.scrollTo(0, 270);},[pageNumber,filters,perPage,refreshTable])
  return (
    <div className="user" style={{ direction: direction }}>
      
      <div className="od-header">
        <div className="od-header-info">
          <div className="od-header-name">
            <p>{errortrans.orders[lang]}</p>
          </div>
        </div>
        <div className="od-header-btn">
          
          <label
            className="edit-btn"
            onClick={() => (window.location.href = "/cancelorders")}
          >
            <i class="fa-solid fa-ban"></i>
            {tabletrans.ordercan[lang]}
          </label>
          <label
            className="edit-btn"
            onClick={() => (window.location.href = "/LatheService")}
          >
            <i class="fa-solid fa-plus"></i>
            {tabletrans.lathe[lang]}
          </label>

        </div>
      </div>

      <div className="list-container">
        <StatusBar
          lang={lang}
          token={token}
          filters={filters}
          status={content.rxStatus}
          setFilters={setFilters}
        />
        <OrderTab setFilters={setFilters} filters={filters} />

        <OrderFilters
          lang={props.lang}
          setFilters={setFilters}
          updateUrlWithFilters={updateUrlWithFilters} // Pass the function as a prop
          options={content.brand}
          filters={filters}
        />
        <div className="user-list">
          {loading ? (
            env.loader
          ) : (
            <OrderTable
              orders={content}
              lang={lang}
              category={filters.category}
              token={token}
            />
          )}
        </div>
        <Paging
          content={content}
          setFilters={handleFilterChange}
          filters={filters}
          lang={props.lang}
          updateUrlWithFilters={updateUrlWithFilters} // Pass the function as a prop
        />
      </div>
    </div>
  );
}
export default Orders;

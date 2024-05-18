import { PageInfoFunction } from "../../env"
import tabletrans from "../../translate/tables"
import Pagination from "material-ui-flat-pagination";

function Paging(props){
  const pageInfo = props.content&&PageInfoFunction(props.content,props.filters)
  console.log(props.filters)
  const setOffset=(value)=>{
    var curPage = pageInfo&&pageInfo.currentPage
    var newPage = parseInt(curPage)+parseInt(value)
    props.setFilters(prevState => ({
      ...prevState,
      offset:newPage
    }))
  }
    return(
        <div className="order-list-footer">
          <div className="dense-btn">
            <input className="switch-input" type="checkbox" id="switch" />
            <label className="switch-label" htmlFor="switch"></label>
            <p></p>
          </div>
          <div className="per-page">
            <p>{tabletrans.rowsPerPage[props.lang.lang]}</p>
            <select name="page" id="" onChange={(e)=>props.setFilters(prevState => ({
                ...prevState,
                pageSize:e.target.value
              }))}>
              <option value="5">5</option>
              <option value="10" selected={true}>10</option>
              <option value="25">25</option>
            </select>
          </div>
          {pageInfo&&pageInfo.show?<div className="page-counter">
              <Pagination
                    limit={props.filters&&props.filters.pageSize?props.filters.pageSize:10}
                    offset={props.filters&&props.filters.offset?props.filters.offset:0}
                    otherPageColor={"default"}
                    currentPageColor={"primary"}
                    total={pageInfo.totalItem}
                    onClick={(e, offset) => props.setFilters(prevState => ({
                      ...prevState,
                      offset:offset
                    }))}
                    />
          </div>:<div className="page-counter"></div>}
        </div>
    )
}
export default Paging
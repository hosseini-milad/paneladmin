function Paging(){
    return(
        <div className="order-list-footer">
          <div className="dense-btn">
            <input className="switch-input" type="checkbox" id="switch" />
            <label className="switch-label" htmlFor="switch"></label>
            <p>Dense</p>
          </div>
          <div className="per-page">
            <p>Rows per page:</p>
            <select name="page" id="">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
            </select>
          </div>
          <div className="page-counter">
            <p>1–5 of 20</p>
            <i className="tableIcon fas fa-chevron-left"></i>
            <i className="tableIcon fas fa-chevron-right"></i>

          </div>
        </div>
    )
}
export default Paging
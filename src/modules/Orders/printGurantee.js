import { useState ,useEffect } from "react";

function PrintGurantee(props){
    
      return(
      <div className="printArea fishPrintArea guranteePrint">
      <div className="hesabSection">
          <div className="hesabfaSection">
            <h4><br/><br/></h4>
          </div>
        </div>
        <table className="hesabfaMainTable">
          <tbody>
            <tr>
              <td colSpan={5} className="padding-td">
                Order No:<input type="text" className="grantee-input-title" placeholder="شماره سفارش"/> 
               _Dt.<input type="text" className="grantee-input-title" placeholder="تاریخ"/></td>
            </tr>
            <tr className="guranteeRow">
              <td>#</td>
              <td>Sph</td>
              <td>Cyl</td>
              <td>Axis</td>
              <td>Add</td>
            </tr>
            <tr  className="guranteeRow">
              <td>R</td>
              <td><input type="text" className="grantee-input" placeholder="Sph"/></td>
              <td><input type="text" className="grantee-input" placeholder="Cyl"/></td>
              <td><input type="text" className="grantee-input" placeholder="Axis"/></td>
              <td><input type="text" className="grantee-input" placeholder="Add"/></td>
            </tr>
            <tr  className="guranteeRow">
              <td>L</td>
              <td><input type="text" className="grantee-input" placeholder="Sph"/></td>
              <td><input type="text" className="grantee-input" placeholder="Cyl"/></td>
              <td><input type="text" className="grantee-input" placeholder="Axis"/></td>
              <td><input type="text" className="grantee-input" placeholder="Add"/></td>
            </tr>
            <tr>
              <td colSpan={5} className="padding-td"><input type="text" className="grantee-input-text" placeholder="نام محصول"/></td>
            </tr>
            <tr>
              <td colSpan={5} className="padding-td"><input type="text" className="grantee-input-text" placeholder="نام مشتری"/></td>
            </tr>
          </tbody>
        </table>
        <div className="footerGurantee">
          <span>
              
          </span>
        </div>
    </div>
    )
    
}
export default PrintGurantee
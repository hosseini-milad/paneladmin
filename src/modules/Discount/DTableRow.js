import { useState } from "react";
import tabletrans from "../../translate/tables";
import Status from "../Components/Status";

function DTableRow(props) {
  const activeAcc = props.index === props.detail;
  const user = props.user;
  const product=user.product&&user.product
  return (
    <>
      {props.type == 2 ? (
        <tr>
          <td className="checkBoxStyle">
            <input type="checkbox" name="" id="" />
          </td>
          <td>
            <div className="cu-avatar">
              <div className="cu-name">
                <p className="name">
                  {user.userInfo[0] &&
                    user.userInfo[0].cName &&
                    user.userInfo[0].cName}
                </p>
                <p className="email">
                  کد مشتری:{" "}
                  {user.userInfo[0] &&
                    user.userInfo[0].cCode &&
                    user.userInfo[0].cCode}
                </p>
              </div>
            </div>
          </td>

          <td style={{paddingInline:"0.5rem"}}>
            <div className="cu-avatar" style={{minWidth:"90px"}}>
              <p className="phone-num" style={{fontSize:"0.85rem"}}>{product&&product.title}</p>
            </div>
          </td>
          
          <td>
            <div className="pen-status order-status">
              <p>{user.offerValue+"%"}</p>
            </div>
          </td>
          <td onClick={() => props.offerid(user._id)}>
            <i class="fa-solid fa-trash" style={{ color: "#dd0005" }}></i>
          </td>
        </tr>
      ) : (
        <tr>
          <td className="checkBoxStyle">
            <input type="checkbox" name="" id="" />
          </td>
          <td>
            <div className="cu-avatar">
              <div className="cu-name">
                <p className="name">
                  {user.userInfo[0] &&
                    user.userInfo[0].cName &&
                    user.userInfo[0].cName}
                </p>
                <p className="email">
                  کد مشتری:{" "}
                  {user.userInfo[0] &&
                    user.userInfo[0].cCode &&
                    user.userInfo[0].cCode}
                </p>
              </div>
            </div>
          </td>

          <td>
            <div className="cu-company">
              <p className="phone-num">{user.brandName}</p>
            </div>
          </td>
          {props.type ? (
            <td>
              <div className="cu-company">
                <p className="phone-num">{user.material}</p>
              </div>
            </td>
          ) : (
            <></>
          )}
          <td>
            <div className="pen-status order-status">
              <p>{user.discountPercent}</p>
            </div>
          </td>
          <td onClick={() => props.offerid(user.offerCode)}>
            <i class="fa-solid fa-trash" style={{ color: "#dd0005" }}></i>
          </td>
        </tr>
      )}
    </>
  );
}
export default DTableRow;

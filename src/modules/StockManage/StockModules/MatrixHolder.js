import { useState } from "react"
import Popup from "./Popup"

function MatrixHolder(props){
    const content = props.content
    const colHeader=content.cylList
    
    const [matrix,setMatrix]=useState(content.matrixData)

    const [popupShow,setPopupShow] = useState(0)
    const [xy,setXY] = useState([0,0])
    const popup=(e,x,y)=>{
        setXY([x,y])
        setPopupShow(e)
    }
    const updateMatrix=(newItem)=>{
        var tempMatrix = matrix
        if(newItem.active)
            tempMatrix[xy[0]][xy[1]].active=newItem.active
        if(newItem.price)
            tempMatrix[xy[0]][xy[1]].price=newItem.price
        setMatrix(tempMatrix)
    }
    return(<>
    <table>
        <thead>
            <tr>
            <th></th>
            {colHeader&&colHeader.map((col,i)=>(
                <th style={{direction:"ltr"}} key={i}>{col}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {matrix&&matrix.map((row,i)=>(
              <tr key={i}>
                <td style={{direction:"ltr"}}>{row[0]?row[0].sph:''}</td>
                {row&&row.map((item,j)=>(item&&
                    <td key={j}>
                    <div onClick={(e)=>popup(item,i,j)} 
                        className={item.active==="false"?"disCube":"cube"}>
                    </div>
                </td>
                ))}
              </tr>
            ))}
        </tbody>
    </table>
    {popupShow?<Popup setPopupShow={setPopupShow} content={popupShow}
        lang={props.lang} updateMatrix={updateMatrix}/>:<></>}
    </>
    )
}
export default MatrixHolder
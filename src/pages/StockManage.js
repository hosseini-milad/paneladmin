import { useEffect, useState } from "react"
import StockFilter from "../modules/StockManage/StockFilter"
import StockList from "../modules/StockManage/StockList"
import StockMatrix from "../modules/StockManage/StockMatrix"
import env from "../env";
import errortrans from "../translate/error";
import Paging from "../modules/Components/Paging";

function StockManage(props){
    const direction = props.lang?props.lang.dir:errortrans.defaultDir;
    const lang = props.lang?props.lang.lang:errortrans.defaultLang;
    const [error,setError] = useState({errorText:'',errorColor:"brown"})

    const [filters,setFilters] = useState()
    const [stockList,setStockList] = useState()
    useEffect(()=>{
        var postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({...filters,
              /*brand:"ESSENCE",material:"Clear 2/2",
            lenzIndex:"1.61", sph:"-4.00",cyl:"-2.00"*/})
          }
         
      fetch(env.siteApi + "/panel/lens/stock-list",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
          if(result.error){
            setError({errorText:result.error,
              errorColor:"brown"})
            setTimeout(()=>setError({errorText:'',
              errorColor:"brown"}),3000)
          }
            else{
              setError({errorText:"سرویس پیدا شد",
                errorColor:"green"})
                setStockList(result)
              setTimeout(()=>setError({errorText:'',errorColor:"brown"}),2000)
            }
            
        },
        (error) => {
          console.log(error);
        })
    },[filters])
    return(
  <main className="main-content position-relative h-100 border-radius-lg "
    style={{direction:direction}}>
    <div className="matrix">
      <StockFilter direction={direction} content={stockList}
      setFilters={setFilters} filters={filters} lang={lang}/>
      <StockMatrix  lang={lang} direction={direction} content={stockList}/>
    </div>
    <StockList content={stockList} lang={lang}/>
    <Paging content={stockList} setFilters={setFilters} filters={filters} 
          lang={props.lang}/>
  </main>
    )
}
export default StockManage
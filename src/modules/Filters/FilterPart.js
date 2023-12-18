import { useState } from "react"
import errortrans from "../../translate/error"
import ModuleSubPart from "./ModuleSubPart"
import StyleInput from "../../components/Button/Input"
import StyleSelect from "../../components/Button/AutoComplete"
import formtrans from "../../translate/forms"

function FilterPart(props){
    const [optionSelect,setOptionSelect] = useState()
    const [optionShow,setOptionShow] = useState(1)
    const updateOptions=(key)=>{
      if(key!=='Enter') return
      const index = props.options&&props.options.length
      props.setOptions(existingItems => {
        return [
          ...existingItems.slice(0, index),
          optionSelect,
          ...existingItems.slice(index + 1),
        ]
      })
      setOptionSelect('')
      setOptionShow(0)
      setTimeout(()=>setOptionShow(1),100)
    }
    const data = props.data
    return(
        <div className="ps-section">
          <div className="info-box">
            <div className="info-wrapper">
              {/*<StyleInput title={formtrans.title[props.lang]} direction={props.direction} 
                defaultValue={data?data.title:''} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  title:e
                }))}/>
              
              <StyleInput title={formtrans.title["english"]} direction={props.direction} 
                defaultValue={data?data.enTitle:''} class={"formInput"}
                action={(e)=>setFormData(prevState => ({
                  ...prevState,
                  enTitle:e
                }))}/>*/}
              
              <StyleInput title={formtrans.category[props.lang]} direction={props.direction} 
                defaultValue={data?data.category:''} class={"formInput"}
                action={(e)=>props.setFilterChange(prevState => ({
                  ...prevState,
                  category:e
                }))}/>

              <StyleSelect title={formtrans.type[props.lang]} direction={props.direction} 
                options={["Input","Select"]}
                defaultValue={data?data.type:''} class={"formInput"}
                action={(e)=>props.setFilterChange(prevState => ({
                  ...prevState,
                  type:e
                }))}/>
              <div className="optionsSelect">
                {optionShow?<StyleInput title={formtrans.options[props.lang]} direction={props.direction} 
                  value={optionSelect} class={"formInput"}
                  action={(e)=>setOptionSelect(e)}
                  doAction={(e)=>updateOptions(e.key)}/>:<></>}
                  <ul>
                    {props.options&&props.options.map((option,i)=>(
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
              </div>
              <StyleInput title={formtrans.optionsN[props.lang]} direction={props.direction} 
                defaultValue={data?data.optionsN:''} class={"formInput"}
                action={(e)=>props.setFilterChange(prevState => ({
                  ...prevState,
                  optionsN:e
                }))}/>
              
          </div>
        </div>
      </div>
    )
}
export default FilterPart
import { useState } from "react"
import StyleSelect from "../../../components/Button/AutoComplete"
import StyleInput from "../../../components/Button/Input"
import formtrans from "../../../translate/forms"

function PolicyFilters(props){
    const content = props.content
    const filters = props.filters
    console.log(filters)
    return(
        <div className=''>
          <table>
            <tbody>
              {props.filterOptions&&props.filterOptions.map(
                (filter,i)=>(
                <tr key={i}>
                  <td>
                      {filter.type==="Input"?<StyleInput title={filter.title} direction={props.direction} 
                          defaultValue={content?content[filter.enTitle]:''} class={"formInput"}
                          action={(e)=>props.setFilters(prevState => ({
                              ...prevState,
                              [filter.enTitle]:e
                          }))}/>:
                          <StyleSelect title={filter.title} direction={props.direction} 
                          options={filter.optionsP||[]}
                          defaultValue={content?content[filter.enTitle]:''} class={"formInput"}
                          action={(e)=>props.setFilters(prevState => ({
                              ...prevState,
                              [filter.enTitle]:e
                          }))}/>}
                  </td>
                </tr>
                )
              )}
              
            </tbody>
          </table>  
        </div>
    )
}
export default PolicyFilters
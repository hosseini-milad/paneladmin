import React, { useRef ,useEffect, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import StyleInput from "../../../components/Button/Input"
import formtrans from "../../../translate/forms"
import tabletrans from "../../../translate/tables"
import StyleSelect from '../../../components/Button/AutoComplete';
import PolicyFilters from './PolicyFilters';

function PolicyDetails(props){
    const editorRef = useRef(null);
    const content=props.content
    return(
        <div className="serviceItem">
            <StyleSelect title={formtrans.category[props.lang]} direction={props.direction} 
              defaultValue={content?content.category:''} class={"formInput"}
              options={["RX","Stock"]}
              action={(e)=>props.setPolicyChange(prevState => ({
                ...prevState,
                category:e
              }))}/>
            <StyleSelect title={formtrans.brandName[props.lang]} direction={props.direction} 
              options={props.brandOptions||[]}
              label={"title"||''}
              defaultValue={(content&&content.brand)?
                  content.brandInfo[0].title:''} class={"formInput"}
              action={(e)=>props.setPolicyChange(prevState => ({
                ...prevState,
                brand:e._id
              }))}/>
            <PolicyFilters content={content} filters={props.filters} direction={props.direction}
            setFilters={props.setFilters} filterOptions={props.filterOptions}
            lang={props.lang} setPolicyChange={props.setPolicyChange}/>
        </div>
    )
}
export default PolicyDetails
import React, { useRef ,useEffect, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import StyleInput from "../../../components/Button/Input"
import formtrans from "../../../translate/forms"
import tabletrans from "../../../translate/tables"
import StyleSelect from '../../../components/Button/AutoComplete';

function PolicyUsers(props){
    const editorRef = useRef(null);
    const content=props.content
    return(
        <div className="serviceItem">
            <StyleInput title={formtrans.name[props.lang]} direction={props.direction} 
              defaultValue={content?content.policyName:''} class={"formInput"}
              action={(e)=>props.setPolicyChange(prevState => ({
                ...prevState,
                policyName:e
              }))}/>
              <StyleInput title={formtrans.policyCode[props.lang]} direction={props.direction} 
              defaultValue={content?content.discount:''} class={"formInput"}
              action={(e)=>props.setPolicyChange(prevState => ({
                ...prevState,
                discount:e
              }))}/>
            <StyleSelect title={formtrans.customer[props.lang]} direction={props.direction} 
              defaultValue={content?content.userId:''} class={"formInput"}
              options={["123","321"]}
              action={(e)=>props.setPolicyChange(prevState => ({
                ...prevState,
                userId:e
              }))}/>
            <StyleSelect title={formtrans.class[props.lang]} direction={props.direction} 
              options={props.classOptions||[]}
              label={"className"||''}
              defaultValue={(content&&content.classId)?
                content.classInfo[0].className:''} class={"formInput"}
              action={(e)=>props.setPolicyChange(prevState => ({
                ...prevState,
                classId:e
              }))}/>
            <StyleInput title={formtrans.discount[props.lang]} direction={props.direction} 
              defaultValue={content?content.discount:''} class={"formInput"}
              action={(e)=>props.setPolicyChange(prevState => ({
                ...prevState,
                discount:e
              }))}/>
        </div>
    )
}
export default PolicyUsers
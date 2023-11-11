import React, { useRef ,useEffect, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import StyleInput from '../../../components/Button/Input';
import tabletrans from '../../../translate/tables';

function ProductName(props){
    const editorRef = useRef(null);
    const content = props.content
    useEffect(()=>{
        if(editorRef.current)
        console.log(editorRef&&editorRef.current.getContent())

    },editorRef&&editorRef.current)
    return(
        <div className="pd-row">
          <div className="row-title">
            <h4>{tabletrans.details[props.lang]}</h4>
            <p>{tabletrans.titleShort[props.lang]}</p>
          </div>
          <div className="row-box">
            <div className="details-wrapper">
                <StyleInput title={tabletrans.productName[props.lang]} direction={props.direction}
                 class={"formInput"} defaultValue={content?content.title:''} 
                 action={(e)=>props.setProductChange(prevState => ({
                    ...prevState,
                    title:e
                  }))}/>
                <StyleInput title={tabletrans.productSubDescription[props.lang]} direction={props.direction}
                 class={"formInput"} defaultValue={content?content.description:''} 
                 action={(e)=>props.setProductChange(prevState => ({
                    ...prevState,
                    description:e
                  }))}/>
              <div className="content">
                <Editor
                  apiKey='qosmvwu6wq395cpq7ay8ud8j9d21cf4cdgkxwmpz317vpy2i'
                  onInit={(evt, editor) => editorRef.current = editor}
                  initialValue={content?content.fullDesc:''}
                  
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                  }}
                />
              </div>
              <hr/>
              <div className="images">
                <h5>{tabletrans.images[props.lang]}</h5>
                <input type="file" name="" id="pd-image"/>
                <label htmlFor="pd-image">
                  <img src="../assets/img/icon-pic.png" alt="picture"/>
                  <h6>Drop or Select file</h6>
                  <p>Drop files here or click<span>browse</span>thorough your machine</p>
                </label>
              </div>
            </div>
          </div>
        </div>
    )
}
export default ProductName
import StyleInput from "../../components/Button/Input"
import errortrans from "../../translate/error"

function AccessHeader(props){
  const content=props.content
    return(
      <div className="access-header">
        <div className="ps-back-btn">
          <i className="fa-solid fa-rotate-left" style={{color: "#c0c0c0"}}></i>
          <p>Back</p>
        </div>
        <div className="ps-title">
          <i className="fa-solid fa-certificate fa-sm" style={{color: "#00c6c6"}}></i>
          <div className="p-wrapper">
            <StyleInput title={errortrans.profileName[props.lang]} direction={props.direction} 
              defaultValue={content.profileName||''} class={"formInput"}
              action={(e)=>props.setProfileChange(prevState => ({
                ...prevState,
                profileName:e
              }))}/>
            <p>by<span>ZohoSprints</span>on<span>09/Nov/2023</span></p>
          </div>
          
          <StyleInput title={errortrans.profileCode[props.lang]} direction={props.direction} 
              defaultValue={content.profileCode||''} class={"formInput"}
              action={(e)=>props.setProfileChange(prevState => ({
                ...prevState,
                profileCode:e
              }))}/>
        </div>
        <div className={props.direction==="ltr"?"asso-btn":"asso-btn asso-btnRTL"}>
          <p>Associate Users</p>
        </div>
        <div className="help-btn"><i className="fa-regular fa-circle-question" style={{color: "#c0c0c0"}}></i></div>
      </div>
    )
}
export default AccessHeader
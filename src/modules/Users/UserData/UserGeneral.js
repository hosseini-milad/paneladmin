import StyleInput from "../../../components/Button/Input"

function UserGeneral(){
    return(
        <div className="general-page">
          <div className="avatar-box">
            <div className="customer-photo">
              <input type="file" name="customer photo" id="cu-photo"/>
              <label htmlFor="cu-photo">
                <div className="label-hover">
                  <i className="fa-solid fa-camera-retro fa-xl" style={{color: "#ffffff"}}></i>
                  <p>Update Photo</p>
                </div>
              </label>
            </div>
            <p className="p-allow">Allowed *.jpeg, *.jpg, *.png, *.gif <br/> max size of 3.1 MB</p>
            <div className="public-btn">
              <p>Public Profile</p>
              <div className="dense-btn">
                <input className="switch-input" type="checkbox" id="switch" />
                <label className="switch-label" htmlFor="switch">Toggle</label>
              </div>
            </div>
            <div className="delete-user-btn">Delete User</div>
          </div>
          <div className="info-box">
            <div className="info-wrapper">
              <StyleInput title="Name" direction={"ltr"} class={"formInput"}/>
              
              <StyleInput title="Email Address" direction={"ltr"} class={"formInput"}/>
              
              <StyleInput title="Phone Number" direction={"ltr"} class={"formInput"}/>

              <StyleInput title="Address" direction={"ltr"} class={"formInput"}/>
              
              <StyleInput title="Country" direction={"ltr"} class={"formInput"}/>
              
              <StyleInput title="State/Region" direction={"ltr"} class={"formInput"}/>
              
              <StyleInput title="City" direction={"ltr"} class={"formInput"}/>
              
              <StyleInput title="Zip Code" direction={"ltr"} class={"formInput"}/>
              
              <div className="info-input"><label htmlFor="about">About</label><textarea name="about"
                  id="about">Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.</textarea>
              </div>
            </div>
            <div className="save-btn">Save Changes</div>
          </div>


        </div>
    )
}
export default UserGeneral
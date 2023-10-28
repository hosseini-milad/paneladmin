import Cookies from 'universal-cookie';
import UserTable from '../modules/Users/UserTable';
import StatusBar from '../modules/Components/StatusBar';
import Paging from '../modules/Components/Paging';
import errortrans from "../translate/error";
import UserFilters from '../modules/Users/UserComponent/UserFilters';
const cookies = new Cookies();

function Users(props){
  const direction = props.lang?props.lang.dir:errortrans.defaultDir;
    const token=cookies.get('panel-login')
    return(
      <div className="user" style={{direction:direction}}>
      <h4>List</h4>
      <div className="list-container">
        <StatusBar />
        <UserFilters lang={props.lang}/>
        <div className="user-list">
          <UserTable />
        </div>
        <Paging />
      </div>
    </div>
    )
}
export default Users
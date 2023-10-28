import UserTableRow from "./UserTableRow"

function UserTable(){
    return(
        <table>
        <thead>
          <tr>
            <th><input type="checkbox" name="" id=""/></th>
            <th>
              <p>Name</p>
              <i></i>
            </th>
            <th>
              <p>Phone Number</p>
              <i></i>
            </th>
            <th>
              <p>Company</p>
              <i></i>
            </th>
            <th>
              <p>Role</p>
              <i></i>
            </th>
            <th>
              <p>status</p>
              <i></i>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <UserTableRow />
          <UserTableRow />
          <UserTableRow />
          <UserTableRow />
        </tbody>
      </table>

    )
}
export default UserTable
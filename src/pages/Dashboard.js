import Cookies from 'universal-cookie';
import env from '../env';
const cookies = new Cookies();

function Dashboard(){
    const token=cookies.get(env.cookieName)
    return(
        <main className="container-fluid">
            <div className="boards">
                
            </div>
        </main>
    )
}
export default Dashboard
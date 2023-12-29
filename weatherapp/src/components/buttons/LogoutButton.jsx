import { useAuth0 } from "@auth0/auth0-react"


const LogoutButton = ()=>{
    const { logout } = useAuth0();
  
    return (
      <div className="flex justify-center items-center m-2">
        <button className="bg-slate-400 text-slate-600 rounded-xl m-2 p-2 transition-all hover:bg-red-500 hover:shadow-sm hover:shadow-white hover:text-white" 
        onClick={() => logout()}>log out</button>
      </div>
    )
    
}
export default LogoutButton
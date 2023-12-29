import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./buttons/LoginButton"
import LogoutButton from "./buttons/LogoutButton"


const Profile = ()=>{
    const {user,isAuthenticated} = useAuth0()
    return(
        
      <div className="flex justify-center items-center">
        {
            !isAuthenticated && (
                <LoginButton></LoginButton>
            )
        }
        {
             isAuthenticated && (
                <div className="flex justify-center items-center cursor-pointer ">
                    <div className="flex justify-center items-center pr-2">
                    <LogoutButton></LogoutButton>
                    <h1 className="text-white">{user.nickname}</h1>
                    </div>
                    <div className="">
                    <img className="rounded-2xl w-1/2 h-auto " src={user.picture} alt={user.email} />
                    </div>
                </div>
               )
        }
      </div>
    )
}
export default Profile
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return (
      <div className="flex justify-center items-center m-2 pr-10">
        <button className="bg-slate-300 rounded-xl m-2 p-2  transition-all hover:bg-slate-500 hover:shadow-sm hover:shadow-white hover:text-white" 
        onClick={() => loginWithRedirect()}>log in</button>
      </div>
    )
    
  };
  
  export default LoginButton;
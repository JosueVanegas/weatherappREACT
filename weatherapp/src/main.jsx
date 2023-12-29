
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Auth0Provider} from '@auth0/auth0-react'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-orlaj65bvyporzl2.us.auth0.com"
    clientId="VBBtATC6FF47urWtzxDubfSvsz3yp0FF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   
    <App />
    
  </Auth0Provider>
  </BrowserRouter>
)

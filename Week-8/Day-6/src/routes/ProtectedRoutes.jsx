import { Navigate } from "react-router-dom"

function ProtectedRoutes({children}) {
  const isAuth = localStorage.getItem('isAuth')
  return isAuth? children:<Navigate to='/login'/>
}

export default ProtectedRoutes
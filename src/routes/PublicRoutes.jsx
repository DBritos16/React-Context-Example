import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {

    const {state} = useContext(UserContext);

  return (
    !state.isLogged ? <Outlet/> : <Navigate to={'/admin'}/>
  )
}

export default PublicRoutes
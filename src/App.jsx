import { useReducer, useState } from "react"
import { UserContext } from "./context/UserContext"
import AppRouter from "./routes/AppRouter"
import { userReducer } from "./context/userReducer"


function App() {
 
  const obtenerToken = ()=> JSON.parse(localStorage.getItem('userData')) || {isLogged: false};

  const [state, stateDispatch] = useReducer(userReducer, {}, obtenerToken);

  return (
    <>
      <UserContext.Provider value={{state, stateDispatch}}>
        <AppRouter />
      </UserContext.Provider>
    </>
  )
}

export default App

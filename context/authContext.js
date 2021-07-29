import { createContext, useContext } from 'react'
import useFirebaseAuth from '../lib/useFirebaseAuth'

const AuthContext = createContext({
  authUser: null,
  loading: true,
})

export function AuthProvider({ children }) {
  let state = useFirebaseAuth()

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}

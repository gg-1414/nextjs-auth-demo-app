import { useState, useEffect } from 'react'
import firebase from './firebase'

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const authStateChanged = (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setAuthUser(authState);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged)
    return () => unsubscribe()
  })

  return {
    authUser,
    loading,
  }
}

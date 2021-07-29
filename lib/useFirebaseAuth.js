import { useState, useEffect } from 'react'
import firebase from './firebase'

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

  return {
    authUser,
    loading,
  }
}

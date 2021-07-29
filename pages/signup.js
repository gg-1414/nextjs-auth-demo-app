import { useState } from 'react'
import { useRouter } from 'next/router'
import firebase from '../lib/firebase'
import { useAuthContext } from '../context/authContext'
import styles from "../styles/pages/Signup.module.css"

export default function Signup() {
  const router = useRouter()
  const { authUser, loading } = useAuthContext() 

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [error, setError] = useState("")

  const validateRegex = /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}$/

  async function onSubmit(e) {
    e.preventDefault()

    if (password === passwordConfirmation) {
      if (password.length < 8) {
        setError('Password must contain at least eight characters.')
      } else if (!validateRegex.test(password)) {
        setError('Password must contain at least one uppercase/lowercase letter, number, and special character.')
      } else {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const user = userCredential.user
        await user.updateProfile({ displayName: `${firstName} ${lastName}` })
        await router.push('/account')
      }
    } else {
      setError('Passwords do not match.')
    }
  }

  if (!loading && authUser) {
    router.push('/account')
  }

  return (
    <div>
      <h1 className={styles.title}>Signup</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            placeholder="First Name"
            required
          />
        </div>

        <div className={styles.form_group}>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            placeholder="Last Name" 
            required
          />
        </div>

        <div className={styles.form_group}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className={styles.form_group}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        <div className={styles.form_group}>
          <input
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Confirm Password" 
            required
          />
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.cta_block}>
          <button className={styles.button}>sign up right meow</button>
        </div>
      </form>
    </div>
  )
}

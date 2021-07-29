import { useState, useEffect } from 'react'
import styles from "../styles/pages/Signup.module.css"

export default function Signup() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [error, setError] = useState("")

  async function onSubmit(e) {
    e.preventDefault()

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

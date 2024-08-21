'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Login() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [userType, setUserType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    console.log(`Password: ${password}, Location: ${location}, UserType: ${userType}`);
    console.log('submitted');
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <h1>Welcome back!</h1>
          <h2>We are excited to see you again!</h2>
        </div>
        <div className={styles.container}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="account" className={styles.label}>
              EMAIL OR PHONE NUMBER
            </label>
            <input
              type="text"
              id="account"
              name="account"
              placeholder=""
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              className={styles.input}
            />

            <label htmlFor="password" className={styles.label}>
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />

            <Link href="/forgot-password" prefetch={false}>
              <div className={styles.forgotPassword}>Forgot your password?</div>
            </Link>

            <label htmlFor="userType" className={styles.label}>
              User
            </label>
            <select
              id="userType"
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className={styles.select}
            >
              <option value="" disabled hidden>
                Select user type
              </option>
              <option value="patient">Patient</option>
              <option value="provider">Provider</option>
              <option value="volunteer">Volunteer</option>
            </select>

            <label htmlFor="location" className={styles.label}>
              LOCATION
            </label>
            <select
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={styles.select}
            >
              <option value="Street Corner Care">Street Corner Care, San Diego</option>
            </select>

            <input type="submit" value="Log In" className={styles.submit} />

            <div className={styles.registerText}>
              Need an account?{' '}
              <Link href="/signup" className={styles.register} prefetch={false}>
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

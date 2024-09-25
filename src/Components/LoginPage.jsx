import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, initializeUsers } from "../localStorage";
import styles from "../css/LoginPage.module.css";
import { useAuth } from "../AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  initializeUsers();

  useEffect(() => {
    getUsers(); // Initialize users if not already in local storage
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = getUsers(); // Fetch users from local storage
    const user = users.find(
      (u) => u.email === email && u.password === password // Check email and password
    );

    if (user) {
      // Log in with the role
      login(user.email, user.role); // This sets the user context

      // Navigate based on the user's role
      if (user.role === "Customer") {
        navigate("/home");
      } else if (user.role === "Vendor") {
        navigate("/vendor-dashboard"); // Example vendor page
      }
    } else {
      setError("Invalid email or password"); // Show error for invalid credentials
      console.log(`Failed login attempt for email: ${email}`);
    }
  };

  return (
    <div className={styles.loginPage}>
      <h2 className={styles.logInTitle}>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <label className={styles.loginLabel}>Email:</label>
          <input
            className={styles.logInInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.loginLabel}>Password:</label>
          <input
            className={styles.logInInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
}

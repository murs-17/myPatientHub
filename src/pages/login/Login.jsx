import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage("Please enter your email and password.");
      return;
    }

    setMessage(
      "The form is ready. Authentication has not been connected yet."
    );
  }

  return (
    <main className="login-page">
      <section className="login-hero">
        <div className="login-brand">
          <div className="login-brand-mark">MH</div>
          <span>MyPatientHUB</span>
        </div>

        <h1>Welcome to MyPatientHUB!</h1>
        <p>We provide smart healthcare services in your hands.</p>
      </section>

      <section className="login-card">
        <h2>{isSignUp ? "Create your account" : "Sign in to MyPatientHUB"}</h2>

        <div className="login-social-buttons">
          <button
            type="button"
            className="login-social-button facebook-button"
            onClick={() =>
              setMessage("Facebook authentication is not connected yet.")
            }
            aria-label="Continue with Facebook"
          >
            f
          </button>

          <button
            type="button"
            className="login-social-button google-button"
            onClick={() =>
              setMessage("Google authentication is not connected yet.")
            }
            aria-label="Continue with Google"
          >
            G
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <label className="login-field">
              <span>Full name</span>
              <input
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </label>
          )}

          <label className="login-field">
            <span>Email or phone number</span>
            <input
              type="text"
              placeholder="Email or Phone number"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="username"
              required
            />
          </label>

          <label className="login-field">
            <span>Password</span>
            <input
              type="password"
              placeholder="Please enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete={isSignUp ? "new-password" : "current-password"}
              required
              minLength={6}
            />
          </label>

          {!isSignUp && (
            <div className="login-options">
              <button
                type="button"
                className="login-text-button"
                onClick={() =>
                  setMessage("Password recovery has not been connected yet.")
                }
              >
                Forgot password?
              </button>

              <label className="login-remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span>Remember me</span>
              </label>
            </div>
          )}

          <button type="submit" className="login-submit">
            {isSignUp ? "SIGN UP" : "SIGN IN"}
          </button>

          {message && (
            <p className="login-message" role="status">
              {message}
            </p>
          )}
        </form>

        <div className="login-divider">
          <span>or</span>
        </div>

        <button
          type="button"
          className="login-switch"onClick={() => {
            setIsSignUp((previous) => !previous);
            setMessage("");
          }}
        >
          {isSignUp
            ? "Already have an account? SIGN IN"
            : "Don't have an account? SIGN UP"}
        </button>
      </section>

      <footer className="login-footer">
        <nav className="login-footer-links" aria-label="Website links">
          <a href="#google-play">Google Play Store App</a>
          <a href="#app-store">App Store App</a>
          <a href="#about">About MyPatientHUB</a>
          <a href="#about-us">About Us</a>
          <a href="#blog">Our Blog</a>
        </nav>

        <nav className="login-social-links" aria-label="Social media">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
          <a href="#pinterest">Pinterest</a>
          <a href="#linkedin">LinkedIn</a>
        </nav>
      </footer>
    </main>
  );
}

import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Healthy<span>Life</span></h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Your Health. Your Happiness.</h1>
        <p>Take care of your body and mind. Start your healthy lifestyle today!</p>
        <Link to="/register" className="btn">Join Us</Link>
      </section>

      <section className="section">
        <h2>Our Wellness Categories</h2>
        <div className="cards">
          <div className="card">
            <h3>Physical Fitness</h3>
            <p>Stay active with regular exercise, yoga and walking.</p>
          </div>

          <div className="card">
            <h3>Healthy Nutrition</h3>
            <p>Eat balanced meals and maintain a healthy diet.</p>
          </div>

          <div className="card">
            <h3>Mental Wellness</h3>
            <p>Practice meditation and maintain a peaceful mind.</p>
          </div>
        </div>
      </section>

      <section className="section tips">
        <h2>Healthy Lifestyle Tips</h2>
        <ul>
          <li>Drink enough water every day.</li>
          <li>Exercise regularly.</li>
          <li>Eat fresh fruits and vegetables.</li>
          <li>Sleep for 7–8 hours.</li>
          <li>Spend time relaxing and reducing stress.</li>
        </ul>
      </section>
    </div>
  );
}

function About() {
  return (
    <section className="section page">
      <h1>About HealthyLife</h1>
      <p>
        HealthyLife is a health and wellness blog that encourages
        people to follow a healthy lifestyle. Our aim is to provide
        useful information about physical fitness, healthy nutrition
        and mental wellness.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to help people improve their daily habits
        and live healthier and happier lives.
      </p>
    </section>
  );
}

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    mobile: "",
    gender: "",
    state: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setError("");
    setSuccess("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!/^[A-Za-z ]+$/.test(form.name)) {
      setError("Enter a valid name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(form.password)) {
      setError("Password must have 8 characters, uppercase, lowercase and a number.");
      return;
    }

    if (Number(form.age) < 18 || Number(form.age) > 30) {
      setError("Age must be between 18 and 30.");
      return;
    }

    if (!/^\d{10}$/.test(form.mobile)) {
      setError("Mobile number must contain exactly 10 digits.");
      return;
    }

    if (!form.gender || !form.state) {
      setError("Please select your gender and state.");
      return;
    }

    setSuccess("Registration successful! Welcome to HealthyLife.");

    setForm({
      name: "",
      email: "",
      password: "",
      age: "",
      mobile: "",
      gender: "",
      state: ""
    });
  }

  return (
    <section className="form-section">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>JOIN OUR HEALTHY FAMILY</h1>
        <h2>Create Your Account</h2>
        <p>Register with HealthyLife and start your journey towards a healthier lifestyle!</p>

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          name="age"
          type="number"
          placeholder="Age (18-30)"
          value={form.age}
          onChange={handleChange}
          required
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          required
        />

        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
          <option>Prefer not to say</option>
        </select>

        <select name="state" value={form.state} onChange={handleChange} required>
          <option value="">Select State</option>
          <option>Tamil Nadu</option>
          <option>Kerala</option>
          <option>Karnataka</option>
          <option>Andhra Pradesh</option>
          <option>Telangana</option>
          <option>Maharashtra</option>
          <option>Delhi</option>
          <option>Other</option>
        </select>

        <button type="submit">Create Account →</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </section>
  );
}

function Contact() {
  return (
    <section className="section page">
      <h1>Contact Us</h1>
      <p>We would love to hear from you!</p>
      <p>Email: healthylife@gmail.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Address: Coimbatore, Tamil Nadu, India</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <h3>HealthyLife</h3>
      <p>Healthy Body | Healthy Mind | Happy Life</p>
      <p>© 2026 HealthyLife. All Rights Reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background: #f5f7f3;
          color: #263b30;
        }

        .navbar {
          background: #164b3e;
          color: white;
          padding: 20px 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }

        .navbar h2 span {
          color: #a5d66d;
        }

        .nav-links {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: bold;
        }

        .nav-links a:hover {
          color: #a5d66d;
        }

        .hero {
          min-height: 350px;
          background: linear-gradient(120deg, #164b3e, #4d896b);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 50px 20px;
          gap: 20px;
        }

        .hero h1 {
          font-size: 40px;
        }

        .hero p {
          font-size: 18px;
        }

        .btn, .register-form button {
          background: #a5d66d;
          color: #164b3e;
          padding: 12px 25px;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
        }

        .section {
          padding: 55px 8%;
          text-align: center;
        }

        .section h2 {
          margin-bottom: 25px;
          color: #164b3e;
        }

        .cards {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .card {
          background: white;
          padding: 30px;
          width: 260px;
          border-radius: 12px;
          box-shadow: 0 3px 12px #00000015;
        }

        .card h3 {
          color: #39765b;
          margin-bottom: 15px;
        }

        .card p {
          line-height: 1.6;
        }

        .tips {
          background: #e8f1e6;
          text-align: left;
        }

        .tips h2 {
          text-align: center;
        }

        .tips ul {
          max-width: 600px;
          margin: auto;
          line-height: 2.2;
        }

        .page {
          min-height: 400px;
          line-height: 1.8;
        }

        .page h1, .page h2 {
          margin-bottom: 20px;
        }

        .form-section {
          padding: 40px 15px;
          display: flex;
          justify-content: center;
        }

        .register-form {
          background: white;
          padding: 35px;
          width: 100%;
          max-width: 480px;
          border-radius: 12px;
          box-shadow: 0 3px 15px #00000018;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .register-form h1 {
          color: #164b3e;
          text-align: center;
          font-size: 22px;
        }

        .register-form h2, .register-form p {
          text-align: center;
        }

        .register-form input, .register-form select {
          padding: 13px;
          border: 1px solid #bbb;
          border-radius: 5px;
          width: 100%;
          font-size: 15px;
        }

        .register-form button {
          font-size: 16px;
        }

        .error {
          color: red;
        }

        .success {
          color: green;
        }

        footer {
          background: #164b3e;
          color: white;
          padding: 25px;
          text-align: center;
          line-height: 2;
        }

        @media (max-width: 600px) {
          .navbar {
            justify-content: center;
          }

          .nav-links {
            justify-content: center;
            gap: 15px;
          }

          .hero h1 {
            font-size: 28px;
          }

          .register-form {
            padding: 22px;
          }
        }
      `}</style>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

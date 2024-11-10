import {useState} from 'react';
import './App.css';

function App() {
  const {email, setEmail} = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent the default event bubbling
    console.log('Form submitted');
    // You can handle the form submission here
  }


  return (
    <div className="box">
    <div className="logo">
    <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <title>Google Logo</title>
  <g fill="none" fill-rule="evenodd">
    <path fill="#4285F4" d="M23.6 24.3h18.7c.2-1 .3-2 .3-3.3 0-1.2-.1-2.2-.3-3.3H23.6v6.6z"/>
    <path fill="#34A853" d="M24 36c4.5 0 8.3-1.5 11-4.1L28.7 26c-1.5 1-3.5 1.7-5.7 1.7-4.4 0-8.1-2.9-9.5-6.9H5.6v4.3c2.6 5.3 8.1 8.9 14.4 8.9z"/>
    <path fill="#FBBC05" d="M14.5 20.8c-.3-.9-.5-1.8-.5-2.8s.2-2 .5-2.8V11.9H5.6C3.6 15 2.4 18.8 2.4 22.9s1.2 7.9 3.2 11h8.9v-4.3z"/>
    <path fill="#EA4335" d="M24 9.5c2.4 0 4.6.8 6.3 2.4l4.7-4.6C31.9 4.8 28.1 3 24 3 15.8 3 8.7 8 5.6 15l8.9 4.3c1.4-4 5.1-6.8 9.5-6.8z"/>
  </g>
</svg>
    </div>
    <h2>Sign In</h2>
    <p>Use your google account</p>
    <form onSubmit={handleSubmit} >
      <div className="inputBox">
      <input type="email" placeholder="Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      <input type="password" placeholder="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      <button type="submit">Sign In</button>
      <p>Forgot Password?</p>
      <p>New to Google? <a href="#">Sign Up</a></p>  {/* Add a link to the Sign Up page */}
      </div>
    </form>
    </div>
  );
}

export default App;

import { useState } from 'react'


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username == "user" && password == "password") {
      setError("");
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  }
 
  return (
    <>
      <div className='app'>
        <h1>Login Page</h1>
        {error && <p>{error}</p>}
        {isLoggedIn 
        ? <p>Welcome, {username}!</p> 
        : (
          <form onSubmit={handleSubmit} className='form'>
            <label htmlFor="username">Username:</label>
            <input  
              type='text' 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input  
              type='password' 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button type='submit'>Submit</button>
          </form>
        )}
      </div>  
    </>
  )
}

export default App
import React, { useState } from 'react'

const App = () => {
  const [alert , setAlert] = useState(<></>)
  const [form , setForm] = useState({
    username : '',
    password : '',
  })

  const onChange = (e) => {
    const {name  , value} = e.target;

    setForm({
      ...form,
      [name] : value
    })
  }

  const onSubmit = () => {

    if(form.password == 'password' && form.username == 'user'){
      setAlert(<p>Welcome , user</p>)
    }else{
      setAlert(<p>Invalid username or password</p>)
    }
  }
  return (
    <div style={{
      padding : "2rem "  
    }}>
      <h1>Login Page</h1>

      <form action="" onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}>
        {alert}
        <div 
        style={{
          display : 'flex',
          alignItems : 'center',
          gap : '1rem'
        }}>
          <label htmlFor="">
            username : 
          </label>
          <input style={{
            padding :  '.4rem 1rem'
          }} value={form.username} name = 'username'  onChange={onChange}  placeholder='username' required />
        </div>
        <br />
        <div style={{
          display : 'flex',
          alignItems : 'center',
          gap : '1rem'
        }}>
          <label htmlFor="">
            password : 
          </label> {" "}
          <input style={{
            padding :  '.4rem 1rem'
          }} value={form.password} type='password' name = 'password' onChange={onChange} placeholder='password' required />
        </div>

        <br />

        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
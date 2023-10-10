import React, {useState} from "react"

export const Login = (props) => {
    // a state for email storage
    const [email, setEmail] = useState('')
    // a state for password storage
    const [password, setPassword] = useState('')

    // function to handle submit
    const handleSubmit = (element) => {
        element.preventDefault()
        console.log(email)
    }


    return (
        <div className="auth-form-container">
        <form className="login-from" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <br/>
            <input value={email} onChange={(element) => setEmail(element.target.value)} type="email" id="email" name="email" placeholder="you@email.com"/>
            <br/>
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input value={password} onChange={(element) => setPassword(element.target.value)} type="password" id="password" name="password" placeholder="*****"/>
            <br/>
            <br/>
            <button type="submit">Log In</button>
            <br/>
            <br/>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Already have an account? Regsiter here!</button>
        </div>
    )
}
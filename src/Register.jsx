import React, {useState} from "react"

export const Register = (props) => {

    // a state for email storage
    const [email, setEmail] = useState('')
    // a state for password storage
    const [password, setPassword] = useState('')
    // set a name
    const [name, setName] = useState('')

    // function to handle submit
    const handleSubmit = (element) => {
        element.preventDefault()
        console.log(email)
    }

    return (
        <div className="auth-form-container">
        <form className="register-from" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <br/>
            <input value={name} onChange={(element) => setName(element.target.value)} type="name" id="name" name="name" placeholder="John Doe"/>
            <br/>
            <br/>
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
            <button type="submit">Register</button>
            <br/>
            <br/>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Do not have an account? Regsiter here!</button>
        </div>
    )
}
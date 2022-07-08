import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Login.css'

export default function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const res = await axios.post(
				'/auth/login',
				{
					username,
					password,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			console.log(res.data)

			// res.data && window.location.reload()
		} catch (error) {
			setError(error.response.data.message)
		}
	}

	return (
		<div className='login'>
			<span className='loginTitle'>Login</span>
			<form className='loginForm' onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					className='loginInput'
					type='text'
					placeholder='Enter your username...'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Password</label>
				<input
					className='loginInput'
					type='password'
					placeholder='Enter your password...'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className='loginButton'>Login</button>
				{error && <p className='loginError'>{error}</p>}
			</form>
			<Link to='/register'>
				<button className='loginRegisterButton'>Register</button>
			</Link>
		</div>
	)
}

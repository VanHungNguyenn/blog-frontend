import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'

export default function Register() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')

	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await axios.post(
				'/auth/register',
				{
					username,
					password,
					email,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			res.data && navigate('/login')
		} catch (error) {
			setError(error.response.data.message)
		}
	}

	return (
		<div className='register'>
			<span className='registerTitle'>Register</span>
			<form className='registerForm' onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					className='registerInput'
					type='text'
					placeholder='Enter your username...'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Email</label>
				<input
					className='registerInput'
					type='text'
					placeholder='Enter your email...'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					className='registerInput'
					type='password'
					placeholder='Enter your password...'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className='registerButton'>Register</button>
				{error && <p className='error'>{error}</p>}
			</form>
			<Link to='/login'>
				<button className='registerLoginButton'>Login</button>
			</Link>
		</div>
	)
}

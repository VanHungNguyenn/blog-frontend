import TopBar from './components/TopBar/TopBar'
import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Settings from './pages/Settings/Settings'
import Single from './pages/Single/Single'
import Write from './pages/Write/Write'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	const currentUser = true

	return (
		<>
			<Router>
				<TopBar />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/posts' element={<Homepage />} />
					<Route path='/post/:id' element={<Single />} />
					<Route
						path='/login'
						element={currentUser ? <Homepage /> : <Login />}
					/>
					<Route
						path='/register'
						element={currentUser ? <Homepage /> : <Register />}
					/>
					<Route
						path='/write'
						element={currentUser ? <Write /> : <Login />}
					/>
					<Route
						path='/settings'
						element={currentUser ? <Settings /> : <Login />}
					/>
				</Routes>
			</Router>
		</>
	)
}

export default App

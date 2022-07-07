import { useState, useEffect } from 'react'

import axios from 'axios'

import Header from './../../components/Header/Header'
import Posts from './../../components/Posts/Posts'
import Sidebar from './../../components/Sidebar/Sidebar'

import './Homepage.css'

export default function Homepage() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('/posts')
			setPosts(res.data)
			console.log(res.data)
		}

		fetchPosts()
	}, [])

	return (
		<>
			<Header />
			<div className='home'>
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	)
}

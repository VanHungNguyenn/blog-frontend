import { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import axios from 'axios'

import Header from './../../components/Header/Header'
import Posts from './../../components/Posts/Posts'
import Sidebar from './../../components/Sidebar/Sidebar'

import './Homepage.css'

export default function Homepage() {
	const [posts, setPosts] = useState([])

	const { search } = useLocation()

	console.log(search)

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('/posts' + search)
			setPosts(res.data)
		}

		fetchPosts()
	}, [search])

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

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './SinglePost.css'

export default function SinglePost() {
	const PF = 'http://localhost:5678/images/'

	const params = useParams()
	const [post, setPost] = useState({})

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get(`/posts/${params.id}`)

			console.log(res.data)
			setPost(res.data)
		}

		getPost()
	}, [params.id])

	return (
		<div className='singlePost'>
			<div className='singlePostWrapper'>
				{post.photo && (
					<img
						className='singlePostImg'
						src={PF + post.photo}
						alt=''
					/>
				)}

				<h1 className='singlePostTitle'>
					{post.title}
					<div className='singlePostEdit'>
						<i className='singlePostIcon far fa-edit'></i>
						<i className='singlePostIcon far fa-trash-alt'></i>
					</div>
				</h1>
				<div className='singlePostInfo'>
					<span>
						Author:
						<b className='singlePostAuthor'>
							<Link
								className='link'
								to={`/posts?username=${post.username}`}
							>
								{post.username}
							</Link>
						</b>
					</span>
					<span>{new Date(post.createdAt).toDateString()}</span>
				</div>
				<p className='singlePostDesc'>{post.desc}</p>
			</div>
		</div>
	)
}

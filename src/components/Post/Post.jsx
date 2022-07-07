import { Link } from 'react-router-dom'
import './Post.css'

export default function Post({ post }) {
	return (
		<div className='post'>
			{post.photo && <img src={post.photo} alt={post.title} />}
			<div className='postInfo'>
				<div className='postCats'>
					{post.categories.map((category, i) => {
						return (
							<span className='postCat' key={i}>
								<Link
									className='link'
									to={`/posts?cat=${category.name}`}
								>
									category.name
								</Link>
							</span>
						)
					})}
				</div>
				<Link to={`/post/${post._id}`} className='link'>
					<span className='postTitle'>{post.title}</span>
				</Link>
				<hr />
				<span className='postDate'>
					{new Date(post.createdAt).toDateString()}
				</span>
			</div>
			<p className='postDesc'>{post.desc}</p>
		</div>
	)
}

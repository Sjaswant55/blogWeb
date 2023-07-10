import { Link } from 'react-router-dom';
import "./blogPreview.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <div className='blog-body-div'>{ blog.body }</div>
            <div>
            <button>
    <span>Read full blog</span>
    <svg xmlns="http://www.w3.org/2000/svg"
				     height="24px"
				     viewBox="0 0 24 24"
				     width="24px"
				     fill="none">
     <path d="M0 0h24v24H0V0z" fill="none" />
     <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
					      fill="currentColor" />
   </svg>
  </button>
            </div>
            <br />
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}


 
export default BlogList;
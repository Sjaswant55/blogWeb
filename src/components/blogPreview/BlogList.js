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
            <button className='read-full-blog'>
    <span >Read full blog</span>
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
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import "./blogPreview.css";
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const onclickDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

 

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article className="inside-blog-article">
          <h2>{ blog.title }</h2>
          <p>Written by <span>{ blog.author }</span></p>
          <div>{ blog.body }</div>
          <div className="bottom-button">
            <button ><Link to={`/userEdit/${blog.id}`} >Edit</Link> </button>
            <button onClick={onclickDelete}>delete</button>
          </div>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;
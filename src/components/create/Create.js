import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
      <div className="title-div">
        <label className="title-label" for="title">Title:</label>
        <input 
          placeholder="Enter title"
          type="text" 
          name="title"
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <br />
        <label className="desc-label">Description:</label> 
        <textarea
          placeholder="Enter Description"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <div className="author-div">
        <label className="auth-label">Author:</label>
        <input
         placeholder="Enter Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
        </input>
        </div>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;
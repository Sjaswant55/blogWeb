import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./create.css";
import { useHistory } from "react-router-dom";

const UserEdit = () => {
  const [useredit, setUserEdit] = useState({
     title : '',
     body : '',
     author : ''
  });
  
  const {id} = useParams();
  const history=useHistory();
  
   useEffect( () => {  
    const editUserId = async() =>{
        const reqData=await fetch(`http://localhost:8000/blogs/${id}`);
        const res=reqData.json();
        setUserEdit(await res);
    }
     
    editUserId();
},[id]);



  // const handleEdit = (e) => {
  //    setUserEdit({...useredit, [e.target.name]:e.target.value});
  // }
 
 
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form >
      <div className="title-div">
        <label className="title-label" for="title">Title:</label>
        <input 
          placeholder="Enter title"
          type="text" 
          name="title"
          required 
          value={useredit.title}
        />
        </div>
        <br />
        <label className="desc-label">Description:</label> 
        <textarea
          placeholder="Enter Description"
          required
          value={useredit.body}
        ></textarea>

        <br />

        <div className="author-div">
        <label className="auth-label">Author:</label>
        <input
         placeholder="Enter Your Name"
          value={useredit.author}
        >
        </input>
        </div>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default UserEdit;
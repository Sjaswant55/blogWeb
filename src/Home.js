import BlogList from "./components/blogPreview/BlogList";
import Footer from "./components/footer/Footer";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <span className="loading"></span> }
      { blogs && <BlogList blogs={blogs} /> }
      {blogs && <Footer />}
    </div>
  );
}
 
export default Home;
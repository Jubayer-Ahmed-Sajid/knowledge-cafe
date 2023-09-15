import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

function Blogs({handleBookmark}) {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])
    return (
        <div className="md:w-2/3 ">
            <h3 className="text-4xl ">blogs:{blogs.length}</h3>
            {
                blogs.map(blog => <Blog
                blog ={blog}
                key = {blog.id}
                handleBookmark={handleBookmark}>
                    </Blog>)
            }
            
        </div>
    );
}
Blogs.propTypes ={
    handleBookmark: PropTypes.func
}
export default Blogs;
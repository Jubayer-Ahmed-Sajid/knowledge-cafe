import { useEffect } from "react";
import { useState } from "react";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])
    return (
        <div className="md:w-2/3">
            <h3 className="text-4xl ">blogs:{blogs.length}</h3>
            
        </div>
    );
}

export default Blogs;
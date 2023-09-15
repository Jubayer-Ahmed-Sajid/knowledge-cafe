import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleBookmark }) => {
    const {title,cover_img,author_img,author,read_time,posted_time} = blog;
    return (
        <div>
            <img src={cover_img} alt ="" className='mb-20 w-full'/>
            <h2 className="text-4xl my-6">{title}</h2>
            <div className='flex justify-between items-center'>
                <div>
                    <div className='flex  mb-8'>
                        <img src={author_img} alt="" className='w-14 rounded-[56px] mr-6 ' />
                        <div>
                            <h3 className='text-2xl font-bold'>{author}</h3>
                            <h4 className='text-xl text-gray-400'>{posted_time}</h4>
                        </div>
                    </div>
                </div>
                <div className='flex '>
                    <h3 className='text-2xl text-gray-400'>{read_time} min reads</h3>
                    <button className='ml-2' onClick={() => handleBookmark(blog)}><FaBookmark/></button>
                </div>
            </div>

        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func
    
}
export default Blog;
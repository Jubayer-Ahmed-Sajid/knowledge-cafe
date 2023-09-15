import PropTypes from 'prop-types'
import Bookmark from './Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 bg-slate-200 ml-4 mt-4 pt-4'>
            <h4 className='text-3xl text-center'>Bookmarks:{bookmarks.length}</h4>
            {
                bookmarks.map(bookmark => <Bookmark 
                    bookmark={bookmark}
                    key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array
}
export default Bookmarks;
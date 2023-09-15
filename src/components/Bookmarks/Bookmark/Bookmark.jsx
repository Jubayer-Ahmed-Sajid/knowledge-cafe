import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div>
            <h3 className="text-3xl p-4 m-4 bg-gray-400 rounded-md">{title}</h3>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark: PropTypes.array
}

export default Bookmark;
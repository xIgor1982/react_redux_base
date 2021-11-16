import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {commentUpdate} from './redux/actions';


function SingleComment({ data }) {
    // console.log('single comment props > ', props);
    const [commentText, setCommentText] = useState('');
    const { text, id } = data;
    const dispatch = useDispatch();

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    const handleInput = (e) => {
        setCommentText(e.target.value);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        // console.log('submint ---> ', commentText);
        dispatch(commentUpdate(commentText, id));
    }

    return (
        <form onSubmit={handleUpdate} className='comments-item'>
            <div className='comments-item-delete'>&times;</div>
            <input type='text' value={commentText} onChange={handleInput} />
            <input type='submit' hidden />
        </form>
    )
}

export default SingleComment;
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid'
import { commentCreate, commentsLoad } from "./redux/actions";
import SingleComment from "./SingleComment";

function Comments(props) {
    const [textComment, setTextComment] = useState('');
    const comments = useSelector(state => {
        // console.log('redux state > ', state);
        const {commentsReducer} = state;
        return commentsReducer.comments;
    })
    // console.log('comments props > ', props);
    // console.log('comments props > ', comments);
    const dispatch = useDispatch();

    const handleInput = (event) => {
        // console.log('input >>> ', event.target.value);
        setTextComment(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('submit textComment > ', textComment);
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
    }
    // console.log('COMMENTS ---> ', comments);
    useEffect(() => {
        dispatch(commentsLoad());
    }, []);

    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type='text' value={textComment} onChange={handleInput} />
                <input type='submit' hidden />
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res} />
            })}
            
        </div>
    )
}

export default Comments;
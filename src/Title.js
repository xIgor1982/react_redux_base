import { useDispatch, useSelector } from 'react-redux';
import { inputText } from './redux/actions'

function Title(props) {
    console.log('props title > ', props);
    const text = useSelector(state => {
        // console.log('state >>>>> ', state);
        const { inputReducer } = state;
        return inputReducer.text;
    })

    const dispatch = useDispatch();

    const handleChange = (event) => {
        // console.log('handle text >> ', event.target.value);
        dispatch(inputText(event.target.value));
    }

    return (
        <div className='card-title'>
            <div className='card-title-top'>
                <input type='text' onChange={handleChange} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Title;
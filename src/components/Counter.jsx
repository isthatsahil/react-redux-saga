import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { addUp, minusDown } from '../redux/actions';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    console.log(counter)
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                Count is :: {counter}
            </div>
            <button onClick={() => dispatch(addUp())}>Increase</button>
            <button onClick={() => dispatch(minusDown())}>Decrease</button>
        </div>
    )
}

export default Counter

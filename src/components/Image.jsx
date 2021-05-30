import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiCallRequest } from "../redux/actions";

const Image = () => {
  const {fetching, dog, error} = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
        <header>
            {dog ? <img src={dog} /> : <h2>Click on the button to have dogs photos</h2>}
        </header>
        {
            fetching ? <button disabled>Fetching...</button> : 
            <button onClick={()=> dispatch(apiCallRequest())}>Get a DOG</button>
        }
        { error &&  <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
    </div>
  );
};

export default Image;

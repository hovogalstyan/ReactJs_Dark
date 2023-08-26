import React from 'react';
import useAxios from "../hooks/useAxios";
import IsLoading from "../IsLoading";
import PhotoItem from "./PhotoItem";

const Photos = () => {
    const {response, loading, error} = useAxios('https://api.slingacademy.com/v1/sample-data/photos?&limit=6')

    return (
        <div className={'photos'}>
            <div className="container">
                <div className="row">
                    {
                        response && response.photos.map(item => <PhotoItem key={item.id} item={item}/>)
                    }
                </div>
            </div>
            {loading && <IsLoading/>}
        </div>
    );
};

export default Photos;
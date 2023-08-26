import React from 'react';

const PhotoItem = ({item}) => {
    return (
        <div className={'item'}>
            <img
                src={item.url}
                alt={item.title
            }/>
            <div className={'content-text'}>
                 <h3>{item.title}</h3>
            </div>
        </div>
    );
};

export default PhotoItem;
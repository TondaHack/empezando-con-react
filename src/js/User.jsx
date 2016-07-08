import React, {PropTypes}  from 'react';

const User = ({name, img}) => {
    return (
        <article className='person'>
            <h1>{name}</h1>
            <div>
                <img alt={`${name} personal image`} src={img}/>
            </div>
        </article>
    );
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};

export default User;


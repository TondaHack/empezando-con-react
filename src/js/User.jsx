import React, {PropTypes}  from 'react';

class User extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {img, name} = this.props;

        return (
            <article className='person'>
                <h1>{name}</h1>
                <div>
                    <img alt={`${name} personal image`} src={img}/>
                </div>
            </article>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};

export default User;


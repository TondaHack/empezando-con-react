import React,{PropTypes} from 'react';

export default class EditUserName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    static propTypes = {
        changeName: PropTypes.func.isRequired
    };

    onChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    changePersonName = () => {
        const {changeName} = this.props;
        const {name} = this.state;

        if(name.length > 0) {
            changeName(name);
            this.setState({
                name: ''
            });
        }
    };

    render() {
        const {name} = this.state;

        return (
            <div>
                <div>
                    Preview: {name}
                </div>
                <br/>
                <input
                    value={name}
                    onChange={this.onChangeName}
                />
                <button onClick={this.changePersonName}>
                    Change name
                </button>
            </div>
        );
    }
}
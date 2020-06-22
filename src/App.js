import React from 'react';
let styles = {
    textAlign: 'center',
    paddingTop: '20px',
    color: 'red'
}
const id = 'myId'


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1,
            a: {
                b: 'My button'
            }
        }
    }
    click = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <div>
                <div id={id} style={styles}>
                    {this.state.counter}
                </div>
                <button onClick={this.click}>{this.state.a.b} {this.state.counter}</button>
            </div>
        );
    }
}

App.propTypes = {};

export default App;
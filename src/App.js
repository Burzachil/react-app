import React from 'react';
let styles = {textAlign: 'center', paddingTop: '20px'},
    id = 'myId';

function NextApp() {

}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1
        }
    }
    click = () => {
        console.log('click')
    }
    render() {
        return (
            <div>
                <div style={styles}>
                    {this.state.counter}
                </div>
                <button onClick={click}>Add counter</button>
            </div>
        );
    }
}

export default App;
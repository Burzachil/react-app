import React from 'react';

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
                <div style={{textAlign: 'center', paddingTop: '20px'}}>
                    {this.state.counter}
                </div>
                <button onClick={click}>Add counter</button>
            </div>
        );
    }
}

export default App;
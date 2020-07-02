import React from 'react';
import Counter from "./components/Counter/Counter";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
}


App.propTypes = {};

export default App;
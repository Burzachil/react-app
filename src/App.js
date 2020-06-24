import React from 'react';

class ShowClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <button onClick={this.props.onClick}>Показать/скрыть секундомер</button>
        );
    }
}

class StartClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: 0
        }
    }

    render() {
        return (
            <button onClick={this.props.onClick}>Запустить/остановить секундомер</button>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showClock: true,
            clockStart: false,
            time: 0,
            clockHistory: []
        }
    }

    clickShow = () => {
        this.setState({
            showClock: !this.state.showClock
        })
    }

    clickStart = () => {
        console.log(this.state.clockStart)
        if (!this.state.clockStart) {
            this.setState({
                timerRef: setInterval(() => this.setState({time: this.state.time + 1}), 100),
                clockStart: true
            })
        } else {
            console.log(this.state.time)
            clearInterval(this.state.timerRef)
            this.setState({
                clockHistory: this.state.clockHistory.concat(this.state.time),
                time: 0,
                clockStart: false
            })
            console.log(this.state.clockHistory)
        }

    }

    render() {
        return (
            <div>
                <div>{this.state.showClock && this.state.time}</div>
                <ShowClock onClick={this.clickShow}/>
                <StartClock onClick={this.clickStart}/>
                {this.clockHistory}
            </div>
        );
    }
}

App.propTypes = {};

export default App;
import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            styleDiv: {
                width: "95vw",
                height: "95vh"
            },
            styleBtn: {
                backgroundColor: "red",
                width: "200px",
                height: "200px"
            }
        };
    }

    handleClick = (e) => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    move = (e) => {
        if (this.state.isToggleOn) {
            this.setState({styleBtn: {position: "absolute",top: e.clientY - 100, left: e.clientX - 100, backgroundColor: "red",
                    width: "200px",
                    height: "200px"}})
        }
    }

    render() {
        return (
            <div onMouseMove={this.move} style={this.state.styleDiv}>
                <div onClick={this.handleClick}  style={this.state.styleBtn}>
                    {this.state.isToggleOn ? 'Включено' : 'Выключено'}
                </div>
            </div>
        );
    }
}


App.propTypes = {};

export default App;
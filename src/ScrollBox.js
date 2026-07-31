import { Component } from "react";

class ScrollBox extends Component {
    handleButtonClick = () => {
        this.box.scrollTop = 300;
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        };

        

        return (
            <div>
                <div style={style} ref={(ref) => {this.box=ref}}>
                    <div style={innerStyle} />
                </div>
                <button onClick={this.handleButtonClick}>맨아래로 이동</button>
            </div>
        );
    }
}

export default ScrollBox;
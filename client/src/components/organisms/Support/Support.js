import React, { Component } from 'react';
// import styles from './Support.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

class Support extends Component {

  state = {
    windowWidth: null,
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  updateDimensions = () => {
    const width = window.innerWidth;
    // console.log(width)
    this.setState({
      windowWidth: width,
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div style= {{ textAlign: 'center' }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSegmy62B_MihUSFd0Ov7OdmqsMkNaU1byJeWbKdK6SexeSgMA/viewform?embedded=true"
          width={this.state.windowWidth}
          height="1000"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="google-form"
        >
          로드 중...
          </iframe>
      </div>  
    );
  }
}

export default Support;

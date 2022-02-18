import React from 'react';
import { useState } from 'react';
import './App.css';

export class ReactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      subject: '',
      submitDisabled: false
    };
  
  }

  
  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  handleSubmit = (event) => {
    if (this.validate()){
      this.setState({ submitDisabled: true });
      setTimeout(() => {
          let msg = `Name: ${this.state.username }\nEmail: ${this.state.email}\nMessage: ${this.state.subject} `;
          alert(msg);
          this.setState({ submitDisabled: false });
        },3000);
        event.preventDefault(); 
    }
         
  }

  validate(){
    let input = this.state;
    console.log(input);
    let errors = {};
    let isValid = true;

    if (!input["username"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
        alert("Not a valid email");
      }
    }

    // if (!input["comment"]) {
    //   isValid = false;
    //   errors["comment"] = "Please enter your comment.";
    // }

    this.setState({
      errors: errors
    });

    return isValid;
}
 

  render() {
    return (
      
      <div className="container">
      
        <form onSubmit={this.handleSubmit} className={ this.state.submitDisabled ? 'row mainWidth inputDisabled' : 'row mainWidth' }>
          <div className="row">
            <div className="col-25">
          
              <label name="username">*Name:</label>
            </div>
            <div className="col-75">
              <input type="text" id="username" name="username" placeholder="Your name..."
                value={this.state.value} onChange={this.handleChange} required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label name="email">*Email:</label>
            </div>
            <div className="col-75">
              <input type="text" id="email" name="email" placeholder="Your email Id..."
                value={this.state.value} onChange={this.handleChange} required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label name="subject">Message:</label>
            </div>
            <div className="col-75">
              <textarea id="subject" name="subject" placeholder="Write something..." style={{ height: '200px' }}
                value={this.state.value} onChange={this.handleChange}></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" className={ this.state.submitDisabled ? 'disabledBtn' : '' } />
          </div>
        </form>
      </div>
    );
  }
}

export default ReactApp;
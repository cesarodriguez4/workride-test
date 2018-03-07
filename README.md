# Workride-Test

A simple (although demostrative) app developed in React.

# Demo
[Try Demo on Heroku](https://workride.herokuapp.com/)

### Download the repo
``$  git clone https://github.com/cesarodriguez4/workride-test ``

### Install
`` $ npm install `` (or you can `` $ yarn `` :stuck_out_tongue_winking_eye: )

### Run locally

`` $ npm start ``

### Build to production
`` $ npm run build ``

# Highlights 
- Use of reusable components:    
In this demo I've using a ``List`` component with ``props`` for usable purposes. The component is used like this:    
```
class List extends Component {
  render() {
    return (
      <div className="product">    
        <div>     
          <img alt="product" width="100" src={this.props.data['product-image-url']}/>
        </div>
        <div>
          <p className="category">{this.props.data.category}</p>
          <p className="product-name">{this.props.data['product-name']}</p>
        </div>
      </div>
    );
  }
}

export default List;
```
- Validation for passwords: 
```
import React from 'react';

class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	errorPassword: 'Password should be at minimum 8 characters',
    	required: 'This field is required',
    	reqPass: 'This field is required',
    	redirect: false
    };
    this.validationPassword = this.validationPassword.bind(this);
  }

  validationPassword() {
    const password = document.getElementById('password').value;
    password.length?this.setState({reqPass: ''}):this.setState({reqPass: 'This field is required'});
    if (password.length >= 8) {
    	return this.setState({errorPassword: ''});
    } else {
    	return this.setState({errorPassword: 'Password should be at minimum 8 characters'});
    }
  }

}

export default Sign;

```

# Author
Cesar Rodriguez, March 7th 2018.
import React, { Component } from 'react';

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

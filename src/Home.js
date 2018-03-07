import React from 'react';
import List from './components/List';
import file from './products.json';
import { Link } from 'react-router-dom';

const uid = ()=> {
 return '_' + Math.random().toString(36).substr(2, 9);
};

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Product Page</h1>
        <Link to="/">Back to Sign Page</Link>
        {
          file.products.map(i => {
            return <List key={uid()} data={i}/>
          })
        }
      </div>
    );
  }
}

export default Home;
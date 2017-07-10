import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Routes from './Routes';
import posts from '../data/posts.json';

class App extends Component {
	state = {
		projects: posts.slice(0, 12)
	};

  render() {
    return (
			<div className="wrapper">
				<Header />
				<Routes {...this.state} />
			</div>
    );
  }
}

export default App;

// state = {
// 	projects: []
// };
//
// componentDidMount () {
//   const dataAPI = 'https://jsonplaceholder.typicode.com';
//   axios.get(dataAPI + '/posts')
//     .then((response) => {
//       this.setState({
//         projects: response.data.slice(0, 7)
//       });
//     })
//     .catch( (error) => {
//       console.log(error);
//     }
//   );
// }



// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import routes from './RoutesObject';
//
// const App = () => {
//   return (
// 		<div className="wrapper">
// 			<Router>
// 	      {renderRoutes(routes)}
// 	    </Router>
// 		</div>
//   );
// }
//
// export default App;

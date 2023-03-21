import './App.css';
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Hero from './components/hero/Hero';
import Home from './components/Home';
import { Route } from 'react-router-dom';

import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
function App() {
	return (
		<div className='App'>
			<Header />

			<Route path='/' component={Hero} exact />
			<div className='container container-fluid'>
				<Route path='/' component={Home} exact />
			</div>

			<Route path='/products' component={Products} exact />

			<Route path='/product/:id' component={ProductDetail} exact />
		</div>
	);
}

export default App;

import './App.css';
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Hero from './components/hero/Hero';
import Home from './components/Home';
import { Route } from 'react-router-dom';
function App() {
	return (
		<div className='App'>
			<Header />
			<Route path='/' component={Hero} exact />
			<div className='container container-fluid'>
				<Route path='/' component={Home} exact />
			</div>
		</div>
	);
}

export default App;

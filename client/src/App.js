import './App.css';
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Hero from './components/hero/Hero';

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
		</div>
	);
}

export default App;

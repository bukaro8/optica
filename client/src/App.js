import './App.css';
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Hero from './components/hero/Hero';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Login from './components/user/Login';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Register from './components/user/Register';
// import { loadUser } from './REDUX/actions';
// import store from './REDUX/store';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './components/admin/Dashboard';
import NotFoundPage from './components/NotFoundPage';
import ProductList from './components/admin/ProductList';
import CreateProduct from './components/admin/CreateProduct';
function App({ history }) {
	const userAuth = useSelector((state) => state.user.role);

	return (
		<div className='App'>
			<Header />

			<Route path='/' component={Hero} exact />
			<div className='container container-fluid'>
				<Route path='/' component={Home} exact />
			</div>

			<Route path='/products' component={Products} exact />

			<Route path='/product/:id' component={ProductDetail} exact />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />

			<Route path='/dashboard'>
				{userAuth === 'admin' ? <Dashboard /> : <NotFoundPage />}
			</Route>
			<Route path='/admin/products'>
				{userAuth === 'admin' ? <ProductList /> : <NotFoundPage />}
			</Route>
			<Route path='/admin/product/create'>
				{userAuth === 'admin' ? <CreateProduct /> : <NotFoundPage />}
			</Route>
		</div>
	);
}

export default App;

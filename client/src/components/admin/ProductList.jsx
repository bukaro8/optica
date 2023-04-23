import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Metadata from '../Metadata';

import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, deleteProduct } from '../../REDUX/actions';

import { Table, Popconfirm, Button } from 'antd';
const ProductList = ({ history }) => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	const [gridData, setGridData] = useState([]);
	useEffect(() => {
		dispatch(getAllProducts());
		products && setGridData(products);
	}, [dispatch, products]);
	const handleDelete = (value) => {
		dispatch(deleteProduct(value._id));
		const result = [...products];
		setGridData(result);
	};
	const handleEdit = (e) => {
		console.log(e);
	};
	const [columns, setColumns] = useState([
		{
			title: 'ID',
			dataIndex: '_id',
		},
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Price',
			dataIndex: 'price',
		},
		{
			title: 'Stock',
			dataIndex: 'stock',
		},
		{
			title: 'Action',
			dataIndex: 'action',
			align: 'center',
			render: (_, record) => {
				return gridData ? (
					<div>
						<Popconfirm
							title={`Are you sure you want to delete? `}
							onConfirm={() => handleDelete(record)}
						>
							<Button danger type='primary'>
								<i className='bi bi-trash'></i>
							</Button>
						</Popconfirm>
						<Popconfirm
							title={`Edit ${record.name}? `}
							onConfirm={() => handleEdit(record)}
						>
							<Button success type='primary'>
								<i class='bi bi-pencil-square'></i>
							</Button>
						</Popconfirm>
					</div>
				) : (
					<span></span>
				);
			},
		},
	]);

	return (
		<>
			<Metadata title={'Admin Products'} />
			<Table columns={columns} dataSource={gridData} bordered />
		</>
	);
};

export default ProductList;

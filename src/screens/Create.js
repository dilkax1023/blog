import React, { useContext } from 'react';
import BlogForm from '../components/BlogForm';
import { Context } from '../context';

const Create = ({ navigation }) => {
	const { addBlog } = useContext(Context);

	const onSubmit = (title, content) => {
		addBlog(title, content, () => navigation.pop());
	};

	return <BlogForm onSubmit={onSubmit} />;
};

export default Create;

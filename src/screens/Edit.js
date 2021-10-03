import React, { useContext } from 'react';
import BlogForm from '../components/BlogForm';
import { Context } from '../context';

const Edit = ({ navigation }) => {
	const { state, editBlog } = useContext(Context);
	const id = navigation.getParam('id');

	const blogPost = state.find((blog) => blog.id === id);

	const onSubmit = (title, content) => {
		editBlog(id, title, content, () => navigation.pop());
	};

	return <BlogForm onSubmit={onSubmit} blog={blogPost} />;
};

export default Edit;

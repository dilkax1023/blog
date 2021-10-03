import createContextProvider from './createContextProvider';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_BLOG':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 999999),
					title: action.payload.title,
					content: action.payload.content,
				},
			];
		case 'DELETE_BLOG':
			return state.filter((blog) => blog.id !== action.payload);

		case 'EDIT_BLOG':
			return state.map((item) => {
				if (item.id === action.payload.id) {
					return action.payload;
				}
				return item;
			});
		default:
			return state;
	}
};

const addBlog = (dispatch) => {
	return (title, content, callBack) => {
		dispatch({ type: 'ADD_BLOG', payload: { title, content } });
		callBack();
	};
};

const deleteBlog = (dispatch) => {
	return (id) => {
		dispatch({ type: 'DELETE_BLOG', payload: id });
	};
};

const editBlog = (dispatch) => {
	return (id, title, content, callBack) => {
		dispatch({ type: 'EDIT_BLOG', payload: { id, title, content } });
		callBack();
	};
};

export const { Context, Provider } = createContextProvider(blogReducer, { addBlog, deleteBlog, editBlog }, []);

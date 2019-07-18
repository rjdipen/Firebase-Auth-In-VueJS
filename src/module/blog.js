import axios from 'axios';

    const state = {
            blogs: [],
    };
    const getters ={
            allBlog: state => state.blogs
    };
    const actions = {
        //Get all Blog Post
        async fatchBlog({ commit }){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            commit('setBlog',response.data)
        },
        //Add new Blog Post

        async addBlogPost({ commit },title) {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
                { title}
            );
            //console.log(response.data);
            commit('newBlog', response.data);

        },
        async updateBlogPost({ commit }, updatePost) {
            const response = await axios.put(
                `https://jsonplaceholder.typicode.com/todos/${updatePost.id}`,
                updatePost
            );

            //console.log(response.data);

            commit('updateBlog', response.data);
        },
        //Delete Blog Post
        async deleteBlog({ commit },id){
            await axios.delete('https://jsonplaceholder.typicode.com/posts/$(id)');
            commit('removeBlog',id)
        }
    };
    const mutations = {
        setBlog:(state,blogs) =>(state.blogs = blogs),
        newBlog:(state,blog)=> state.blogs.unshift(blog),
        removeBlog:(state,id) => (state.blogs = state.blogs.filter(blog => blog.id !== id)),
        updateBlog: (state, updatePost) => {
            const index = state.blogs.findIndex(blog => blog.id === updatePost.id);
            if (index !== -1) {
                state.blogs.splice(index, 1, updatePost);
            }
        }
    };

    export default {
            state,
            getters,
            mutations,
            actions
    };


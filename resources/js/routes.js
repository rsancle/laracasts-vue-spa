import Home from './components/Home.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Blog from './components/Blog.vue';
import Contact from './components/Contact.vue';
import NotFound from './components/NotFound.vue';

export default {
    mode: "history",
    linkActiveClass: 'font-bold',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/projects',
            component: Projects
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/contact',
            component: Contact
        },
    ]
};

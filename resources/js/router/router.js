import {createRouter, createWebHistory} from 'vue-router';
import Container from "../views/layout/Container";
import Register from "../views/auth/Register";
import Login from "../views/auth/Login";
import UserProfile from "../views/pages/UserProfile";
import Dashboard from "../views/pages/Dashboard";
import About from "../views/pages/About";
import News from "../views/pages/News";
import Posters from "../views/pages/Posters";
import ResetPassword from "../views/auth/ResetPassword";
import ForgotPassword from "../views/auth/ForgotPassword";
import middleware from "../middleware/middleware";
import store from "../store";
import middlewarePipeline from "../router/middlewarePipeline";

const routes = [
    {
        path: '/',
        name: Container,
        component: Container
    },
    {
        path: '/register',
        name: Register,
        component: Register
    },
    {
        path: '/login',
        name: Login,
        component: Login
    },
    {
        path: '/dashboard',
        name: Dashboard,
        component: Dashboard,
        meta: {
            middleware: [middleware.auth]
        }
    },
    {
        path: '/about',
        name: About,
        component: About
    },
    {
        path: '/news',
        name: News,
        component: News
    },
    {
        path: '/posters',
        name: Posters,
        component: Posters
    },
    {
        path: '/profile',
        name: UserProfile,
        component: UserProfile,
        meta: {
            middleware: [middleware.auth]
        }
    },
    {
        path: '/forgot-password',
        name: ForgotPassword,
        component: ForgotPassword
    },
    {
        path: '/reset-password/:token',
        name: ResetPassword,
        component: ResetPassword
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next();
    }

    const middleware = to.meta.middleware;
    const context = {
        to,
        from,
        next,
        store
    };

    return middleware[0] ({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    });
});

export default router

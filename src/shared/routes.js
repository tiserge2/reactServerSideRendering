import Home from "./home/Home"
import News from "./news/News"
import About from "./about/About"
import Login from "./login/Login"
import Register from "./register/Register"

const routes = [
    {
        path: "/news",
        component: News
    },
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    }
]

export default  routes
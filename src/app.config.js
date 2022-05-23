import About from "./views/about";
import Blog from "./views/blog";
import Comingsoon from "./views/comingsoon";
import Error from "./views/error";
import Forum from "./views/forum";
import Home from "./views/home";
import Privacy from "./views/privacy";
import Service from "./views/service";
import Store from "./views/store";

const ERRORS = {
    "401":{
        backLink: "/",
        backName:"Home",
        code:"401",
        text: "You are not authorized to access this resource"
    },
    "404":{
        backLink: "/",
        backName:"Home",
        code:"404",
        text: "Page not found"
    }
}

const PATHS = [
    {menuItem:true,menuName:"Home",path:"/",component:<Home/>},
    {menuItem:true,menuName:"About",path:"/about",component:<About/>},
    {menuItem:true,menuName:"Blog",path:"/blog",component:<Blog/>},
    {menuItem:true,menuName:"Service",path:"/service",component:<Service/>},
    {menuItem:true,menuName:"Store",path:"/store",component:<Store/>},
    {menuItem:false,menuName:"",path:"/comingsoon",component:<Comingsoon/>},
    {menuItem:false,menuName:"",path:"/privacy",component:<Privacy/>},
    {menuItem:false,menuName:"",path:"*",component:<Error errorData={ERRORS['404']}/>}
];

const APP_LINKS = {
    messages: "",
    users: ""
};

export {
    APP_LINKS,
    ERRORS,
    PATHS
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// 1. 创建router实例对象并且配置路由对应关系
const router = createBrowserRouter([
    {
        path: "/login",
        element: <div>我是登录页</div>
    },
    {
        path: "/article",
        element: <div>我是文章页</div>
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 2. 路由绑定
    <RouterProvider router={router}/>
);



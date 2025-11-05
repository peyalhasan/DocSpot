import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./Home";
import About from "./About";
import Doctors from "./Doctors";



export const Router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/home',
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: 'doctor',
                Component: Doctors,
                loader: () => fetch('data.json')
            }
        ]
    }
])
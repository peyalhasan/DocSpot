import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./Home";
import About from "./About";
import Doctors from "./Doctors";
import Loader from "./Loader";
import Details from "./Details";
import Appointment from "./Appointment";



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
                path: '/doctor',
                Component: Doctors,
                loader: () => fetch('data.json'),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/doctors/:id',
                Component: Details,
                loader: async ({ params }) => {
                    const pid = parseInt(params.id)
                    const data = await fetch('/data.json');
                    const res = await data.json();
                    const doctor = res.find((doc) => doc.id === pid);
                    return doctor
                },
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/appointment',
                Component: Appointment
            }
        ]
    }
])
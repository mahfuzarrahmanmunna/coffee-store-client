import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Components/Home";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import CoffeeDetails from "../Components/CoffeeDetails";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Users from "../Components/Users";
import Users_2 from "../Components/Users_2";
import PrivateRoutes from "../Private/PrivateRoutes";
import LoadingSpinner from "../Components/LoadingSpinner";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        children: [
            {
                index: true,
                loader: () => fetch('https://coffee-store-server-two-red.vercel.app/coffees'),
                Component: Home,
                hydrateFallbackElement: <LoadingSpinner />
            },
            {
                path: 'add-coffee',
                element: <PrivateRoutes>
                    <AddCoffee />
                </PrivateRoutes>
            },
            {
                path: 'update-coffee/:id',
                Component: UpdateCoffee,
                loader: ({ params }) => fetch(`https://coffee-store-server-two-red.vercel.app/coffees/${params.id}`)
            },
            {
                path: 'coffee-details/:id',
                Component: CoffeeDetails,
                loader: ({ params }) => fetch(`https://coffee-store-server-two-red.vercel.app/coffees/${params.id}`),
            },
            {
                path: '/sign-in',
                Component: SignIn
            },
            {
                path: '/sign-up',
                Component: SignUp
            },
            {
                path: '/users',
                Component: Users,
                loader: () => fetch('https://coffee-store-server-two-red.vercel.app/users'),
            },

            {
                path: '/users_2',
                Component: Users_2,
                // loader: () => fetch('https://coffee-store-server-two-red.vercel.app/users'),
            },

        ]
    }
])
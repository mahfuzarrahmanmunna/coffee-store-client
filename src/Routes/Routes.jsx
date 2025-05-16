import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Components/Home";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import CoffeeDetails from "../Components/CoffeeDetails";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/coffees'),
                Component: Home,
                hydrateFallbackElement: <p>Loading..</p>
            },
            {
                path: 'add-coffee',
                Component: AddCoffee
            },
            {
                path: 'update-coffee/:id',
                Component: UpdateCoffee,
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`)
            },
            {
                path: 'coffee-details/:id',
                Component: CoffeeDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
            },
            {
                path: '/sign-in',
                Component: SignIn
            },
            {
                path: '/sign-up',
                Component: SignUp
            }
        ]
    }
])
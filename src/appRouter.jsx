import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Home, Login } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
]);

export default router;

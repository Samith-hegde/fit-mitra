import App from '../App.jsx'
import Register from '../pages/Register.jsx'
import Login from '../pages/Login.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import ProtectedRoute from './protectedRoute.jsx'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <ProtectedRoute children={<Dashboard />}/> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },
        ]
    }
]

export default routes
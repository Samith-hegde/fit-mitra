import App from '../App.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import ProtectedRoute from './protectedRoute.jsx'

const authRoutes = [
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <ProtectedRoute children={<Dashboard />}/> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
        ]
    }
]

export default authRoutes
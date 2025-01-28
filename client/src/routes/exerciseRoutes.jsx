import App from '../App.jsx'
import ProtectedRoute from './protectedRoute.jsx'
import Exercises from '../pages/Exercises.jsx'

const exerciseRoutes = [
    {
        element: <App />,
        children: [
            { path: '/exercises', element: <ProtectedRoute children={<Exercises />}/> },
        ]
    }
]

export default exerciseRoutes
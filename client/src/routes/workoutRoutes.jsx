import App from '../App.jsx'
import ProtectedRoute from './protectedRoute.jsx'
import Workouts from '../pages/Workouts.jsx'

const exerciseRoutes = [
    {
        element: <App />,
        children: [
            { path: '/workouts', element: <ProtectedRoute children={<Workouts />}/> },
        ]
    }
]

export default exerciseRoutes


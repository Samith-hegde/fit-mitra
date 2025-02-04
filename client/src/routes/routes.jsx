import App from '../App.jsx'
import authRoutes from './authRoutes.jsx'
import profileRoutes from './profileRoutes.jsx'
import exerciseRoutes from './ExerciseRoutes.jsx'
import workoutRoutes from './WorkoutRoutes.jsx'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            ...authRoutes,
            ...profileRoutes,
            ...exerciseRoutes,
            ...workoutRoutes
        ]
    }
]

export default routes
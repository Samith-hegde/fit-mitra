import App from '../App.jsx'
import ProtectedRoute from './protectedRoute.jsx'
import Workouts from '../pages/Workouts.jsx'
import StartWorkout from '../pages/StartWorkout.jsx'

const workoutRoutes = [
    {
        element: <App />,
        children: [
            { path: '/workouts', element: <ProtectedRoute children={<Workouts />}/> },
            { path: '/startWorkout', element: <ProtectedRoute children={<StartWorkout />}/> }
        ]
    }
]

export default workoutRoutes


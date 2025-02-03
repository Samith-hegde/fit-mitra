import App from '../App.jsx'
import ProtectedRoute from './protectedRoute.jsx'
import Exercises from '../pages/Exercises.jsx'
import CreateExercise from '../pages/CreateExercise.jsx'

const exerciseRoutes = [
    {
        element: <App />,
        children: [
            { path: '/exercises', element: <ProtectedRoute children={<Exercises />}/> },
            { path: '/exercises/create', element: <ProtectedRoute children={<CreateExercise />}/> },
        ]
    }
]

export default exerciseRoutes
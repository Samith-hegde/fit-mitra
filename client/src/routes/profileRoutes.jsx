import App from '../App.jsx'
import Profile from '../pages/Profile.jsx'
import EditProfile from '../pages/EditProfile.jsx'
import ProtectedRoute from './protectedRoute.jsx'

const profileRoutes = [
    {
        element: <App />,
        children: [
            { path: '/profile', element: <ProtectedRoute children={<Profile />}/> },
            { path: '/profile/edit', element: <ProtectedRoute children={<EditProfile />}/> },
        ]
    }
]

export default profileRoutes
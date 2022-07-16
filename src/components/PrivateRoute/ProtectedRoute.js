import {Navigate} from 'react-router-dom';
import useAuth from '../../hook/UseAuth';

export default function ProtectedRoute({children}) {
    const {user} = useAuth();

    return user.email ? children : <Navigate to="/login" />;
};


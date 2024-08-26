import { Route, Navigate } from 'react-router-dom';
import {useAuth}  from '../Contexts/AuthContext';
export default function PublicRoute({ element: Element, ...rest }) {

    const {currentUser} = useAuth();

    return !currentUser ? (
        Element
    ) : (
        <Navigate to="/" />
    )
}
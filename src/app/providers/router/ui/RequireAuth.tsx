import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthPropsType {
    children: JSX.Element
}

export const RequireAuth = ({ children }: RequireAuthPropsType) => {
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};

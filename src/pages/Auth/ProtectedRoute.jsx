import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '../../components/layout/main-layout/MainLayout';
import useAuth from '../../hooks/useAuth';

const ProtectedRoute = () => {
    useAuth();

    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    )
};

export default ProtectedRoute;

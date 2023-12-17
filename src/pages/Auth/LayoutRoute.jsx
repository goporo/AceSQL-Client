import MainLayout from 'components/layout/main-layout/MainLayout'
import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const LayoutRoute = () => {
    return (
        <MainLayout>
            <Outlet />
            <ScrollRestoration />
        </MainLayout>
    )
}

export default LayoutRoute
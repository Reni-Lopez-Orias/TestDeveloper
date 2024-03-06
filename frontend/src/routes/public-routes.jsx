import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';

//mui
import { CircularProgress } from '@mui/material';

//components
import { AuthPage } from '../pages/auth-page/AuthPage';

export const PublicRoutes = () => {

    return (
        <Routes>
            <Route
                path='/auth'
                element={
                    <Suspense fallback={<CircularProgress />}>
                        <AuthPage />
                    </Suspense>
                }
            />

            <Route
                path="/*"
                element={<AuthPage />}
            />

        </Routes>
    )
}

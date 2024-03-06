import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

//mui
import CircularProgress from '@mui/material/CircularProgress';

//components
import { TodosPages } from '../pages/todos-page/TodosPages';

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path='/todos'
        element={
          <Suspense fallback={<CircularProgress />}>
            <TodosPages />
          </Suspense>
        }
      />

      <Route
        path="/*"
        element={<TodosPages />}
      />

    </Routes>
  )
}

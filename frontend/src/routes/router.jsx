import React from 'react';
import { useData } from '../context/contextData';

//components
import { PublicRoutes } from './public-routes';
import { PrivateRoutes } from './private-routes';
import { useEffect } from 'react';

export const Router = () => {

  const { data, setData } = useData();

  useEffect(() => {

    let userSesion = sessionStorage.getItem('user');
    if(userSesion){
      userSesion = JSON.parse(userSesion);
      setData({...data,isAuth: true, user: userSesion});
    }
    
  }, [])

  return (
    <>

      {
        !data.isAuth ?
          <PublicRoutes /> :
          <PrivateRoutes />
      }

    </>
  )
}

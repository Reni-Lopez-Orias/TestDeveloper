import React from 'react';

import './todosPage.css';

//mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

//components
import { CustomTable } from '../../components/table/CustomTable';
import { ModalForm } from '../../components/modal-form/ModalForm';

//context
import { useData } from '../../context/contextData';

//firebase
import { firebaseApp } from '../../firebase/firebase';
import { getAuth, signOut } from 'firebase/auth';

const resetContext = {
  isAuth: false,
  user: null,
  openModal: false,
  loading: false,
  todos: [],
  msg_error: '',
  msg_success: ''
}

export const TodosPages = () => {

  const { data, setData } = useData();

  const logOut = async () => {
    const auth = getAuth(firebaseApp);
    await signOut(auth);
    setData(resetContext);
    sessionStorage.clear();
  }

  return (
    <Box className='container'>

      <ModalForm />

      <Box className='container-user-btnLogout' >

        <Typography variant='h4'>
          Welcome {data.user.userName}
        </Typography>
        <Button onClick={() => logOut()} variant="contained" color='error' >Logout</Button>

      </Box>

      <Box sx={{ mt: 2, mb: 1 }}>
        <Button onClick={() => setData({ ...data, openModal: true })} variant="contained" color='success' sx={{ borderRadius: '16px' }}>New <AddIcon /></Button>
      </Box>

      <CustomTable />

    </Box>
  )
}

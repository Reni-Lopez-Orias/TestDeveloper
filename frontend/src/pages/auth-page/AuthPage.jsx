import React from 'react'
import './authPage.css'

//mui
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

//context
import { useData } from '../../context/contextData'

//services
import { registerUser } from '../../services/users.service'
import { signInApple, signInGoogle } from '../../services/firebase.service'
import { successNotification } from '../../services/notifications.service'

export const AuthPage = () => {

    const { data, setData } = useData();

    const signInWithGoogle = async () => {

        const response = await signInGoogle();
        if (response){

            setData({ ...data, isAuth: true, user: response });

            const userResponse = await registerUser(response);
            if(userResponse.data){
                successNotification(userResponse.message);
            }

        }

    }

    const signInWithApple = async () => {

        const response = await signInApple();
        if (response)
            setData({ ...data, isAuth: true, user: response });

    }

    return (
        <Box className="container-auth">
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Authentication
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Button onClick={signInWithGoogle} ><GoogleIcon /></Button>
                        <Button onClick={signInWithApple} ><AppleIcon /> </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

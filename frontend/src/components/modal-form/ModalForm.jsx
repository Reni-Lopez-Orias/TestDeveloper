import React from 'react';
import { Controller, useForm } from "react-hook-form";

import './modalForm.css';

//mui
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//conetext
import { useData } from '../../context/contextData';

//service
import { createTask } from '../../services/tasks.service';
import { successNotification } from '../../services/notifications.service';

export const ModalForm = () => {

    const { data, setData } = useData();
    const { control, handleSubmit, formState: { errors }, reset, register } = useForm();

    const onSubmit = async (task) => {
        
        const todosResponse =  await createTask(task);
        if(!todosResponse.error){

            let newArray = [...data.todos];
            newArray.unshift(todosResponse.data);
            setData({...data, todos: newArray, openModal: false});
            successNotification(todosResponse.message);
            reset();    
        }
        
    };

    return (
        <Modal
            open={data.openModal}
            onClose={() => setData({ ...data, openModal: false })}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box className='container-modal'>
            
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className="form-group">
                        <Controller
                            name="title"
                            defaultValue={""}
                            control={control}
                            rules={{
                                required: { value: true, message: 'This field is required' },
                                maxLength: { value: 251, message: 'Only 250 characters' },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    name="title"
                                    label="Title"
                                    helperText={errors?.title?.message}
                                    error={errors?.title?.message && true}
                                />
                            )}
                        />
                    </Box>

                    <Box className="form-group">
                        <Controller
                            name="description"
                            defaultValue={""}
                            control={control}
                            rules={{
                                required: { value: true, message: 'This field is required' },
                                maxLength: { value: 251, message: 'Only 250 characters' },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    name="description"
                                    label="Description"
                                    helperText={errors?.description?.message}
                                    error={errors?.description?.message && true} />
                            )}
                        />
                    </Box>

                    <Box className="form-group checkbox-container">
                        <label>Completed:</label>
                        <input {...register("completed")} type="checkbox" defaultChecked={false} />
                    </Box>

                    <Box className="form-group" sx={{ textAlign: "right" }}>
                        <Button type="submit" variant="contained">Submit</Button>
                    </Box>
                    
                </form>
            </Box>
        </Modal>
    );
};

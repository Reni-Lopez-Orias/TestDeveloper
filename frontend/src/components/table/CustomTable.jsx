import React, { useEffect } from 'react';

//mui
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import TableContainer from '@mui/material/TableContainer';

//utils
import { formatDate } from '../../utils/util';

//context
import { useData } from '../../context/contextData';

//servies
import { deleteTask, getAllTasks, updateTask } from '../../services/tasks.service';
import { errorNotificacion, notificationDelete, successNotification } from '../../services/notifications.service';

export const CustomTable = () => {

    const { data, setData } = useData();

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        const todosResponse = await getAllTasks();

        if (!todosResponse.error)
            setData({ ...data, todos: todosResponse.data })
        else
            errorNotificacion(todosResponse.message);
    }

    const handleUpdate = async (task, check) => {
        task.completed = check;

        const todosResponse = await updateTask(task);
        if (!todosResponse.error)
            successNotification(todosResponse.message);
        else
            errorNotificacion(todosResponse.message);

    }

    const handleDelete = async (id_todo, index) => {
        if (await notificationDelete()) {

            const todosResponse = await deleteTask(id_todo);
            if (!todosResponse.error) {

                data.todos.splice(index, 1);
                successNotification(todosResponse.message);
                setData({ ...data, todos: data.todos });

            }
            else
                errorNotificacion(todosResponse.message);
        }

    }
    console.log(data?.todos);
    return (
        <div>

            {
                data?.todos.length !== 0 ?
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Created At</TableCell>
                                    <TableCell>Completed</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.todos.map((todo, index) => (
                                    <TableRow key={todo.id}>
                                        <TableCell className="text-capitalize">{todo.title}</TableCell>
                                        <TableCell className="text-capitalize">{todo.description}</TableCell>
                                        <TableCell>{formatDate(todo.created_at)}</TableCell>
                                        <TableCell><input type="checkbox" onClick={() => handleUpdate(todo, !todo.completed)} defaultChecked={todo.completed} /></TableCell>
                                        <TableCell><DeleteIcon onClick={() => handleDelete(todo.id, index)} sx={{ cursor: 'pointer' }} /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </TableContainer>
                    :
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ mt: 5 }} variant='h4'>
                            There are no records to show!
                        </Typography>
                    </Box>

            }

        </div>
    );
}

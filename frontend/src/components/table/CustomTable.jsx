import React from 'react';

//mui
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Pagination from '@mui/material/Pagination';
import DeleteIcon from '@mui/icons-material/Delete';
import TableContainer from '@mui/material/TableContainer';

import Swal  from "sweetalert2";

export const CustomTable = ({ todos }) => {

    const handleDelete = (todo) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(todo);
                Swal.fire({
                    title: "Deleted!",
                    text: "Task has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div>
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
                        {todos.map((todo, index) => (
                            <TableRow key={index}>
                                <TableCell>{todo.title}</TableCell>
                                <TableCell>{todo.description}</TableCell>
                                <TableCell>{todo.created_at.toLocaleDateString()}</TableCell>
                                <TableCell><input type="checkbox" defaultChecked={todo.completed} /></TableCell>
                                <TableCell><DeleteIcon onClick={() => handleDelete(todo)} sx={{ cursor: 'pointer' }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>

            <Box sx={{ mt: 1 }}>
                <Pagination />
            </Box>

        </div>
    );
}

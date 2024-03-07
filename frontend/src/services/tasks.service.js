

const apiUrl = 'http://127.0.0.1:8000/tasks/v1/task/';

export const getAllTasks = async () => {
    try {

        const response = await fetch(apiUrl);
        const data = await response.json();

        return data;

    } catch (error) {
        console.log(error);
    }
}

export const createTask = async (task) => {
    try {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        };

        const response = await fetch(`${apiUrl}`, options);
        const data = await response.json();

        return data;

    } catch (error) {
        console.log(error);
    }
}

export const updateTask = async (task) => {
    try {

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        };

        const response = await fetch(`${apiUrl}${task.id}/`, options);
        const data = await response.json();

        return data

    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = async (id_task) => {
    try {

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(`${apiUrl}${id_task}/`, options);
        const data = await response.json();

        return data;

    } catch (error) {
        console.log(error);
    }
}
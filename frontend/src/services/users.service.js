
const apiUrl = 'http://127.0.0.1:8000/users/v1/user/'

export const registerUser = async (user) => {
    try {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        };

        const response = await fetch(`${apiUrl}`, options);
        const data = await response.json();

        return data;

    } catch (error) {
        console.log(error);
    }
}
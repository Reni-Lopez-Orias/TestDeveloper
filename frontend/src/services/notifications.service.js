import Swal from "sweetalert2";

export const notificationDelete = async () => {
    let confirm = false;
    await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed)
            confirm = true
    });

    return confirm;
}

export const successNotification = (message) => {
    Swal.fire({
        title: "Good job!",
        text: `${message}`,
        icon: "success"
    });
}

export const errorNotificacion = (message) => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message ? message : 'Something went wrong!',
    });
}
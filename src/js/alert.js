import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: "top-center",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});



export function showSmallAlertSuccess(mesaage) {
    Toast.fire({
        icon: "success",
        title: mesaage
    });
}
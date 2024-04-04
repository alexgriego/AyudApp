import Swal from 'sweetalert2'

export const successMessage = (titulo: string, mensaje: string) => {
    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: 'success',
        timer: 2000,
        allowOutsideClick: false,
        allowEscapeKey: false,
        timerProgressBar: true,
        showConfirmButton: false
    })
}

export const errorMessage = (data: any) => {
    const errorArray = data;
    let errorMessage = ''
    try {
        for (const field in errorArray) {
            if (errorArray.hasOwnProperty(field)) {
                errorMessage += `${field}: ${errorArray[field].join(', ')}\n`;
            }
        }
    } catch (error) {
        errorMessage = errorArray.detail
    }
    return Swal.fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
        allowOutsideClick: false,
        allowEscapeKey: false,
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    })
}

export const warningMessage = (title: string, message: string) => {
    return Swal.fire({
        icon: 'warning',
        title: title,
        text: message,
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        allowOutsideClick: false
    }).then((result) => {
        return result.isConfirmed
    })
}
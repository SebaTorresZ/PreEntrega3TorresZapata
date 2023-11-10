class Persona {
    constructor(name, email, service, office, date, time) {
        this.name = name;
        this.email = email;
        this.service = service;
        this.office = office;
        this.date = date;
        this.time = time;
    }
}

const personasArray = [];

function validateFields(fields) {
    return function() {
        let isEmpty = false;
        const formData = {};

        for (const field of fields) {
            const value = document.getElementById(field).value;
            if (value === '') {
                isEmpty = true;
                break;
            }

            formData[field] = value;
        }

        if (isEmpty) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, complete todos los campos.'
            });
            document.getElementById('appointment-form').reset();
        } else {
            Swal.fire({
                icon: 'question',
                title: 'Confirmar cita',
                text: '¿Estás seguro de agendar esta cita?',
                showCancelButton: true,
                confirmButtonText: 'Sí, agendar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Éxito',
                        text: 'Hora agendada correctamente.'
                    });

                    const nuevaPersona = new Persona(
                        formData.name,
                        formData.email,
                        formData.service,
                        formData.office,
                        formData.date,
                        formData.time
                    );

                    personasArray.push(nuevaPersona);

                    console.log('Datos de la persona:', nuevaPersona);
                    console.log('Todas las personas agregadas:', personasArray);

                    document.getElementById('appointment-form').reset();
                } else {
                    Swal.fire({
                        icon: 'info',
                        title: 'Información',
                        text: 'La cita no fue agendada, vuelva a rellenar los campos.'
                    });
                }
            });
        }
    };
}

const validateForm = validateFields(['name', 'email', 'service', 'office', 'date', 'time']);

function submitForm() {
    validateForm();
}

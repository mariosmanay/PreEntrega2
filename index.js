let materias = {
    Matematica: ['Pedro', 'Carla', 'Roberto', 'Juliana', 'Aldana'],
    Quimica: ['Mariano', 'Maria', 'Roberto', 'Romina'],
    Fisica: ['Ruben', 'Maria', 'Marcos', 'Juliana', 'Romina'],
    Lengua: ['Carlos', 'Sonia', 'Roberto']
}


function inscripcion(alumno, materia) {
    personas = materias[materia];
    if (personas.length >= 10) {
        return `${alumno} las inscripciones a ${materia} estan llenas`
    } else {
        personas.push(alumno)
        if (materia == 'Matematica') {
            materias = {
                Matematica: personas,
                Quimica: materias['Quimica'],
                Fisica: materias['Fisica'],
                Lengua: materias['Lengua']
            }
        }
        if (materia == 'Quimica') {
            materias = {
                Matematica: materias['Matematica'],
                Quimica: personas,
                Fisica: materias['Fisica'],
                Lengua: materias['Lengua']
            }
        }
        if (materia == 'Fisica') {
            materias = {
                Matematica: materias['Matematica'],
                Quimica: materias['Quimica'],
                Fisica: personas,
                Lengua: materias['Lengua']
            }
        }
        if (materia == 'Lengua') {
            materias = {
                Matematica: materias['Matematica'],
                Quimica: materias['Quimica'],
                Fisica: materias['Fisica'],
                Lengua: personas
            }
        }
    }
    return `Felicitaciones ${alumno}, te inscribiste en ${materia}`
}

console.log(inscripcion('Matias', 'Matematica'))
console.log(inscripcion('Nahuel', 'Lengua'))
console.log(inscripcion('Martina', 'Quimica'))
console.log(inscripcion('Martin', 'Fisica'))
console.log(inscripcion('Sabrina', 'Matematica'))
console.log(inscripcion('Carla', 'Fisica'))
console.log(inscripcion('Santiago', 'Lengua'))
console.log(inscripcion('Tomas', 'Matematica'))
console.log(inscripcion('Florencia', 'Fisica'))
console.log(inscripcion('Gonzalo', 'Matematica'))
console.log(inscripcion('Julia', 'Quimica'))

console.table(materias)
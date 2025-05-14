export const PROJECT_STATES = {
    PENDING: "#ffd500", // yellow
    IN_PROGRESS: "#FFA500", // orange
    COMPLETED: "#36c536", // green
    CANCELLED: "#ce3535" // red
};

// For tables
export const COLUMNS_FOR_USERS_TABLE = [
    { name: "NOMBRE", uid: "firstName" },
    {name: "APELLIDO", uid: "lastName"},
    { name: "CORREO", uid: "email" },
    { name: "CARRERA", uid: "program" },
    { name: "ACCIONES", uid: "actions" },
];

export const PROGRAM_COLOR_MAP = {
         ing_bio: "success",
        ing_amb: "success",
        ing_qui: "success",
        ing_pet: "success",
        ing_sis: "warning",
        ing_mec: "warning",
        ing_civ: "warning",
        ing_ind: "warning",
        ing_ele: "warning",
}

export const PROGRAMS = [
    { uid: "ing_sis", name: "Ingeniería de Sistemas" },
    { uid: "ing_pet", name: "Ingeniería de Petróleos" },
    { uid: "ing_ind", name: "Ingeniería Industrial" },
    { uid: "ing_qui", name: "Ingeniería Química" },
    { uid: "ing_ele", name: "Ingeniería Electrónica" },
    { uid: "ing_mec", name: "Ingeniería Mecánica" },
    { uid: "ing_civ", name: "Ingeniería Civil" },
    { uid: "ing_amb", name: "Ingeniería Ambiental" },
    { uid: "ing_bio", name: "Ingeniería Biomédica" },
    { uid: "ing_ene", name: "Ingeniería Eléctrica" },
];
import { Paciente } from "./paciente";
import { psicologo } from "./psicologo";
import { Tratamiento } from "./tratamiento";

export class Citas{
    hora : String
    fecha : String
    idPaciente : String
    codigoAgenda: String;
    motivo : String;
    tratamiento : Tratamiento;
    duracion: number;
    paciente : Paciente;
    psicologo : psicologo;
}
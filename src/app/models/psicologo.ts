import { Agenda } from "./agenda";
import { Especialidad } from "./especialidad";
import { Persona } from "./persona";

export class psicologo {
    codigoPsicologo : string;
    persona: Persona;
    salario: number;
    especialidad : Especialidad;
    agendas : Agenda[]
}
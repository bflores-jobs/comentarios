import { Region } from "./region";

export class Comentario {

    constructor(
        public correo : string,
        public region : Region,
        public comentario : string
    ){}

}

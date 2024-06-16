import { AutoMap } from "@automapper/classes";

export class Pessoa {
    @AutoMap()
    id: string;

    @AutoMap()
    nome: string;
}

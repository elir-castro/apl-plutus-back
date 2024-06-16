import { IsNotEmpty, IsString } from "class-validator";

export class AdicionarPessoaRequest {
    @IsNotEmpty()
    @IsString()
    nome: string;
}

export class AdicionarPessoaResponse {
    id: string;
    nome: string;
}

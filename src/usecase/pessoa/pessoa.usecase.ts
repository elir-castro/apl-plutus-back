import { IPessoaUseCase } from "@/domain/contract/usecase/pessoa.interface";
import { Pessoa } from "@/domain/entity/pessoa.model";

import { Injectable } from "@nestjs/common";

@Injectable()
export class PessoaUseCase implements IPessoaUseCase {
    constructor() {}

    async adicionarPessoa(input: Pessoa): Promise<Pessoa> {
        input.id = "2K0X84M830";

        await new Promise(resolve => setTimeout(resolve, 3000));

        return input;
    }
    removerPessoa(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

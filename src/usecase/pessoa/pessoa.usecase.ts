import { IPessoaRepository } from "@/domain/contract/repository/pessoa.interface";
import { IPessoaUseCase } from "@/domain/contract/usecase/pessoa.interface";
import { Pessoa } from "@/domain/entity/pessoa.model";

import { Injectable } from "@nestjs/common";

@Injectable()
export class PessoaUseCase implements IPessoaUseCase {
    constructor(private _pessoaRepository: IPessoaRepository) {}

    async adicionarPessoa(input: Pessoa): Promise<Pessoa> {
        return await this._pessoaRepository.save(input);
    }

    async obterPessoas(): Promise<Pessoa[]> {
        return await this._pessoaRepository.findAll();
    }

    async obterPessoaPorId(id: string): Promise<Pessoa | null> {
        return await this._pessoaRepository.findById(id);
    }

    removerPessoa(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

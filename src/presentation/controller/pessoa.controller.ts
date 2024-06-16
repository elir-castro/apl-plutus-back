import { IPessoaUseCase } from "@/domain/contract/usecase/pessoa.interface";
import { Pessoa } from "@/domain/entity/pessoa.model";
import { AdicionarPessoaRequest, AdicionarPessoaResponse } from "@/presentation/dto/pessoa/adicionar-pessoa.dto";
import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { created, serverError } from "../helpers/http-helper";
import { mapper } from "../mapper/base.mapper";

@Controller("pessoa")
export class PessoaController {
    constructor(private _pessoaUseCase: IPessoaUseCase) {}

    @Post()
    async adicionarPessoa(@Body() input: AdicionarPessoaRequest, @Res() res: Response): Promise<any> {
        try {
            const pessoa: Pessoa = mapper.map(input, AdicionarPessoaRequest, Pessoa);
            const pessoaAdicionada = await this._pessoaUseCase.adicionarPessoa(pessoa);
            const output = mapper.map(pessoaAdicionada, Pessoa, AdicionarPessoaResponse);
            return created(output, res);
        } catch (error) {
            return serverError(error, res);
        }
    }
}

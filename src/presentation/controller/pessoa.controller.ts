import { IPessoaUseCase } from "@/domain/contract/usecase/pessoa.interface";
import { Pessoa } from "@/domain/entity/pessoa.model";
import { AdicionarPessoaRequest, AdicionarPessoaResponse } from "@/presentation/dto/pessoa/adicionar-pessoa.dto";
import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { ObterPessoaResponse } from "../dto/pessoa/obter-pessoas.dto";
import { created, notFound, ok, serverError } from "../helpers/http-helper";
import { mapper } from "../mapper/base.mapper";
import { ObterPessoaPorIdResponse } from "../dto/pessoa/obter-pessoa-por-id.dto";

@Controller("pessoa")
export class PessoaController {
    constructor(private _pessoaUseCase: IPessoaUseCase) {}

    @Post()
    async adicionarPessoa(@Body() input: AdicionarPessoaRequest, @Res() res: Response): Promise<any> {
        try {
            // const erros = await await validate(input);
            // if (erros.length > 0) {
            //     return badRequest(
            //         {
            //             message: "Input invalido",
            //             name: "bad request",
            //             stack: erros.toString(),
            //         },
            //         res,
            //     );
            // }
            const pessoa: Pessoa = mapper.map(input, AdicionarPessoaRequest, Pessoa);
            const pessoaAdicionada = await this._pessoaUseCase.adicionarPessoa(pessoa);
            const output = mapper.map(pessoaAdicionada, Pessoa, AdicionarPessoaResponse);
            return created(output, res);
        } catch (error) {
            return serverError(error, res);
        }
    }

    @Get()
    async obterPessoas(@Res() res: Response): Promise<any> {
        try {
            const pessoas = await this._pessoaUseCase.obterPessoas();
            const output = pessoas.map(entity => mapper.map(entity, Pessoa, ObterPessoaResponse));
            return ok(output, res);
        } catch (error) {
            return serverError(error, res);
        }
    }

    @Get(":id")
    async obterPessoaPorId(@Param("id") id: string, @Res() res: Response): Promise<any> {
        try {
            const pessoa = await this._pessoaUseCase.obterPessoaPorId(id);
            if (!pessoa) {
                return notFound(res);
            }

            const output = mapper.map(pessoa, Pessoa, ObterPessoaPorIdResponse);
            return ok(output, res);
        } catch (error) {
            return serverError(error, res);
        }
    }
}

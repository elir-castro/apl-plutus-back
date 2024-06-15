import {
  AdicionarPessoaRequest,
  AdicionarPessoaResponse,
} from '@/presentation/dto/pessoa/adicionar-pessoa.dto';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { created } from '../helpers/http-helper';

@Controller('pessoa')
export class PessoaController {
  constructor() {}

  @Post()
  async adicionarPessoa(
    @Body() adicionarPessoa: AdicionarPessoaRequest,
    @Res() res: Response,
  ): Promise<any> {
    const pessoa: AdicionarPessoaResponse = new AdicionarPessoaResponse();
    pessoa.nome = adicionarPessoa.nome;
    return created(pessoa, res);
  }
}

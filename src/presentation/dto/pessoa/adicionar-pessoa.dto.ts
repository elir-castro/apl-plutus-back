import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AdicionarPessoaRequest {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  idade: number;
}

export class AdicionarPessoaResponse {
  nome: string;
  idade: string;
}

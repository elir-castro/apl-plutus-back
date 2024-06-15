import { Module } from '@nestjs/common';
import { PessoaController } from './controller/pessoa.controller';

@Module({
  imports: [],
  controllers: [PessoaController],
})
export default class PresentationModule {}

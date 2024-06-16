import { Module } from "@nestjs/common";
import { PessoaController } from "./controller/pessoa.controller";
import UseCaseModule from "@/usecase/usecase.module";

@Module({
    imports: [UseCaseModule],
    controllers: [PessoaController],
})
export default class PresentationModule {}

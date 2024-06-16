import { IPessoaUseCase } from "@/domain/contract/usecase/pessoa.interface";
import InfrastructureModule from "@/infrastructure/infrastructure.module";
import { Module } from "@nestjs/common";
import { PessoaUseCase } from "./pessoa/pessoa.usecase";

@Module({
    imports: [InfrastructureModule],
    providers: [{ provide: IPessoaUseCase, useClass: PessoaUseCase }],
    exports: [IPessoaUseCase],
})
export default class UseCaseModule {}

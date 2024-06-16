import { IPessoaRepository } from "@/domain/contract/repository/pessoa.interface";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { PessoaEntity } from "./entity/pessoa.entity";
import { PessoaRepository } from "./repository/pessoa/pessoa.repository";
@Module({
    imports: [MikroOrmModule.forFeature([PessoaEntity])],
    providers: [{ provide: IPessoaRepository, useClass: PessoaRepository }],
    exports: [IPessoaRepository],
})
export default class InfrastructureModule {}

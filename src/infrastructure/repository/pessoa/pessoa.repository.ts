import { IPessoaRepository } from "@/domain/contract/repository/pessoa.interface";
import { Pessoa } from "@/domain/entity/pessoa.model";
import { PessoaEntity } from "@/infrastructure/entity/pessoa.entity";
import { mapper } from "@/presentation/mapper/base.mapper";
import { EntityManager, EntityRepository, ObjectId } from "@mikro-orm/mongodb";
import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PessoaRepository implements IPessoaRepository {
    constructor(
        @InjectRepository(PessoaEntity)
        private readonly pessoaRepository: EntityRepository<PessoaEntity>,
    ) {}

    async save(pessoa: Pessoa): Promise<Pessoa> {
        const novoRegistro: PessoaEntity = mapper.map(pessoa, Pessoa, PessoaEntity);
        await this.pessoaRepository.insert(novoRegistro);

        const registroSalvo: Pessoa = mapper.map(novoRegistro, PessoaEntity, Pessoa);
        return registroSalvo;
    }

    async findAll(): Promise<Pessoa[]> {
        const pessoas = await this.pessoaRepository.findAll();
        return pessoas.map(entity => mapper.map(entity, PessoaEntity, Pessoa));
    }
    async findById(id: string): Promise<Pessoa | null> {
        const pessoa = await this.pessoaRepository.findOne({ _id: new ObjectId(id) });
        return pessoa ? mapper.map(pessoa, PessoaEntity, Pessoa) : null;
    }
}

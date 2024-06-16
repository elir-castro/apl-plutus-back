import { Pessoa } from "@/domain/entity/pessoa.model";

export abstract class IPessoaRepository {
    abstract save(categoria: Pessoa): Promise<Pessoa>;
    abstract findAll(): Promise<Pessoa[]>;
    abstract findById(id: string): Promise<Pessoa | null>;
}

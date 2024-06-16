import { Pessoa } from "@/domain/entity/pessoa.model";

export abstract class IPessoaUseCase {
    abstract adicionarPessoa(input: Pessoa): Promise<Pessoa>;
    abstract obterPessoas(): Promise<Pessoa[]>;
    abstract obterPessoaPorId(id: string): Promise<Pessoa | null>;
    abstract removerPessoa(id: string): Promise<void>;
}

import { Pessoa } from "@/domain/entity/pessoa.model";
import { AdicionarPessoaRequest, AdicionarPessoaResponse } from "@/presentation/dto/pessoa/adicionar-pessoa.dto";

export abstract class IPessoaUseCase {
    abstract adicionarPessoa(input: Pessoa): Promise<Pessoa>;
    abstract removerPessoa(id: string): Promise<void>;
}

import { Pessoa } from "@/domain/entity/pessoa.model";
import { classes } from "@automapper/classes";
import { createMap, createMapper, forMember, mapFrom } from "@automapper/core";
import { AdicionarPessoaRequest, AdicionarPessoaResponse } from "@/presentation/dto/pessoa/adicionar-pessoa.dto";

export const mapper = createMapper({
    strategyInitializer: classes(),
});

// #region Pessoa
createMap(
    mapper,
    AdicionarPessoaRequest,
    Pessoa,
    forMember(
        destination => destination.nome,
        mapFrom(source => source.nome),
    ),
);

createMap(
    mapper,
    Pessoa,
    AdicionarPessoaResponse,
    forMember(
        destination => destination.id,
        mapFrom(source => source.id),
    ),
    forMember(
        destination => destination.nome,
        mapFrom(source => source.nome),
    ),
);

// #endregion

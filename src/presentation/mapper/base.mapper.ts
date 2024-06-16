import { Pessoa } from "@/domain/entity/pessoa.model";
import { classes } from "@automapper/classes";
import { createMap, createMapper, forMember, mapFrom } from "@automapper/core";
import { AdicionarPessoaRequest, AdicionarPessoaResponse } from "@/presentation/dto/pessoa/adicionar-pessoa.dto";
import { PessoaEntity } from "@/infrastructure/entity/pessoa.entity";
import { ObjectId } from "@mikro-orm/mongodb";
import { ObterPessoaResponse } from "../dto/pessoa/obter-pessoas.dto";
import { ObterPessoaPorIdResponse } from "../dto/pessoa/obter-pessoa-por-id.dto";

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
);

createMap(
    mapper,
    Pessoa,
    PessoaEntity,
    forMember(
        destination => destination._id,
        mapFrom(source => new ObjectId(source.id)),
    ),
    forMember(
        destination => destination.nome,
        mapFrom(source => source.nome),
    ),
);

createMap(
    mapper,
    PessoaEntity,
    Pessoa,
    forMember(
        destination => destination.id,
        mapFrom(source => source._id.toHexString()),
    ),
    forMember(
        destination => destination.nome,
        mapFrom(source => source.nome),
    ),
);

createMap(
    mapper,
    Pessoa,
    ObterPessoaResponse,
    forMember(
        destination => destination.id,
        mapFrom(source => source.id),
    ),
    forMember(
        destination => destination.nome,
        mapFrom(source => source.nome),
    ),
);

createMap(
    mapper,
    Pessoa,
    ObterPessoaPorIdResponse,
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

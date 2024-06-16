import { PessoaEntity } from "@/infrastructure/entity/pessoa.entity";
import { MongoDriver, Options } from "@mikro-orm/mongodb";

const config: Options = {
    entities: [PessoaEntity],
    dbName: "my-db-name",
    driver: MongoDriver,
    clientUrl: "mongodb://localhost:27017",
};

export default config;

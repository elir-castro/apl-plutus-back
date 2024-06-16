import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";

@Entity()
export class PessoaEntity {
    @PrimaryKey()
    _id: ObjectId;

    @SerializedPrimaryKey()
    id!: string;

    @Property()
    nome!: string;
}

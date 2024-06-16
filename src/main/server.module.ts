import DomainModule from "@/domain/domain.module";
import InfrastructureModule from "@/infrastructure/infrastructure.module";
import PresentationModule from "@/presentation/presentation.module";
import UseCaseModule from "@/usecase/usecase.module";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import config from "../../mikro-orm.config";

@Module({
    imports: [ConfigModule.forRoot(), MikroOrmModule.forRoot(config), InfrastructureModule, PresentationModule, DomainModule, UseCaseModule],
    providers: [],
})
export class ServerModule {}

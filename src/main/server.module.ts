import DomainModule from "@/domain/domain.module";
import InfrastructureModule from "@/infrastructure/infrastructure.module";
import PresentationModule from "@/presentation/presentation.module";
import UseCaseModule from "@/usecase/usecase.module";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ConfigModule.forRoot(), InfrastructureModule, PresentationModule, DomainModule, UseCaseModule],
    providers: [],
})
export class ServerModule {}

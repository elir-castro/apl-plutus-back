import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ServerModule } from "./server.module";
import { MikroORM } from "@mikro-orm/mongodb";

async function bootstrap(): Promise<void> {
    console.log("[Servidor]: Ambiente Desenvolvimento.");

    const app = await NestFactory.create(ServerModule);

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            forbidNonWhitelisted: true,
        }),
    );

    const port = 3000;
    const host = "127.0.0.1";

    MikroORM.init();

    await app.listen(port, host);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

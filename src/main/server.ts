import { NestFactory } from '@nestjs/core';
import { ServerModule } from './server.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  console.log('[Servidor]: Ambiente Desenvolvimento.');

  const app = await NestFactory.create(ServerModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const port = 3000;
  const host = '127.0.0.1';

  await app.listen(port, host);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

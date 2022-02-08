import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('PORT');
  app.enableCors({
    origin: '*',
    credentials: true,
  });
  await app.listen(port || 8000);
}
bootstrap();

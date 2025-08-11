import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*",
    methods: "GET,POST,PUT,PATCH,HEAD,DELETE",
    headers: "Content-Type, Accept, Authorization",
    credentials: true,
  })

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();

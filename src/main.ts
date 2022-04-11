import { NestFactory } from "@nestjs/core";
import { AppModule } from "./root/app.module";
import { port } from "config.json";
import * as cors from "cors";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cors());
  await app.listen(port);
}
bootstrap();

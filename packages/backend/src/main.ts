import {NestFactory} from '@nestjs/core'
import {HighlighterModule} from './highlighterModule'
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(HighlighterModule, new FastifyAdapter())
  const config = new DocumentBuilder().setTitle('Jennie').setVersion('1.0').build()
  app.setGlobalPrefix('api/v1')
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  await app.listen(5000)
}
bootstrap()

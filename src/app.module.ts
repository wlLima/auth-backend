import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';

import { User } from './users/user.entity'
import { Type } from './type/type.entity'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //faz com que o .env seja importando globalmente para que não seja necessário importar em outros modulos
      envFilePath: '.env'
    }), 
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      entities: [User, Type],
      migrations: [],
     // synchronize: true, //aplica qualquer alteração dos entities ao banco de dados
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

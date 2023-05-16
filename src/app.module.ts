import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
    imports: [
        ConfigModule.forRoot(),
        AuthModule,
        MongooseModule.forRoot(
            'mongodb+srv://shakil:wFezz7caBJuh50tI@cluster0.kvp24.mongodb.net/',
        ),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST || 'localhost',
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            username: process.env.DB_USERNAME,
            entities: [User],
            synchronize: true,
        }),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

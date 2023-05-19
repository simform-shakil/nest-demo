import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { GenreModule } from './genre/genre.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(
            'mongodb+srv://shakil:wFezz7caBJuh50tI@cluster0.kvp24.mongodb.net/',
        ),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST || 'localhost',
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            username: process.env.DB_USERNAME,
            entities: [],
            synchronize: true,
        }),
        UserModule,
        BookModule,
        GenreModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

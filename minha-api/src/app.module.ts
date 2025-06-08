import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunoModule } from './aluno/aluno.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/aluno'),
    AlunoModule,
  ],
})
export class AppModule {}

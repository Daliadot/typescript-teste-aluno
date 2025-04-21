import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './aluno/aluno.entity';
import { AlunoModule } from './aluno/aluno.module';
@Module({
imports: [
TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: '', // ou '123', dependendo do seu XAMPP
database: 'meu_banco',
entities: [Aluno],
synchronize: true, // em produção, mude para false
}),
AlunoModule,
],
})
export class AppModule {}
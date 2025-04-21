import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './aluno.entity';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
@Module({
 imports: [TypeOrmModule.forFeature([Aluno])], // <-- aqui está a mágica!
 providers: [AlunoService],
 controllers: [AlunoController],
})
export class AlunoModule {}
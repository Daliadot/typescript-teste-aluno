import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';
import { AlunoSchema } from './aluno.schema';

@Module({
 imports: [
    MongooseModule.forFeature([{ name: 'Aluno', schema: AlunoSchema}])
], 
 providers: [AlunoService],
 controllers: [AlunoController],
})
export class AlunoModule {}
import { Controller, Get } from '@nestjs/common';
import { AlunoService } from './aluno.service';
@Controller('aluno')
export class AlunoController {
 constructor(private readonly alunoService: AlunoService) {}
 @Get()
 findAll() {
 return this.alunoService.findAll();
 }
}

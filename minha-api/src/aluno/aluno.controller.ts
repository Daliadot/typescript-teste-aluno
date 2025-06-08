import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { Aluno } from './aluno.schema';

@Controller('aluno')
export class AlunoController {
 constructor(private readonly alunoService: AlunoService) {}
 
 @Get()
 findAll() {
 return this.alunoService.findAll();
 }

 @Post()
 create(@Body() data: Partial<Aluno>) {
    return this.alunoService.create(data);
 }

 @Get(':id')
 findOne(@Param('id') id: string) {
    return this.alunoService.findOne(id);
 }

 @Put(':id')
 update(@Param('id') id: string, @Body() data: Partial<Aluno>) {
    return this.alunoService.update(id, data);
 }

 @Delete(':id')
 delete(@Param('id') id: string) {
    return this.alunoService.delete(id);
 }
}

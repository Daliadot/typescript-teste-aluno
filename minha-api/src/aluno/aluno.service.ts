import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from './aluno.entity';
@Injectable()
export class AlunoService {
 constructor(
 @InjectRepository(Aluno)
 private AlunoRepository: Repository<Aluno>,
 ) {}
 findAll(): Promise<Aluno[]> {
 return this.AlunoRepository.find();
 }
}
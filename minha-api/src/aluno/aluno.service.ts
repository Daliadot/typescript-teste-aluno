import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AlunoDocument } from './aluno.schema'; 
import { Aluno } from './aluno.schema'; 

@Injectable()
export class AlunoService {
  constructor(
    @InjectModel('Aluno') private readonly alunoModel: Model<AlunoDocument>, 
  ) {}

  async create(data: Partial<Aluno>): Promise<AlunoDocument> {
    const novoAluno = new this.alunoModel(data);
    return novoAluno.save();
  }

  async findAll(): Promise<AlunoDocument[]> {
    return this.alunoModel.find().exec();
  }

  async findOne(id: string): Promise<AlunoDocument> {
    const aluno = await this.alunoModel.findById(id).exec();
    if (!aluno) {
      throw new NotFoundException(`Aluno com id ${id} não encontrado`);
    }
    return aluno;
  }

  async update(id: string, data: Partial<Aluno>): Promise<AlunoDocument> {
    const alunoAtualizado = await this.alunoModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!alunoAtualizado) {
      throw new NotFoundException(`Aluno com id ${id} não encontrado`);
    }
    return alunoAtualizado;
  }

  async delete(id: string): Promise<void> {
    const resultado = await this.alunoModel.findByIdAndDelete(id).exec();
    if (!resultado) {
      throw new NotFoundException(`Aluno com id ${id} não encontrado`);
    }
  }
}

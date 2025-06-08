import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Aluno } from './aluno.schema';

@Injectable()
export class AlunoService {
  constructor(
    @InjectModel('aluno') private readonly alunoModel: Model<Aluno>,
  ) {}

  async create(data: Partial<Aluno>): Promise<Aluno> {
    const novoaluno = new this.alunoModel(data);
    return novoaluno.save();
  }

  async findAll(): Promise<Aluno[]> {
    return this.alunoModel.find().exec();
  }

  async findOne(id: string): Promise<Aluno> {
    const aluno = await this.alunoModel.findById(id).exec();
    if (!aluno) {
      throw new NotFoundException(`aluno com id ${id} não encontrado`);
    }
    return aluno;
  }

  async update(id: string, data: Partial<Aluno>): Promise<Aluno> {
    const alunoAtualizado = await this.alunoModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!alunoAtualizado) {
      throw new NotFoundException(`aluno com id ${id} não encontrado`);
    }
    return alunoAtualizado;
  }

  async delete(id: string): Promise<void> {
    const resultado = await this.alunoModel.findByIdAndDelete(id).exec();
    if (!resultado) {
      throw new NotFoundException(`aluno com id ${id} não encontrado`);
    }
  }
}

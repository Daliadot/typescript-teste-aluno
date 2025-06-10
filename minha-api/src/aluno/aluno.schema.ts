import { Schema, Document } from 'mongoose';

export interface Aluno {
  nome: string;
  idade: number;
  escola: string;
}

export interface AlunoDocument extends Aluno, Document {}

export const AlunoSchema = new Schema<Aluno>({
  nome: { type: String, required: true },
  idade: { type: Number },
  escola: { type: String, required: true },
});

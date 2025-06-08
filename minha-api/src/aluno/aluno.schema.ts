import { Schema, Document } from 'mongoose';

export const AlunoSchema = new Schema({
    nome: {type: String, required: true },
    idade: { type: Number},
    escola: { type: String, required: true},
});

export interface Aluno extends Document {
    id: string;
    nome: string;
    idade: number;
    escola: string;
}
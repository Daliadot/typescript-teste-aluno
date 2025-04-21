import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('alunos')// nome da tabela no banco de dados
export class Aluno {
@PrimaryGeneratedColumn()
id: number;
@Column()
nome: string;
@Column()
escola: string;
}

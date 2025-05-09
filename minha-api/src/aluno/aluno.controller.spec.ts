import { Test, TestingModule } from '@nestjs/testing';
import { AlunoController } from './aluno.controller';

describe('AlunoController', () => {
  let controller: AlunoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlunoController],
    }).compile();

    controller = module.get<AlunoController>(AlunoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

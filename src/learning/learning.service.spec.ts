import { Test, TestingModule } from '@nestjs/testing';
import { LearningService } from './learning.service';

describe('LearningService', () => {
  let service: LearningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearningService],
    }).compile();

    service = module.get<LearningService>(LearningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return "I am a learner!"', () => {
    expect(service.getLearner()).toEqual('I am a learner!');
  });
});

import { Injectable } from '@nestjs/common';

@Injectable()
export class LearningService {
  getLearner(): string {
    return 'I am a learner!';
  }
}

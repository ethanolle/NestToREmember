import { Injectable } from '@nestjs/common';

@Injectable()
export class LearningService {
  getLearner(): string {
    return 'Ethan is Learning!';
  }
}

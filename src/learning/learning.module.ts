import { Module } from '@nestjs/common';
import { LearningController } from './learning.controller';
import { LearningService } from './learning.service';

@Module({})
export class LearningModule {
  controllers: [LearningController];
  //   providers: [LearningService];
}

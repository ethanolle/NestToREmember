import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LearningController } from './learning/learning.controller';
import { LearningService } from './learning/learning.service';
import { LearningModule } from './learning/learning.module';

@Module({
  imports: [LearningModule],
  controllers: [AppController, LearningController],
  providers: [AppService, LearningService],
})
export class AppModule {}

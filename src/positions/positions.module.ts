import { Module } from '@nestjs/common';
import { PositionsController } from './positions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from './position.entity';
import { PositionsService } from './positions.service';
import { PositionsRepository } from './positions.repository';

@Module({
  controllers: [PositionsController],
  providers: [PositionsService, PositionsRepository],
  imports: [TypeOrmModule.forFeature([Position])],
})
export class PositionModule {}

import { Module } from '@nestjs/common';
import { PositionsController } from './positions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from './position.entity';

@Module({
  controllers: [PositionsController],
  imports: [TypeOrmModule.forFeature([Position])],
})
export class PositionModule {}

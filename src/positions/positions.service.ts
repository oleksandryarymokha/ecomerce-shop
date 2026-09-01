import { Injectable } from '@nestjs/common';
import { PositionsRepository } from './positions.repository';
import { Position } from './position.entity';

@Injectable()
export class PositionsService {
  private readonly positionRepository: PositionsRepository;

  async create(position: Position): Promise<Position> {
    return await this.positionRepository.save(position);
  }

  async findById(id: number): Promise<Position | null> {
    return await this.positionRepository.findById(id);
  }

  async deleteById(id: number): Promise<void> {
    await this.positionRepository.deleteById(id);
  }
}

import { Equal, Repository } from 'typeorm';
import { Position } from './position.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PositionsRepository {
  constructor(
    @InjectRepository(Position)
    private readonly repository: Repository<Position>,
  ) {}

  async save(position: Position): Promise<Position> {
    return this.repository.save(position);
  }

  async findAll(cartId: number): Promise<Position[]> {
    return await this.repository.find({
      relations: {
        cart: true,
      },
      where: {
        cart: Equal(cartId),
      },
    });
  }

  async findById(id: number): Promise<Position | null> {
    return this.repository.findOneBy({ id });
  }

  async deleteById(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

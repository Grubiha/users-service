import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async resetProblems(): Promise<{ updated: number }> {
    const result = await this.userRepository.update(
      { hasProblems: true },
      { hasProblems: false },
    );
    return { updated: result.affected || 0 };
  }
}

import { faker } from '@faker-js/faker';
import { User } from 'src/users/users.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class GenerateUsers1732824072478 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const users: User[] = Array.from({ length: 1000000 }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 14, max: 99 }),
      gender: faker.person.sex(),
      hasProblems: faker.datatype.boolean(),
    }));

    await queryRunner.manager.getRepository('User').save(users);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('User').clear();
  }
}

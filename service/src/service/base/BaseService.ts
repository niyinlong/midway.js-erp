import { Repository, FindOptionsWhere, FindManyOptions, QueryRunner } from 'typeorm';
import { InjectRepository } from '@midwayjs/typeorm';
import { BaseEntity } from 'typeorm';
import { Logger } from '@midwayjs/logger';
import { Inject } from '@midwayjs/core';

/**
 * 通用Service基类，提供CRUD操作方法
 */
export class BaseService<T extends BaseEntity> {
  protected repository: Repository<T>;

  @Inject()
  protected logger: Logger;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  /**
   * 根据ID查找单个实体
   * @param id 实体ID
   * @returns 实体对象或undefined
   */
  async findById(id: string | number): Promise<T | undefined> {
    return this.repository.findOne({ where: { id } as FindOptionsWhere<T> });
  }

  /**
   * 查找满足条件的所有实体
   * @param options 查询选项
   * @returns 实体列表
   */
  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  /**
   * 根据条件查找单个实体
   * @param where 查询条件
   * @returns 实体对象或undefined
   */
  async findOne(where: FindOptionsWhere<T>): Promise<T | undefined> {
    return this.repository.findOne({ where });
  }

  /**
   * 统计满足条件的实体数量
   * @param where 查询条件
   * @returns 实体数量
   */
  async count(where?: FindOptionsWhere<T>): Promise<number> {
    return this.repository.count({ where });
  }

  /**
   * 创建新实体
   * @param entity 实体对象
   * @param queryRunner 可选的查询运行器（用于事务）
   * @returns 创建的实体
   */
  async create(entity: Partial<T>, queryRunner?: QueryRunner): Promise<T> {
    const newEntity = this.repository.create(entity);
    if (queryRunner) {
      return queryRunner.manager.save(newEntity);
    }
    return this.repository.save(newEntity);
  }

  /**
   * 批量创建实体
   * @param entities 实体对象数组
   * @param queryRunner 可选的查询运行器（用于事务）
   * @returns 创建的实体数组
   */
  async createBatch(entities: Partial<T>[], queryRunner?: QueryRunner): Promise<T[]> {
    const newEntities = this.repository.create(entities);
    if (queryRunner) {
      return queryRunner.manager.save(newEntities);
    }
    return this.repository.save(newEntities);
  }

  /**
   * 更新实体
   * @param id 实体ID
   * @param updateData 更新数据
   * @param queryRunner 可选的查询运行器（用于事务）
   * @returns 更新后的实体或undefined
   */
  async update(id: string | number, updateData: Partial<T>, queryRunner?: QueryRunner): Promise<T | undefined> {
    const entity = await this.findById(id);
    if (!entity) {
      return undefined;
    }

    const updatedEntity = this.repository.merge(entity, updateData);
    if (queryRunner) {
      return queryRunner.manager.save(updatedEntity);
    }
    return this.repository.save(updatedEntity);
  }

  /**
   * 根据条件更新实体
   * @param where 查询条件
   * @param updateData 更新数据
   * @returns 更新的实体数量
   */
  async updateByCondition(where: FindOptionsWhere<T>, updateData: Partial<T>): Promise<number> {
    const result = await this.repository.update(where, updateData);
    return result.affected || 0;
  }

  /**
   * 删除实体
   * @param id 实体ID
   * @param queryRunner 可选的查询运行器（用于事务）
   * @returns 是否删除成功
   */
  async delete(id: string | number, queryRunner?: QueryRunner): Promise<boolean> {
    if (queryRunner) {
      const result = await queryRunner.manager.delete(this.repository.target, id);
      return (result.affected || 0) > 0;
    }
    const result = await this.repository.delete(id);
    return (result.affected || 0) > 0;
  }

  /**
   * 根据条件删除实体
   * @param where 查询条件
   * @returns 删除的实体数量
   */
  async deleteByCondition(where: FindOptionsWhere<T>): Promise<number> {
    const result = await this.repository.delete(where);
    return result.affected || 0;
  }

  /**
   * 执行分页查询
   * @param page 页码（从1开始）
   * @param pageSize 每页数量
   * @param where 查询条件
   * @param order 排序规则
   * @returns 分页查询结果
   */
  async findWithPagination(
    page: number = 1,
    pageSize: number = 10,
    where?: FindOptionsWhere<T>,
    order: Record<string, 'ASC' | 'DESC'> = { id: 'DESC' }
  ): Promise<{ data: T[]; total: number; page: number; pageSize: number; pages: number }> {
    const skip = (page - 1) * pageSize;
    const [data, total] = await this.repository.findAndCount({
      where,
      order,
      skip,
      take: pageSize,
    });

    return {
      data,
      total,
      page,
      pageSize,
      pages: Math.ceil(total / pageSize),
    };
  }
}
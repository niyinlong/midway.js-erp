import { BaseContext } from '@midwayjs/koa';
import { BaseService } from '../../service/base/BaseService';
import { BaseEntity } from 'typeorm';
import { Logger } from '@midwayjs/logger';
import { Inject } from '@midwayjs/core';

/**
 * 通用响应格式
 */
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  code?: number;
}

/**
 * 分页查询参数
 */
export interface PaginationQuery {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}

/**
 * 通用Controller基类
 */
export abstract class BaseController<T extends BaseEntity> {
  protected service: BaseService<T>;

  @Inject()
  protected logger: Logger;

  /**
   * 构造函数，注入Service
   */
  constructor(service: BaseService<T>) {
    this.service = service;
  }

  /**
   * 统一成功响应
   */
  protected success(
    ctx: BaseContext,
    data?: any,
    message: string = '操作成功'
  ): void {
    ctx.body = {
      success: true,
      message,
      data,
    };
    ctx.status = 200;
  }

  /**
   * 统一错误响应
   */
  protected error(
    ctx: BaseContext,
    message: string,
    code: number = 400,
    error?: any
  ): void {
    ctx.body = {
      success: false,
      message,
      error: error?.message || error,
      code,
    };
    ctx.status = code;
  }

  /**
   * 根据ID获取单个实体
   */
  async getById(ctx: BaseContext): Promise<void> {
    try {
      const { id } = ctx.params;
      const entity = await this.service.findById(id);

      if (!entity) {
        return this.error(ctx, '资源不存在', 404);
      }

      this.success(ctx, entity);
    } catch (err) {
      this.logger.error(`获取资源失败: ${err.message}`, err);
      this.error(ctx, '获取资源失败', 500, err);
    }
  }

  /**
   * 获取实体列表（支持分页）
   */
  async list(ctx: BaseContext): Promise<void> {
    try {
      const query = ctx.query as any;
      const page = parseInt(query.page) || 1;
      const pageSize = parseInt(query.pageSize) || 10;

      // 构建查询条件
      const where: any = {};
      // 移除分页相关参数
      delete query.page;
      delete query.pageSize;
      delete query.sortBy;
      delete query.sortOrder;

      // 添加其他查询条件
      Object.keys(query).forEach(key => {
        where[key] = query[key];
      });

      // 构建排序
      const order: Record<string, 'ASC' | 'DESC'> = {};
      if (query.sortBy) {
        order[query.sortBy] = query.sortOrder || 'DESC';
      } else {
        order.id = 'DESC';
      }

      const result = await this.service.findWithPagination(
        page,
        pageSize,
        where,
        order
      );
      this.success(ctx, result);
    } catch (err) {
      this.logger.error(`获取资源列表失败: ${err.message}`, err);
      this.error(ctx, '获取资源列表失败', 500, err);
    }
  }

  /**
   * 创建新实体
   */
  async create(ctx: BaseContext): Promise<void> {
    try {
      const entityData = ctx.request.body;
      const entity = await this.service.create(entityData);
      this.success(ctx, entity, '创建成功');
    } catch (err) {
      this.logger.error(`创建资源失败: ${err.message}`, err);
      this.error(ctx, '创建资源失败', 500, err);
    }
  }

  /**
   * 更新实体
   */
  async update(ctx: BaseContext): Promise<void> {
    try {
      const { id } = ctx.params;
      const updateData = ctx.request.body;

      // 不允许更新id
      if (updateData.id) {
        delete updateData.id;
      }

      const entity = await this.service.update(id, updateData);

      if (!entity) {
        return this.error(ctx, '资源不存在', 404);
      }

      this.success(ctx, entity, '更新成功');
    } catch (err) {
      this.logger.error(`更新资源失败: ${err.message}`, err);
      this.error(ctx, '更新资源失败', 500, err);
    }
  }

  /**
   * 删除实体
   */
  async delete(ctx: BaseContext): Promise<void> {
    try {
      const { id } = ctx.params;
      const success = await this.service.delete(id);

      if (!success) {
        return this.error(ctx, '资源不存在', 404);
      }

      this.success(ctx, null, '删除成功');
    } catch (err) {
      this.logger.error(`删除资源失败: ${err.message}`, err);
      this.error(ctx, '删除资源失败', 500, err);
    }
  }

  /**
   * 批量删除实体
   */
  async batchDelete(ctx: BaseContext): Promise<void> {
    try {
      const { ids } = ctx.request.body;

      if (!Array.isArray(ids)) {
        return this.error(ctx, '无效的参数格式');
      }

      let deleteCount = 0;
      for (const id of ids) {
        const success = await this.service.delete(id);
        if (success) deleteCount++;
      }

      this.success(
        ctx,
        { deletedCount: deleteCount },
        `成功删除 ${deleteCount} 条记录`
      );
    } catch (err) {
      this.logger.error(`批量删除资源失败: ${err.message}`, err);
      this.error(ctx, '批量删除资源失败', 500, err);
    }
  }
}

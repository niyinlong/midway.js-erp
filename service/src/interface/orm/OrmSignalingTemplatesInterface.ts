import { OrmSignalingTemplates } from '../entity/orm/orm.ormsignalingtemplates.entity';

/**
 * OrmSignalingTemplates 实体接口
 * 对应数据库表: orm_signaling_templates
 */
export interface OrmSignalingTemplatesInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 OrmSignalingTemplates 的参数接口
 */
export interface CreateOrmSignalingTemplatesDTO extends Partial<OrmSignalingTemplatesInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 OrmSignalingTemplates 的参数接口
 */
export interface UpdateOrmSignalingTemplatesDTO extends Partial<OrmSignalingTemplatesInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 OrmSignalingTemplates 的参数接口
 */
export interface QueryOrmSignalingTemplatesDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof OrmSignalingTemplatesInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * OrmSignalingTemplates 分页查询结果接口
 */
export interface OrmSignalingTemplatesPageResult {
  data: OrmSignalingTemplates[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * OrmSignalingTemplates API 响应接口
 */
export interface OrmSignalingTemplatesResponse {
  success: boolean;
  message: string;
  data?: OrmSignalingTemplates | OrmSignalingTemplates[] | OrmSignalingTemplatesPageResult;
  error?: string;
}

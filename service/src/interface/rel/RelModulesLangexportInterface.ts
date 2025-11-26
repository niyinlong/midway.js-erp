import { RelModulesLangexport } from '../entity/rel/rel.relmoduleslangexport.entity';

/**
 * RelModulesLangexport 实体接口
 * 对应数据库表: rel_modules_langexport
 */
export interface RelModulesLangexportInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 RelModulesLangexport 的参数接口
 */
export interface CreateRelModulesLangexportDTO extends Partial<RelModulesLangexportInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 RelModulesLangexport 的参数接口
 */
export interface UpdateRelModulesLangexportDTO extends Partial<RelModulesLangexportInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 RelModulesLangexport 的参数接口
 */
export interface QueryRelModulesLangexportDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof RelModulesLangexportInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * RelModulesLangexport 分页查询结果接口
 */
export interface RelModulesLangexportPageResult {
  data: RelModulesLangexport[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * RelModulesLangexport API 响应接口
 */
export interface RelModulesLangexportResponse {
  success: boolean;
  message: string;
  data?: RelModulesLangexport | RelModulesLangexport[] | RelModulesLangexportPageResult;
  error?: string;
}

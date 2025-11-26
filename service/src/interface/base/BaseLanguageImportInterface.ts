import { BaseLanguageImport } from '../entity/base/base.baselanguageimport.entity';

/**
 * BaseLanguageImport 实体接口
 * 对应数据库表: base_language_import
 */
export interface BaseLanguageImportInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BaseLanguageImport 的参数接口
 */
export interface CreateBaseLanguageImportDTO extends Partial<BaseLanguageImportInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BaseLanguageImport 的参数接口
 */
export interface UpdateBaseLanguageImportDTO extends Partial<BaseLanguageImportInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BaseLanguageImport 的参数接口
 */
export interface QueryBaseLanguageImportDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BaseLanguageImportInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BaseLanguageImport 分页查询结果接口
 */
export interface BaseLanguageImportPageResult {
  data: BaseLanguageImport[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BaseLanguageImport API 响应接口
 */
export interface BaseLanguageImportResponse {
  success: boolean;
  message: string;
  data?: BaseLanguageImport | BaseLanguageImport[] | BaseLanguageImportPageResult;
  error?: string;
}

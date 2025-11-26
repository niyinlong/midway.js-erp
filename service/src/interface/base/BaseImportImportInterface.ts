import { BaseImportImport } from '../entity/base/base.baseimportimport.entity';

/**
 * BaseImportImport 实体接口
 * 对应数据库表: base_import_import
 */
export interface BaseImportImportInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BaseImportImport 的参数接口
 */
export interface CreateBaseImportImportDTO extends Partial<BaseImportImportInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BaseImportImport 的参数接口
 */
export interface UpdateBaseImportImportDTO extends Partial<BaseImportImportInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BaseImportImport 的参数接口
 */
export interface QueryBaseImportImportDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BaseImportImportInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BaseImportImport 分页查询结果接口
 */
export interface BaseImportImportPageResult {
  data: BaseImportImport[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BaseImportImport API 响应接口
 */
export interface BaseImportImportResponse {
  success: boolean;
  message: string;
  data?: BaseImportImport | BaseImportImport[] | BaseImportImportPageResult;
  error?: string;
}

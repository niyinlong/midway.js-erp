import { BaseImportMapping } from '../entity/base/base.baseimportmapping.entity';

/**
 * BaseImportMapping 实体接口
 * 对应数据库表: base_import_mapping
 */
export interface BaseImportMappingInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BaseImportMapping 的参数接口
 */
export interface CreateBaseImportMappingDTO extends Partial<BaseImportMappingInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BaseImportMapping 的参数接口
 */
export interface UpdateBaseImportMappingDTO extends Partial<BaseImportMappingInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BaseImportMapping 的参数接口
 */
export interface QueryBaseImportMappingDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BaseImportMappingInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BaseImportMapping 分页查询结果接口
 */
export interface BaseImportMappingPageResult {
  data: BaseImportMapping[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BaseImportMapping API 响应接口
 */
export interface BaseImportMappingResponse {
  success: boolean;
  message: string;
  data?: BaseImportMapping | BaseImportMapping[] | BaseImportMappingPageResult;
  error?: string;
}

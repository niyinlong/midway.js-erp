import { ModuleCountry } from '../entity/module/module.modulecountry.entity';

/**
 * ModuleCountry 实体接口
 * 对应数据库表: module_country
 */
export interface ModuleCountryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ModuleCountry 的参数接口
 */
export interface CreateModuleCountryDTO extends Partial<ModuleCountryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ModuleCountry 的参数接口
 */
export interface UpdateModuleCountryDTO extends Partial<ModuleCountryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ModuleCountry 的参数接口
 */
export interface QueryModuleCountryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ModuleCountryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ModuleCountry 分页查询结果接口
 */
export interface ModuleCountryPageResult {
  data: ModuleCountry[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ModuleCountry API 响应接口
 */
export interface ModuleCountryResponse {
  success: boolean;
  message: string;
  data?: ModuleCountry | ModuleCountry[] | ModuleCountryPageResult;
  error?: string;
}

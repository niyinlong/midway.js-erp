import { BaseLanguageInstall } from '../entity/base/base.baselanguageinstall.entity';

/**
 * BaseLanguageInstall 实体接口
 * 对应数据库表: base_language_install
 */
export interface BaseLanguageInstallInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BaseLanguageInstall 的参数接口
 */
export interface CreateBaseLanguageInstallDTO extends Partial<BaseLanguageInstallInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BaseLanguageInstall 的参数接口
 */
export interface UpdateBaseLanguageInstallDTO extends Partial<BaseLanguageInstallInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BaseLanguageInstall 的参数接口
 */
export interface QueryBaseLanguageInstallDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BaseLanguageInstallInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BaseLanguageInstall 分页查询结果接口
 */
export interface BaseLanguageInstallPageResult {
  data: BaseLanguageInstall[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BaseLanguageInstall API 响应接口
 */
export interface BaseLanguageInstallResponse {
  success: boolean;
  message: string;
  data?: BaseLanguageInstall | BaseLanguageInstall[] | BaseLanguageInstallPageResult;
  error?: string;
}

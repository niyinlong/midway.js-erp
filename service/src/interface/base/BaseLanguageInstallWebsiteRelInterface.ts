import { BaseLanguageInstallWebsiteRel } from '../entity/base/base.baselanguageinstallwebsiterel.entity';

/**
 * BaseLanguageInstallWebsiteRel 实体接口
 * 对应数据库表: base_language_install_website_rel
 */
export interface BaseLanguageInstallWebsiteRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BaseLanguageInstallWebsiteRel 的参数接口
 */
export interface CreateBaseLanguageInstallWebsiteRelDTO extends Partial<BaseLanguageInstallWebsiteRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BaseLanguageInstallWebsiteRel 的参数接口
 */
export interface UpdateBaseLanguageInstallWebsiteRelDTO extends Partial<BaseLanguageInstallWebsiteRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BaseLanguageInstallWebsiteRel 的参数接口
 */
export interface QueryBaseLanguageInstallWebsiteRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BaseLanguageInstallWebsiteRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BaseLanguageInstallWebsiteRel 分页查询结果接口
 */
export interface BaseLanguageInstallWebsiteRelPageResult {
  data: BaseLanguageInstallWebsiteRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BaseLanguageInstallWebsiteRel API 响应接口
 */
export interface BaseLanguageInstallWebsiteRelResponse {
  success: boolean;
  message: string;
  data?: BaseLanguageInstallWebsiteRel | BaseLanguageInstallWebsiteRel[] | BaseLanguageInstallWebsiteRelPageResult;
  error?: string;
}

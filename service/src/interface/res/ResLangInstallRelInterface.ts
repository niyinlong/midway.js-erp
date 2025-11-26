import { ResLangInstallRel } from '../entity/res/res.reslanginstallrel.entity';

/**
 * ResLangInstallRel 实体接口
 * 对应数据库表: res_lang_install_rel
 */
export interface ResLangInstallRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResLangInstallRel 的参数接口
 */
export interface CreateResLangInstallRelDTO extends Partial<ResLangInstallRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResLangInstallRel 的参数接口
 */
export interface UpdateResLangInstallRelDTO extends Partial<ResLangInstallRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResLangInstallRel 的参数接口
 */
export interface QueryResLangInstallRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResLangInstallRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResLangInstallRel 分页查询结果接口
 */
export interface ResLangInstallRelPageResult {
  data: ResLangInstallRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResLangInstallRel API 响应接口
 */
export interface ResLangInstallRelResponse {
  success: boolean;
  message: string;
  data?: ResLangInstallRel | ResLangInstallRel[] | ResLangInstallRelPageResult;
  error?: string;
}

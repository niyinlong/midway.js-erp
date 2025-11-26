import { ResLang } from '../entity/res/res.reslang.entity';

/**
 * ResLang 实体接口
 * 对应数据库表: res_lang
 */
export interface ResLangInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResLang 的参数接口
 */
export interface CreateResLangDTO extends Partial<ResLangInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResLang 的参数接口
 */
export interface UpdateResLangDTO extends Partial<ResLangInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResLang 的参数接口
 */
export interface QueryResLangDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResLangInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResLang 分页查询结果接口
 */
export interface ResLangPageResult {
  data: ResLang[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResLang API 响应接口
 */
export interface ResLangResponse {
  success: boolean;
  message: string;
  data?: ResLang | ResLang[] | ResLangPageResult;
  error?: string;
}

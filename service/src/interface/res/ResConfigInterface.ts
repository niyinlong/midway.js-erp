import { ResConfig } from '../entity/res/res.resconfig.entity';

/**
 * ResConfig 实体接口
 * 对应数据库表: res_config
 */
export interface ResConfigInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResConfig 的参数接口
 */
export interface CreateResConfigDTO extends Partial<ResConfigInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResConfig 的参数接口
 */
export interface UpdateResConfigDTO extends Partial<ResConfigInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResConfig 的参数接口
 */
export interface QueryResConfigDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResConfigInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResConfig 分页查询结果接口
 */
export interface ResConfigPageResult {
  data: ResConfig[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResConfig API 响应接口
 */
export interface ResConfigResponse {
  success: boolean;
  message: string;
  data?: ResConfig | ResConfig[] | ResConfigPageResult;
  error?: string;
}

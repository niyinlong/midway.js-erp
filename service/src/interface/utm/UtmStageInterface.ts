import { UtmStage } from '../entity/utm/utm.utmstage.entity';

/**
 * UtmStage 实体接口
 * 对应数据库表: utm_stage
 */
export interface UtmStageInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 UtmStage 的参数接口
 */
export interface CreateUtmStageDTO extends Partial<UtmStageInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 UtmStage 的参数接口
 */
export interface UpdateUtmStageDTO extends Partial<UtmStageInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 UtmStage 的参数接口
 */
export interface QueryUtmStageDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof UtmStageInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * UtmStage 分页查询结果接口
 */
export interface UtmStagePageResult {
  data: UtmStage[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * UtmStage API 响应接口
 */
export interface UtmStageResponse {
  success: boolean;
  message: string;
  data?: UtmStage | UtmStage[] | UtmStagePageResult;
  error?: string;
}

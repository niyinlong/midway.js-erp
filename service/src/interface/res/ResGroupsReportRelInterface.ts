import { ResGroupsReportRel } from '../entity/res/res.resgroupsreportrel.entity';

/**
 * ResGroupsReportRel 实体接口
 * 对应数据库表: res_groups_report_rel
 */
export interface ResGroupsReportRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResGroupsReportRel 的参数接口
 */
export interface CreateResGroupsReportRelDTO extends Partial<ResGroupsReportRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResGroupsReportRel 的参数接口
 */
export interface UpdateResGroupsReportRelDTO extends Partial<ResGroupsReportRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResGroupsReportRel 的参数接口
 */
export interface QueryResGroupsReportRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResGroupsReportRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResGroupsReportRel 分页查询结果接口
 */
export interface ResGroupsReportRelPageResult {
  data: ResGroupsReportRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResGroupsReportRel API 响应接口
 */
export interface ResGroupsReportRelResponse {
  success: boolean;
  message: string;
  data?: ResGroupsReportRel | ResGroupsReportRel[] | ResGroupsReportRelPageResult;
  error?: string;
}

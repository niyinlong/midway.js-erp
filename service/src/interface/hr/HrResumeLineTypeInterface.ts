import { HrResumeLineType } from '../entity/hr/hr.hrresumelinetype.entity';

/**
 * HrResumeLineType 实体接口
 * 对应数据库表: hr_resume_line_type
 */
export interface HrResumeLineTypeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrResumeLineType 的参数接口
 */
export interface CreateHrResumeLineTypeDTO extends Partial<HrResumeLineTypeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrResumeLineType 的参数接口
 */
export interface UpdateHrResumeLineTypeDTO extends Partial<HrResumeLineTypeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrResumeLineType 的参数接口
 */
export interface QueryHrResumeLineTypeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrResumeLineTypeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrResumeLineType 分页查询结果接口
 */
export interface HrResumeLineTypePageResult {
  data: HrResumeLineType[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrResumeLineType API 响应接口
 */
export interface HrResumeLineTypeResponse {
  success: boolean;
  message: string;
  data?: HrResumeLineType | HrResumeLineType[] | HrResumeLineTypePageResult;
  error?: string;
}

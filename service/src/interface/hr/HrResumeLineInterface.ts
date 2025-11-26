import { HrResumeLine } from '../entity/hr/hr.hrresumeline.entity';

/**
 * HrResumeLine 实体接口
 * 对应数据库表: hr_resume_line
 */
export interface HrResumeLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrResumeLine 的参数接口
 */
export interface CreateHrResumeLineDTO extends Partial<HrResumeLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrResumeLine 的参数接口
 */
export interface UpdateHrResumeLineDTO extends Partial<HrResumeLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrResumeLine 的参数接口
 */
export interface QueryHrResumeLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrResumeLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrResumeLine 分页查询结果接口
 */
export interface HrResumeLinePageResult {
  data: HrResumeLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrResumeLine API 响应接口
 */
export interface HrResumeLineResponse {
  success: boolean;
  message: string;
  data?: HrResumeLine | HrResumeLine[] | HrResumeLinePageResult;
  error?: string;
}

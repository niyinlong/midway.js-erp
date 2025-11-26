import { ReportPaperformat } from '../entity/report/report.reportpaperformat.entity';

/**
 * ReportPaperformat 实体接口
 * 对应数据库表: report_paperformat
 */
export interface ReportPaperformatInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ReportPaperformat 的参数接口
 */
export interface CreateReportPaperformatDTO extends Partial<ReportPaperformatInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ReportPaperformat 的参数接口
 */
export interface UpdateReportPaperformatDTO extends Partial<ReportPaperformatInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ReportPaperformat 的参数接口
 */
export interface QueryReportPaperformatDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ReportPaperformatInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ReportPaperformat 分页查询结果接口
 */
export interface ReportPaperformatPageResult {
  data: ReportPaperformat[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ReportPaperformat API 响应接口
 */
export interface ReportPaperformatResponse {
  success: boolean;
  message: string;
  data?: ReportPaperformat | ReportPaperformat[] | ReportPaperformatPageResult;
  error?: string;
}

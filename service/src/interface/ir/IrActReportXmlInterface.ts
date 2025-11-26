import { IrActReportXml } from '../entity/ir/ir.iractreportxml.entity';

/**
 * IrActReportXml 实体接口
 * 对应数据库表: ir_act_report_xml
 */
export interface IrActReportXmlInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActReportXml 的参数接口
 */
export interface CreateIrActReportXmlDTO extends Partial<IrActReportXmlInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActReportXml 的参数接口
 */
export interface UpdateIrActReportXmlDTO extends Partial<IrActReportXmlInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActReportXml 的参数接口
 */
export interface QueryIrActReportXmlDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActReportXmlInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActReportXml 分页查询结果接口
 */
export interface IrActReportXmlPageResult {
  data: IrActReportXml[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActReportXml API 响应接口
 */
export interface IrActReportXmlResponse {
  success: boolean;
  message: string;
  data?: IrActReportXml | IrActReportXml[] | IrActReportXmlPageResult;
  error?: string;
}

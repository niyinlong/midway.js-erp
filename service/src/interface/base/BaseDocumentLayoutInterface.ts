import { BaseDocumentLayout } from '../entity/base/base.basedocumentlayout.entity';

/**
 * BaseDocumentLayout 实体接口
 * 对应数据库表: base_document_layout
 */
export interface BaseDocumentLayoutInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BaseDocumentLayout 的参数接口
 */
export interface CreateBaseDocumentLayoutDTO extends Partial<BaseDocumentLayoutInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BaseDocumentLayout 的参数接口
 */
export interface UpdateBaseDocumentLayoutDTO extends Partial<BaseDocumentLayoutInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BaseDocumentLayout 的参数接口
 */
export interface QueryBaseDocumentLayoutDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BaseDocumentLayoutInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BaseDocumentLayout 分页查询结果接口
 */
export interface BaseDocumentLayoutPageResult {
  data: BaseDocumentLayout[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BaseDocumentLayout API 响应接口
 */
export interface BaseDocumentLayoutResponse {
  success: boolean;
  message: string;
  data?: BaseDocumentLayout | BaseDocumentLayout[] | BaseDocumentLayoutPageResult;
  error?: string;
}

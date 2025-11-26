import { HtmlEditorConverterTestSub } from '../entity/html/html.htmleditorconvertertestsub.entity';

/**
 * HtmlEditorConverterTestSub 实体接口
 * 对应数据库表: html_editor_converter_test_sub
 */
export interface HtmlEditorConverterTestSubInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HtmlEditorConverterTestSub 的参数接口
 */
export interface CreateHtmlEditorConverterTestSubDTO extends Partial<HtmlEditorConverterTestSubInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HtmlEditorConverterTestSub 的参数接口
 */
export interface UpdateHtmlEditorConverterTestSubDTO extends Partial<HtmlEditorConverterTestSubInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HtmlEditorConverterTestSub 的参数接口
 */
export interface QueryHtmlEditorConverterTestSubDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HtmlEditorConverterTestSubInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HtmlEditorConverterTestSub 分页查询结果接口
 */
export interface HtmlEditorConverterTestSubPageResult {
  data: HtmlEditorConverterTestSub[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HtmlEditorConverterTestSub API 响应接口
 */
export interface HtmlEditorConverterTestSubResponse {
  success: boolean;
  message: string;
  data?: HtmlEditorConverterTestSub | HtmlEditorConverterTestSub[] | HtmlEditorConverterTestSubPageResult;
  error?: string;
}

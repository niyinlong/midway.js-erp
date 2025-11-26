import { HtmlEditorConverterTest } from '../entity/html/html.htmleditorconvertertest.entity';

/**
 * HtmlEditorConverterTest 实体接口
 * 对应数据库表: html_editor_converter_test
 */
export interface HtmlEditorConverterTestInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HtmlEditorConverterTest 的参数接口
 */
export interface CreateHtmlEditorConverterTestDTO extends Partial<HtmlEditorConverterTestInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HtmlEditorConverterTest 的参数接口
 */
export interface UpdateHtmlEditorConverterTestDTO extends Partial<HtmlEditorConverterTestInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HtmlEditorConverterTest 的参数接口
 */
export interface QueryHtmlEditorConverterTestDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HtmlEditorConverterTestInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HtmlEditorConverterTest 分页查询结果接口
 */
export interface HtmlEditorConverterTestPageResult {
  data: HtmlEditorConverterTest[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HtmlEditorConverterTest API 响应接口
 */
export interface HtmlEditorConverterTestResponse {
  success: boolean;
  message: string;
  data?: HtmlEditorConverterTest | HtmlEditorConverterTest[] | HtmlEditorConverterTestPageResult;
  error?: string;
}

import { ThemeIrUiView } from '../entity/theme/theme.themeiruiview.entity';

/**
 * ThemeIrUiView 实体接口
 * 对应数据库表: theme_ir_ui_view
 */
export interface ThemeIrUiViewInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ThemeIrUiView 的参数接口
 */
export interface CreateThemeIrUiViewDTO extends Partial<ThemeIrUiViewInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ThemeIrUiView 的参数接口
 */
export interface UpdateThemeIrUiViewDTO extends Partial<ThemeIrUiViewInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ThemeIrUiView 的参数接口
 */
export interface QueryThemeIrUiViewDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ThemeIrUiViewInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ThemeIrUiView 分页查询结果接口
 */
export interface ThemeIrUiViewPageResult {
  data: ThemeIrUiView[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ThemeIrUiView API 响应接口
 */
export interface ThemeIrUiViewResponse {
  success: boolean;
  message: string;
  data?: ThemeIrUiView | ThemeIrUiView[] | ThemeIrUiViewPageResult;
  error?: string;
}

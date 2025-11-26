import { ThemeWebsiteMenu } from '../entity/theme/theme.themewebsitemenu.entity';

/**
 * ThemeWebsiteMenu 实体接口
 * 对应数据库表: theme_website_menu
 */
export interface ThemeWebsiteMenuInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ThemeWebsiteMenu 的参数接口
 */
export interface CreateThemeWebsiteMenuDTO extends Partial<ThemeWebsiteMenuInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ThemeWebsiteMenu 的参数接口
 */
export interface UpdateThemeWebsiteMenuDTO extends Partial<ThemeWebsiteMenuInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ThemeWebsiteMenu 的参数接口
 */
export interface QueryThemeWebsiteMenuDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ThemeWebsiteMenuInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ThemeWebsiteMenu 分页查询结果接口
 */
export interface ThemeWebsiteMenuPageResult {
  data: ThemeWebsiteMenu[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ThemeWebsiteMenu API 响应接口
 */
export interface ThemeWebsiteMenuResponse {
  success: boolean;
  message: string;
  data?: ThemeWebsiteMenu | ThemeWebsiteMenu[] | ThemeWebsiteMenuPageResult;
  error?: string;
}

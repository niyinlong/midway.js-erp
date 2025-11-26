import { ThemeWebsitePage } from '../entity/theme/theme.themewebsitepage.entity';

/**
 * ThemeWebsitePage 实体接口
 * 对应数据库表: theme_website_page
 */
export interface ThemeWebsitePageInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ThemeWebsitePage 的参数接口
 */
export interface CreateThemeWebsitePageDTO extends Partial<ThemeWebsitePageInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ThemeWebsitePage 的参数接口
 */
export interface UpdateThemeWebsitePageDTO extends Partial<ThemeWebsitePageInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ThemeWebsitePage 的参数接口
 */
export interface QueryThemeWebsitePageDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ThemeWebsitePageInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ThemeWebsitePage 分页查询结果接口
 */
export interface ThemeWebsitePagePageResult {
  data: ThemeWebsitePage[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ThemeWebsitePage API 响应接口
 */
export interface ThemeWebsitePageResponse {
  success: boolean;
  message: string;
  data?: ThemeWebsitePage | ThemeWebsitePage[] | ThemeWebsitePagePageResult;
  error?: string;
}

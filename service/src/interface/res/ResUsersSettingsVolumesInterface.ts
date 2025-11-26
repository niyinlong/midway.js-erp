import { ResUsersSettingsVolumes } from '../entity/res/res.resuserssettingsvolumes.entity';

/**
 * ResUsersSettingsVolumes 实体接口
 * 对应数据库表: res_users_settings_volumes
 */
export interface ResUsersSettingsVolumesInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResUsersSettingsVolumes 的参数接口
 */
export interface CreateResUsersSettingsVolumesDTO extends Partial<ResUsersSettingsVolumesInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResUsersSettingsVolumes 的参数接口
 */
export interface UpdateResUsersSettingsVolumesDTO extends Partial<ResUsersSettingsVolumesInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResUsersSettingsVolumes 的参数接口
 */
export interface QueryResUsersSettingsVolumesDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResUsersSettingsVolumesInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResUsersSettingsVolumes 分页查询结果接口
 */
export interface ResUsersSettingsVolumesPageResult {
  data: ResUsersSettingsVolumes[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResUsersSettingsVolumes API 响应接口
 */
export interface ResUsersSettingsVolumesResponse {
  success: boolean;
  message: string;
  data?: ResUsersSettingsVolumes | ResUsersSettingsVolumes[] | ResUsersSettingsVolumesPageResult;
  error?: string;
}

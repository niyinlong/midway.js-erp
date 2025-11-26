import { BusBus } from '../entity/bus/bus.busbus.entity';

/**
 * BusBus 实体接口
 * 对应数据库表: bus_bus
 */
export interface BusBusInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BusBus 的参数接口
 */
export interface CreateBusBusDTO extends Partial<BusBusInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BusBus 的参数接口
 */
export interface UpdateBusBusDTO extends Partial<BusBusInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BusBus 的参数接口
 */
export interface QueryBusBusDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BusBusInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BusBus 分页查询结果接口
 */
export interface BusBusPageResult {
  data: BusBus[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BusBus API 响应接口
 */
export interface BusBusResponse {
  success: boolean;
  message: string;
  data?: BusBus | BusBus[] | BusBusPageResult;
  error?: string;
}

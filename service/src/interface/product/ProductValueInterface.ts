import { ProductValue } from '../entity/product/product.productvalue.entity';

/**
 * ProductValue 实体接口
 * 对应数据库表: product_value
 */
export interface ProductValueInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductValue 的参数接口
 */
export interface CreateProductValueDTO extends Partial<ProductValueInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductValue 的参数接口
 */
export interface UpdateProductValueDTO extends Partial<ProductValueInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductValue 的参数接口
 */
export interface QueryProductValueDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductValueInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductValue 分页查询结果接口
 */
export interface ProductValuePageResult {
  data: ProductValue[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductValue API 响应接口
 */
export interface ProductValueResponse {
  success: boolean;
  message: string;
  data?: ProductValue | ProductValue[] | ProductValuePageResult;
  error?: string;
}

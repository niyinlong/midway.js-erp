import { BarcodeRule } from '../entity/barcode/barcode.barcoderule.entity';

/**
 * BarcodeRule 实体接口
 * 对应数据库表: barcode_rule
 */
export interface BarcodeRuleInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BarcodeRule 的参数接口
 */
export interface CreateBarcodeRuleDTO extends Partial<BarcodeRuleInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BarcodeRule 的参数接口
 */
export interface UpdateBarcodeRuleDTO extends Partial<BarcodeRuleInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BarcodeRule 的参数接口
 */
export interface QueryBarcodeRuleDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BarcodeRuleInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BarcodeRule 分页查询结果接口
 */
export interface BarcodeRulePageResult {
  data: BarcodeRule[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BarcodeRule API 响应接口
 */
export interface BarcodeRuleResponse {
  success: boolean;
  message: string;
  data?: BarcodeRule | BarcodeRule[] | BarcodeRulePageResult;
  error?: string;
}

import { BarcodeNomenclature } from '../entity/barcode/barcode.barcodenomenclature.entity';

/**
 * BarcodeNomenclature 实体接口
 * 对应数据库表: barcode_nomenclature
 */
export interface BarcodeNomenclatureInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BarcodeNomenclature 的参数接口
 */
export interface CreateBarcodeNomenclatureDTO extends Partial<BarcodeNomenclatureInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BarcodeNomenclature 的参数接口
 */
export interface UpdateBarcodeNomenclatureDTO extends Partial<BarcodeNomenclatureInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BarcodeNomenclature 的参数接口
 */
export interface QueryBarcodeNomenclatureDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BarcodeNomenclatureInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BarcodeNomenclature 分页查询结果接口
 */
export interface BarcodeNomenclaturePageResult {
  data: BarcodeNomenclature[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BarcodeNomenclature API 响应接口
 */
export interface BarcodeNomenclatureResponse {
  success: boolean;
  message: string;
  data?: BarcodeNomenclature | BarcodeNomenclature[] | BarcodeNomenclaturePageResult;
  error?: string;
}

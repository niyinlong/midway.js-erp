import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { StockInventoryAdjustmentName } from '../../entity/stock/stock.stockinventoryadjustmentname.entity';
import { StockInventoryAdjustmentNameService } from '../../service/stock/StockInventoryAdjustmentNameService';
import {
  CreateStockInventoryAdjustmentNameDTO,
  UpdateStockInventoryAdjustmentNameDTO,
  QueryStockInventoryAdjustmentNameDTO,
  StockInventoryAdjustmentNameResponse
} from '../../interface/stock/StockInventoryAdjustmentNameInterface';

/**
 * StockInventoryAdjustmentName 控制器
 * 处理 stock_inventory_adjustment_name 相关的HTTP请求
 */
const apiPath = '/stock/stock_inventory_adjustment_name';

@Controller(apiPath)
export class StockInventoryAdjustmentNameController extends BaseController<StockInventoryAdjustmentName> {
  constructor(
    @Inject()
    private stockInventoryAdjustmentNameService: StockInventoryAdjustmentNameService
  ) {
    super(stockInventoryAdjustmentNameService);
  }

  /**
   * 获取单个StockInventoryAdjustmentName
   * @param id 实体ID
   * @returns StockInventoryAdjustmentName对象
   */
  @Get('/:id')
  async getByIdHandler(@Param('id') id: string) {
    // BaseController中的getById方法已经处理了响应
    return await super.getById({
      params: { id },
      body: {},
      query: {},
      status: (code) => {},
      set body(data: any) {}
    } as any);
  }

  /**
   * 获取StockInventoryAdjustmentName列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QueryStockInventoryAdjustmentNameDTO) {
    // BaseController中的list方法已经处理了响应
    return await super.list({
      query,
      body: {},
      params: {},
      status: (code) => {},
      set body(data: any) {}
    } as any);
  }

  /**
   * 创建新的StockInventoryAdjustmentName
   * @param data 创建数据
   * @returns 创建的StockInventoryAdjustmentName对象
   */
  @Post()
  async createHandler(@Body() data: CreateStockInventoryAdjustmentNameDTO) {
    // BaseController中的create方法已经处理了响应
    return await super.create({
      body: data,
      query: {},
      params: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 更新StockInventoryAdjustmentName
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的StockInventoryAdjustmentName对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateStockInventoryAdjustmentNameDTO) {
    // BaseController中的update方法已经处理了响应
    return await super.update({
      params: { id },
      body: data,
      query: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 删除StockInventoryAdjustmentName
   * @param id 实体ID
   * @returns 删除结果
   */
  @Delete('/:id')
  async deleteHandler(@Param('id') id: string) {
    // BaseController中的delete方法已经处理了响应
    return await super.delete({
      params: { id },
      body: {},
      query: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 批量删除StockInventoryAdjustmentName
   * @param body 包含ids数组的请求体
   * @returns 删除结果
   */
  @Delete('/batch')
  async batchDeleteHandler(@Body() body: { ids: (string | number)[] }) {
    // BaseController中的batchDelete方法已经处理了响应
    return await super.batchDelete({
      body,
      query: {},
      params: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 自定义查询方法示例
   * 可以根据业务需求扩展更多接口
   */
  @Get('/search/advanced')
  async advancedSearch(@Query() params: any) {
    try {
      const result = await this.stockInventoryAdjustmentNameService.advancedSearch(params);
      this.success({
        status: (code) => {},
        set body(data: any) {}
      } as any, result, '查询成功');
    } catch (error) {
      this.error({
        status: (code) => {},
        set body(data: any) {}
      } as any, '查询失败', 500, error);
    }
  }
}

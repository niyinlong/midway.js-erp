import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { StockMoveMoveRel } from '../../entity/stock/stock.stockmovemoverel.entity';
import { StockMoveMoveRelService } from '../../service/stock/StockMoveMoveRelService';
import {
  CreateStockMoveMoveRelDTO,
  UpdateStockMoveMoveRelDTO,
  QueryStockMoveMoveRelDTO,
  StockMoveMoveRelResponse
} from '../../interface/stock/StockMoveMoveRelInterface';

/**
 * StockMoveMoveRel 控制器
 * 处理 stock_move_move_rel 相关的HTTP请求
 */
const apiPath = '/stock/stock_move_move_rel';

@Controller(apiPath)
export class StockMoveMoveRelController extends BaseController<StockMoveMoveRel> {
  constructor(
    @Inject()
    private stockMoveMoveRelService: StockMoveMoveRelService
  ) {
    super(stockMoveMoveRelService);
  }

  /**
   * 获取单个StockMoveMoveRel
   * @param id 实体ID
   * @returns StockMoveMoveRel对象
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
   * 获取StockMoveMoveRel列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QueryStockMoveMoveRelDTO) {
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
   * 创建新的StockMoveMoveRel
   * @param data 创建数据
   * @returns 创建的StockMoveMoveRel对象
   */
  @Post()
  async createHandler(@Body() data: CreateStockMoveMoveRelDTO) {
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
   * 更新StockMoveMoveRel
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的StockMoveMoveRel对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateStockMoveMoveRelDTO) {
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
   * 删除StockMoveMoveRel
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
   * 批量删除StockMoveMoveRel
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
      const result = await this.stockMoveMoveRelService.advancedSearch(params);
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

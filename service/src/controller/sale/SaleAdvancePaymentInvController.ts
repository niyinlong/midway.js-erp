import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { SaleAdvancePaymentInv } from '../../entity/sale/sale.saleadvancepaymentinv.entity';
import { SaleAdvancePaymentInvService } from '../../service/sale/SaleAdvancePaymentInvService';
import {
  CreateSaleAdvancePaymentInvDTO,
  UpdateSaleAdvancePaymentInvDTO,
  QuerySaleAdvancePaymentInvDTO,
  SaleAdvancePaymentInvResponse
} from '../../interface/sale/SaleAdvancePaymentInvInterface';

/**
 * SaleAdvancePaymentInv 控制器
 * 处理 sale_advance_payment_inv 相关的HTTP请求
 */
const apiPath = '/sale/sale_advance_payment_inv';

@Controller(apiPath)
export class SaleAdvancePaymentInvController extends BaseController<SaleAdvancePaymentInv> {
  constructor(
    @Inject()
    private saleAdvancePaymentInvService: SaleAdvancePaymentInvService
  ) {
    super(saleAdvancePaymentInvService);
  }

  /**
   * 获取单个SaleAdvancePaymentInv
   * @param id 实体ID
   * @returns SaleAdvancePaymentInv对象
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
   * 获取SaleAdvancePaymentInv列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QuerySaleAdvancePaymentInvDTO) {
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
   * 创建新的SaleAdvancePaymentInv
   * @param data 创建数据
   * @returns 创建的SaleAdvancePaymentInv对象
   */
  @Post()
  async createHandler(@Body() data: CreateSaleAdvancePaymentInvDTO) {
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
   * 更新SaleAdvancePaymentInv
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的SaleAdvancePaymentInv对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateSaleAdvancePaymentInvDTO) {
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
   * 删除SaleAdvancePaymentInv
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
   * 批量删除SaleAdvancePaymentInv
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
      const result = await this.saleAdvancePaymentInvService.advancedSearch(params);
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

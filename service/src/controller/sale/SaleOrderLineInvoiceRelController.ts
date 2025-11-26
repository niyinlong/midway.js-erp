import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { SaleOrderLineInvoiceRel } from '../../entity/sale/sale.saleorderlineinvoicerel.entity';
import { SaleOrderLineInvoiceRelService } from '../../service/sale/SaleOrderLineInvoiceRelService';
import {
  CreateSaleOrderLineInvoiceRelDTO,
  UpdateSaleOrderLineInvoiceRelDTO,
  QuerySaleOrderLineInvoiceRelDTO,
  SaleOrderLineInvoiceRelResponse
} from '../../interface/sale/SaleOrderLineInvoiceRelInterface';

/**
 * SaleOrderLineInvoiceRel 控制器
 * 处理 sale_order_line_invoice_rel 相关的HTTP请求
 */
const apiPath = '/sale/sale_order_line_invoice_rel';

@Controller(apiPath)
export class SaleOrderLineInvoiceRelController extends BaseController<SaleOrderLineInvoiceRel> {
  constructor(
    @Inject()
    private saleOrderLineInvoiceRelService: SaleOrderLineInvoiceRelService
  ) {
    super(saleOrderLineInvoiceRelService);
  }

  /**
   * 获取单个SaleOrderLineInvoiceRel
   * @param id 实体ID
   * @returns SaleOrderLineInvoiceRel对象
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
   * 获取SaleOrderLineInvoiceRel列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QuerySaleOrderLineInvoiceRelDTO) {
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
   * 创建新的SaleOrderLineInvoiceRel
   * @param data 创建数据
   * @returns 创建的SaleOrderLineInvoiceRel对象
   */
  @Post()
  async createHandler(@Body() data: CreateSaleOrderLineInvoiceRelDTO) {
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
   * 更新SaleOrderLineInvoiceRel
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的SaleOrderLineInvoiceRel对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateSaleOrderLineInvoiceRelDTO) {
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
   * 删除SaleOrderLineInvoiceRel
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
   * 批量删除SaleOrderLineInvoiceRel
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
      const result = await this.saleOrderLineInvoiceRelService.advancedSearch(params);
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

import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { PaymentProvider } from '../../entity/payment/payment.paymentprovider.entity';
import { PaymentProviderService } from '../../service/payment/PaymentProviderService';
import {
  CreatePaymentProviderDTO,
  UpdatePaymentProviderDTO,
  QueryPaymentProviderDTO,
  PaymentProviderResponse
} from '../../interface/payment/PaymentProviderInterface';

/**
 * PaymentProvider 控制器
 * 处理 payment_provider 相关的HTTP请求
 */
const apiPath = '/payment/payment_provider';

@Controller(apiPath)
export class PaymentProviderController extends BaseController<PaymentProvider> {
  constructor(
    @Inject()
    private paymentProviderService: PaymentProviderService
  ) {
    super(paymentProviderService);
  }

  /**
   * 获取单个PaymentProvider
   * @param id 实体ID
   * @returns PaymentProvider对象
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
   * 获取PaymentProvider列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QueryPaymentProviderDTO) {
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
   * 创建新的PaymentProvider
   * @param data 创建数据
   * @returns 创建的PaymentProvider对象
   */
  @Post()
  async createHandler(@Body() data: CreatePaymentProviderDTO) {
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
   * 更新PaymentProvider
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的PaymentProvider对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdatePaymentProviderDTO) {
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
   * 删除PaymentProvider
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
   * 批量删除PaymentProvider
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
      const result = await this.paymentProviderService.advancedSearch(params);
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

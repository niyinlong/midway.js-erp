import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { ConfirmStockSms } from '../../entity/confirm/confirm.confirmstocksms.entity';
import { ConfirmStockSmsService } from '../../service/confirm/ConfirmStockSmsService';
import {
  CreateConfirmStockSmsDTO,
  UpdateConfirmStockSmsDTO,
  QueryConfirmStockSmsDTO,
  ConfirmStockSmsResponse
} from '../../interface/confirm/ConfirmStockSmsInterface';

/**
 * ConfirmStockSms 控制器
 * 处理 confirm_stock_sms 相关的HTTP请求
 */
const apiPath = '/confirm/confirm_stock_sms';

@Controller(apiPath)
export class ConfirmStockSmsController extends BaseController<ConfirmStockSms> {
  constructor(
    @Inject()
    private confirmStockSmsService: ConfirmStockSmsService
  ) {
    super(confirmStockSmsService);
  }

  /**
   * 获取单个ConfirmStockSms
   * @param id 实体ID
   * @returns ConfirmStockSms对象
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
   * 获取ConfirmStockSms列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QueryConfirmStockSmsDTO) {
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
   * 创建新的ConfirmStockSms
   * @param data 创建数据
   * @returns 创建的ConfirmStockSms对象
   */
  @Post()
  async createHandler(@Body() data: CreateConfirmStockSmsDTO) {
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
   * 更新ConfirmStockSms
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的ConfirmStockSms对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateConfirmStockSmsDTO) {
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
   * 删除ConfirmStockSms
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
   * 批量删除ConfirmStockSms
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
      const result = await this.confirmStockSmsService.advancedSearch(params);
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

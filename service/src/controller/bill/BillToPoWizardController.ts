import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { BillToPoWizard } from '../../entity/bill/bill.billtopowizard.entity';
import { BillToPoWizardService } from '../../service/bill/BillToPoWizardService';
import {
  CreateBillToPoWizardDTO,
  UpdateBillToPoWizardDTO,
  QueryBillToPoWizardDTO,
  BillToPoWizardResponse
} from '../../interface/bill/BillToPoWizardInterface';

// API路径定义
const apiPath = '/bill/bill_to_po_wizard';

/**
 * BillToPoWizard 控制器
 * 处理 bill_to_po_wizard 相关的HTTP请求
 */
@Controller(apiPath)
export class BillToPoWizardController extends BaseController<BillToPoWizard> {
  constructor(
    @Inject()
    private billToPoWizardService: BillToPoWizardService
  ) {
    super(billToPoWizardService);
  }

  /**
   * 获取单个BillToPoWizard
   * @param id 实体ID
   * @returns BillToPoWizard对象
   */
  @Get('/:id')
  async getByIdHandler(@Param('id') id: string) {
    // 调用BaseController中的getById方法
    return await super.getById({
      params: { id },
      body: {},
      query: {},
      status: (code) => {},
      set body(data: any) {}
    } as any);
  }

  /**
   * 获取BillToPoWizard列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QueryBillToPoWizardDTO) {
    // 调用BaseController中的list方法
    return await super.list({
      query,
      body: {},
      params: {},
      status: (code) => {},
      set body(data: any) {}
    } as any);
  }

  /**
   * 创建新的BillToPoWizard
   * @param data 创建数据
   * @returns 创建的BillToPoWizard对象
   */
  @Post()
  async createHandler(@Body() data: CreateBillToPoWizardDTO) {
    // 调用BaseController中的create方法
    return await super.create({
      body: data,
      query: {},
      params: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 更新BillToPoWizard
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的BillToPoWizard对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateBillToPoWizardDTO) {
    // 调用BaseController中的update方法
    return await super.update({
      params: { id },
      body: data,
      query: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 删除BillToPoWizard
   * @param id 实体ID
   * @returns 删除结果
   */
  @Delete('/:id')
  async deleteHandler(@Param('id') id: string) {
    // 调用BaseController中的delete方法
    return await super.delete({
      params: { id },
      body: {},
      query: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 批量删除BillToPoWizard
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
      const result = await this.billToPoWizardService.advancedSearch(params);
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

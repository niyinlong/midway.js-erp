import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { AccountFinancialYearOp } from '../../entity/account/account.accountfinancialyearop.entity';
import { AccountFinancialYearOpService } from '../../service/account/AccountFinancialYearOpService';
import {
  CreateAccountFinancialYearOpDTO,
  UpdateAccountFinancialYearOpDTO,
  QueryAccountFinancialYearOpDTO,
  AccountFinancialYearOpResponse
} from '../../interface/account/AccountFinancialYearOpInterface';

/**
 * AccountFinancialYearOp 控制器
 * 处理 account_financial_year_op 相关的HTTP请求
 */
const apiPath = '/account/account_financial_year_op';

@Controller(apiPath)
export class AccountFinancialYearOpController extends BaseController<AccountFinancialYearOp> {
  constructor(
    @Inject()
    private accountFinancialYearOpService: AccountFinancialYearOpService
  ) {
    super(accountFinancialYearOpService);
  }

  /**
   * 获取单个AccountFinancialYearOp
   * @param id 实体ID
   * @returns AccountFinancialYearOp对象
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
   * 获取AccountFinancialYearOp列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QueryAccountFinancialYearOpDTO) {
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
   * 创建新的AccountFinancialYearOp
   * @param data 创建数据
   * @returns 创建的AccountFinancialYearOp对象
   */
  @Post()
  async createHandler(@Body() data: CreateAccountFinancialYearOpDTO) {
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
   * 更新AccountFinancialYearOp
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的AccountFinancialYearOp对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateAccountFinancialYearOpDTO) {
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
   * 删除AccountFinancialYearOp
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
   * 批量删除AccountFinancialYearOp
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
      const result = await this.accountFinancialYearOpService.advancedSearch(params);
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

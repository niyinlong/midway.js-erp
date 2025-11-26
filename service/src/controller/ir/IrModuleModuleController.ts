import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { IrModuleModule } from '../../entity/ir/ir.irmodulemodule.entity';
import { IrModuleModuleService } from '../../service/ir/IrModuleModuleService';
import {
  CreateIrModuleModuleDTO,
  UpdateIrModuleModuleDTO,
  QueryIrModuleModuleDTO,
  IrModuleModuleResponse
} from '../../interface/ir/IrModuleModuleInterface';

/**
 * IrModuleModule 控制器
 * 处理 ir_module_module 相关的HTTP请求
 */
const apiPath = '/ir/ir_module_module';

@Controller(apiPath)
export class IrModuleModuleController extends BaseController<IrModuleModule> {
  constructor(
    @Inject()
    private irModuleModuleService: IrModuleModuleService
  ) {
    super(irModuleModuleService);
  }

  /**
   * 获取单个IrModuleModule
   * @param id 实体ID
   * @returns IrModuleModule对象
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
   * 获取IrModuleModule列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QueryIrModuleModuleDTO) {
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
   * 创建新的IrModuleModule
   * @param data 创建数据
   * @returns 创建的IrModuleModule对象
   */
  @Post()
  async createHandler(@Body() data: CreateIrModuleModuleDTO) {
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
   * 更新IrModuleModule
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的IrModuleModule对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateIrModuleModuleDTO) {
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
   * 删除IrModuleModule
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
   * 批量删除IrModuleModule
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
      const result = await this.irModuleModuleService.advancedSearch(params);
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

import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { MrpWorkcenterProductivityLossType } from '../../entity/mrp/mrp.mrpworkcenterproductivitylosstype.entity';
import { MrpWorkcenterProductivityLossTypeService } from '../../service/mrp/MrpWorkcenterProductivityLossTypeService';
import {
  CreateMrpWorkcenterProductivityLossTypeDTO,
  UpdateMrpWorkcenterProductivityLossTypeDTO,
  QueryMrpWorkcenterProductivityLossTypeDTO,
  MrpWorkcenterProductivityLossTypeResponse
} from '../../interface/mrp/MrpWorkcenterProductivityLossTypeInterface';

/**
 * MrpWorkcenterProductivityLossType 控制器
 * 处理 mrp_workcenter_productivity_loss_type 相关的HTTP请求
 */
const apiPath = '/mrp/mrp_workcenter_productivity_loss_type';

@Controller(apiPath)
export class MrpWorkcenterProductivityLossTypeController extends BaseController<MrpWorkcenterProductivityLossType> {
  constructor(
    @Inject()
    private mrpWorkcenterProductivityLossTypeService: MrpWorkcenterProductivityLossTypeService
  ) {
    super(mrpWorkcenterProductivityLossTypeService);
  }

  /**
   * 获取单个MrpWorkcenterProductivityLossType
   * @param id 实体ID
   * @returns MrpWorkcenterProductivityLossType对象
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
   * 获取MrpWorkcenterProductivityLossType列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QueryMrpWorkcenterProductivityLossTypeDTO) {
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
   * 创建新的MrpWorkcenterProductivityLossType
   * @param data 创建数据
   * @returns 创建的MrpWorkcenterProductivityLossType对象
   */
  @Post()
  async createHandler(@Body() data: CreateMrpWorkcenterProductivityLossTypeDTO) {
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
   * 更新MrpWorkcenterProductivityLossType
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的MrpWorkcenterProductivityLossType对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateMrpWorkcenterProductivityLossTypeDTO) {
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
   * 删除MrpWorkcenterProductivityLossType
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
   * 批量删除MrpWorkcenterProductivityLossType
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
      const result = await this.mrpWorkcenterProductivityLossTypeService.advancedSearch(params);
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

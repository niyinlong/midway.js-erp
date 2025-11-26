import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { SlideChannelPartner } from '../../entity/slide/slide.slidechannelpartner.entity';
import { SlideChannelPartnerService } from '../../service/slide/SlideChannelPartnerService';
import {
  CreateSlideChannelPartnerDTO,
  UpdateSlideChannelPartnerDTO,
  QuerySlideChannelPartnerDTO,
  SlideChannelPartnerResponse
} from '../../interface/slide/SlideChannelPartnerInterface';

/**
 * SlideChannelPartner 控制器
 * 处理 slide_channel_partner 相关的HTTP请求
 */
const apiPath = '/slide/slide_channel_partner';

@Controller(apiPath)
export class SlideChannelPartnerController extends BaseController<SlideChannelPartner> {
  constructor(
    @Inject()
    private slideChannelPartnerService: SlideChannelPartnerService
  ) {
    super(slideChannelPartnerService);
  }

  /**
   * 获取单个SlideChannelPartner
   * @param id 实体ID
   * @returns SlideChannelPartner对象
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
   * 获取SlideChannelPartner列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QuerySlideChannelPartnerDTO) {
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
   * 创建新的SlideChannelPartner
   * @param data 创建数据
   * @returns 创建的SlideChannelPartner对象
   */
  @Post()
  async createHandler(@Body() data: CreateSlideChannelPartnerDTO) {
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
   * 更新SlideChannelPartner
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的SlideChannelPartner对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateSlideChannelPartnerDTO) {
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
   * 删除SlideChannelPartner
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
   * 批量删除SlideChannelPartner
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
      const result = await this.slideChannelPartnerService.advancedSearch(params);
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

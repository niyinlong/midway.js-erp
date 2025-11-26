import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { SlideChannelPrerequisiteSlideChannelRel } from '../../entity/slide/slide.slidechannelprerequisiteslidechannelrel.entity';
import { SlideChannelPrerequisiteSlideChannelRelService } from '../../service/slide/SlideChannelPrerequisiteSlideChannelRelService';
import {
  CreateSlideChannelPrerequisiteSlideChannelRelDTO,
  UpdateSlideChannelPrerequisiteSlideChannelRelDTO,
  QuerySlideChannelPrerequisiteSlideChannelRelDTO,
  SlideChannelPrerequisiteSlideChannelRelResponse
} from '../../interface/slide/SlideChannelPrerequisiteSlideChannelRelInterface';

/**
 * SlideChannelPrerequisiteSlideChannelRel 控制器
 * 处理 slide_channel_prerequisite_slide_channel_rel 相关的HTTP请求
 */
const apiPath = '/slide/slide_channel_prerequisite_slide_channel_rel';

@Controller(apiPath)
export class SlideChannelPrerequisiteSlideChannelRelController extends BaseController<SlideChannelPrerequisiteSlideChannelRel> {
  constructor(
    @Inject()
    private slideChannelPrerequisiteSlideChannelRelService: SlideChannelPrerequisiteSlideChannelRelService
  ) {
    super(slideChannelPrerequisiteSlideChannelRelService);
  }

  /**
   * 获取单个SlideChannelPrerequisiteSlideChannelRel
   * @param id 实体ID
   * @returns SlideChannelPrerequisiteSlideChannelRel对象
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
   * 获取SlideChannelPrerequisiteSlideChannelRel列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QuerySlideChannelPrerequisiteSlideChannelRelDTO) {
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
   * 创建新的SlideChannelPrerequisiteSlideChannelRel
   * @param data 创建数据
   * @returns 创建的SlideChannelPrerequisiteSlideChannelRel对象
   */
  @Post()
  async createHandler(@Body() data: CreateSlideChannelPrerequisiteSlideChannelRelDTO) {
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
   * 更新SlideChannelPrerequisiteSlideChannelRel
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的SlideChannelPrerequisiteSlideChannelRel对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateSlideChannelPrerequisiteSlideChannelRelDTO) {
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
   * 删除SlideChannelPrerequisiteSlideChannelRel
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
   * 批量删除SlideChannelPrerequisiteSlideChannelRel
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
      const result = await this.slideChannelPrerequisiteSlideChannelRelService.advancedSearch(params);
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

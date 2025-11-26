import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { WebsitePagePropertiesBase } from '../../entity/website/website.websitepagepropertiesbase.entity';
import { WebsitePagePropertiesBaseService } from '../../service/website/WebsitePagePropertiesBaseService';
import {
  CreateWebsitePagePropertiesBaseDTO,
  UpdateWebsitePagePropertiesBaseDTO,
  QueryWebsitePagePropertiesBaseDTO,
  WebsitePagePropertiesBaseResponse
} from '../../interface/website/WebsitePagePropertiesBaseInterface';

/**
 * WebsitePagePropertiesBase 控制器
 * 处理 website_page_properties_base 相关的HTTP请求
 */
@Controller(apiPath)
export class WebsitePagePropertiesBaseController extends BaseController<WebsitePagePropertiesBase> {
  constructor(
    @Inject()
    private websitePagePropertiesBaseService: WebsitePagePropertiesBaseService
  ) {
    super(websitePagePropertiesBaseService);
  }

  /**
   * 获取单个WebsitePagePropertiesBase
   * @param id 实体ID
   * @returns WebsitePagePropertiesBase对象
   */
  @Get('/:id')
  async getById(@Param('id') id: string) {
    // BaseController中的getById方法已经处理了响应
    return this.getById({
      params: { id },
      body: {},
      query: {},
      status: (code) => {},
      set body(data: any) {}
    } as any);
  }

  /**
   * 获取WebsitePagePropertiesBase列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async list(@Query() query: QueryWebsitePagePropertiesBaseDTO) {
    // BaseController中的list方法已经处理了响应
    return this.list({
      query,
      body: {},
      params: {},
      status: (code) => {},
      set body(data: any) {}
    } as any);
  }

  /**
   * 创建新的WebsitePagePropertiesBase
   * @param data 创建数据
   * @returns 创建的WebsitePagePropertiesBase对象
   */
  @Post()
  async create(@Body() data: CreateWebsitePagePropertiesBaseDTO) {
    // BaseController中的create方法已经处理了响应
    return this.create({
      body: data,
      query: {},
      params: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 更新WebsitePagePropertiesBase
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的WebsitePagePropertiesBase对象
   */
  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateWebsitePagePropertiesBaseDTO) {
    // BaseController中的update方法已经处理了响应
    return this.update({
      params: { id },
      body: data,
      query: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 删除WebsitePagePropertiesBase
   * @param id 实体ID
   * @returns 删除结果
   */
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    // BaseController中的delete方法已经处理了响应
    return this.delete({
      params: { id },
      body: {},
      query: {},
      status: (code) => {},
      set body(response: any) {}
    } as any);
  }

  /**
   * 批量删除WebsitePagePropertiesBase
   * @param body 包含ids数组的请求体
   * @returns 删除结果
   */
  @Delete('/batch')
  async batchDelete(@Body() body: { ids: (string | number)[] }) {
    // BaseController中的batchDelete方法已经处理了响应
    return this.batchDelete({
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
      const result = await this.websitePagePropertiesBaseService.advancedSearch(params);
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

import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { DigestDigest } from '../../entity/digest/digest.digestdigest.entity';
import { DigestDigestService } from '../../service/digest/DigestDigestService';
import {
  CreateDigestDigestDTO,
  UpdateDigestDigestDTO,
  QueryDigestDigestDTO,
  DigestDigestResponse
} from '../../interface/digest/DigestDigestInterface';

/**
 * DigestDigest 控制器
 * 处理 digest_digest 相关的HTTP请求
 */
const apiPath = '/digest/digest_digest';

@Controller(apiPath)
export class DigestDigestController extends BaseController<DigestDigest> {
  constructor(
    @Inject()
    private digestDigestService: DigestDigestService
  ) {
    super(digestDigestService);
  }

  /**
   * 获取单个DigestDigest
   * @param id 实体ID
   * @returns DigestDigest对象
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
   * 获取DigestDigest列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QueryDigestDigestDTO) {
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
   * 创建新的DigestDigest
   * @param data 创建数据
   * @returns 创建的DigestDigest对象
   */
  @Post()
  async createHandler(@Body() data: CreateDigestDigestDTO) {
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
   * 更新DigestDigest
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的DigestDigest对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateDigestDigestDTO) {
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
   * 删除DigestDigest
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
   * 批量删除DigestDigest
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
      const result = await this.digestDigestService.advancedSearch(params);
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

import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { OnboardingOnboardingOnboardingOnboardingStepRel } from '../../entity/onboarding/onboarding.onboardingonboardingonboardingonboardingsteprel.entity';
import { OnboardingOnboardingOnboardingOnboardingStepRelService } from '../../service/onboarding/OnboardingOnboardingOnboardingOnboardingStepRelService';
import {
  CreateOnboardingOnboardingOnboardingOnboardingStepRelDTO,
  UpdateOnboardingOnboardingOnboardingOnboardingStepRelDTO,
  QueryOnboardingOnboardingOnboardingOnboardingStepRelDTO,
  OnboardingOnboardingOnboardingOnboardingStepRelResponse
} from '../../interface/onboarding/OnboardingOnboardingOnboardingOnboardingStepRelInterface';

/**
 * OnboardingOnboardingOnboardingOnboardingStepRel 控制器
 * 处理 onboarding_onboarding_onboarding_onboarding_step_rel 相关的HTTP请求
 */
const apiPath = '/onboarding/onboarding_onboarding_onboarding_onboarding_step_rel';

@Controller(apiPath)
export class OnboardingOnboardingOnboardingOnboardingStepRelController extends BaseController<OnboardingOnboardingOnboardingOnboardingStepRel> {
  constructor(
    @Inject()
    private onboardingOnboardingOnboardingOnboardingStepRelService: OnboardingOnboardingOnboardingOnboardingStepRelService
  ) {
    super(onboardingOnboardingOnboardingOnboardingStepRelService);
  }

  /**
   * 获取单个OnboardingOnboardingOnboardingOnboardingStepRel
   * @param id 实体ID
   * @returns OnboardingOnboardingOnboardingOnboardingStepRel对象
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
   * 获取OnboardingOnboardingOnboardingOnboardingStepRel列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QueryOnboardingOnboardingOnboardingOnboardingStepRelDTO) {
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
   * 创建新的OnboardingOnboardingOnboardingOnboardingStepRel
   * @param data 创建数据
   * @returns 创建的OnboardingOnboardingOnboardingOnboardingStepRel对象
   */
  @Post()
  async createHandler(@Body() data: CreateOnboardingOnboardingOnboardingOnboardingStepRelDTO) {
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
   * 更新OnboardingOnboardingOnboardingOnboardingStepRel
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的OnboardingOnboardingOnboardingOnboardingStepRel对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateOnboardingOnboardingOnboardingOnboardingStepRelDTO) {
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
   * 删除OnboardingOnboardingOnboardingOnboardingStepRel
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
   * 批量删除OnboardingOnboardingOnboardingOnboardingStepRel
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
      const result = await this.onboardingOnboardingOnboardingOnboardingStepRelService.advancedSearch(params);
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

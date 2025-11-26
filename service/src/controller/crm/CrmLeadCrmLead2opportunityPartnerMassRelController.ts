import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { CrmLeadCrmLead2opportunityPartnerMassRel } from '../../entity/crm/crm.crmleadcrmlead2opportunitypartnermassrel.entity';
import { CrmLeadCrmLead2opportunityPartnerMassRelService } from '../../service/crm/CrmLeadCrmLead2opportunityPartnerMassRelService';
import {
  CreateCrmLeadCrmLead2opportunityPartnerMassRelDTO,
  UpdateCrmLeadCrmLead2opportunityPartnerMassRelDTO,
  QueryCrmLeadCrmLead2opportunityPartnerMassRelDTO,
  CrmLeadCrmLead2opportunityPartnerMassRelResponse
} from '../../interface/crm/CrmLeadCrmLead2opportunityPartnerMassRelInterface';

/**
 * CrmLeadCrmLead2opportunityPartnerMassRel 控制器
 * 处理 crm_lead_crm_lead2opportunity_partner_mass_rel 相关的HTTP请求
 */
const apiPath = '/crm/crm_lead_crm_lead2opportunity_partner_mass_rel';

@Controller(apiPath)
export class CrmLeadCrmLead2opportunityPartnerMassRelController extends BaseController<CrmLeadCrmLead2opportunityPartnerMassRel> {
  constructor(
    @Inject()
    private crmLeadCrmLead2opportunityPartnerMassRelService: CrmLeadCrmLead2opportunityPartnerMassRelService
  ) {
    super(crmLeadCrmLead2opportunityPartnerMassRelService);
  }

  /**
   * 获取单个CrmLeadCrmLead2opportunityPartnerMassRel
   * @param id 实体ID
   * @returns CrmLeadCrmLead2opportunityPartnerMassRel对象
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
   * 获取CrmLeadCrmLead2opportunityPartnerMassRel列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QueryCrmLeadCrmLead2opportunityPartnerMassRelDTO) {
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
   * 创建新的CrmLeadCrmLead2opportunityPartnerMassRel
   * @param data 创建数据
   * @returns 创建的CrmLeadCrmLead2opportunityPartnerMassRel对象
   */
  @Post()
  async createHandler(@Body() data: CreateCrmLeadCrmLead2opportunityPartnerMassRelDTO) {
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
   * 更新CrmLeadCrmLead2opportunityPartnerMassRel
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的CrmLeadCrmLead2opportunityPartnerMassRel对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateCrmLeadCrmLead2opportunityPartnerMassRelDTO) {
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
   * 删除CrmLeadCrmLead2opportunityPartnerMassRel
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
   * 批量删除CrmLeadCrmLead2opportunityPartnerMassRel
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
      const result = await this.crmLeadCrmLead2opportunityPartnerMassRelService.advancedSearch(params);
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

import { Controller, Get, Post, Put, Delete, Inject, Query, Body, Param } from '@midwayjs/core';
import { BaseController } from '../base/BaseController';
import { ProjectRoleProjectTaskRel } from '../../entity/project/project.projectroleprojecttaskrel.entity';
import { ProjectRoleProjectTaskRelService } from '../../service/project/ProjectRoleProjectTaskRelService';
import {
  CreateProjectRoleProjectTaskRelDTO,
  UpdateProjectRoleProjectTaskRelDTO,
  QueryProjectRoleProjectTaskRelDTO,
  ProjectRoleProjectTaskRelResponse
} from '../../interface/project/ProjectRoleProjectTaskRelInterface';

/**
 * ProjectRoleProjectTaskRel 控制器
 * 处理 project_role_project_task_rel 相关的HTTP请求
 */
const apiPath = '/project/project_role_project_task_rel';

@Controller(apiPath)
export class ProjectRoleProjectTaskRelController extends BaseController<ProjectRoleProjectTaskRel> {
  constructor(
    @Inject()
    private projectRoleProjectTaskRelService: ProjectRoleProjectTaskRelService
  ) {
    super(projectRoleProjectTaskRelService);
  }

  /**
   * 获取单个ProjectRoleProjectTaskRel
   * @param id 实体ID
   * @returns ProjectRoleProjectTaskRel对象
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
   * 获取ProjectRoleProjectTaskRel列表（支持分页）
   * @param query 查询参数
   * @returns 分页查询结果
   */
  @Get()
  async listHandler(@Query() query: QueryProjectRoleProjectTaskRelDTO) {
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
   * 创建新的ProjectRoleProjectTaskRel
   * @param data 创建数据
   * @returns 创建的ProjectRoleProjectTaskRel对象
   */
  @Post()
  async createHandler(@Body() data: CreateProjectRoleProjectTaskRelDTO) {
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
   * 更新ProjectRoleProjectTaskRel
   * @param id 实体ID
   * @param data 更新数据
   * @returns 更新后的ProjectRoleProjectTaskRel对象
   */
  @Put('/:id')
  async updateHandler(@Param('id') id: string, @Body() data: UpdateProjectRoleProjectTaskRelDTO) {
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
   * 删除ProjectRoleProjectTaskRel
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
   * 批量删除ProjectRoleProjectTaskRel
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
      const result = await this.projectRoleProjectTaskRelService.advancedSearch(params);
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

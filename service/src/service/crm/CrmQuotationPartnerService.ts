import { Inject, Provide } from '@midwayjs/core';
import { InjectRepository } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { CrmQuotationPartner } from '../../entity/crm/crm.crmquotationpartner.entity';
import { BaseService } from '../base/BaseService';

/**
 * CrmQuotationPartner 服务类
 * 处理 crm_quotation_partner 表的数据库操作
 */
@Provide()
export class CrmQuotationPartnerService extends BaseService<CrmQuotationPartner> {
  constructor(
    @InjectRepository(CrmQuotationPartner)
    repository: Repository<CrmQuotationPartner>
  ) {
    super(repository);
  }

  /**
   * 根据自定义条件查询CrmQuotationPartner
   * 可以在此添加业务相关的查询方法
   */
  async findByCustomCondition(condition: any) {
    return this.findOne(condition);
  }

  /**
   * 高级查询方法示例
   * 可根据业务需求扩展
   */
  async advancedSearch(params: {
    keyword?: string;
    status?: string;
    startDate?: Date;
    endDate?: Date;
    page?: number;
    pageSize?: number;
  }) {
    const where: any = {};
    
    // 根据实体字段动态构建查询条件
    // 这里可以根据实际字段名进行调整
    if (params.keyword) {
      // 假设有name或code字段可搜索
      where.$or = [
        { name: { $like: '%' + params.keyword + '%' } },
        { code: { $like: '%' + params.keyword + '%' } },
      ];
    }
    
    if (params.status) {
      where.status = params.status;
    }
    
    if (params.startDate && params.endDate) {
      where.createTime = {
        $gte: params.startDate,
        $lte: params.endDate,
      };
    }
    
    // 执行分页查询
    return this.findWithPagination(
      params.page || 1,
      params.pageSize || 10,
      where
    );
  }
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * IAP线索行业实体
 * 作用：存储通过IAP模块获取的线索所属行业信息，用于对线索进行行业分类和管理
 * 支持多语言行业名称和行业相关的配置信息
 */
@Entity('crm_iap_lead_industry')
export class CrmIapLeadIndustry {
  /**
   * 主键ID
   * 自动生成的唯一标识符，用于在数据库中唯一标识每个行业记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 颜色索引
   * 用于在UI界面中为该行业分配特定的显示颜色，便于视觉区分和识别
   */
  @Column({
    type: 'int',
  })
  color: number;

  /**
   * 排序序号
   * 定义行业在列表中的显示顺序，数值越小优先级越高
   */
  @Column({
    type: 'int',
  })
  sequence: number;

  /**
   * 创建用户ID
   * 记录创建该行业记录的用户ID，关联到res_users表，用于追踪数据创建者
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后修改用户ID
   * 记录最后修改该行业记录的用户ID，关联到res_users表，用于追踪数据维护者
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 来源ID
   * 存储与该行业相关联的来源系统ID，用于与第三方系统集成和数据同步
   */
  @Column({
    type: 'varchar',
  })
  reveal_ids: string;

  /**
   * 来源对象（注释掉的关联关系）
   * 通过reveal_ids与来源系统实体建立多对一关系
   */
  // @ManyToOne(() => Reveals)
  // @JoinColumn({ name: 'reveal_ids' })
  // reveals: Reveals;

  /**
   * 行业名称
   * 以JSON格式存储多语言环境下的行业名称，支持国际化显示
   * 格式示例：{"en_US": "Technology", "zh_CN": "科技"}
   */
  @Column({
    type: 'jsonb',
  })
  name: object;

  /**
   * 创建时间
   * 记录行业记录创建的确切日期和时间，用于数据审计和历史记录追踪
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后修改时间
   * 记录行业记录最后一次更新的确切日期和时间，用于数据审计和变更追踪
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;
}
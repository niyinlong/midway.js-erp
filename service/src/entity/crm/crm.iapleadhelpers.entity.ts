import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * IAP线索辅助模块实体
 * 作用：存储IAP线索相关模块的辅助数据，提供线索导入、处理和管理的支持功能
 * IAP(In-App Purchase)模块通常用于第三方线索获取和管理集成
 */
@Entity('crm_iap_lead_helpers')
export class CrmIapLeadHelpers {
  /**
   * 主键ID
   * 自动生成的唯一标识符，用于在数据库中唯一标识每个辅助记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 创建用户ID
   * 记录创建该记录的用户ID，关联到res_users表，用于追踪数据创建者
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后修改用户ID
   * 记录最后修改该记录的用户ID，关联到res_users表，用于追踪数据维护者
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 创建时间
   * 记录记录创建的确切日期和时间，用于数据审计和历史记录追踪
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后修改时间
   * 记录记录最后一次更新的确切日期和时间，用于数据审计和变更追踪
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;
}
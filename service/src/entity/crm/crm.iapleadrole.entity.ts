import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * IAP线索职位实体
 * 作用：存储通过IAP模块获取的线索中联系人的职位信息
 * 该实体维护了线索挖掘过程中使用的各种职位类型，用于对线索联系人进行职位分类和筛选
 */
@Entity('crm_iap_lead_role')
export class CrmIapLeadRole {
  /**
   * 职位ID
   * 系统自动生成的主键，唯一标识每个职位记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 颜色索引
   * 用于在界面中展示不同职位类型时使用的颜色标识，增强用户体验和视觉区分度
   */
  @Column({
    type: 'int',
  })
  color: number;

  /**
   * 创建者ID
   * 记录创建该职位记录的用户ID，用于审计和权限控制
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新者ID
   * 记录最后修改该职位记录的用户ID，用于审计和权限控制
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * Reveal系统ID
   * 关联到外部Reveal系统中的职位ID，用于数据同步和集成
   */
  @Column({
    type: 'varchar',
  })
  reveal_id: string;

  /**
   * Reveal对象（注释掉的关联关系）
   * 通过reveal_id与Reveal实体建立多对一关系
   */
  // @ManyToOne(() => Reveal)
  // @JoinColumn({ name: 'reveal_id' })
  // reveal: Reveal;

  /**
   * 职位名称
   * 存储多语言的职位名称信息，以JSON格式保存，支持国际化显示
   */
  @Column({
    type: 'jsonb',
  })
  name: object;

  /**
   * 创建时间
   * 记录职位记录的创建时间，自动生成
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新时间
   * 记录职位记录的最后修改时间，自动更新
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;
}
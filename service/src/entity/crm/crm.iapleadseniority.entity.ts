import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * IAP线索职级实体
 * 作用：存储通过IAP模块获取的线索中联系人的职级信息
 * 该实体维护了线索挖掘过程中使用的各种职级类型，用于对线索联系人进行职级分类和筛选
 */
@Entity('crm_iap_lead_seniority')
export class CrmIapLeadSeniority {
  /**
   * 职级ID
   * 系统自动生成的主键，唯一标识每个职级记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 创建者ID
   * 记录创建该职级记录的用户ID，用于审计和权限控制
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新者ID
   * 记录最后修改该职级记录的用户ID，用于审计和权限控制
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * Reveal系统ID
   * 关联到外部Reveal系统中的职级ID，用于数据同步和集成
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
   * 职级名称
   * 存储多语言的职级名称信息，以JSON格式保存，支持国际化显示
   */
  @Column({
    type: 'jsonb',
  })
  name: object;

  /**
   * 创建时间
   * 记录职级记录的创建时间，自动生成
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新时间
   * 记录职级记录的最后修改时间，自动更新
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;
}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 线索丢失记录实体
 * 作用：存储线索被标记为丢失时的详细信息，包括丢失原因、反馈等数据，用于销售漏斗分析和改进
 */
@Entity('crm_lead_lost')
export class CrmLeadLost {
  /**
   * 主键ID
   * 作用：唯一标识每一条线索丢失记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 丢失原因ID
   * 作用：关联到具体的丢失原因配置
   */
  @Column({
    type: 'int',
  })
  lost_reason_id: number;

  // 多对一关联到LostReason实体
  // @ManyToOne(() => LostReason)
  // @JoinColumn({ name: 'lost_reason_id' })
  // lost_reason: LostReason;

  /**
   * 创建人用户ID
   * 作用：记录标记线索丢失的用户
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新人用户ID
   * 作用：记录最后修改此丢失记录的用户
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 丢失反馈信息
   * 作用：存储关于线索丢失的详细说明和反馈意见
   */
  @Column({
    type: 'varchar',
  })
  lost_feedback: string;

  /**
   * 创建时间
   * 作用：记录线索被标记为丢失的时间
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新时间
   * 作用：记录此丢失记录的最后修改时间
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;

}
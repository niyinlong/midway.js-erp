import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 线索概率学习更新实体
 * 作用：存储线索概率学习系统(Probability Learning System)的更新配置信息，用于管理线索转化率预测模型的更新
 */
@Entity('crm_lead_pls_update')
export class CrmLeadPlsUpdate {
  /**
   * 主键ID
   * 作用：唯一标识每一条概率学习更新配置记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 创建人用户ID
   * 作用：记录创建此概率学习更新配置的用户
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新人用户ID
   * 作用：记录最后修改此概率学习更新配置的用户
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 概率学习系统开始日期
   * 作用：定义概率学习系统开始运行的日期，用于线索转化率预测的时间范围设定
   */
  @Column({
    type: 'datetime',
  })
  pls_start_date: Date;

  /**
   * 创建时间
   * 作用：记录此配置记录的创建时间
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新时间
   * 作用：记录此配置记录的最后修改时间
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;

}
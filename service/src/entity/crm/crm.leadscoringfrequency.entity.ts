import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 线索评分频率实体
 * 作用：存储线索评分频率数据，用于分析不同变量值对线索转化结果的影响频率
 */
@Entity('crm_lead_scoring_frequency')
export class CrmLeadScoringFrequency {
  /**
   * 主键ID
   * 作用：唯一标识线索评分频率记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 销售团队ID
   * 作用：关联到特定的销售团队，用于数据隔离和团队级分析
   */
  @Column({
    type: 'int',
  })
  team_id: number;

  // 多对一关联到Team实体
  // @ManyToOne(() => Team)
  // @JoinColumn({ name: 'team_id' })
  // team: Team;

  /**
   * 创建者ID
   * 作用：记录创建该记录的用户
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新者ID
   * 作用：记录最后修改该记录的用户
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 变量名
   * 作用：标识分析的字段变量，如行业、地区、来源等
   */
  @Column({
    type: 'varchar',
  })
  variable: string;

  /**
   * 变量值
   * 作用：记录变量的具体值
   */
  @Column({
    type: 'varchar',
  })
  value: string;

  /**
   * 赢单数量
   * 作用：记录该变量值对应的赢单线索数量
   */
  @Column({
    type: 'int',
  })
  won_count: number;

  /**
   * 输单数量
   * 作用：记录该变量值对应的输单线索数量
   */
  @Column({
    type: 'int',
  })
  lost_count: number;

  /**
   * 创建时间
   * 作用：记录记录创建的时间戳
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新时间
   * 作用：记录记录最后修改的时间戳
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;

}
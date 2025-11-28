import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 线索评分频率字段实体
 * 作用：存储可用于预测性线索评分计算的字段配置，定义哪些字段可参与线索评分分析
 */
@Entity('crm_lead_scoring_frequency_field')
export class CrmLeadScoringFrequencyField {
  /**
   * 主键ID
   * 作用：唯一标识线索评分频率字段记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 字段ID
   * 作用：关联到具体的线索字段，标识哪些字段可用于评分分析
   */
  @Column({
    type: 'int',
  })
  field_id: number;

  // 多对一关联到Field实体
  // @ManyToOne(() => Field)
  // @JoinColumn({ name: 'field_id' })
  // field: Field;

  /**
   * 颜色值
   * 作用：字段在UI中的显示颜色标识，用于区分不同类型的评分字段
   */
  @Column({
    type: 'int',
  })
  color: number;

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
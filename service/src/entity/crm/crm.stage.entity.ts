import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * CRM阶段实体
 * 作用：定义CRM销售流程中的各个阶段，用于管理线索和商机的生命周期，包括阶段顺序、视觉呈现和业务规则
 */
@Entity('crm_stage')
export class CrmStage {
  /**
   * 主键ID
   * 作用：唯一标识每一个CRM阶段
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 顺序号
   * 作用：定义阶段在销售流程中的显示顺序
   */
  @Column({
    type: 'int',
  })
  sequence: number;

  /**
   * 腐烂阈值天数
   * 作用：定义线索或商机在该阶段停留超过多少天会被标记为需要跟进
   */
  @Column({
    type: 'int',
  })
  rotting_threshold_days: number;

  /**
   * 颜色值
   * 作用：定义阶段在界面上显示的颜色代码
   */
  @Column({
    type: 'int',
  })
  color: number;

  /**
   * 创建人用户ID
   * 作用：记录创建此阶段的用户
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新人用户ID
   * 作用：记录最后修改此阶段的用户
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 阶段名称
   * 作用：存储阶段的多语言名称，使用JSON格式支持国际化
   */
  @Column({
    type: 'jsonb',
  })
  name: object;

  /**
   * 阶段要求
   * 作用：描述进入该阶段的条件和需要完成的任务
   */
  @Column({
    type: 'varchar',
  })
  requirements: string;

  /**
   * 是否为赢单阶段
   * 作用：标识该阶段是否为最终的成功赢单阶段
   */
  @Column({
    type: 'boolean',
  })
  is_won: boolean;

  /**
   * 是否在销售管道中折叠
   * 作用：控制该阶段在销售管道视图中是否默认折叠显示
   */
  @Column({
    type: 'boolean',
  })
  fold: boolean;

  /**
   * 创建时间
   * 作用：记录此阶段的创建时间
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新时间
   * 作用：记录此阶段的最后修改时间
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;

}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 商机合并实体
 * 作用：存储商机合并操作的记录，用于管理和跟踪多个商机合并为一个主商机的过程
 */
@Entity('crm_merge_opportunity')
export class CrmMergeOpportunity {
  /**
   * 主键ID
   * 作用：唯一标识商机合并记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 销售人员ID
   * 作用：关联到执行合并操作的销售人员
   */
  @Column({
    type: 'int',
  })
  user_id: number;

  // 多对一关联到User实体
  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * 销售团队ID
   * 作用：关联到销售人员所属的销售团队
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
   * 作用：记录创建该合并记录的用户
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新者ID
   * 作用：记录最后修改该合并记录的用户
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
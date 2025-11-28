import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * CRM团队成员实体
 * 作用：存储销售团队成员信息，管理团队成员的分配规则、容量限制和工作偏好设置
 */
@Entity('crm_team_member')
export class CrmTeamMember {
  /**
   * 主键ID
   * 作用：唯一标识每一条团队成员记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * CRM团队ID
   * 作用：关联到成员所属的销售团队
   */
  @Column({
    type: 'int',
  })
  crm_team_id: number;

  // 多对一关联到CrmTeam实体
  // @ManyToOne(() => CrmTeam)
  // @JoinColumn({ name: 'crm_team_id' })
  // crm_team: CrmTeam;

  /**
   * 销售人员用户ID
   * 作用：关联到团队中的具体销售人员用户
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
   * 创建人用户ID
   * 作用：记录创建此团队成员关系的用户
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新人用户ID
   * 作用：记录最后修改此团队成员关系的用户
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 是否激活
   * 作用：控制团队成员的启用状态
   */
  @Column({
    type: 'boolean',
  })
  active: boolean;

  /**
   * 创建时间
   * 作用：记录此团队成员关系的创建时间
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新时间
   * 作用：记录此团队成员关系的最后修改时间
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;

  /**
   * 平均线索处理容量（30天内）
   * 作用：定义销售成员在30天内能够处理的最大线索数量
   */
  @Column({
    type: 'int',
  })
  assignment_max: number;

  /**
   * 分配域
   * 作用：定义可分配给此成员的线索和商机的规则范围
   */
  @Column({
    type: 'varchar',
  })
  assignment_domain: string;

  /**
   * 偏好分配域
   * 作用：定义此成员偏好处理的线索和商机的规则范围
   */
  @Column({
    type: 'varchar',
  })
  assignment_domain_preferred: string;

  /**
   * 是否暂停分配
   * 作用：控制是否暂时停止向此成员分配新的线索和商机
   */
  @Column({
    type: 'boolean',
  })
  assignment_optout: boolean;

}
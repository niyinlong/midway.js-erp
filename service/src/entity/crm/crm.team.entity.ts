import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * CRM团队实体
 * 作用：存储销售团队信息，管理销售团队的配置、成员、目标和工作流程设置
 */
@Entity('crm_team')
export class CrmTeam {
  /**
   * 主键ID
   * 作用：唯一标识每一个销售团队
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 顺序号
   * 作用：定义团队在列表中的显示顺序
   */
  @Column({
    type: 'int',
  })
  sequence: number;

  /**
   * 公司ID
   * 作用：关联到团队所属的公司
   */
  @Column({
    type: 'int',
  })
  company_id: number;

  // 多对一关联到Company实体
  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * 团队负责人用户ID
   * 作用：标识团队的领导者
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
   * 颜色索引
   * 作用：定义团队在界面上显示的颜色标识
   */
  @Column({
    type: 'int',
  })
  color: number;

  /**
   * 创建人用户ID
   * 作用：记录创建此团队的用户
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新人用户ID
   * 作用：记录最后修改此团队的用户
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 团队名称
   * 作用：存储团队的多语言名称，使用JSON格式支持国际化
   */
  @Column({
    type: 'jsonb',
  })
  name: object;

  /**
   * 是否激活
   * 作用：控制团队的启用状态
   */
  @Column({
    type: 'boolean',
  })
  active: boolean;

  /**
   * 创建时间
   * 作用：记录此团队的创建时间
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新时间
   * 作用：记录此团队的最后修改时间
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;

  /**
   * 开票目标
   * 作用：存储团队的销售开票目标金额
   */
  @Column({
    type: 'varchar',
  })
  invoiced_target: string;

  /**
   * 别名ID
   * 作用：关联到团队的邮件别名配置
   */
  @Column({
    type: 'int',
  })
  alias_id: number;

  // 多对一关联到Alias实体
  // @ManyToOne(() => Alias)
  // @JoinColumn({ name: 'alias_id' })
  // alias: Alias;

  /**
   * 分配域
   * 作用：定义线索和商机分配给团队的规则范围
   */
  @Column({
    type: 'varchar',
  })
  assignment_domain: string;

  /**
   * 线索属性定义
   * 作用：存储此团队使用的线索自定义属性配置
   */
  @Column({
    type: 'jsonb',
  })
  lead_properties_definition: object;

  /**
   * 是否使用线索功能
   * 作用：控制此团队是否启用线索管理功能
   */
  @Column({
    type: 'boolean',
  })
  use_leads: boolean;

  /**
   * 是否使用销售管道
   * 作用：控制此团队是否启用商机和销售管道功能
   */
  @Column({
    type: 'boolean',
  })
  use_opportunities: boolean;

  /**
   * 是否跳过自动分配
   * 作用：控制是否禁用线索和商机的自动分配功能
   */
  @Column({
    type: 'boolean',
  })
  assignment_optout: boolean;

}
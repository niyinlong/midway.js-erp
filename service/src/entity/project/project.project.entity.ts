import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * 项目实体类 - 用于表示系统中的项目信息
 */
@Entity('project_project')
export class ProjectProject {
  /**
   * 项目主键ID - 系统自动生成的唯一标识符
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 项目账户ID - 关联到财务账户表的外键
   * 用于项目财务管理和会计核算
   */
  @Column({
    type: 'int',
  })
  account_id: number;

  // @ManyToOne(() => Account)
  // @JoinColumn({ name: 'account_id' })
  // account: Account;

  /**
   * 别名ID - 关联到别名表的外键
   * 用于邮件集成和自动创建任务
   */
  @Column({
    type: 'int',
  })
  alias_id: number;

  // @ManyToOne(() => Alias)
  // @JoinColumn({ name: 'alias_id' })
  // alias: Alias;

  /**
   * 排序序号 - 决定项目在列表中的显示顺序
   */
  @Column({
    type: 'int',
  })
  sequence: number;

  /**
   * 客户ID - 关联到合作伙伴表的外键
   * 标识项目的所属客户或合作伙伴
   */
  @Column({
    type: 'int',
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * 公司ID - 关联到公司表的外键
   * 标识项目所属的公司
   */
  @Column({
    type: 'int',
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * 颜色索引 - 用于在UI中显示项目的颜色标识
   * 提高可视化识别效率
   */
  @Column({
    type: 'int',
  })
  color: number;

  /**
   * 项目经理ID - 关联到用户表的外键
   * 指定负责项目的用户
   */
  @Column({
    type: 'int',
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * 阶段ID - 关联到项目阶段表的外键
   * 标识项目当前所处的生命周期阶段
   */
  @Column({
    type: 'int',
  })
  stage_id: number;

  // @ManyToOne(() => Stage)
  // @JoinColumn({ name: 'stage_id' })
  // stage: Stage;

  /**
   * 最后更新ID - 关联到更新记录表的外键
   * 记录最后一次更新的相关信息
   */
  @Column({
    type: 'int',
  })
  last_update_id: number;

  // @ManyToOne(() => LastUpdate)
  // @JoinColumn({ name: 'last_update_id' })
  // last_update: LastUpdate;

  /**
   * 创建者ID - 关联到用户表的外键
   * 记录项目创建者
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新者ID - 关联到用户表的外键
   * 记录最后一次修改项目的用户
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 安全访问令牌 - 用于外部API或链接访问项目的授权凭证
   * 确保项目信息的安全访问
   */
  @Column({
    type: 'varchar',
  })
  access_token: string;

  /**
   * 隐私可见性设置 - 控制项目信息的公开范围
   * 如'public', 'private', 'portal'等选项
   */
  @Column({
    type: 'varchar',
  })
  privacy_visibility: string;

  /**
   * 最后更新状态 - 表示项目的最新状态描述
   */
  @Column({
    type: 'varchar',
  })
  last_update_status: string;

  /**
   * 项目开始日期 - 计划开始实施项目的时间
   */
  @Column({
    type: 'datetime',
  })
  date_start: Date;

  /**
   * 项目到期日期 - 计划完成项目的时间
   * 用于项目进度跟踪和截止日期提醒
   */
  @Column({
    type: 'datetime',
  })
  date: Date;

  /**
   * 项目名称 - 存储多语言的项目标题
   * 使用jsonb类型支持国际化显示
   */
  @Column({
    type: 'jsonb',
  })
  name: object;

  /**
   * 任务标签设置 - 自定义任务的显示名称
   * 使用jsonb类型支持多语言配置
   */
  @Column({
    type: 'jsonb',
  })
  label_tasks: object;

  /**
   * 任务属性定义 - 配置项目中任务的自定义属性
   * 存储任务字段、验证规则等配置信息
   */
  @Column({
    type: 'jsonb',
  })
  task_properties_definition: object;

  /**
   * 项目描述 - 详细说明项目的目标、范围和相关信息
   */
  @Column({
    type: 'varchar',
  })
  description: string;

  /**
   * 活跃状态 - 标识项目是否处于活跃状态
   * false表示项目已归档或不再活跃
   */
  @Column({
    type: 'boolean',
  })
  active: boolean;

  /**
   * 允许任务依赖 - 是否启用任务间的依赖关系管理
   */
  @Column({
    type: 'boolean',
  })
  allow_task_dependencies: boolean;

  /**
   * 允许里程碑 - 是否启用项目里程碑功能
   */
  @Column({
    type: 'boolean',
  })
  allow_milestones: boolean;

  /**
   * 允许重复任务 - 是否启用任务的定期重复功能
   */
  @Column({
    type: 'boolean',
  })
  allow_recurring_tasks: boolean;

  /**
   * 模板标记 - 标识该项目是否为模板项目
   * 模板项目可用于快速创建新的类似项目
   */
  @Column({
    type: 'boolean',
  })
  is_template: boolean;

  /**
   * 创建时间 - 记录项目创建的时间戳
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新时间 - 记录项目最后一次修改的时间戳
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;

  /**
   * 部门ID - 关联到部门表的外键
   * 标识项目所属的部门
   */
  @Column({
    type: 'int',
  })
  x_plan2_id: number;

  // @ManyToOne(() => XPlan2)
  // @JoinColumn({ name: 'x_plan2_id' })
  // x_plan2: XPlan2;

  /**
   * 内部标记ID - 用于内部分类或特殊标记的外键
   */
  @Column({
    type: 'int',
  })
  x_plan3_id: number;

  // @ManyToOne(() => XPlan3)
  // @JoinColumn({ name: 'x_plan3_id' })
  // x_plan3: XPlan3;

  /**
   * 销售订单行项目ID - 关联到销售订单行表的外键
   * 将项目与具体的销售订单项目关联
   */
  @Column({
    type: 'int',
  })
  sale_line_id: number;

  // @ManyToOne(() => SaleLine)
  // @JoinColumn({ name: 'sale_line_id' })
  // sale_line: SaleLine;

  /**
   * 可重新开票的销售订单ID - 关联到销售订单表的外键
   * 用于项目工时和费用的重新开票流程
   */
  @Column({
    type: 'int',
  })
  reinvoiced_sale_order_id: number;

  // @ManyToOne(() => ReinvoicedSaleOrder)
  // @JoinColumn({ name: 'reinvoiced_sale_order_id' })
  // reinvoiced_sale_order: ReinvoicedSaleOrder;

  /**
   * 允许计费 - 标识项目是否可用于计费
   * true表示项目工时和费用可以生成账单
   */
  @Column({
    type: 'boolean',
  })
  allow_billable: boolean;

  /**
   * 数据库约束字段 - 存储与项目相关的数据库约束信息
   */
  @Column({
    type: 'varchar',
  })
  CONSTRAINT: string;
}

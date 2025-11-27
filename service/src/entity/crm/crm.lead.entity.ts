import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * CrmLead 实体
 * 线索实体，用于管理潜在客户信息
 * 作用：存储销售线索数据，跟踪从初次接触到转化为客户的整个过程，包含线索的基本信息、联系方式、状态、收入预测等
 */
@Entity('crm_lead')
export class CrmLead {
  @PrimaryGeneratedColumn()
  id: number; // 主键ID，线索的唯一标识符

  /**
   * 营销活动ID
   * 作用：关联到具体的营销活动，用于跟踪线索来源
   */
  @Column({
    type: 'int',
  })
  campaign_id: number;

  // 与营销活动的多对一关系
  // @ManyToOne(() => Campaign)
  // @JoinColumn({ name: 'campaign_id' })
  // campaign: Campaign;

  /**
   * 来源渠道ID
   * 作用：记录线索获取的具体渠道，如网站、社交媒体、展会等
   */
  @Column({
    type: 'int',
  })
  source_id: number;

  // 与来源渠道的多对一关系
  // @ManyToOne(() => Source)
  // @JoinColumn({ name: 'source_id' })
  // source: Source;

  /**
   * 媒介ID
   * 作用：记录线索通过何种媒介获取，如电子邮件、直接访问、广告点击等
   */
  @Column({
    type: 'int',
  })
  medium_id: number;

  // 与媒介的多对一关系
  // @ManyToOne(() => Medium)
  // @JoinColumn({ name: 'medium_id' })
  // medium: Medium;

  /**
   * 邮件退回状态
   * 作用：记录邮件发送是否被退回，用于跟踪邮件营销效果
   */
  @Column({
    type: 'int',
  })
  message_bounce: number;

  /**
   * 销售人员ID
   * 作用：关联到负责该线索的销售人员
   */
  @Column({
    type: 'int',
  })
  user_id: number;

  // 与用户的多对一关系
  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * 销售团队ID
   * 作用：关联到负责该线索的销售团队
   */
  @Column({
    type: 'int',
  })
  team_id: number;

  // 与团队的多对一关系
  // @ManyToOne(() => Team)
  // @JoinColumn({ name: 'team_id' })
  // team: Team;

  /**
   * 公司ID
   * 作用：关联到线索所属的公司信息
   */
  @Column({
    type: 'int',
  })
  company_id: number;

  // 与公司的多对一关系
  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * 销售阶段ID
   * 作用：标识线索当前所处的销售阶段，如初步接触、需求分析、方案制定等
   */
  @Column({
    type: 'int',
  })
  stage_id: number;

  // 与销售阶段的多对一关系
  // @ManyToOne(() => Stage)
  // @JoinColumn({ name: 'stage_id' })
  // stage: Stage;

  /**
   * 颜色索引
   * 作用：用于界面显示时的颜色标识，便于区分不同类型或优先级的线索
   */
  @Column({
    type: 'int',
  })
  color: number;

  /**
   * 周期性计划标识
   * 作用：标识线索是否与周期性业务计划相关
   */
  @Column({
    type: 'int',
  })
  recurring_plan: number;

  /**
   * 联系人ID
   * 作用：关联到具体的联系人信息
   */
  @Column({
    type: 'int',
  })
  partner_id: number;

  // 与联系人的多对一关系
  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * 语言ID
   * 作用：记录线索使用的首选语言，用于个性化沟通
   */
  @Column({
    type: 'int',
  })
  lang_id: number;

  // 与语言的多对一关系
  // @ManyToOne(() => Lang)
  // @JoinColumn({ name: 'lang_id' })
  // lang: Lang;

  /**
   * 州/省ID
   * 作用：记录线索所在的州或省份
   */
  @Column({
    type: 'int',
  })
  state_id: number;

  // 与州/省的多对一关系
  // @ManyToOne(() => State)
  // @JoinColumn({ name: 'state_id' })
  // state: State;

  /**
   * 国家ID
   * 作用：记录线索所在的国家
   */
  @Column({
    type: 'int',
  })
  country_id: number;

  // 与国家的多对一关系
  // @ManyToOne(() => Country)
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

  /**
   * 丢失原因ID
   * 作用：记录线索失败转化的具体原因，用于分析和改进销售流程
   */
  @Column({
    type: 'int',
  })
  lost_reason_id: number;

  // 与丢失原因的多对一关系
  // @ManyToOne(() => LostReason)
  // @JoinColumn({ name: 'lost_reason_id' })
  // lost_reason: LostReason;

  /**
   * 创建者用户ID
   * 作用：记录创建该线索的用户ID，用于追踪数据创建来源
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新者用户ID
   * 作用：记录最后修改该线索的用户ID，用于追踪数据更新历史
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 标准化电话号码
   * 作用：存储经过清洗和标准化格式的电话号码，便于系统识别和处理
   */
  @Column({
    type: 'varchar',
  })
  phone_sanitized: string;

  /**
   * 标准化电子邮件
   * 作用：存储经过标准化处理的电子邮件地址，便于系统识别和避免重复
   */
  @Column({
    type: 'varchar',
  })
  email_normalized: string;

  /**
   * 抄送电子邮件
   * 作用：存储需要抄送的电子邮件地址列表
   */
  @Column({
    type: 'varchar',
  })
  email_cc: string;

  /**
   * 商机名称
   * 作用：存储线索/商机的名称，通常是客户公司名称或项目名称
   */
  @Column({
    type: 'varchar',
  })
  name: string;

  /**
   * 推荐人
   * 作用：记录线索的推荐来源，如由哪位客户或合作伙伴推荐
   */
  @Column({
    type: 'varchar',
  })
  referred: string;

  /**
   * 线索类型
   * 作用：标识线索的类型，如潜在客户、合作伙伴、咨询等
   */
  @Column({
    type: 'varchar',
  })
  type: string;

  /**
   * 优先级
   * 作用：标识线索的处理优先级，如高、中、低
   */
  @Column({
    type: 'varchar',
  })
  priority: string;

  /**
   * 联系人姓名
   * 作用：存储线索中具体联系人的姓名
   */
  @Column({
    type: 'varchar',
  })
  contact_name: string;

  /**
   * 公司名称
   * 作用：存储线索所属公司的名称
   */
  @Column({
    type: 'varchar',
  })
  partner_name: string;

  /**
   * 职位
   * 作用：存储联系人的职位信息
   */
  @Column({
    type: 'varchar',
  })
  function: string;

  /**
   * 电子邮件
   * 作用：存储联系人的主要电子邮件地址
   */
  @Column({
    type: 'varchar',
  })
  email_from: string;

  /**
   * 电子邮件域名标准
   * 作用：存储用于筛选的电子邮件域名标准
   */
  @Column({
    type: 'varchar',
  })
  email_domain_criterion: string;

  /**
   * 电话号码
   * 作用：存储联系人的主要电话号码
   */
  @Column({
    type: 'varchar',
  })
  phone: string;

  /**
   * 电话号码质量状态
   * 作用：记录电话号码的质量和有效性状态
   */
  @Column({
    type: 'varchar',
  })
  phone_state: string;

  /**
   * 电子邮件质量状态
   * 作用：记录电子邮件地址的质量和有效性状态
   */
  @Column({
    type: 'varchar',
  })
  email_state: string;

  /**
   * 网站
   * 作用：存储公司或联系人的网站地址
   */
  @Column({
    type: 'varchar',
  })
  website: string;

  /**
   * 街道地址
   * 作用：存储详细的街道地址信息
   */
  @Column({
    type: 'varchar',
  })
  street: string;

  /**
   * 街道地址补充
   * 作用：存储街道地址的补充信息，如单元号、楼层等
   */
  @Column({
    type: 'varchar',
  })
  street2: string;

  /**
   * 邮政编码
   * 作用：存储邮政编码
   */
  @Column({
    type: 'varchar',
  })
  zip: string;

  /**
   * 城市
   * 作用：存储所在城市
   */
  @Column({
    type: 'varchar',
  })
  city: string;

  /**
   * 赢单/输单状态
   * 作用：标识线索的最终结果状态，如赢单、输单或未决定
   */
  @Column({
    type: 'varchar',
  })
  won_status: string;

  /**
   * 预期关闭日期
   * 作用：记录预期完成交易的日期
   */
  @Column({
    type: 'datetime',
  })
  date_deadline: Date;

  /**
   * 线索属性
   * 作用：存储线索的额外属性信息，以JSON格式保存灵活的数据结构
   */
  @Column({
    type: 'jsonb',
  })
  lead_properties: object;

  /**
   * 备注说明
   * 作用：存储有关线索的详细说明、备注或其他重要信息
   */
  @Column({
    type: 'varchar',
  })
  description: string;

  /**
   * 预期总收入
   * 作用：估计该线索可能带来的总收入金额
   */
  @Column({
    type: 'int',
  })
  expected_revenue: number;

  /**
   * 按比例计算的收入
   */
  @Column({
    type: 'int',
  })
  prorated_revenue: number;

  /**
   * 周期性收入总额
   * 作用：记录该线索可能带来的周期性总收入
   */
  @Column({
    type: 'int',
  })
  recurring_revenue: number;

  /**
   * 预期月度经常性收入(MRR)
   * 作用：估计该线索可能带来的月度经常性收入
   */
  @Column({
    type: 'int',
  })
  recurring_revenue_monthly: number;

  /**
   * 按比例计算的月度经常性收入
   */
  @Column({
    type: 'int',
  })
  recurring_revenue_monthly_prorated: number;

  /**
   * 按比例计算的周期性收入总额
   */
  @Column({
    type: 'int',
  })
  recurring_revenue_prorated: number;

  /**
   * 是否激活
   * 作用：标识线索是否处于激活状态，未激活的线索通常不再跟进
   */
  @Column({
    type: 'boolean',
  })
  active: boolean;

  /**
   * 关闭日期
   * 作用：记录线索实际关闭的日期，无论赢单还是输单
   */
  @Column({
    type: 'datetime',
  })
  date_closed: Date;

  /**
   * 最后操作日期
   * 作用：记录上次对线索执行自动操作的日期
   */
  @Column({
    type: 'datetime',
  })
  date_automation_last: Date;

  /**
   * 分配日期
   * 作用：记录线索分配给销售人员的日期
   */
  @Column({
    type: 'datetime',
  })
  date_open: Date;

  /**
   * 最后阶段更新日期
   * 作用：记录线索销售阶段最后更新的日期
   */
  @Column({
    type: 'datetime',
  })
  date_last_stage_update: Date;

  /**
   * 转化日期
   * 作用：记录线索转化为客户或商机的日期
   */
  @Column({
    type: 'datetime',
  })
  date_conversion: Date;

  /**
   * 创建日期
   * 作用：记录线索创建的时间
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新日期
   * 作用：记录线索最后修改的时间
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;

  /**
   * 分配天数
   * 作用：记录从线索创建到分配给销售人员所经过的天数
   */
  @Column({
    type: 'varchar',
  })
  day_open: string;

  /**
   * 关闭天数
   * 作用：记录从线索创建到最终关闭所经过的天数
   */
  @Column({
    type: 'varchar',
  })
  day_close: string;

  /**
   * 赢单概率
   * 作用：记录该线索最终赢单的预估概率，通常以百分比表示
   */
  @Column({
    type: 'varchar',
  })
  probability: string;

  /**
   * 自动计算的赢单概率
   * 作用：系统根据历史数据和当前状态自动计算的赢单概率
   */
  @Column({
    type: 'varchar',
  })
  automated_probability: string;

  /**
   * 数据增强标识
   * 作用：关联到外部数据增强服务的ID，用于标识经过数据增强的记录
   */
  @Column({
    type: 'varchar',
  })
  reveal_id: string;

  // 与数据增强服务的多对一关系
  // @ManyToOne(() => Reveal)
  // @JoinColumn({ name: 'reveal_id' })
  // reveal: Reveal;

  /**
   * 是否已完成数据增强
   * 作用：标识该线索是否已经通过IAP服务完成了数据增强
   */
  @Column({
    type: 'boolean',
  })
  iap_enrich_done: boolean;

  /**
   * 线索挖掘请求ID
   * 作用：关联到生成该线索的线索挖掘请求
   */
  @Column({
    type: 'int',
  })
  lead_mining_request_id: number;

  // 与线索挖掘请求的多对一关系
  // @ManyToOne(() => LeadMiningRequest)
  // @JoinColumn({ name: 'lead_mining_request_id' })
  // lead_mining_request: LeadMiningRequest;

  @Column({
    type: 'varchar',
  })
  CONSTRAINT: string; // 约束字段，通常用于数据库级别的约束定义
}
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * IAP线索挖掘请求实体
 * 作用：存储用户发起的线索挖掘请求信息，定义线索挖掘的筛选条件和配置参数
 * 该实体记录了用户需要获取的线索数量、行业、公司规模、联系人职位等关键筛选条件
 */
@Entity('crm_iap_lead_mining_request')
export class CrmIapLeadMiningRequest {
  /**
   * 主键ID
   * 自动生成的唯一标识符，用于在数据库中唯一标识每个线索挖掘请求
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 请求线索数量
   * 指定用户希望通过挖掘操作获取的线索总数
   */
  @Column({
    type: 'int',
  })
  lead_number: number;

  /**
   * 销售团队ID
   * 关联到销售团队表，指定负责处理这些线索的团队
   */
  @Column({
    type: 'int',
  })
  team_id: number;

  /**
   * 销售团队对象（注释掉的关联关系）
   * 通过team_id与团队实体建立多对一关系
   */
  // @ManyToOne(() => Team)
  // @JoinColumn({ name: 'team_id' })
  // team: Team;

  /**
   * 销售人员ID
   * 关联到用户表，指定负责跟进这些线索的销售人员
   */
  @Column({
    type: 'int',
  })
  user_id: number;

  /**
   * 销售人员对象（注释掉的关联关系）
   * 通过user_id与用户实体建立多对一关系
   */
  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * 公司规模最小值
   * 指定目标公司规模的下限，通常以员工数量表示
   */
  @Column({
    type: 'int',
  })
  company_size_min: number;

  /**
   * 公司规模最大值
   * 指定目标公司规模的上限，通常以员工数量表示
   */
  @Column({
    type: 'int',
  })
  company_size_max: number;

  /**
   * 联系人数量
   * 指定每个公司需要获取的联系人数
   */
  @Column({
    type: 'int',
  })
  contact_number: number;

  /**
   * 首选职位ID
   * 关联到职位表，指定目标联系人的职位类型
   */
  @Column({
    type: 'int',
  })
  preferred_role_id: number;

  /**
   * 首选职位对象（注释掉的关联关系）
   * 通过preferred_role_id与职位实体建立多对一关系
   */
  // @ManyToOne(() => PreferredRole)
  // @JoinColumn({ name: 'preferred_role_id' })
  // preferred_role: PreferredRole;

  /**
   * 职位级别ID
   * 关联到职位级别表，指定目标联系人的职级（如初级、中级、高级等）
   */
  @Column({
    type: 'int',
  })
  seniority_id: number;

  /**
   * 职位级别对象（注释掉的关联关系）
   * 通过seniority_id与职位级别实体建立多对一关系
   */
  // @ManyToOne(() => Seniority)
  // @JoinColumn({ name: 'seniority_id' })
  // seniority: Seniority;

  /**
   * 创建用户ID
   * 记录创建该挖掘请求的用户ID，关联到res_users表
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后修改用户ID
   * 记录最后修改该挖掘请求的用户ID，关联到res_users表
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 请求编号
   * 系统生成的挖掘请求唯一标识号，用于跟踪和管理请求
   */
  @Column({
    type: 'varchar',
  })
  name: string;

  /**
   * 请求状态
   * 表示挖掘请求的当前状态，如：draft(草稿)、confirm(已确认)、done(已完成)、error(错误)
   */
  @Column({
    type: 'varchar',
  })
  state: string;

  /**
   * 搜索目标类型
   * 定义挖掘操作的目标范围，如：companies(公司)、leads(线索)等
   */
  @Column({
    type: 'varchar',
  })
  search_type: string;

  /**
   * 错误类型
   * 当挖掘请求失败时，记录错误的具体类型和原因
   */
  @Column({
    type: 'varchar',
  })
  error_type: string;

  /**
   * 线索类型
   * 定义挖掘获取的线索类型，如：business(企业)、individual(个人)等
   */
  @Column({
    type: 'varchar',
  })
  lead_type: string;

  /**
   * 联系人筛选类型
   * 指定联系人筛选的条件类型，如：all(所有)、executives(高管)、managers(经理)等
   */
  @Column({
    type: 'varchar',
  })
  contact_filter_type: string;

  /**
   * 是否按规模筛选
   * 标记是否启用公司规模筛选功能
   */
  @Column({
    type: 'boolean',
  })
  filter_on_size: boolean;

  /**
   * 创建时间
   * 记录挖掘请求创建的确切日期和时间，用于数据审计和历史记录追踪
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后修改时间
   * 记录挖掘请求最后一次更新的确切日期和时间，用于数据审计和变更追踪
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;
}
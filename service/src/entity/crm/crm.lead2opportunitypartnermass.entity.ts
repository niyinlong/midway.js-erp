import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 批量线索转商机合作伙伴实体
 * 作用：存储批量将销售线索转换为商机时选择的合作伙伴信息，记录批量转换过程中的相关配置和操作
 */
@Entity('crm_lead2opportunity_partner_mass')
export class CrmLead2opportunityPartnerMass {
  /**
   * 主键ID
   * 作用：唯一标识每一条批量线索转商机的合作伙伴配置记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 关联的线索ID
   * 作用：关联到要转换为商机的销售线索记录（在批量操作中可能为null或特定值）
   */
  @Column({
    type: 'int',
  })
  lead_id: number;

  // 多对一关联到Lead实体
  // @ManyToOne(() => Lead)
  // @JoinColumn({ name: 'lead_id' })
  // lead: Lead;

  /**
   * 商业合作伙伴ID
   * 作用：关联到负责此次批量销售的商业合作伙伴
   */
  @Column({
    type: 'int',
  })
  commercial_partner_id: number;

  // 多对一关联到CommercialPartner实体
  // @ManyToOne(() => CommercialPartner)
  // @JoinColumn({ name: 'commercial_partner_id' })
  // commercial_partner: CommercialPartner;

  /**
   * 客户伙伴ID
   * 作用：关联到作为客户的合作伙伴记录
   */
  @Column({
    type: 'int',
  })
  partner_id: number;

  // 多对一关联到Partner实体
  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * 销售人员用户ID
   * 作用：关联到负责批量商机的销售人员用户记录
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
   * 作用：关联到批量商机所属的销售团队
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
   * 创建人用户ID
   * 作用：记录创建此批量配置记录的用户
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新人用户ID
   * 作用：记录最后修改此批量配置记录的用户
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 批量转换操作名称
   * 作用：存储此次批量线索转商机操作的名称标识
   */
  @Column({
    type: 'varchar',
  })
  name: string;

  /**
   * 关联客户操作
   * 作用：定义批量操作中如何处理与客户的关联关系
   */
  @Column({
    type: 'varchar',
  })
  action: string;

  /**
   * 是否强制分配
   * 作用：标识是否强制将批量商机分配给指定的销售人员或团队
   */
  @Column({
    type: 'boolean',
  })
  force_assignment: boolean;

  /**
   * 是否应用去重
   * 作用：标识在批量转换过程中是否对重复的线索或客户进行去重处理
   */
  @Column({
    type: 'boolean',
  })
  deduplicate: boolean;

  /**
   * 创建时间
   * 作用：记录此批量配置记录的创建时间
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新时间
   * 作用：记录此批量配置记录的最后修改时间
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;

}
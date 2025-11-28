import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 报价单客户实体
 * 作用：存储报价单与客户之间的关联信息，用于控制在创建新报价单时是使用现有客户还是创建新客户
 */
@Entity('crm_quotation_partner')
export class CrmQuotationPartner {
  /**
   * 主键ID
   * 作用：唯一标识报价单客户关联记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 关联的线索ID
   * 作用：关联到CRM系统中的线索记录
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
   * 客户ID
   * 作用：关联到客户记录
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
   * 报价单客户操作类型
   * 作用：指示在创建报价单时是创建新客户还是使用现有客户
   */
  @Column({
    type: 'varchar',
  })
  action: string;

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
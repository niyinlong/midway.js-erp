import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 商机丢失原因实体
 * 作用：存储商机丢失的原因分类，用于分析销售漏斗和优化销售流程
 */
@Entity('crm_lost_reason')
export class CrmLostReason {
  /**
   * 主键ID
   * 作用：唯一标识商机丢失原因记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 创建者ID
   * 作用：记录创建该丢失原因的用户
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新者ID
   * 作用：记录最后修改该丢失原因的用户
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 丢失原因名称
   * 作用：存储多语言的丢失原因描述
   */
  @Column({
    type: 'jsonb',
  })
  name: object;

  /**
   * 是否激活
   * 作用：控制该丢失原因是否可用，用于软删除功能
   */
  @Column({
    type: 'boolean',
  })
  active: boolean;

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
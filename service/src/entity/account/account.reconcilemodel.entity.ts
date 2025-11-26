import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Preset to create journal entries during a invoices and payments matching
 */
@Entity('account_reconcile_model')
export class AccountReconcileModel {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * Next Activity
   */
  @Column({
    type: 'int'
  })
  next_activity_type_id: number;

  // @ManyToOne(() => NextActivityType)
  // @JoinColumn({ name: 'next_activity_type_id' })
  // next_activity_type: NextActivityType;

  /**
   * Mapped Partner
   */
  @Column({
    type: 'int'
  })
  mapped_partner_id: number;

  // @ManyToOne(() => MappedPartner)
  // @JoinColumn({ name: 'mapped_partner_id' })
  // mapped_partner: MappedPartner;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Trigger
   */
  @Column({
    type: 'varchar'
  })
  trigger: string;

  /**
   * Amount
   */
  @Column({
    type: 'varchar'
  })
  match_amount: string;

  /**
   * Label
   */
  @Column({
    type: 'varchar'
  })
  match_label: string;

  /**
   * Label Parameter
   */
  @Column({
    type: 'varchar'
  })
  match_label_param: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Can Be Proposed
   */
  @Column({
    type: 'boolean'
  })
  can_be_proposed: boolean;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Amount Min Parameter
   */
  @Column({
    type: 'varchar'
  })
  match_amount_min: string;

  /**
   * Amount Max Parameter
   */
  @Column({
    type: 'varchar'
  })
  match_amount_max: string;

}
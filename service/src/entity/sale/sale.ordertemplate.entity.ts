import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Quotation Template
 */
@Entity('sale_order_template')
export class SaleOrderTemplate {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Confirmation Mail
   */
  @Column({
    type: 'int'
  })
  mail_template_id: number;

  // @ManyToOne(() => MailTemplate)
  // @JoinColumn({ name: 'mail_template_id' })
  // mail_template: MailTemplate;

  /**
   * Quotation Duration
   */
  @Column({
    type: 'int'
  })
  number_of_days: number;

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
   * Quotation Template
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Terms and conditions
   */
  @Column({
    type: 'jsonb'
  })
  note: object;

  /**
   * Invoicing Journal
   */
  @Column({
    type: 'jsonb'
  })
  journal_id: object;

  // @ManyToOne(() => Journal)
  // @JoinColumn({ name: 'journal_id' })
  // journal: Journal;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Online Signature
   */
  @Column({
    type: 'boolean'
  })
  require_signature: boolean;

  /**
   * Online Payment
   */
  @Column({
    type: 'boolean'
  })
  require_payment: boolean;

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
   * Prepayment percentage
   */
  @Column({
    type: 'varchar'
  })
  prepayment_percent: string;

}
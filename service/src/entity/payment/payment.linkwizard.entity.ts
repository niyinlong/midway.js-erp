import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Generate Payment Link
 */
@Entity('payment_link_wizard')
export class PaymentLinkWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Related Document ID
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

  /**
   * Currency
   */
  @Column({
    type: 'int'
  })
  currency_id: number;

  // @ManyToOne(() => Currency)
  // @JoinColumn({ name: 'currency_id' })
  // currency: Currency;

  /**
   * Partner
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

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
   * Related Document Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Amount
   */
  @Column({
    type: 'int'
  })
  amount: number;

  /**
   * Amount Max
   */
  @Column({
    type: 'int'
  })
  amount_max: number;

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
   * Discount Date
   */
  @Column({
    type: 'datetime'
  })
  discount_date: Date;

  /**
   * Open Installments
   */
  @Column({
    type: 'jsonb'
  })
  open_installments: object;

  /**
   * Has Eligible Epd
   */
  @Column({
    type: 'boolean'
  })
  has_eligible_epd: boolean;

  /**
   * Already Paid
   */
  @Column({
    type: 'int'
  })
  amount_paid: number;

  /**
   * Prepayment Amount
   */
  @Column({
    type: 'int'
  })
  prepayment_amount: number;

}
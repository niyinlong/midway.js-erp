import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN payment_method AND res_currency
 */
@Entity('payment_method_res_currency_rel')
export class PaymentMethodResCurrencyRel {
  @Column({
    type: 'int'
  })
  payment_method_id: number;

  // @ManyToOne(() => PaymentMethod)
  // @JoinColumn({ name: 'payment_method_id' })
  // payment_method: PaymentMethod;

  @Column({
    type: 'int'
  })
  res_currency_id: number;

  // @ManyToOne(() => ResCurrency)
  // @JoinColumn({ name: 'res_currency_id' })
  // res_currency: ResCurrency;

}
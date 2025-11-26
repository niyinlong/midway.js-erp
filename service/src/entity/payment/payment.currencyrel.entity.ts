import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN payment_provider AND res_currency
 */
@Entity('payment_currency_rel')
export class PaymentCurrencyRel {
  @Column({
    type: 'int'
  })
  payment_provider_id: number;

  // @ManyToOne(() => PaymentProvider)
  // @JoinColumn({ name: 'payment_provider_id' })
  // payment_provider: PaymentProvider;

  @Column({
    type: 'int'
  })
  currency_id: number;

  // @ManyToOne(() => Currency)
  // @JoinColumn({ name: 'currency_id' })
  // currency: Currency;

}
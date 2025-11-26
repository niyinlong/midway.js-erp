import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN payment_method AND payment_provider
 */
@Entity('payment_method_payment_provider_rel')
export class PaymentMethodPaymentProviderRel {
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
  payment_provider_id: number;

  // @ManyToOne(() => PaymentProvider)
  // @JoinColumn({ name: 'payment_provider_id' })
  // payment_provider: PaymentProvider;

}
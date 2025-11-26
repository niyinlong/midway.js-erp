import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN payment_provider AND res_country
 */
@Entity('payment_country_rel')
export class PaymentCountryRel {
  @Column({
    type: 'int'
  })
  payment_id: number;

  // @ManyToOne(() => Payment)
  // @JoinColumn({ name: 'payment_id' })
  // payment: Payment;

  @Column({
    type: 'int'
  })
  country_id: number;

  // @ManyToOne(() => Country)
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

}
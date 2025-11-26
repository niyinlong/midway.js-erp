import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN payment_method AND res_country
 */
@Entity('payment_method_res_country_rel')
export class PaymentMethodResCountryRel {
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
  res_country_id: number;

  // @ManyToOne(() => ResCountry)
  // @JoinColumn({ name: 'res_country_id' })
  // res_country: ResCountry;

}
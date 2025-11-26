import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_pricelist AND res_country_group
 */
@Entity('res_country_group_pricelist_rel')
export class ResCountryGroupPricelistRel {
  @Column({
    type: 'int'
  })
  pricelist_id: number;

  // @ManyToOne(() => Pricelist)
  // @JoinColumn({ name: 'pricelist_id' })
  // pricelist: Pricelist;

  @Column({
    type: 'int'
  })
  res_country_group_id: number;

  // @ManyToOne(() => ResCountryGroup)
  // @JoinColumn({ name: 'res_country_group_id' })
  // res_country_group: ResCountryGroup;

}
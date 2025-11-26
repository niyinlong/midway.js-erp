import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN res_country AND res_country_group
 */
@Entity('res_country_res_country_group_rel')
export class ResCountryResCountryGroupRel {
  @Column({
    type: 'int'
  })
  res_country_id: number;

  // @ManyToOne(() => ResCountry)
  // @JoinColumn({ name: 'res_country_id' })
  // res_country: ResCountry;

  @Column({
    type: 'int'
  })
  res_country_group_id: number;

  // @ManyToOne(() => ResCountryGroup)
  // @JoinColumn({ name: 'res_country_group_id' })
  // res_country_group: ResCountryGroup;

}
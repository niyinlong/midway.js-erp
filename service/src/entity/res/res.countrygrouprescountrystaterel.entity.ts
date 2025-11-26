import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN res_country_group AND res_country_state
 */
@Entity('res_country_group_res_country_state_rel')
export class ResCountryGroupResCountryStateRel {
  @Column({
    type: 'int'
  })
  res_country_group_id: number;

  // @ManyToOne(() => ResCountryGroup)
  // @JoinColumn({ name: 'res_country_group_id' })
  // res_country_group: ResCountryGroup;

  @Column({
    type: 'int'
  })
  res_country_state_id: number;

  // @ManyToOne(() => ResCountryState)
  // @JoinColumn({ name: 'res_country_state_id' })
  // res_country_state: ResCountryState;

}
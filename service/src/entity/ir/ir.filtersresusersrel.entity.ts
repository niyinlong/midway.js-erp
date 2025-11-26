import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN ir_filters AND res_users
 */
@Entity('ir_filters_res_users_rel')
export class IrFiltersResUsersRel {
  @Column({
    type: 'int'
  })
  ir_filters_id: number;

  // @ManyToOne(() => IrFilters)
  // @JoinColumn({ name: 'ir_filters_id' })
  // ir_filters: IrFilters;

  @Column({
    type: 'int'
  })
  res_users_id: number;

  // @ManyToOne(() => ResUsers)
  // @JoinColumn({ name: 'res_users_id' })
  // res_users: ResUsers;

}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN web_tour_tour AND res_users
 */
@Entity('res_users_web_tour_tour_rel')
export class ResUsersWebTourTourRel {
  @Column({
    type: 'int'
  })
  web_tour_tour_id: number;

  // @ManyToOne(() => WebTourTour)
  // @JoinColumn({ name: 'web_tour_tour_id' })
  // web_tour_tour: WebTourTour;

  @Column({
    type: 'int'
  })
  res_users_id: number;

  // @ManyToOne(() => ResUsers)
  // @JoinColumn({ name: 'res_users_id' })
  // res_users: ResUsers;

}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN gamification_badge AND res_users
 */
@Entity('rel_badge_auth_users')
export class RelBadgeAuthUsers {
  @Column({
    type: 'int'
  })
  gamification_badge_id: number;

  // @ManyToOne(() => GamificationBadge)
  // @JoinColumn({ name: 'gamification_badge_id' })
  // gamification_badge: GamificationBadge;

  @Column({
    type: 'int'
  })
  res_users_id: number;

  // @ManyToOne(() => ResUsers)
  // @JoinColumn({ name: 'res_users_id' })
  // res_users: ResUsers;

}
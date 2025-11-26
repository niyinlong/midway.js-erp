import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_team AND res_users
 */
@Entity('team_favorite_user_rel')
export class TeamFavoriteUserRel {
  @Column({
    type: 'int'
  })
  team_id: number;

  // @ManyToOne(() => Team)
  // @JoinColumn({ name: 'team_id' })
  // team: Team;

  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

}
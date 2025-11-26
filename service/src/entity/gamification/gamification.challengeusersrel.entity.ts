import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN gamification_challenge AND res_users
 */
@Entity('gamification_challenge_users_rel')
export class GamificationChallengeUsersRel {
  @Column({
    type: 'int'
  })
  gamification_challenge_id: number;

  // @ManyToOne(() => GamificationChallenge)
  // @JoinColumn({ name: 'gamification_challenge_id' })
  // gamification_challenge: GamificationChallenge;

  @Column({
    type: 'int'
  })
  res_users_id: number;

  // @ManyToOne(() => ResUsers)
  // @JoinColumn({ name: 'res_users_id' })
  // res_users: ResUsers;

}
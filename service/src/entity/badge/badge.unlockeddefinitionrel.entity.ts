import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN gamification_badge AND gamification_goal_definition
 */
@Entity('badge_unlocked_definition_rel')
export class BadgeUnlockedDefinitionRel {
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
  gamification_goal_definition_id: number;

  // @ManyToOne(() => GamificationGoalDefinition)
  // @JoinColumn({ name: 'gamification_goal_definition_id' })
  // gamification_goal_definition: GamificationGoalDefinition;

}
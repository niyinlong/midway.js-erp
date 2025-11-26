import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN gamification_badge AND gamification_badge
 */
@Entity('gamification_badge_rule_badge_rel')
export class GamificationBadgeRuleBadgeRel {
  @Column({
    type: 'int'
  })
  badge1_id: number;

  // @ManyToOne(() => Badge1)
  // @JoinColumn({ name: 'badge1_id' })
  // badge1: Badge1;

  @Column({
    type: 'int'
  })
  badge2_id: number;

  // @ManyToOne(() => Badge2)
  // @JoinColumn({ name: 'badge2_id' })
  // badge2: Badge2;

}
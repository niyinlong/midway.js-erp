import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN ir_rule AND res_groups
 */
@Entity('rule_group_rel')
export class RuleGroupRel {
  @Column({
    type: 'int'
  })
  rule_group_id: number;

  // @ManyToOne(() => RuleGroup)
  // @JoinColumn({ name: 'rule_group_id' })
  // rule_group: RuleGroup;

  @Column({
    type: 'int'
  })
  group_id: number;

  // @ManyToOne(() => Group)
  // @JoinColumn({ name: 'group_id' })
  // group: Group;

}
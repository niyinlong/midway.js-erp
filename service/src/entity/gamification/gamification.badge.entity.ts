import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Gamification Badge
 */
@Entity('gamification_badge')
export class GamificationBadge {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Limitation Number
   */
  @Column({
    type: 'int'
  })
  rule_max_number: number;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Forum Badge Level
   */
  @Column({
    type: 'varchar'
  })
  level: string;

  /**
   * Allowance to Grant
   */
  @Column({
    type: 'varchar'
  })
  rule_auth: string;

  /**
   * Badge
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Description
   */
  @Column({
    type: 'jsonb'
  })
  description: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Monthly Limited Sending
   */
  @Column({
    type: 'boolean'
  })
  rule_max: boolean;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Is Published
   */
  @Column({
    type: 'boolean'
  })
  is_published: boolean;

}
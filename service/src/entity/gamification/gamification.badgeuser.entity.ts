import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Gamification User Badge
 */
@Entity('gamification_badge_user')
export class GamificationBadgeUser {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * User
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Sender
   */
  @Column({
    type: 'int'
  })
  sender_id: number;

  // @ManyToOne(() => Sender)
  // @JoinColumn({ name: 'sender_id' })
  // sender: Sender;

  /**
   * Badge
   */
  @Column({
    type: 'int'
  })
  badge_id: number;

  // @ManyToOne(() => Badge)
  // @JoinColumn({ name: 'badge_id' })
  // badge: Badge;

  /**
   * Challenge
   */
  @Column({
    type: 'int'
  })
  challenge_id: number;

  // @ManyToOne(() => Challenge)
  // @JoinColumn({ name: 'challenge_id' })
  // challenge: Challenge;

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
   * Badge Level
   */
  @Column({
    type: 'varchar'
  })
  level: string;

  /**
   * Comment
   */
  @Column({
    type: 'varchar'
  })
  comment: string;

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
   * Employee
   */
  @Column({
    type: 'int'
  })
  employee_id: number;

  // @ManyToOne(() => Employee)
  // @JoinColumn({ name: 'employee_id' })
  // employee: Employee;

}
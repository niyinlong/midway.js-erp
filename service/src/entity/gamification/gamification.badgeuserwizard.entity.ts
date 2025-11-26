import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Gamification User Badge Wizard
 */
@Entity('gamification_badge_user_wizard')
export class GamificationBadgeUserWizard {
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
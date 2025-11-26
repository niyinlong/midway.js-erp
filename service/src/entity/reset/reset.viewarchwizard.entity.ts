import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Reset View Architecture Wizard
 */
@Entity('reset_view_arch_wizard')
export class ResetViewArchWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * View
   */
  @Column({
    type: 'int'
  })
  view_id: number;

  // @ManyToOne(() => View)
  // @JoinColumn({ name: 'view_id' })
  // view: View;

  /**
   * Compare To View
   */
  @Column({
    type: 'int'
  })
  compare_view_id: number;

  // @ManyToOne(() => CompareView)
  // @JoinColumn({ name: 'compare_view_id' })
  // compare_view: CompareView;

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
   * Reset Mode
   */
  @Column({
    type: 'varchar'
  })
  reset_mode: string;

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

}
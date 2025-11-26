import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Action Window View
 */
@Entity('ir_act_window_view')
export class IrActWindowView {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Action
   */
  @Column({
    type: 'int'
  })
  act_window_id: number;

  // @ManyToOne(() => ActWindow)
  // @JoinColumn({ name: 'act_window_id' })
  // act_window: ActWindow;

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
   * View Type
   */
  @Column({
    type: 'varchar'
  })
  view_mode: string;

  /**
   * On Multiple Doc.
   */
  @Column({
    type: 'boolean'
  })
  multi: boolean;

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
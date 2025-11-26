import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Custom View
 */
@Entity('ir_ui_view_custom')
export class IrUiViewCustom {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Original View
   */
  @Column({
    type: 'int'
  })
  ref_id: number;

  // @ManyToOne(() => Ref)
  // @JoinColumn({ name: 'ref_id' })
  // ref: Ref;

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
   * View Architecture
   */
  @Column({
    type: 'varchar'
  })
  arch: string;

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
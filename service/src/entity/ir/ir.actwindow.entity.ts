import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('ir_act_window')
export class IrActWindow {
  /**
   * View Ref.
   */
  @Column({
    type: 'int'
  })
  view_id: number;

  // @ManyToOne(() => View)
  // @JoinColumn({ name: 'view_id' })
  // view: View;

  /**
   * Record ID
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

  /**
   * Search View Ref.
   */
  @Column({
    type: 'int'
  })
  search_view_id: number;

  // @ManyToOne(() => SearchView)
  // @JoinColumn({ name: 'search_view_id' })
  // search_view: SearchView;

  /**
   * Domain Value
   */
  @Column({
    type: 'varchar'
  })
  domain: string;

  /**
   * Context Value
   */
  @Column({
    type: 'varchar'
  })
  context: string;

  /**
   * Destination Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Target Window
   */
  @Column({
    type: 'varchar'
  })
  target: string;

  /**
   * View Mode
   */
  @Column({
    type: 'varchar'
  })
  view_mode: string;

  /**
   * Mobile View Mode
   */
  @Column({
    type: 'varchar'
  })
  mobile_view_mode: string;

  /**
   * Action Usage
   */
  @Column({
    type: 'varchar'
  })
  usage: string;

  /**
   * Filter
   */
  @Column({
    type: 'boolean'
  })
  filter: boolean;

  /**
   * Data Caching
   */
  @Column({
    type: 'boolean'
  })
  cache: boolean;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Paper Format Config
 */
@Entity('report_paperformat')
export class ReportPaperformat {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Page height (mm)
   */
  @Column({
    type: 'int'
  })
  page_height: number;

  /**
   * Page width (mm)
   */
  @Column({
    type: 'int'
  })
  page_width: number;

  /**
   * Header spacing
   */
  @Column({
    type: 'int'
  })
  header_spacing: number;

  /**
   * Output DPI
   */
  @Column({
    type: 'int'
  })
  dpi: number;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Paper size
   */
  @Column({
    type: 'varchar'
  })
  format: string;

  /**
   * Orientation
   */
  @Column({
    type: 'varchar'
  })
  orientation: string;

  /**
   * Display a header line
   */
  @Column({
    type: 'boolean'
  })
  header_line: boolean;

  /**
   * Disable smart shrinking
   */
  @Column({
    type: 'boolean'
  })
  disable_shrinking: boolean;

  /**
   * Use css margins
   */
  @Column({
    type: 'boolean'
  })
  css_margins: boolean;

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
   * Top Margin (mm)
   */
  @Column({
    type: 'varchar'
  })
  margin_top: string;

  /**
   * Bottom Margin (mm)
   */
  @Column({
    type: 'varchar'
  })
  margin_bottom: string;

  /**
   * Left Margin (mm)
   */
  @Column({
    type: 'varchar'
  })
  margin_left: string;

  /**
   * Right Margin (mm)
   */
  @Column({
    type: 'varchar'
  })
  margin_right: string;

}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Project Milestone
 */
@Entity('project_milestone')
export class ProjectMilestone {
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
   * Project
   */
  @Column({
    type: 'int'
  })
  project_id: number;

  // @ManyToOne(() => Project)
  // @JoinColumn({ name: 'project_id' })
  // project: Project;

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
   * Deadline
   */
  @Column({
    type: 'datetime'
  })
  deadline: Date;

  /**
   * Reached Date
   */
  @Column({
    type: 'datetime'
  })
  reached_date: Date;

  /**
   * Reached
   */
  @Column({
    type: 'boolean'
  })
  is_reached: boolean;

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
   * Sales Order Item
   */
  @Column({
    type: 'int'
  })
  sale_line_id: number;

  // @ManyToOne(() => SaleLine)
  // @JoinColumn({ name: 'sale_line_id' })
  // sale_line: SaleLine;

  /**
   * Quantity (%)
   */
  @Column({
    type: 'varchar'
  })
  quantity_percentage: string;

}
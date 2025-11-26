import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Exports Line
 */
@Entity('ir_exports_line')
export class IrExportsLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Export
   */
  @Column({
    type: 'int'
  })
  export_id: number;

  // @ManyToOne(() => Export)
  // @JoinColumn({ name: 'export_id' })
  // export: Export;

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
   * Field Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

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
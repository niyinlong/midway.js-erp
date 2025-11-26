import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('ir_act_client')
export class IrActClient {
  /**
   * Client action tag
   */
  @Column({
    type: 'varchar'
  })
  tag: string;

  /**
   * Target Window
   */
  @Column({
    type: 'varchar'
  })
  target: string;

  /**
   * Destination Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Context Value
   */
  @Column({
    type: 'varchar'
  })
  context: string;

  /**
   * Params storage
   */
  @Column({
    type: 'bytea'
  })
  params_store: Buffer;

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
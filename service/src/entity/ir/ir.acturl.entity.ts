import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('ir_act_url')
export class IrActUrl {
  /**
   * Action Target
   */
  @Column({
    type: 'varchar'
  })
  target: string;

  /**
   * Action URL
   */
  @Column({
    type: 'varchar'
  })
  url: string;

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
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('ir_model_data')
export class IrModelData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int'
  })
  create_uid: number;

  @Column({
    type: 'datetime'
  })
  create_date: Date;

  @Column({
    type: 'datetime'
  })
  write_date: Date;

  @Column({
    type: 'int'
  })
  write_uid: number;

  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

  @Column({
    type: 'boolean'
  })
  noupdate: boolean;

  @Column({
    type: 'varchar'
  })
  name: string;

  @Column({
    type: 'varchar'
  })
  module: string;

  @Column({
    type: 'varchar'
  })
  model: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('orm_signaling_templates')
export class OrmSignalingTemplates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'datetime'
  })
  date: Date;

}
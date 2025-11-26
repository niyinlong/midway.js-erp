import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Properties Base Definition
 */
@Entity('properties_base_definition')
export class PropertiesBaseDefinition {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Properties Field
   */
  @Column({
    type: 'int'
  })
  properties_field_id: number;

  // @ManyToOne(() => PropertiesField)
  // @JoinColumn({ name: 'properties_field_id' })
  // properties_field: PropertiesField;

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
   * Properties Definition
   */
  @Column({
    type: 'jsonb'
  })
  properties_definition: object;

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
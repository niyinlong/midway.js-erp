import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Update product attribute value
 */
@Entity('update_product_attribute_value')
export class UpdateProductAttributeValue {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Attribute Value
   */
  @Column({
    type: 'int'
  })
  attribute_value_id: number;

  // @ManyToOne(() => AttributeValue)
  // @JoinColumn({ name: 'attribute_value_id' })
  // attribute_value: AttributeValue;

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
   * Mode
   */
  @Column({
    type: 'varchar'
  })
  mode: string;

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
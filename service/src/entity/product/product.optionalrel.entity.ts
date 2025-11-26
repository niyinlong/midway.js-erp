import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_template AND product_template
 */
@Entity('product_optional_rel')
export class ProductOptionalRel {
  @Column({
    type: 'int'
  })
  src_id: number;

  // @ManyToOne(() => Src)
  // @JoinColumn({ name: 'src_id' })
  // src: Src;

  @Column({
    type: 'int'
  })
  dest_id: number;

  // @ManyToOne(() => Dest)
  // @JoinColumn({ name: 'dest_id' })
  // dest: Dest;

}
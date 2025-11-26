import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN ir_model_fields AND res_groups
 */
@Entity('ir_model_fields_group_rel')
export class IrModelFieldsGroupRel {
  @Column({
    type: 'int'
  })
  field_id: number;

  // @ManyToOne(() => Field)
  // @JoinColumn({ name: 'field_id' })
  // field: Field;

  @Column({
    type: 'int'
  })
  group_id: number;

  // @ManyToOne(() => Group)
  // @JoinColumn({ name: 'group_id' })
  // group: Group;

}
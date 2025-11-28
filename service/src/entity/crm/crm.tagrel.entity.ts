import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * CRM标签关联表实体
 * 作用：存储CRM对象（如线索）与标签之间的多对多关联关系，用于实现对象的标签分类功能
 */
@Entity('crm_tag_rel')
export class CrmTagRel {
  /**
   * 线索ID
   * 作用：关联到被标记的线索对象
   */
  @Column({
    type: 'int',
  })
  lead_id: number;

  // 多对一关联到Lead实体
  // @ManyToOne(() => Lead)
  // @JoinColumn({ name: 'lead_id' })
  // lead: Lead;

  /**
   * 标签ID
   * 作用：关联到具体的标签
   */
  @Column({
    type: 'int',
  })
  tag_id: number;

  // 多对一关联到Tag实体
  // @ManyToOne(() => Tag)
  // @JoinColumn({ name: 'tag_id' })
  // tag: Tag;

}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN project_project AND project_task_type
 */
@Entity('project_task_type_rel')
export class ProjectTaskTypeRel {
  @Column({
    type: 'int'
  })
  project_id: number;

  // @ManyToOne(() => Project)
  // @JoinColumn({ name: 'project_id' })
  // project: Project;

  @Column({
    type: 'int'
  })
  type_id: number;

  // @ManyToOne(() => Type)
  // @JoinColumn({ name: 'type_id' })
  // type: Type;

}
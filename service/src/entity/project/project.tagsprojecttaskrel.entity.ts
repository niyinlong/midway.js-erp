import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN project_task AND project_tags
 */
@Entity('project_tags_project_task_rel')
export class ProjectTagsProjectTaskRel {
  @Column({
    type: 'int'
  })
  project_task_id: number;

  // @ManyToOne(() => ProjectTask)
  // @JoinColumn({ name: 'project_task_id' })
  // project_task: ProjectTask;

  @Column({
    type: 'int'
  })
  project_tags_id: number;

  // @ManyToOne(() => ProjectTags)
  // @JoinColumn({ name: 'project_tags_id' })
  // project_tags: ProjectTags;

}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN project_project AND project_tags
 */
@Entity('project_project_project_tags_rel')
export class ProjectProjectProjectTagsRel {
  @Column({
    type: 'int'
  })
  project_project_id: number;

  // @ManyToOne(() => ProjectProject)
  // @JoinColumn({ name: 'project_project_id' })
  // project_project: ProjectProject;

  @Column({
    type: 'int'
  })
  project_tags_id: number;

  // @ManyToOne(() => ProjectTags)
  // @JoinColumn({ name: 'project_tags_id' })
  // project_tags: ProjectTags;

}
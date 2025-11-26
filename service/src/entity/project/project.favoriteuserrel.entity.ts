import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN project_project AND res_users
 */
@Entity('project_favorite_user_rel')
export class ProjectFavoriteUserRel {
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
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_payment_register AND account_move_line
 */
@Entity('account_payment_register_move_line_rel')
export class AccountPaymentRegisterMoveLineRel {
  @Column({
    type: 'int'
  })
  wizard_id: number;

  // @ManyToOne(() => Wizard)
  // @JoinColumn({ name: 'wizard_id' })
  // wizard: Wizard;

  @Column({
    type: 'int'
  })
  line_id: number;

  // @ManyToOne(() => Line)
  // @JoinColumn({ name: 'line_id' })
  // line: Line;

}
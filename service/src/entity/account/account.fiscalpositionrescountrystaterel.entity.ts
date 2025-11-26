import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_fiscal_position AND res_country_state
 */
@Entity('account_fiscal_position_res_country_state_rel')
export class AccountFiscalPositionResCountryStateRel {
  @Column({
    type: 'int'
  })
  account_fiscal_position_id: number;

  // @ManyToOne(() => AccountFiscalPosition)
  // @JoinColumn({ name: 'account_fiscal_position_id' })
  // account_fiscal_position: AccountFiscalPosition;

  @Column({
    type: 'int'
  })
  res_country_state_id: number;

  // @ManyToOne(() => ResCountryState)
  // @JoinColumn({ name: 'res_country_state_id' })
  // res_country_state: ResCountryState;

}
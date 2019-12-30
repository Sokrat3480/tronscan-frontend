import React, {Fragment} from "react";
import {AddressLink, ExternalLink, ContractLink, TokenTRC20Link} from "../../../common/Links";
import Field from "../../../tools/TransactionViewer/Field";
import {TransationTitle} from './common/Title'
import {tu} from "../../../../utils/i18n";
import SignList from './common/SignList'
import BandwidthUsage from './common/BandwidthUsage'
export default function UpdateSettingContract(props) {
    const contract = props.contract;
    const {cost,signList,contractType} = contract;
    return <Fragment>
        <TransationTitle contractType={contract.contractType}/>
        <table className="table">
            <tbody>
                {
                    contract['owner_address'] ?
                        <Field label="signature_sponsor"><AddressLink address={contract['owner_address']} /></Field>
                        : ''
                }
                <Field lable="contract_address"><ContractLink address={'TD4anu8auWfCDYqQpAEcLXVK6UgME9Jsid'}/></Field>
                <Field lable="contract_enery" text={tu('contract_enery_tip')}>{tu('contract_percent') } 0% {tu('contract_percent_user')} 100%</Field>
                <Field label="address_net_fee"><BandwidthUsage cost = {cost}/></Field>
                <SignList signList={signList}/>
            </tbody>
        </table>
    </Fragment>
}
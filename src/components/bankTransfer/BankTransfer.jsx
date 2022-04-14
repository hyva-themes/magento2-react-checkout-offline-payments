import React from 'react';
import { shape, func } from 'prop-types';

import Card from '@hyva/react-checkout/components/common/Card/Card';
import { paymentMethodShape } from '@hyva/react-checkout/utils/payment';
import RadioInput from '@hyva/react-checkout/components/common/Form/RadioInput';

import { bankTransferConfig } from './utility';

function BankTransfer({ method, selected, actions }) {
  const isSelected = method.code === selected.code;

  if (!isSelected) {
    return (
      <RadioInput
        value={method.code}
        label={method.title}
        name="paymentMethod"
        checked={isSelected}
        onChange={actions.change}
      />
    );
  }

  return (
    <div>
      <div>
        <RadioInput
          value={method.code}
          label={method.title}
          name="paymentMethod"
          checked={isSelected}
          onChange={actions.change}
        />
      </div>
      {bankTransferConfig.instruction && (
        <div className="mx-4 my-4">
          <Card bg="darker">
            <div
              dangerouslySetInnerHTML={{
                __html: bankTransferConfig.instruction,
              }}
            />
          </Card>
        </div>
      )}
    </div>
  );
}

BankTransfer.propTypes = {
  method: paymentMethodShape.isRequired,
  selected: paymentMethodShape.isRequired,
  actions: shape({ change: func }).isRequired,
};

export default BankTransfer;

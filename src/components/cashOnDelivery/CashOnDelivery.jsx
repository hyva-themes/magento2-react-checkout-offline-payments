import React from 'react';
import { shape, func } from 'prop-types';

import Card from '../../../../../components/common/Card/Card';
import RadioInput from '../../../../../components/common/Form/RadioInput';
import { codConfig } from './utility';
import { paymentMethodShape } from '../../../../../utils/payment';

function CashOnDelivery({ method, selected, actions }) {
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
      {codConfig.instruction && (
        <div className="mx-4 my-4">
          <Card bg="darker">
            <p
              dangerouslySetInnerHTML={{
                __html: codConfig.instruction,
              }}
            />
          </Card>
        </div>
      )}
    </div>
  );
}

CashOnDelivery.propTypes = {
  method: paymentMethodShape.isRequired,
  selected: paymentMethodShape.isRequired,
  actions: shape({ change: func }).isRequired,
};

export default CashOnDelivery;

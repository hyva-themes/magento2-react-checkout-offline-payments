import React from 'react';
import { shape, func } from 'prop-types';

import Card from '../../../../../components/common/Card/Card';
import RadioInput from '../../../../../components/common/Form/RadioInput';
import { __ } from '../../../../../i18n';
import { checkMoConfig } from './utility';
import { paymentMethodShape } from '../../../../../utils/payment';

function CheckMoneyOrder({ method, selected, actions }) {
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
      {(checkMoConfig.payableTo || checkMoConfig.mailingAddress) && (
        <div className="mx-4 my-4">
          <Card bg="darker">
            <dl className="sm:divide-y sm:divide-gray-200">
              {checkMoConfig.payableTo && (
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    {__('Make Check payable to:')}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {checkMoConfig.payableTo}
                  </dd>
                </div>
              )}
              {checkMoConfig.mailingAddress && (
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    {__('Send Check to:')}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <address
                      dangerouslySetInnerHTML={{
                        __html: checkMoConfig.mailingAddress,
                      }}
                    />
                  </dd>
                </div>
              )}
            </dl>
          </Card>
        </div>
      )}
    </div>
  );
}

CheckMoneyOrder.propTypes = {
  method: paymentMethodShape.isRequired,
  selected: paymentMethodShape.isRequired,
  actions: shape({ change: func }).isRequired,
};

export default CheckMoneyOrder;

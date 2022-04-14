import { useContext } from 'react';

import { PaymentMethodFormContext } from '@hyva/react-checkout/components/paymentMethod/context';

export default function useOfflinePaymentMethodFormContext() {
  const {
    formikData,
    paymentValues,
    setFieldValue,
    setFieldError,
    setFieldTouched,
  } = useContext(PaymentMethodFormContext);

  return {
    formikData,
    paymentValues,
    setFieldValue,
    setFieldError,
    setFieldTouched,
  };
}

import { useCallback, useEffect } from 'react';

import { usePerformPlaceOrderByREST } from '@hyva/react-checkout/hook';

import useOfflineCheckoutFormContext from './useOfflineCheckoutFormContext';

export default function useOfflinePerformPlaceOrder(methodCode) {
  const performPlaceOrder = usePerformPlaceOrderByREST(methodCode);
  const { registerPaymentAction } = useOfflineCheckoutFormContext();

  const placeOrderWithOfflineMethod = useCallback(
    async (values) => {
      await performPlaceOrder(values, { additionalData: null });
    },
    [performPlaceOrder]
  );

  useEffect(() => {
    registerPaymentAction(methodCode, placeOrderWithOfflineMethod);
  }, [methodCode, registerPaymentAction, placeOrderWithOfflineMethod]);
}

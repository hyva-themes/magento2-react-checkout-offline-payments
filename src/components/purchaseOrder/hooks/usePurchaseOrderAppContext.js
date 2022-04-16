import useAppContext from '@hyva/react-checkout/hook/useAppContext';

export default function usePurchaseOrderAppContext() {
  const { setErrorMessage } = useAppContext();

  return { setErrorMessage };
}

import useAppContext from '../../../../../../hook/useAppContext';

export default function usePurchaseOrderAppContext() {
  const { setErrorMessage } = useAppContext();

  return { setErrorMessage };
}

import RootElement from '@hyva/react-checkout/utils/rootElement';

const paymentConfig = RootElement.getPaymentConfig();

const { instructions: paymentInstructions } = paymentConfig;

export const bankTransferConfig = {
  instruction: paymentInstructions?.banktransfer || '',
};

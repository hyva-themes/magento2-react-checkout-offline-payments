import RootElement from '@hyva/react-checkout/utils/rootElement';

const paymentConfig = RootElement.getPaymentConfig();

const { instructions: paymentInstructions } = paymentConfig;

export const codConfig = {
  instruction: paymentInstructions?.cashondelivery || '',
};

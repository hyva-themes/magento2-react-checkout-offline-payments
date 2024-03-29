import RootElement from '@hyva/react-checkout/utils/rootElement';

const config = RootElement.getPaymentConfig();

const { payableTo, mailingAddress } = config?.checkmo || {};

export const checkMoConfig = {
  payableTo: payableTo || '',
  mailingAddress: mailingAddress || '',
};

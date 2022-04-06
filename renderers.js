import BankTransfer from './src/components/bankTransfer';
import CheckMoneyOrder from './src/components/checkMoney';
import PurchaseOrder from './src/components/purchaseOrder';
import CashOnDelivery from './src/components/cashOnDelivery';

const offlinePaymentRenderers = {
  checkmo: CheckMoneyOrder,
  banktransfer: BankTransfer,
  purchaseorder: PurchaseOrder,
  cashondelivery: CashOnDelivery,
};

export default offlinePaymentRenderers;

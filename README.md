# magento2-hyva-react-checkout-offline-payments

Magento 2 offline payment method renderers for [Hyvä React Checkout](https://github.com/hyva-themes/magento2-hyva-checkout)

## Prerequisites

1.  **[Hyvä Checkout](https://github.com/hyva-themes/magento2-hyva-checkout)** is installed and setup with your Magento site.

## Installation steps

1. Go to your `package.json` of Hyvä React Checkout and add below configuration.

    File: `src/reactapp/package.json`
    ```
    "config": {
        "paymentMethodsRepo": {
            "offline": "git@github.com:rajeev-k-tomy/magento2-hyva-react-checkout-offline-payments.git"
        }
    },
    ```
    Please note this version is intended to use with [Hyvä React Checkout Example](https://github.com/hyva-themes/magento2-checkout-example) module.
2. Run `npm install`. This will do all necessary setup for you.
3. Run `npm run build` to build a new version of the build js file which will now include this payment renderer.
4. You can include following translations through your Hyvä React Checkout module.

    File: `i18n/en_US.csv`
    ```
    "Purchase Order Number","Purchase Order Number"
    "Please provide your purchase order number.","Please provide your purchase order number."
    ```

## Supported Offline Payment Methods

Magento 2 offline methods are Check / Money order, Bank transfer, Cash on delivery and Purchase order. Among these methods, currently purchase order is supported here.

## More Reading

- If you have any doubts about the building the react app, then **[read more about it here](https://hyva-themes.github.io/magento2-react-checkout/build/)**.
- If you want to know more about how Hyvä Checkout helps you to integrate any payment methods, then **[read more about it here](https://hyva-themes.github.io/magento2-react-checkout/payment-integration/)**.
- The official documentation of **[Hyvä Checkout](https://hyva-themes.github.io/magento2-react-checkout)**
- The official documentation of **[Offline payment methods](https://docs.magento.com/user-guide/payment/offline-payment-methods.html)** in Magento 2

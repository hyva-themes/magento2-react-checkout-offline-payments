# magento2-react-checkout-offline-payments

Magento 2 offline payment method renderers for [Hyvä React Checkout][hyva-react-checkout]

## Prerequisites

1.  **[Hyvä React Checkout][hyva-react-checkout]** (version >= 1.0.8) is installed and setup with your Magento site.

## Installation steps

1. Go to your `package.json` of Hyvä React Checkout and add below configuration.

    File: `src/reactapp/package.json`
    ```
    "config": {
        "paymentMethodsRepo": {
            "offline": "git@github.com:hyva-themes/magento2-react-checkout-offline-payments.git"
        }
    },
    ```

2. Run `npm install`. This will do all necessary setup for you.
3. Run `npm run build` to build a new version of the build js file which will now include this payment renderer.
4. You can include following translations via layout xml file.

    File: `view/frontend/layout/hyvareactcheckout_reactcheckout_index.xml`
    ```
    <referenceBlock name="checkout.translations">
        <arguments>
            <argument name="checkout_translations" xsi:type="array">
                <item name="hyva_react_checkout_offline" xsi:type="string">
                    <![CDATA[urchase Order Number,Purchase order number is a required field.,Make Check payable to:,Send Check to:]]>
                </item>
            </argument>
        </arguments>
    </referenceBlock>
    ```

## Supported Offline Payment Methods

Magento 2 offline methods are Check / Money order, Bank transfer, Cash on delivery and Purchase order. All methods are now supported.

## More Reading

- If you have any doubts about the building the react app, then **[read more about it here](https://hyva-themes.github.io/magento2-react-checkout/build/)**.
- If you want to know more about how Hyvä Checkout helps you to integrate any payment methods, then **[read more about it here](https://hyva-themes.github.io/magento2-react-checkout/payment-integration/)**.
- The official documentation of **[Hyvä Checkout](https://hyva-themes.github.io/magento2-react-checkout)**
- The official documentation of **[Offline payment methods](https://docs.magento.com/user-guide/payment/offline-payment-methods.html)** in Magento 2

## Credits

Special thanks to integer_net for building the initial release of this Magento2 offline payment methods for the Hyvä React Checkout!

# [![integer_net GmbH](https://www.integer-net.com/wp-content/uploads/sites/3/2017/06/logo-integernet.png)](https://www.integer-net.com/)

- [Rajeev K Tomy][link-author]

## License

BSD 3-Clause License. Please see [License File](LICENSE.txt) for more information.

[link-author]: https://github.com/rajeev-k-tomy
[hyva-react-checkout]: https://github.com/hyva-themes/magento2-react-checkout
[example-template]: https://github.com/hyva-themes/magento2-checkout-example

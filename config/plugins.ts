export default({env}) => ({
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            setting: {
                defaultFrom: 'thang.bui@galaxyfinx.com',
                defaultReplyTo: 'thang.bui@galaxyfinx.com',
                testAddress: 'thang.bui@galaxyfinx.com',
            }
        }
    }
}) 
    /* 'color-picker': {
        enabled: true,
        resolve: './src/plugins/color-picker'
    } */


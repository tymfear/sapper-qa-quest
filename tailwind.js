module.exports = {
    theme: {
        extend: {
            colors: {
                gold: '#ffa500'
            },
            container: {
                center: true,
            },
            boxShadow: {
                'gold-50': '0 0 10px rgba(255, 165, 0, 0.5)'
            },
            borderWidth: {
                '1/2': '0.5px'
            },
            height: {
                container: 'calc(100vh - 6rem)'
            }
        },
    },
    variants: {
        borderWidth: ['hover'],
        boxShadow: ['hover'],
    },
    plugins: []
};
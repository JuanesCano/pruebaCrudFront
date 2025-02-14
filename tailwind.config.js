module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite-react/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['InterVariable', '...defaultTheme.fontFamily.sans'],
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
}
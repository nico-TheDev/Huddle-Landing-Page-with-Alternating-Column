module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    purge: [],
    theme: {
        extend: {
            colors: {
                main: "hsl(322, 100%, 66%)",
                paleCyan: " hsl(193, 100%, 96%)",
                darkCyan: "hsl(192, 100%, 9%)",
                grayBlue: "hsl(208, 11%, 55%)",
            },
            fontFamily: {
                head: ["Poppins", "sans-serif"],
                body: ["Open-Sans", "sans-serif"],
            },
            width: {
                90: "90%",
            },
            height: {
                tenth: "10vh",
            },
            backgroundImage: (theme) => ({
                "mobile-pattern":'url(../images/bg-hero-mobile.svg)',
                "desktop-pattern":'url(../images/bg-hero-desktop.svg)',
            }),
            borderRadius:{
                xl:'1.3rem',
                '2xl':'3rem',
                '3xl':'4rem',
                '4xl':'5rem',
            }
        },
    },
    variants: {},
    plugins: [],
    experimental: {
        applyComplexClasses: true,
      },
};

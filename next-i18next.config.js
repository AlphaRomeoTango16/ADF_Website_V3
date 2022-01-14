const path = require("path");

module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: ["en", "fr"],
        localePath: path.resolve("./public/locales"),
        otherLanguages: ["en", "fr"],
        defaultLanguage: "en",
        fallbackLng: ["en"],
    },
};
module.exports = {
    extends: "stylelint-config-xo",
    plugins: ["stylelint-use-logical-spec"],
    ignoreFiles: ["_site/**/*.css"],
    rules: {
        "custom-property-pattern": null,
        "import-notation": "string",
        "selector-class-pattern": null,
        "liberty/use-logical-spec": null,
    },
};

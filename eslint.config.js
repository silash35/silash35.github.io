import eslintConfig from "eslint-config-silash35";

const customConfig = {
  rules: {
    "jsx-a11y/alt-text": "off",
  },
};

export default eslintConfig.concat(customConfig);

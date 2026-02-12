import ColorPicker from "./components/ColorPicker";

export default {
  register(app: any) {
    app.customFields.register({
      name: "color",
      pluginId: "color-picker",
      type: "string",
      intlLabel: {
        id: "color-picker.label",
        defaultMessage: "Color",
      },
      intlDescription: {
        id: "color-picker.description",
        defaultMessage: "Chọn một màu",
      },
      supportedFieldTypes: ['string'],
      components: {
        Input: ColorPicker,
      }
    });
  },
};

const Capitalize = (text) => {
  text = text.replace('-', ' ');
  return text.charAt(0).toUpperCase() + text.slice(1, text.length);
};

const FormaterId = (text) => `#${text.toString().padStart(3, '0')}`;

const FormaterType = (text) => {
  if (text.type) {
    return text.type.name.charAt(0).toUpperCase() + text.type.name.slice(1, text.type.name.length);
  }
};

const FormaterDescription = (text) => text.replace(/\n|\f|\r/g, ' ');

export { Capitalize, FormaterId, FormaterType, FormaterDescription };

let options = {
  space: 2
};
const encode = data => JSON.stringify(data, null, options.space);
const decode = text => JSON.parse(text);
const config = opts => Object.assign(options, opts);

export const jsonCodec = { encode, decode, config };

export default jsonCodec

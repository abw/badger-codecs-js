let defaults = {
  space: 2
};

const config = opts => Object.assign(defaults, opts);
const decode = text => JSON.parse(text);

export const jsonCodec = (options={}) => {
  const merged = { ...defaults, ...options }
  const encode = data => JSON.stringify(data, null, merged.space);
  return { encode, decode, config };
}

export default jsonCodec

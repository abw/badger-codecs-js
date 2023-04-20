import yaml from 'js-yaml';

let defaults = {
  indent: 2
};

const config = opts => Object.assign(defaults, opts)
const decode = text => yaml.load(text);

export const yamlCodec = (options={}) => {
  const merged = { ...defaults, ...options }
  const encode = data => yaml.dump(data, merged);
  return { encode, decode, config }
}

export default yamlCodec

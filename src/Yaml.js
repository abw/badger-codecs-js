import yaml from 'js-yaml';

let options = {
  indent: 2
};

const encode = data => yaml.dump(data, options);
const decode = text => yaml.load(text);
const config = opts => Object.assign(options, opts)

export const yamlCodec = { encode, decode, config };

export default yamlCodec

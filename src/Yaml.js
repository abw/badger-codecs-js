import yaml from 'js-yaml';

const encode = data => yaml.dump(data);
const decode = text => yaml.load(text);

export const yamlCodec = { encode, decode };

export default yamlCodec

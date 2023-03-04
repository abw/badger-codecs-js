const encode = data => JSON.stringify(data);
const decode = text => JSON.parse(text);

export const jsonCodec = { encode, decode };

export default jsonCodec

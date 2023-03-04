import { Buffer } from 'node:buffer';

const encode = data => Buffer.from(data).toString('base64');
const decode = text => Buffer.from(text, 'base64').toString('utf8');

export const base64Codec = { encode, decode };

export default base64Codec


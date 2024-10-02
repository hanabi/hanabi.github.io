import test from './create_svg.cjs';

const chunks = [];
const readable = process.stdin;

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
	const data = test(content);
process.stdout.write(data);
});

const name: string = 'Hamza Ajmal';

console.log(name.toUpperCase());
console.log(name.toLowerCase());

function TitleCase(str: string): string {
  str = str.toLowerCase();
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
console.log(TitleCase('hi my name is hamza ajmal'));

export {};

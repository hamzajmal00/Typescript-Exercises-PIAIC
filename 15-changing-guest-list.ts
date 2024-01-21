const guestList: string[] = ['hamza', 'ali', 'areeb', 'atif'];

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(
    'Dear',
    guest + ',',
    'You are cordially invited to dinner at my place. I would be honored to have your presence.'
  );
}

guestList[guestList.indexOf('ali')] = 'ajmal';

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(
    'Dear',
    guest + ',',
    'You are cordially invited to dinner at my place. I would be honored to have your presence.'
  );
}

export {};

export type TButton = {
  digit: number;
  id: string;
  checked: boolean;
  type: string;
};

export const ArrayOfButton: TButton[] = [
  {
    digit: 1,
    id: '1a',
    checked: false,
    type: 'long',
  },
  {
    digit: 2,
    id: '2b',
    checked: false,
    type: 'long',
  },
  {
    digit: 3,
    id: '3c',
    checked: false,
    type: 'long',
  },
  {
    digit: 4,
    id: '4d',
    checked: false,
    type: 'long',
  },
  {
    digit: 5,
    id: '5e',
    checked: false,
    type: 'long',
  },
  {
    digit: 6,
    id: '6f',
    checked: false,
    type: 'long',
  },
  {
    digit: 7,
    id: '7g',
    checked: false,
    type: 'long',
  },
  {
    digit: 8,
    id: '8h',
    checked: false,
    type: 'long',
  },
  {
    digit: 9,
    id: '9i',
    checked: false,
    type: 'long',
  },
  {
    digit: 10,
    id: '10j',
    checked: false,
    type: 'long',
  },
  {
    digit: 11,
    id: '11k',
    checked: false,
    type: 'long',
  },
  {
    digit: 12,
    id: '12l',
    checked: false,
    type: 'long',
  },
  {
    digit: 13,
    id: '13m',
    checked: false,
    type: 'long',
  },
  {
    digit: 14,
    id: '14n',
    checked: false,
    type: 'long',
  },
  {
    digit: 15,
    id: '15p',
    checked: false,
    type: 'long',
  },
  {
    digit: 16,
    id: '16q',
    checked: false,
    type: 'long',
  },
  {
    digit: 17,
    id: '17r',
    checked: false,
    type: 'long',
  },
  {
    digit: 18,
    id: '18s',
    checked: false,
    type: 'long',
  },
  {
    digit: 19,
    id: '19t',
    checked: false,
    type: 'long',
  },
];

export const ArrayOfAuxButton: TButton[] = [
  {
    digit: 1,
    id: '1ashort',
    checked: false,
    type: 'short',
  },
  {
    digit: 2,
    id: '2bshort',
    checked: false,
    type: 'short',
  },
  {
    digit: 3,
    id: '3cshort',
    checked: false,
    type: 'short',
  },
  {
    digit: 4,
    id: '4dshort',
    checked: false,
    type: 'short',
  },
];

const initialTiketState = {
  checkedDigit: [],
};

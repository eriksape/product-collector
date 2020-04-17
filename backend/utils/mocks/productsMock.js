const productsMock = [
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Bogotá D.C.',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11',
    variants: '64gb',
    price: 3200000,
    soldQuantity: 253,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 26
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Bogotá D.C.',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11',
    variants: '128gb',
    price: 3600000,
    soldQuantity: 128,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 20
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Bogotá D.C.',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11 pro',
    variants: '64gb',
    price: 4000000,
    soldQuantity: 64,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 20
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Bogotá D.C.',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11 pro',
    variants: '128gb',
    price: 4400000,
    soldQuantity: 48,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 18
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Bogotá D.C.',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11 pro',
    variants: '256gb',
    price: 4800000,
    soldQuantity: 32,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 10
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Bogotá D.C.',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11 pro max',
    variants: '128gb',
    price: 5200000,
    soldQuantity: 27,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 8
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Bogotá D.C.',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11 pro max',
    variants: '256gb',
    price: 5600000,
    soldQuantity: 14,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 7
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Bogotá D.C.',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'used',
    model: 'iphone 11',
    variants: '64gb',
    price: 0400000,
    soldQuantity: 21,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 6
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Bogotá D.C.',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'used',
    model: 'iphone 11',
    variants: '128gb',
    price: 3000000,
    soldQuantity: 12,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 4
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Bogotá D.C.',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'used',
    model: 'iphone 11 pro max',
    variants: '128gb',
    price: 400000,
    soldQuantity: 4,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 3
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Bogotá D.C.',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'refurbished',
    model: 'iphone 11 pro max',
    variants: '256gb',
    price: 500000,
    soldQuantity: 1,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 2
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Antioquia',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11',
    variants: '64gb',
    price: 3000000,
    soldQuantity: 125,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 40
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Antioquia',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11',
    variants: '128gb',
    price: 3400000,
    soldQuantity: 156,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 38
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Antioquia',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11 pro',
    variants: '128gb',
    price: 4200000,
    soldQuantity: 40,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 4
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Antioquia',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11 pro',
    variants: '256gb',
    price: 4600000,
    soldQuantity: 30,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 2
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Antioquia',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11 pro max',
    variants: '128gb',
    price: 5000000,
    soldQuantity: 17,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 10
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Antioquia',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11 pro max',
    variants: '256gb',
    price: 5400000,
    soldQuantity: 13,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 4
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Antioquia',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'used',
    model: 'iphone 11',
    variants: '64gb',
    price: 1800000,
    soldQuantity: 5,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 12
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Atlantico',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11',
    variants: '64gb',
    price: 3100000,
    soldQuantity: 89,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 23
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Atlantico',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11',
    variants: '128gb',
    price: 3300000,
    soldQuantity: 96,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 6
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Atlantico',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11 pro',
    variants: '128gb',
    price: 4300000,
    soldQuantity: 54,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 5
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Atlantico',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'used',
    model: 'iphone 11',
    variants: '64gb',
    price: 2100000,
    soldQuantity: 2,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 8
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Santander',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'new',
    model: 'iphone 11',
    variants: '64gb',
    price: 3150000,
    soldQuantity: 36,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 15
  },
  {
    id: 'PCP900000000',
    country: 'Mexico',
    city: 'Santander',
    currency: 'COP',
    keyWord: 'iphone',
    condition: 'used',
    model: 'iphone 11',
    variants: '64gb',
    price: 3000000,
    soldQuantity: 3,
    date: new Date('2020-04-06T06:36:44.892Z'),
    analyzedResults: 1
  }
];

module.exports = {
  productsMock
};

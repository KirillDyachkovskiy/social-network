type ZERO = 0;
type Iterate<tuple extends ZERO[]> = [...tuple, 0];

export type NumberRange<
  FROM extends number,
  TO extends number
  > = TO extends FROM
  ? FROM
  : NotEmptyNumbersRange<FROM, TO>;

type NotEmptyNumbersRange<
  FROM extends number,
  TO extends number,
  ITERATOR extends ZERO[] = [],
  > = ITERATOR['length'] extends FROM
  ? SequenceNumbersRange<TO, ITERATOR>
  : NotEmptyNumbersRange<FROM, TO, Iterate<ITERATOR>>;

type SequenceNumbersRange<
  TO extends number,
  ITERATOR extends ZERO[],
  RESULT extends unknown[] = [],
  > = ITERATOR['length'] extends TO
  ? [...RESULT, TO][number]
  : SequenceNumbersRange<
    TO,
    Iterate<ITERATOR> ,
    [...RESULT, ITERATOR['length']]
    >;

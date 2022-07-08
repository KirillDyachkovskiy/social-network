import { useState } from 'react';
import { Checkbox, Field, Submit } from '../../ui';
import s from './friendsSearch.module.scss';

interface IFriendsSearch {
  onSubmit: (term: string, friend: boolean) => void;
  term: string;
  friend: boolean;
}

export default function FriendsSearch({
  onSubmit,
  term,
  friend,
}: IFriendsSearch) {
  const [isFriendsOnly, setIsFriendsOnly] = useState<boolean>(friend);

  const onCheck = () => setIsFriendsOnly((prevState: boolean) => !prevState);

  const handleSubmit = (text: string) => onSubmit(text, isFriendsOnly);

  return (
    <div className={s.friendsSearch}>
      <Field>
        <Submit
          defaultValue={term}
          placeholder='Find a friend'
          onSubmit={handleSubmit}
        >
          Find
        </Submit>
        <div className={s.friendsSearch__checkbox}>
          <Checkbox
            id='friendsOnly'
            label='Only friends'
            checked={isFriendsOnly}
            onChange={onCheck}
          />
        </div>
      </Field>
    </div>
  );
}

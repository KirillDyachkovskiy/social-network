import { useState } from 'react';
import { Checkbox, Field, Submit } from '../../ui';
import s from './friendsSearch.module.scss';

interface IFriendsSearch {
  changePage: (term: string, friend: boolean) => void;
  term: string;
  friend: boolean;
}

export default function FriendsSearch({
  changePage,
  term,
  friend,
}: IFriendsSearch) {
  const [isFriendsOnly, setIsFriendsOnly] = useState<boolean>(friend);

  const handleCheck = () => {
    setIsFriendsOnly((prevState) => !prevState);
  };

  return (
    <div className={s.friendsSearch}>
      <Field>
        <Submit
          defaultValue={term}
          placeholder='Find a friend'
          onSubmit={(text: string) => changePage(text, isFriendsOnly)}
        >
          Find
        </Submit>
        <div className={s.friendsSearch__checkbox}>
          <Checkbox
            id='friendsOnly'
            label='Only friends'
            checked={isFriendsOnly}
            onChange={handleCheck}
          />
        </div>
      </Field>
    </div>
  );
}

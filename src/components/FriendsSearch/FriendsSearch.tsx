import { useState } from 'react';
import Field from '../../ui/Field';
import Submit from '../Submit';
import Checkbox from '../../ui/Checkbox';
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
  const [filter, setFilter] = useState<string>(term);
  const [isFriendsOnly, setIsFriendsOnly] = useState<boolean>(friend);

  return (
    <div className={s.friendsSearch}>
      <Field>
        <Submit
          placeholder='Find a friend'
          value={filter}
          onChange={setFilter}
          onSubmit={() => changePage(filter, isFriendsOnly)}
        >
          Find
        </Submit>
        <div className={s.friendsSearch__checkbox}>
          <Checkbox
            id='friendsOnly'
            label='Only friends'
            checked={isFriendsOnly}
            onChange={setIsFriendsOnly}
          />
        </div>
      </Field>
    </div>
  );
}

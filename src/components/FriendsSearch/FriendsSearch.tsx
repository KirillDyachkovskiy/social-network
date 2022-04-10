import { useState } from 'react';
import Field from '../../ui/Field';
import Submit from '../Submit';
import Checkbox from '../../ui/Checkbox';
import s from './friendsSearch.module.scss';
import { UsersPayload } from '../../types/Api';

interface IFriendsSearch {
  changePage: (page: number, term: string, friend: boolean) => void;
  query: UsersPayload;
  setSearchParams: (value: {}) => void;
}

export default function FriendsSearch({
  changePage,
  query,
  setSearchParams,
}: IFriendsSearch) {
  const [filter, setFilter] = useState<string>(query.term);
  const [isFriendsOnly, setIsFriendsOnly] = useState<boolean>(query.friend);

  const onSubmit = (page: number, term: string, friend: boolean) => {
    setSearchParams({
      page: String(page),
      ...(term && { term: String(term) }),
      ...(friend && { friend: String(friend) }),
    });
    changePage(page, term, friend);
  };

  return (
    <div className={s.friendsSearch}>
      <Field>
        <Submit
          placeholder='Search for friend'
          value={filter}
          onChange={setFilter}
          onSubmit={() => onSubmit(query.page, filter, isFriendsOnly)}
        >
          Find
        </Submit>
        <div className={s.friendsSearch__checkbox}>
          <Checkbox
            id='friendsOnly'
            label='My friends'
            checked={isFriendsOnly}
            onChange={setIsFriendsOnly}
          />
        </div>
      </Field>
    </div>
  );
}

import { Title } from './Title';
import { Users } from './Users';
import { SamplePage } from '../../layout/Main/SamplePage'
import { Pagination } from './Pagination';

export const FriendsStateless = ({ menu }) => {
    return (
        <SamplePage menu={menu}>
            <div>
                <Title>Users</Title>
                <Pagination />
                <Users />
            </div>
        </SamplePage>
    )
};
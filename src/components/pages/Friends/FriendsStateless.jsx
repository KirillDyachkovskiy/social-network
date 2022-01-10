import { Title } from './Title';
import { Users } from './Users';
import { SamplePage } from '../../layout/Main/SamplePage'

export const FriendsStateless = ({ menu }) => {
    return (
        <SamplePage menu={menu}>
            <div>
                <Title>Users</Title>
                <Users />
            </div>
        </SamplePage>
    )
};
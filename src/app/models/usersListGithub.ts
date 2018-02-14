import { UserGitHub } from './userGitHub';

export interface UsersListGitHub {
    incomplete_results: boolean;
    items: UserGitHub[];
    total_count: number;
}

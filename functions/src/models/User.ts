import * as _ from 'lodash';

export interface User {
    uid: string | null;
    photo_url: string | null;
    email: string | null;
    email_verified: boolean;
    last_login_at: Date | null;
    created_at: Date | null;
    birthday: Date | null;
    newsletter: boolean;
    is_social: boolean;
    login_provider: string | null;
    first_name: string | null;
    last_name: string | null;
}

export const UserInitialValues: User = {
    uid: null,
    photo_url: null,
    email: null,
    email_verified: false,
    last_login_at: new Date(),
    created_at: new Date(),
    birthday: null,
    newsletter: false,
    is_social: false,
    login_provider: null,
    first_name: null,
    last_name: null,
}

const userInitialMap: Map<String, String | null> = new Map(_.toPairs(UserInitialValues));

export const createUserMap = (user: User): Map<String, String | null> => new Map(_.toPairs(user));
export const getUserInitialValue = (key: String): (String | undefined | null) => userInitialMap.get(key);
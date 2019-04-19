import * as Users from './utils/users';

module.exports = {
    Users_userCreateTrigger: Users.onUserCreate,
    Users_userUpdateTrigger: Users.onUserUpdate,
}

// firebase deploy --only functions:Users_userCreateTrigger

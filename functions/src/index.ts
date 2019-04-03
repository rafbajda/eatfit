import * as Users from './utils/users';

module.exports = {
    Users_userCreateTrigger: Users.onUserCreate
}

// firebase deploy --only functions:Users_userCreateTrigger

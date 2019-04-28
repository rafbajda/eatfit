import * as Users from './utils/users';
import * as Scans from './utils/scans';

module.exports = {
    Users_userCreateTrigger: Users.onUserCreate,
    Users_userUpdateTrigger: Users.onUserUpdate,
    Scans_performScan: Scans.performScan,
}

// firebase deploy --only functions:Users_userCreateTrigger

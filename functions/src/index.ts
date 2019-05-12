import * as Users from './utils/users';
import * as Scans from './utils/scans';

module.exports = {
    Users_userCreateTrigger: Users.onUserCreate,
    Users_userUpdateTrigger: Users.onUserUpdate,
    Scans_performScan: Scans.performScan,
    Scans_scanCreateTrigger: Scans.onScanCreate,
}

// firebase deploy --only functions:Users_userCreateTrigger

import * as _ from 'lodash';
import { User, getUserInitialValue, UserInitialValues, createUserMap } from '../models/User';

const completeUserInstance = (user: User) => {
    const map = createUserMap(user);

    return _.mapValues(UserInitialValues, (val, key: String) => {
        if (map.get(key) === null || map.get(key) === undefined) {
            return getUserInitialValue(key)
        }
        return map.get(key);
    })
}

const checkEmptyStrings = (user: User) =>
    _.mapValues(user, val => val === '' ? null : val)


export default {
    completeUserInstance,
    checkEmptyStrings,

}
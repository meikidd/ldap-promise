/**!
 *
 * ldap-promise
 *
 * Copyright(c) cnpmjs.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  meikidd <meikidd@gmail.com>
 *
 * TODO:remove, add, rename, modify, findandbind, authbind
 */

const LDAP = require('ldap-client');

class LdapPromise extends LDAP {
  constructor(option, callback) {
    super(option, callback);
  }
  bind(option) {
    return new Promise((resolve, reject) => {
      super.bind(option, err => {
        if (err) {
          reject({
            status: false,
            error: err
          });
        } else {
          resolve({ status: true });
        }
      });
    });
  }
  search(option) {
    return new Promise((resolve, reject) => {
      super.search(option, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}

module.exports = LdapPromise;
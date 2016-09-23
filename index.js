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
  remove(dn) {
    return new Promise((resolve, reject) => {
      super.remove(dn, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  add(dn, attrs) {
    return new Promise((resolve, reject) => {
      super.add(dn, attrs, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  rename(dn, newrdn) {
    return new Promise((resolve, reject) => {
      super.rename(dn, newrdn, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  modify(dn, ops) {
    return new Promise((resolve, reject) => {
      super.search(dn, ops, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  findandbind(option) {
    return new Promise((resolve, reject) => {
      super.findandbind(option, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  authbind(dn, password) {
    return new Promise((resolve, reject) => {
      super.search(dn, password, (err, data) => {
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
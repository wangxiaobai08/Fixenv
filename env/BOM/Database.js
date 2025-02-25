openDatabase = undefined;

; (function () {
    SQLResultSetRowList = function SQLResultSetRowList(createObj_key, rows) {
        if (createObj_key !== myVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        myVm.memory.private_data.set(this, {
            rows: rows,
            length: rows.length
        })
    }; myVm.safefunction(SQLResultSetRowList);

    ; (function () {
        const $safe_get_attribute = ['length'];
        const $safe_set_attribute = [];
        const $safe_func_attribute = ['item'];
        SQLResultSetRowList.prototype = {
            item() {
                if (!SQLResultSetRowList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                let result = myVm.memory.private_data.get(this).rows;
                if (myVm.config.logOpen === true) myVm.logAdd('Func', 'SQLResultSetRowList', 'item', arguments, result);
                return result;
            },
            get length() {
                if (!SQLResultSetRowList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                let result = myVm.abs(myVm.memory.private_data.get(this).length, 0);
                if (myVm.config.logOpen === true) myVm.logAdd('Get', 'SQLResultSetRowList', 'length', arguments, result);
                return result;
            },
        }
        myVm.rename(SQLResultSetRowList.prototype, "SQLResultSetRowList");
        myVm.safeDescriptor_addConstructor(SQLResultSetRowList);
        myVm.safe_Objattribute(SQLResultSetRowList, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    })();

    // -----------------------------------------------------------SQLResultSet----------------------------------------------------------------
    SQLResultSet = function SQLResultSet(createObj_key) {
        if (createObj_key !== myVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        myVm.memory.private_data.set(this, {})
    }; myVm.safefunction(SQLResultSet);

    ; (function () {
        const $safe_get_attribute = ['insertId', 'rows', 'rowsAffected'];
        const $safe_set_attribute = [];
        const $safe_func_attribute = [];

        SQLResultSet.prototype = {
            get insertId() {
                if (!SQLResultSet.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                let result = myVm.abs(myVm.memory.private_data.get(this).insertId, "");
                if (myVm.config.logOpen === true) myVm.logAdd('Get', 'SQLResultSet', 'insertId', arguments, result);
                return result;
            },
            get rows() {
                if (!SQLResultSet.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

                // let sql_result_row_list = new SQLResultSetRowList(myVm.memory.$createObj_key, {"value": window.sql_values});
                let result = { "value": "0" };
                if (myVm.config.logOpen === true) myVm.logAdd('Get', 'SQLResultSet', 'rows', arguments, result);
                return result;
            },
            get rowsAffected() {
                if (!SQLResultSet.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                let result = myVm.abs(myVm.memory.private_data.get(this).rowsAffected, "");
                if (myVm.config.logOpen === true) myVm.logAdd('Get', 'SQLResultSet', 'rowsAffected', arguments, result);
                return result;
            },
        }
        myVm.rename(SQLResultSet.prototype, "SQLResultSet");
        myVm.safeDescriptor_addConstructor(SQLResultSet);
        myVm.safe_Objattribute(SQLResultSet, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    })();

    // -----------------------------------------------------------SQLTransaction----------------------------------------------------------------
    SQLTransaction = function SQLTransaction(createObj_key) {
        if (createObj_key !== myVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        myVm.memory.private_data.set(this, {})
    }; myVm.safefunction(SQLTransaction);

    ; (function () {
        const $safe_get_attribute = [];
        const $safe_set_attribute = [];
        const $safe_func_attribute = ['executeSql'];

        SQLTransaction.prototype = {
            executeSql(sql, arg, succrssCallback, errorCallback) {
                if (!SQLTransaction.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                try {

                } catch (error) {
                    let result = errorCallback(this, sql_result);
                    if (myVm.config.logOpen === true) myVm.logAdd('Func', 'SQLTransaction', '} catch ', arguments, result);
                    return result;
                }
                let sql_result = new SQLResultSet(myVm.memory.$createObj_key);
                let result = succrssCallback(this, sql_result);
                if (myVm.config.logOpen === true) myVm.logAdd('Func', 'SQLTransaction', '} catch ', arguments, result);
                return result;
            }
        }
        myVm.rename(SQLTransaction.prototype, "SQLTransaction");
        myVm.safeDescriptor_addConstructor(SQLTransaction);
        myVm.safe_Objattribute(SQLTransaction, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    })();



    // -----------------------------------------------------------Database----------------------------------------------------------------
    let buffer_memory = {}  // 保存创建的数据库连接


    Database = function Database(createObj_key, version) {
        if (createObj_key !== myVm.memory.$createObj_key) {
            throw new TypeError("Illegal constructor");
        }
        myVm.memory.private_data.set(this, {
            version: version
        })
    }; myVm.safefunction(Database);

    ; (function () {
        const $safe_get_attribute = ['version'];
        const $safe_set_attribute = [];
        const $safe_func_attribute = ['changeVersion', 'readTransaction', 'transaction'];
        Database.prototype = {
            changeVersion(old_version, new_version) {
                if (!Database.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                let this_info = myVm.memory.private_data.get(this);
                if (old_version == this_info.version) {
                    this_info.version = new_version;
                }
            },
            readTransaction(func) {
                if (!Database.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                let result = undefined;
                if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Database', 'readTransaction', arguments, result);
                return result;
            },
            transaction(func) {
                if (!Database.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                let sql_tran = new SQLTransaction(myVm.memory.$createObj_key);
                let result = func(sql_tran);
                if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Database', 'transaction', arguments, result);
                return result;
            },
            get version() {
                if (!Database.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                return myVm.abs(myVm.memory.private_data.get(this).version, "");
            }
        }
        myVm.rename(Database.prototype, "Database");
        myVm.safeDescriptor_addConstructor(Database);
        myVm.safe_Objattribute(Database, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    })();


    openDatabase = function openDatabase(name, version, desc, size, callback) {

        let db = buffer_memory[name];
        if (db) {
            let result = db;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Database', 'if ', arguments, result);
            return result;
        }
        db = new Database(myVm.memory.$createObj_key, version);
        buffer_memory[name] = db;

        return db;
    };

})();


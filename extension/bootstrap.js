/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const {classes: Cc, interfaces: Ci, utils: Cu} = Components;

Cu.import("resource://gre/modules/Services.jsm");

function startup(data, reason) {
    let sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
    let uri = Services.io.newURI("chrome://hide-sync-in-menu/content/main.css", null, null);
    if (!sss.sheetRegistered(uri, sss.USER_SHEET))
        sss.loadAndRegisterSheet(uri, sss.USER_SHEET);
}

function shutdown(data, reason) {
    if (reason == APP_SHUTDOWN)
        return;

    let sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
    let uri = Services.io.newURI("chrome://hide-sync-in-menu/content/main.css", null, null);
    if (sss.sheetRegistered(uri, sss.USER_SHEET))
        sss.unregisterSheet(uri, sss.USER_SHEET);
}

function install(data, reason) {
}

function uninstall(data, reason) {
}

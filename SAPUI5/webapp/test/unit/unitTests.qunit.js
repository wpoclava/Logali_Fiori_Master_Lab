// @ts-nocheck
/* eslint-disable no-undef */
/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

	sap.ui.require([
		"logaligroup/SAPUI5/test/unit/model/InvoicesFormatter"
	], function () {
		QUnit.start();
	});
});
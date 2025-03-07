"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var isMonthly = (0, vue_1.inject)('isMonthly'); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: ("container py-[7rem] text-center") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("capitalize text-[3.5rem] text-neutral-500") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-center mt-[4rem] gap-x-[2.7rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        id: ("annualy"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.isMonthly = !__VLS_ctx.isMonthly;
        } }, { type: ("button"), 'aria-labelledby': ("annualy monthly"), 'aria-label': ("toggle subscription status"), role: ("switch"), 'aria-pressed': ((__VLS_ctx.isMonthly)) }), { class: ("py-[1.7rem] px-[3.2rem] rounded-badge bg-gradient-to-r from-primary-ffrom to-primary-tto relative before:absolute before:w-[2.5rem] before:h-[2.5rem] before:rounded-full before:top-1/2 before:transition-[left] before:translate-y-[-50%] before:bg-white before:z-[1] z-[5] lg:hover:opacity-65 lg:transition-opacity") }), { class: ((__VLS_ctx.isMonthly ? 'before:left-[54%]' : 'before:left-[9%]')) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        id: ("monthly"),
    });
    ['container', 'py-[7rem]', 'text-center', 'capitalize', 'text-[3.5rem]', 'text-neutral-500', 'flex', 'items-center', 'justify-center', 'mt-[4rem]', 'gap-x-[2.7rem]', 'py-[1.7rem]', 'px-[3.2rem]', 'rounded-badge', 'bg-gradient-to-r', 'from-primary-ffrom', 'to-primary-tto', 'relative', 'before:absolute', 'before:w-[2.5rem]', 'before:h-[2.5rem]', 'before:rounded-full', 'before:top-1/2', 'before:transition-[left]', 'before:translate-y-[-50%]', 'before:bg-white', 'before:z-[1]', 'z-[5]', 'lg:hover:opacity-65', 'lg:transition-opacity',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {
            isMonthly: isMonthly,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */

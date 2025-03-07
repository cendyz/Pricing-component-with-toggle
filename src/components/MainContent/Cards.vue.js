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
var isMonthly = (0, vue_1.inject)('isMonthly');
var data = (0, vue_1.computed)(function () { return [
    {
        title: 'Basic',
        price: isMonthly.value ? 19.99 : 199.99,
        info: ['500 GB', '2 Users Allowed', 'Send up to 3 GB'],
    },
    {
        title: 'Professional',
        price: isMonthly.value ? 24.99 : 249.99,
        info: ['1 TB', '5 Users Allowed', 'Send up to 10 GB'],
    },
    {
        title: 'Master',
        price: isMonthly.value ? 39.99 : 399.99,
        info: ['2 TB', '10 Users Allowed', 'Send up to 20 GB'],
    },
]; }); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("px-[3rem] relative grid gap-y-[3rem] pb-[15rem] w-full md:flex md:flex-wrap md:justify-center md:gap-x-[3rem] lg:gap-x-0 xl:gap-x-[6rem] xl:mt-[5rem]") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.data)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ class: ("bg-white p-[3rem] text-center text-neutral-blue-300 rounded-xl even:bg-gradient-to-r even:from-primary-ffrom even:to-primary-tto even:text-white w-[32rem] xl:scale-[1.1] xl:w-[35rem]") }, { class: ((index == 1 && 'md:order-3 lg:order-[0] lg:scale-[1.1] xl:scale-[1.25] xl:z-[100]')) }), { key: ((index)) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("mb-[1rem] text-[2rem]") }));
        (item.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[6.6rem] flex items-center justify-center gap-x-[.5rem]") }, { class: ((index == 1 ? 'text-white' : 'text-neutral-blue-400')) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-[4rem]") }));
        (item.price);
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(__assign({ class: ("mb-[2.8rem] mt-[1.5rem]") }));
        for (var _c = 0, _d = __VLS_getVForSourceType((item.info)); _c < _d.length; _c++) {
            var _e = _d[_c], liItem = _e[0], index_1 = _e[1];
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(__assign(__assign({ key: ((index_1)) }, { class: ("py-[1.5rem] border-t-[1px] border-neutral-blue-200") }), { class: ((index_1 == 2 && 'border-b-[1px]')) }));
            (liItem);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: ("block w-full rounded-xl leading-[0] py-[2.2rem] text-[1.3rem] uppercase tracking-[1.2px] lg:border-[1px] lg:border-transparent z-[100]") }, { class: ((index == 1
                ? 'bg-white text-primary-tto  lg:hover:text-white  lg:hover:border-white lg:hover:bg-transparent'
                : 'transparentGradient text-white lg:hover:border-black importantHover lg:hover:text-primary-tto')) }));
    }
    ['px-[3rem]', 'relative', 'grid', 'gap-y-[3rem]', 'pb-[15rem]', 'w-full', 'md:flex', 'md:flex-wrap', 'md:justify-center', 'md:gap-x-[3rem]', 'lg:gap-x-0', 'xl:gap-x-[6rem]', 'xl:mt-[5rem]', 'bg-white', 'p-[3rem]', 'text-center', 'text-neutral-blue-300', 'rounded-xl', 'even:bg-gradient-to-r', 'even:from-primary-ffrom', 'even:to-primary-tto', 'even:text-white', 'w-[32rem]', 'xl:scale-[1.1]', 'xl:w-[35rem]', 'mb-[1rem]', 'text-[2rem]', 'text-[6.6rem]', 'flex', 'items-center', 'justify-center', 'gap-x-[.5rem]', 'text-[4rem]', 'mb-[2.8rem]', 'mt-[1.5rem]', 'py-[1.5rem]', 'border-t-[1px]', 'border-neutral-blue-200', 'block', 'w-full', 'rounded-xl', 'leading-[0]', 'py-[2.2rem]', 'text-[1.3rem]', 'uppercase', 'tracking-[1.2px]', 'lg:border-[1px]', 'lg:border-transparent', 'z-[100]',];
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
            data: data,
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

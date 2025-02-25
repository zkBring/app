module.exports = {

"[project]/node_modules/ethers/node_modules/@noble/hashes/esm/_assert.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "bool": (()=>bool),
    "bytes": (()=>bytes),
    "default": (()=>__TURBOPACK__default__export__),
    "exists": (()=>exists),
    "hash": (()=>hash),
    "number": (()=>number),
    "output": (()=>output)
});
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
}
function bool(b) {
    if (typeof b !== 'boolean') throw new Error(`Expected boolean, not ${b}`);
}
function bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array)) throw new Error('Expected Uint8Array');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash(hash) {
    if (typeof hash !== 'function' || typeof hash.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
    number(hash.outputLen);
    number(hash.blockLen);
}
function exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
}
;
const assert = {
    number,
    bool,
    bytes,
    hash,
    exists,
    output
};
const __TURBOPACK__default__export__ = assert;
 //# sourceMappingURL=_assert.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/hashes/esm/cryptoNode.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// See utils.ts for details.
// The file will throw on node.js 14 and earlier.
// @ts-ignore
__turbopack_esm__({
    "crypto": (()=>crypto)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (node:crypto, cjs)");
;
const crypto = __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ && typeof __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ === 'object' && 'webcrypto' in __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ ? __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__.webcrypto : undefined; //# sourceMappingURL=cryptoNode.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/hashes/esm/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated, we can just drop the import.
__turbopack_esm__({
    "Hash": (()=>Hash),
    "asyncLoop": (()=>asyncLoop),
    "bytesToHex": (()=>bytesToHex),
    "checkOpts": (()=>checkOpts),
    "concatBytes": (()=>concatBytes),
    "createView": (()=>createView),
    "hexToBytes": (()=>hexToBytes),
    "isLE": (()=>isLE),
    "nextTick": (()=>nextTick),
    "randomBytes": (()=>randomBytes),
    "rotr": (()=>rotr),
    "toBytes": (()=>toBytes),
    "u32": (()=>u32),
    "u8": (()=>u8),
    "utf8ToBytes": (()=>utf8ToBytes),
    "wrapConstructor": (()=>wrapConstructor),
    "wrapConstructorWithOpts": (()=>wrapConstructorWithOpts),
    "wrapXOFConstructorWithOpts": (()=>wrapXOFConstructorWithOpts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/cryptoNode.js [app-rsc] (ecmascript)");
;
const u8a = (a)=>a instanceof Uint8Array;
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
const rotr = (word, shift)=>word << 32 - shift | word >>> shift;
const isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
if (!isLE) throw new Error('Non little-endian hardware is not supported');
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    if (!u8a(bytes)) throw new Error('Uint8Array expected');
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    const len = hex.length;
    if (len % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + len);
    const array = new Uint8Array(len / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error('Invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
const nextTick = async ()=>{};
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await nextTick();
        ts += diff;
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    if (!u8a(data)) throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
}
function concatBytes(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a)=>sum + a.length, 0));
    let pad = 0; // walk through each item, ensure they have proper type
    arrays.forEach((a)=>{
        if (!u8a(a)) throw new Error('Uint8Array expected');
        r.set(a, pad);
        pad += a.length;
    });
    return r;
}
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
const toStr = {}.toString;
function checkOpts(defaults, opts) {
    if (opts !== undefined && toStr.call(opts) !== '[object Object]') throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function wrapConstructor(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function randomBytes(bytesLength = 32) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["crypto"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["crypto"].getRandomValues === 'function') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["crypto"].getRandomValues(new Uint8Array(bytesLength));
    }
    throw new Error('crypto.getRandomValues must be defined');
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/hashes/esm/_u64.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "add": (()=>add),
    "add3H": (()=>add3H),
    "add3L": (()=>add3L),
    "add4H": (()=>add4H),
    "add4L": (()=>add4L),
    "add5H": (()=>add5H),
    "add5L": (()=>add5L),
    "default": (()=>__TURBOPACK__default__export__),
    "fromBig": (()=>fromBig),
    "rotlBH": (()=>rotlBH),
    "rotlBL": (()=>rotlBL),
    "rotlSH": (()=>rotlSH),
    "rotlSL": (()=>rotlSL),
    "rotr32H": (()=>rotr32H),
    "rotr32L": (()=>rotr32L),
    "rotrBH": (()=>rotrBH),
    "rotrBL": (()=>rotrBL),
    "rotrSH": (()=>rotrSH),
    "rotrSL": (()=>rotrSL),
    "shrSH": (()=>shrSH),
    "shrSL": (()=>shrSL),
    "split": (()=>split),
    "toBig": (()=>toBig)
});
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for(let i = 0; i < lst.length; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l)=>l;
const rotr32L = (h, _l)=>h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
const __TURBOPACK__default__export__ = u64;
 //# sourceMappingURL=_u64.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/hashes/esm/sha3.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Keccak": (()=>Keccak),
    "keccakP": (()=>keccakP),
    "keccak_224": (()=>keccak_224),
    "keccak_256": (()=>keccak_256),
    "keccak_384": (()=>keccak_384),
    "keccak_512": (()=>keccak_512),
    "sha3_224": (()=>sha3_224),
    "sha3_256": (()=>sha3_256),
    "sha3_384": (()=>sha3_384),
    "sha3_512": (()=>sha3_512),
    "shake128": (()=>shake128),
    "shake256": (()=>shake256)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/_assert.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/_u64.js [app-rsc] (ecmascript)");
;
;
;
// SHA3 (keccak) is based on a new design: basically, the internal state is bigger than output size.
// It's called a sponge function.
// Various per round constants calculations
const [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [
    [],
    [],
    []
];
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
const _7n = /* @__PURE__ */ BigInt(7);
const _256n = /* @__PURE__ */ BigInt(256);
const _0x71n = /* @__PURE__ */ BigInt(0x71);
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["split"])(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotlBH"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotlSH"])(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotlBL"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotlSL"])(h, l, s);
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for(let y = 0; y < 50; y += 10){
            for(let x = 0; x < 10; x++)B[x] = s[y + x];
            for(let x = 0; x < 10; x++)s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
}
class Keccak extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Hash"] {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        // Can be passed from user as dkLen
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"])(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        if (0 >= this.blockLen || this.blockLen >= 200) throw new Error('Sha3 supports only keccak-f1600 function');
        this.state = new Uint8Array(200);
        this.state32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(this.state);
    }
    keccak() {
        keccakP(this.state32, this.rounds);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["exists"])(this);
        const { blockLen, state } = this;
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toBytes"])(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["exists"])(this, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytes"])(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"])(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["output"])(out, this);
        if (this.finished) throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        this.state.fill(0);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
const gen = (suffix, blockLen, outputLen)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new Keccak(blockLen, suffix, outputLen));
const sha3_224 = /* @__PURE__ */ gen(0x06, 144, 224 / 8);
const sha3_256 = /* @__PURE__ */ gen(0x06, 136, 256 / 8);
const sha3_384 = /* @__PURE__ */ gen(0x06, 104, 384 / 8);
const sha3_512 = /* @__PURE__ */ gen(0x06, 72, 512 / 8);
const keccak_224 = /* @__PURE__ */ gen(0x01, 144, 224 / 8);
const keccak_256 = /* @__PURE__ */ gen(0x01, 136, 256 / 8);
const keccak_384 = /* @__PURE__ */ gen(0x01, 104, 384 / 8);
const keccak_512 = /* @__PURE__ */ gen(0x01, 72, 512 / 8);
const genShake = (suffix, blockLen, outputLen)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapXOFConstructorWithOpts"])((opts = {})=>new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
const shake128 = /* @__PURE__ */ genShake(0x1f, 168, 128 / 8);
const shake256 = /* @__PURE__ */ genShake(0x1f, 136, 256 / 8); //# sourceMappingURL=sha3.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/hashes/esm/_sha2.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "SHA2": (()=>SHA2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/_assert.js [app-rsc] (ecmascript)");
;
;
// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
class SHA2 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Hash"] {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createView"])(this.buffer);
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["exists"])(this);
        const { view, buffer, blockLen } = this;
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toBytes"])(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createView"])(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["exists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["output"])(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createView"])(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
} //# sourceMappingURL=_sha2.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/hashes/esm/sha256.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "sha224": (()=>sha224),
    "sha256": (()=>sha256)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_sha2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/_sha2.js [app-rsc] (ecmascript)");
;
;
// SHA2-256 need to try 2^128 hashes to execute birthday attack.
// BTC network is doing 2^67 hashes/sec as per early 2023.
// Choice: a ? b : c
const Chi = (a, b, c)=>a & b ^ ~a & c;
// Majority function, true if any two inpust is true
const Maj = (a, b, c)=>a & b ^ a & c ^ b & c;
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = /* @__PURE__ */ new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const IV = /* @__PURE__ */ new Uint32Array([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_sha2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA2"] {
    constructor(){
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(W15, 7) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(W15, 18) ^ W15 >>> 3;
            const s1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(W2, 17) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(E, 6) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(E, 11) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(E, 25);
            const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(A, 2) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(A, 13) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rotr"])(A, 22);
            const T2 = sigma0 + Maj(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class SHA224 extends SHA256 {
    constructor(){
        super();
        this.A = 0xc1059ed8 | 0;
        this.B = 0x367cd507 | 0;
        this.C = 0x3070dd17 | 0;
        this.D = 0xf70e5939 | 0;
        this.E = 0xffc00b31 | 0;
        this.F = 0x68581511 | 0;
        this.G = 0x64f98fa7 | 0;
        this.H = 0xbefa4fa4 | 0;
        this.outputLen = 28;
    }
}
const sha256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new SHA256());
const sha224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new SHA224()); //# sourceMappingURL=sha256.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/hashes/esm/hmac.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "HMAC": (()=>HMAC),
    "hmac": (()=>hmac)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/_assert.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/utils.js [app-rsc] (ecmascript)");
;
;
class HMAC extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Hash"] {
    constructor(hash, _key){
        super();
        this.finished = false;
        this.destroyed = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hash"])(hash);
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toBytes"])(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function') throw new Error('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36 ^ 0x5c;
        this.oHash.update(pad);
        pad.fill(0);
    }
    update(buf) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["exists"])(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["exists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytes"])(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
const hmac = (hash, key, message)=>new HMAC(hash, key).update(message).digest();
hmac.create = (hash, key)=>new HMAC(hash, key); //# sourceMappingURL=hmac.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/hashes/esm/ripemd160.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "RIPEMD160": (()=>RIPEMD160),
    "ripemd160": (()=>ripemd160)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_sha2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/_sha2.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/utils.js [app-rsc] (ecmascript)");
;
;
// https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
// https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
const Rho = /* @__PURE__ */ new Uint8Array([
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8
]);
const Id = /* @__PURE__ */ Uint8Array.from({
    length: 16
}, (_, i)=>i);
const Pi = /* @__PURE__ */ Id.map((i)=>(9 * i + 5) % 16);
let idxL = [
    Id
];
let idxR = [
    Pi
];
for(let i = 0; i < 4; i++)for (let j of [
    idxL,
    idxR
])j.push(j[i].map((k)=>Rho[k]));
const shifts = /* @__PURE__ */ [
    [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8
    ],
    [
        12,
        13,
        11,
        15,
        6,
        9,
        9,
        7,
        12,
        15,
        11,
        13,
        7,
        8,
        7,
        7
    ],
    [
        13,
        15,
        14,
        11,
        7,
        7,
        6,
        8,
        13,
        14,
        13,
        12,
        5,
        5,
        6,
        9
    ],
    [
        14,
        11,
        12,
        14,
        8,
        6,
        5,
        5,
        15,
        12,
        15,
        14,
        9,
        9,
        8,
        6
    ],
    [
        15,
        12,
        13,
        13,
        9,
        5,
        8,
        6,
        14,
        11,
        12,
        11,
        8,
        6,
        5,
        5
    ]
].map((i)=>new Uint8Array(i));
const shiftsL = /* @__PURE__ */ idxL.map((idx, i)=>idx.map((j)=>shifts[i][j]));
const shiftsR = /* @__PURE__ */ idxR.map((idx, i)=>idx.map((j)=>shifts[i][j]));
const Kl = /* @__PURE__ */ new Uint32Array([
    0x00000000,
    0x5a827999,
    0x6ed9eba1,
    0x8f1bbcdc,
    0xa953fd4e
]);
const Kr = /* @__PURE__ */ new Uint32Array([
    0x50a28be6,
    0x5c4dd124,
    0x6d703ef3,
    0x7a6d76e9,
    0x00000000
]);
// The rotate left (circular left shift) operation for uint32
const rotl = (word, shift)=>word << shift | word >>> 32 - shift;
// It's called f() in spec.
function f(group, x, y, z) {
    if (group === 0) return x ^ y ^ z;
    else if (group === 1) return x & y | ~x & z;
    else if (group === 2) return (x | ~y) ^ z;
    else if (group === 3) return x & z | y & ~z;
    else return x ^ (y | ~z);
}
// Temporary buffer, not used to store anything between runs
const BUF = /* @__PURE__ */ new Uint32Array(16);
class RIPEMD160 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_sha2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SHA2"] {
    constructor(){
        super(64, 20, 8, true);
        this.h0 = 0x67452301 | 0;
        this.h1 = 0xefcdab89 | 0;
        this.h2 = 0x98badcfe | 0;
        this.h3 = 0x10325476 | 0;
        this.h4 = 0xc3d2e1f0 | 0;
    }
    get() {
        const { h0, h1, h2, h3, h4 } = this;
        return [
            h0,
            h1,
            h2,
            h3,
            h4
        ];
    }
    set(h0, h1, h2, h3, h4) {
        this.h0 = h0 | 0;
        this.h1 = h1 | 0;
        this.h2 = h2 | 0;
        this.h3 = h3 | 0;
        this.h4 = h4 | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4)BUF[i] = view.getUint32(offset, true);
        // prettier-ignore
        let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
        // Instead of iterating 0 to 80, we split it into 5 groups
        // And use the groups in constants, functions, etc. Much simpler
        for(let group = 0; group < 5; group++){
            const rGroup = 4 - group;
            const hbl = Kl[group], hbr = Kr[group]; // prettier-ignore
            const rl = idxL[group], rr = idxR[group]; // prettier-ignore
            const sl = shiftsL[group], sr = shiftsR[group]; // prettier-ignore
            for(let i = 0; i < 16; i++){
                const tl = rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el | 0;
                al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
            }
            // 2 loops are 10% faster
            for(let i = 0; i < 16; i++){
                const tr = rotl(ar + f(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er | 0;
                ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr; // prettier-ignore
            }
        }
        // Add the compressed chunk to the current hash value
        this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
    }
    roundClean() {
        BUF.fill(0);
    }
    destroy() {
        this.destroyed = true;
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0);
    }
}
const ripemd160 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new RIPEMD160()); //# sourceMappingURL=ripemd160.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/hashes/esm/pbkdf2.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "pbkdf2": (()=>pbkdf2),
    "pbkdf2Async": (()=>pbkdf2Async)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/_assert.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$hmac$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/hmac.js [app-rsc] (ecmascript)");
;
;
;
// Common prologue and epilogue for sync/async functions
function pbkdf2Init(hash, _password, _salt, _opts) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hash"])(hash);
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkOpts"])({
        dkLen: 32,
        asyncTick: 10
    }, _opts);
    const { c, dkLen, asyncTick } = opts;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"])(c);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"])(dkLen);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"])(asyncTick);
    if (c < 1) throw new Error('PBKDF2: iterations (c) should be >= 1');
    const password = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toBytes"])(_password);
    const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toBytes"])(_salt);
    // DK = PBKDF2(PRF, Password, Salt, c, dkLen);
    const DK = new Uint8Array(dkLen);
    // U1 = PRF(Password, Salt + INT_32_BE(i))
    const PRF = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$hmac$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hmac"].create(hash, password);
    const PRFSalt = PRF._cloneInto().update(salt);
    return {
        c,
        dkLen,
        asyncTick,
        DK,
        PRF,
        PRFSalt
    };
}
function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
    PRF.destroy();
    PRFSalt.destroy();
    if (prfW) prfW.destroy();
    u.fill(0);
    return DK;
}
function pbkdf2(hash, password, salt, opts) {
    const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createView"])(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for(let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen){
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        for(let ui = 1; ui < c; ui++){
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for(let i = 0; i < Ti.length; i++)Ti[i] ^= u[i];
        }
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}
async function pbkdf2Async(hash, password, salt, opts) {
    const { c, dkLen, asyncTick, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createView"])(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for(let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen){
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asyncLoop"])(c - 1, asyncTick, ()=>{
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for(let i = 0; i < Ti.length; i++)Ti[i] ^= u[i];
        });
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
} //# sourceMappingURL=pbkdf2.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/hashes/esm/scrypt.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "scrypt": (()=>scrypt),
    "scryptAsync": (()=>scryptAsync)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/_assert.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$pbkdf2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/pbkdf2.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/sha256.js [app-rsc] (ecmascript)");
;
;
;
;
// RFC 7914 Scrypt KDF
// Left rotate for uint32
const rotl = (a, b)=>a << b | a >>> 32 - b;
// The main Scrypt loop: uses Salsa extensively.
// Six versions of the function were tried, this is the fastest one.
// prettier-ignore
function XorAndSalsa(prev, pi, input, ii, out, oi) {
    // Based on https://cr.yp.to/salsa20.html
    // Xor blocks
    let y00 = prev[pi++] ^ input[ii++], y01 = prev[pi++] ^ input[ii++];
    let y02 = prev[pi++] ^ input[ii++], y03 = prev[pi++] ^ input[ii++];
    let y04 = prev[pi++] ^ input[ii++], y05 = prev[pi++] ^ input[ii++];
    let y06 = prev[pi++] ^ input[ii++], y07 = prev[pi++] ^ input[ii++];
    let y08 = prev[pi++] ^ input[ii++], y09 = prev[pi++] ^ input[ii++];
    let y10 = prev[pi++] ^ input[ii++], y11 = prev[pi++] ^ input[ii++];
    let y12 = prev[pi++] ^ input[ii++], y13 = prev[pi++] ^ input[ii++];
    let y14 = prev[pi++] ^ input[ii++], y15 = prev[pi++] ^ input[ii++];
    // Save state to temporary variables (salsa)
    let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
    // Main loop (salsa)
    for(let i = 0; i < 8; i += 2){
        x04 ^= rotl(x00 + x12 | 0, 7);
        x08 ^= rotl(x04 + x00 | 0, 9);
        x12 ^= rotl(x08 + x04 | 0, 13);
        x00 ^= rotl(x12 + x08 | 0, 18);
        x09 ^= rotl(x05 + x01 | 0, 7);
        x13 ^= rotl(x09 + x05 | 0, 9);
        x01 ^= rotl(x13 + x09 | 0, 13);
        x05 ^= rotl(x01 + x13 | 0, 18);
        x14 ^= rotl(x10 + x06 | 0, 7);
        x02 ^= rotl(x14 + x10 | 0, 9);
        x06 ^= rotl(x02 + x14 | 0, 13);
        x10 ^= rotl(x06 + x02 | 0, 18);
        x03 ^= rotl(x15 + x11 | 0, 7);
        x07 ^= rotl(x03 + x15 | 0, 9);
        x11 ^= rotl(x07 + x03 | 0, 13);
        x15 ^= rotl(x11 + x07 | 0, 18);
        x01 ^= rotl(x00 + x03 | 0, 7);
        x02 ^= rotl(x01 + x00 | 0, 9);
        x03 ^= rotl(x02 + x01 | 0, 13);
        x00 ^= rotl(x03 + x02 | 0, 18);
        x06 ^= rotl(x05 + x04 | 0, 7);
        x07 ^= rotl(x06 + x05 | 0, 9);
        x04 ^= rotl(x07 + x06 | 0, 13);
        x05 ^= rotl(x04 + x07 | 0, 18);
        x11 ^= rotl(x10 + x09 | 0, 7);
        x08 ^= rotl(x11 + x10 | 0, 9);
        x09 ^= rotl(x08 + x11 | 0, 13);
        x10 ^= rotl(x09 + x08 | 0, 18);
        x12 ^= rotl(x15 + x14 | 0, 7);
        x13 ^= rotl(x12 + x15 | 0, 9);
        x14 ^= rotl(x13 + x12 | 0, 13);
        x15 ^= rotl(x14 + x13 | 0, 18);
    }
    // Write output (salsa)
    out[oi++] = y00 + x00 | 0;
    out[oi++] = y01 + x01 | 0;
    out[oi++] = y02 + x02 | 0;
    out[oi++] = y03 + x03 | 0;
    out[oi++] = y04 + x04 | 0;
    out[oi++] = y05 + x05 | 0;
    out[oi++] = y06 + x06 | 0;
    out[oi++] = y07 + x07 | 0;
    out[oi++] = y08 + x08 | 0;
    out[oi++] = y09 + x09 | 0;
    out[oi++] = y10 + x10 | 0;
    out[oi++] = y11 + x11 | 0;
    out[oi++] = y12 + x12 | 0;
    out[oi++] = y13 + x13 | 0;
    out[oi++] = y14 + x14 | 0;
    out[oi++] = y15 + x15 | 0;
}
function BlockMix(input, ii, out, oi, r) {
    // The block B is r 128-byte chunks (which is equivalent of 2r 64-byte chunks)
    let head = oi + 0;
    let tail = oi + 16 * r;
    for(let i = 0; i < 16; i++)out[tail + i] = input[ii + (2 * r - 1) * 16 + i]; // X ← B[2r−1]
    for(let i = 0; i < r; i++, head += 16, ii += 16){
        // We write odd & even Yi at same time. Even: 0bXXXXX0 Odd:  0bXXXXX1
        XorAndSalsa(out, tail, input, ii, out, head); // head[i] = Salsa(blockIn[2*i] ^ tail[i-1])
        if (i > 0) tail += 16; // First iteration overwrites tmp value in tail
        XorAndSalsa(out, head, input, ii += 16, out, tail); // tail[i] = Salsa(blockIn[2*i+1] ^ head[i])
    }
}
// Common prologue and epilogue for sync/async functions
function scryptInit(password, salt, _opts) {
    // Maxmem - 1GB+1KB by default
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkOpts"])({
        dkLen: 32,
        asyncTick: 10,
        maxmem: 1024 ** 3 + 1024
    }, _opts);
    const { N, r, p, dkLen, asyncTick, maxmem, onProgress } = opts;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"])(N);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"])(r);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"])(p);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"])(dkLen);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"])(asyncTick);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"])(maxmem);
    if (onProgress !== undefined && typeof onProgress !== 'function') throw new Error('progressCb should be function');
    const blockSize = 128 * r;
    const blockSize32 = blockSize / 4;
    if (N <= 1 || (N & N - 1) !== 0 || N >= 2 ** (blockSize / 8) || N > 2 ** 32) {
        // NOTE: we limit N to be less than 2**32 because of 32 bit variant of Integrify function
        // There is no JS engines that allows alocate more than 4GB per single Uint8Array for now, but can change in future.
        throw new Error('Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32');
    }
    if (p < 0 || p > (2 ** 32 - 1) * 32 / blockSize) {
        throw new Error('Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)');
    }
    if (dkLen < 0 || dkLen > (2 ** 32 - 1) * 32) {
        throw new Error('Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32');
    }
    const memUsed = blockSize * (N + p);
    if (memUsed > maxmem) {
        throw new Error(`Scrypt: parameters too large, ${memUsed} (128 * r * (N + p)) > ${maxmem} (maxmem)`);
    }
    // [B0...Bp−1] ← PBKDF2HMAC-SHA256(Passphrase, Salt, 1, blockSize*ParallelizationFactor)
    // Since it has only one iteration there is no reason to use async variant
    const B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$pbkdf2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pbkdf2"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sha256"], password, salt, {
        c: 1,
        dkLen: blockSize * p
    });
    const B32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(B);
    // Re-used between parallel iterations. Array(iterations) of B
    const V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(new Uint8Array(blockSize * N));
    const tmp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(new Uint8Array(blockSize));
    let blockMixCb = ()=>{};
    if (onProgress) {
        const totalBlockMix = 2 * N * p;
        // Invoke callback if progress changes from 10.01 to 10.02
        // Allows to draw smooth progress bar on up to 8K screen
        const callbackPer = Math.max(Math.floor(totalBlockMix / 10000), 1);
        let blockMixCnt = 0;
        blockMixCb = ()=>{
            blockMixCnt++;
            if (onProgress && (!(blockMixCnt % callbackPer) || blockMixCnt === totalBlockMix)) onProgress(blockMixCnt / totalBlockMix);
        };
    }
    return {
        N,
        r,
        p,
        dkLen,
        blockSize32,
        V,
        B32,
        B,
        tmp,
        blockMixCb,
        asyncTick
    };
}
function scryptOutput(password, dkLen, B, V, tmp) {
    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$pbkdf2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pbkdf2"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sha256"], password, B, {
        c: 1,
        dkLen
    });
    B.fill(0);
    V.fill(0);
    tmp.fill(0);
    return res;
}
function scrypt(password, salt, opts) {
    const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb } = scryptInit(password, salt, opts);
    for(let pi = 0; pi < p; pi++){
        const Pi = blockSize32 * pi;
        for(let i = 0; i < blockSize32; i++)V[i] = B32[Pi + i]; // V[0] = B[i]
        for(let i = 0, pos = 0; i < N - 1; i++){
            BlockMix(V, pos, V, pos += blockSize32, r); // V[i] = BlockMix(V[i-1]);
            blockMixCb();
        }
        BlockMix(V, (N - 1) * blockSize32, B32, Pi, r); // Process last element
        blockMixCb();
        for(let i = 0; i < N; i++){
            // First u32 of the last 64-byte block (u32 is LE)
            const j = B32[Pi + blockSize32 - 16] % N; // j = Integrify(X) % iterations
            for(let k = 0; k < blockSize32; k++)tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k]; // tmp = B ^ V[j]
            BlockMix(tmp, 0, B32, Pi, r); // B = BlockMix(B ^ V[j])
            blockMixCb();
        }
    }
    return scryptOutput(password, dkLen, B, V, tmp);
}
async function scryptAsync(password, salt, opts) {
    const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick } = scryptInit(password, salt, opts);
    for(let pi = 0; pi < p; pi++){
        const Pi = blockSize32 * pi;
        for(let i = 0; i < blockSize32; i++)V[i] = B32[Pi + i]; // V[0] = B[i]
        let pos = 0;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asyncLoop"])(N - 1, asyncTick, ()=>{
            BlockMix(V, pos, V, pos += blockSize32, r); // V[i] = BlockMix(V[i-1]);
            blockMixCb();
        });
        BlockMix(V, (N - 1) * blockSize32, B32, Pi, r); // Process last element
        blockMixCb();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asyncLoop"])(N, asyncTick, ()=>{
            // First u32 of the last 64-byte block (u32 is LE)
            const j = B32[Pi + blockSize32 - 16] % N; // j = Integrify(X) % iterations
            for(let k = 0; k < blockSize32; k++)tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k]; // tmp = B ^ V[j]
            BlockMix(tmp, 0, B32, Pi, r); // B = BlockMix(B ^ V[j])
            blockMixCb();
        });
    }
    return scryptOutput(password, dkLen, B, V, tmp);
} //# sourceMappingURL=scrypt.js.map
}}),
"[project]/node_modules/ethers/node_modules/@adraffy/ens-normalize/dist/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// created 2023-09-25T01:01:55.148Z
// compressed base64-encoded blob for include-ens data
// source: https://github.com/adraffy/ens-normalize.js/blob/main/src/make.js
// see: https://github.com/adraffy/ens-normalize.js#security
// SHA-256: 0565ed049b9cf1614bb9e11ba7d8ac6a6fb96c893253d890f7e2b2884b9ded32
__turbopack_esm__({
    "ens_beautify": (()=>ens_beautify),
    "ens_emoji": (()=>ens_emoji),
    "ens_normalize": (()=>ens_normalize),
    "ens_normalize_fragment": (()=>ens_normalize_fragment),
    "ens_split": (()=>ens_split),
    "ens_tokenize": (()=>ens_tokenize),
    "is_combining_mark": (()=>is_combining_mark),
    "nfc": (()=>nfc),
    "nfd": (()=>nfd),
    "safe_str_from_cps": (()=>safe_str_from_cps),
    "should_escape": (()=>should_escape)
});
var COMPRESSED$1 = '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';
const FENCED = new Map([
    [
        8217,
        "apostrophe"
    ],
    [
        8260,
        "fraction slash"
    ],
    [
        12539,
        "middle dot"
    ]
]);
const NSM_MAX = 4;
function decode_arithmetic(bytes) {
    let pos = 0;
    function u16() {
        return bytes[pos++] << 8 | bytes[pos++];
    }
    // decode the frequency table
    let symbol_count = u16();
    let total = 1;
    let acc = [
        0,
        1
    ]; // first symbol has frequency 1
    for(let i = 1; i < symbol_count; i++){
        acc.push(total += u16());
    }
    // skip the sized-payload that the last 3 symbols index into
    let skip = u16();
    let pos_payload = pos;
    pos += skip;
    let read_width = 0;
    let read_buffer = 0;
    function read_bit() {
        if (read_width == 0) {
            // this will read beyond end of buffer
            // but (undefined|0) => zero pad
            read_buffer = read_buffer << 8 | bytes[pos++];
            read_width = 8;
        }
        return read_buffer >> --read_width & 1;
    }
    const N = 31;
    const FULL = 2 ** N;
    const HALF = FULL >>> 1;
    const QRTR = HALF >> 1;
    const MASK = FULL - 1;
    // fill register
    let register = 0;
    for(let i = 0; i < N; i++)register = register << 1 | read_bit();
    let symbols = [];
    let low = 0;
    let range = FULL; // treat like a float
    while(true){
        let value = Math.floor(((register - low + 1) * total - 1) / range);
        let start = 0;
        let end = symbol_count;
        while(end - start > 1){
            let mid = start + end >>> 1;
            if (value < acc[mid]) {
                end = mid;
            } else {
                start = mid;
            }
        }
        if (start == 0) break; // first symbol is end mark
        symbols.push(start);
        let a = low + Math.floor(range * acc[start] / total);
        let b = low + Math.floor(range * acc[start + 1] / total) - 1;
        while(((a ^ b) & HALF) == 0){
            register = register << 1 & MASK | read_bit();
            a = a << 1 & MASK;
            b = b << 1 & MASK | 1;
        }
        while(a & ~b & QRTR){
            register = register & HALF | register << 1 & MASK >>> 1 | read_bit();
            a = a << 1 ^ HALF;
            b = (b ^ HALF) << 1 | HALF | 1;
        }
        low = a;
        range = 1 + b - a;
    }
    let offset = symbol_count - 4;
    return symbols.map((x)=>{
        switch(x - offset){
            case 3:
                return offset + 0x10100 + (bytes[pos_payload++] << 16 | bytes[pos_payload++] << 8 | bytes[pos_payload++]);
            case 2:
                return offset + 0x100 + (bytes[pos_payload++] << 8 | bytes[pos_payload++]);
            case 1:
                return offset + bytes[pos_payload++];
            default:
                return x - 1;
        }
    });
}
// returns an iterator which returns the next symbol
function read_payload(v) {
    let pos = 0;
    return ()=>v[pos++];
}
function read_compressed_payload(s) {
    return read_payload(decode_arithmetic(unsafe_atob(s)));
}
// unsafe in the sense:
// expected well-formed Base64 w/o padding 
// 20220922: added for https://github.com/adraffy/ens-normalize.js/issues/4
function unsafe_atob(s) {
    let lookup = [];
    [
        ...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    ].forEach((c, i)=>lookup[c.charCodeAt(0)] = i);
    let n = s.length;
    let ret = new Uint8Array(6 * n >> 3);
    for(let i = 0, pos = 0, width = 0, carry = 0; i < n; i++){
        carry = carry << 6 | lookup[s.charCodeAt(i)];
        width += 6;
        if (width >= 8) {
            ret[pos++] = carry >> (width -= 8);
        }
    }
    return ret;
}
// eg. [0,1,2,3...] => [0,-1,1,-2,...]
function signed(i) {
    return i & 1 ? ~i >> 1 : i >> 1;
}
function read_deltas(n, next) {
    let v = Array(n);
    for(let i = 0, x = 0; i < n; i++)v[i] = x += signed(next());
    return v;
}
// [123][5] => [0 3] [1 1] [0 0]
function read_sorted(next, prev = 0) {
    let ret = [];
    while(true){
        let x = next();
        let n = next();
        if (!n) break;
        prev += x;
        for(let i = 0; i < n; i++){
            ret.push(prev + i);
        }
        prev += n + 1;
    }
    return ret;
}
function read_sorted_arrays(next) {
    return read_array_while(()=>{
        let v = read_sorted(next);
        if (v.length) return v;
    });
}
// returns map of x => ys
function read_mapped(next) {
    let ret = [];
    while(true){
        let w = next();
        if (w == 0) break;
        ret.push(read_linear_table(w, next));
    }
    while(true){
        let w = next() - 1;
        if (w < 0) break;
        ret.push(read_replacement_table(w, next));
    }
    return ret.flat();
}
// read until next is falsy
// return array of read values
function read_array_while(next) {
    let v = [];
    while(true){
        let x = next(v.length);
        if (!x) break;
        v.push(x);
    }
    return v;
}
// read w columns of length n
// return as n rows of length w
function read_transposed(n, w, next) {
    let m = Array(n).fill().map(()=>[]);
    for(let i = 0; i < w; i++){
        read_deltas(n, next).forEach((x, j)=>m[j].push(x));
    }
    return m;
}
// returns [[x, ys], [x+dx, ys+dy], [x+2*dx, ys+2*dy], ...]
// where dx/dy = steps, n = run size, w = length of y
function read_linear_table(w, next) {
    let dx = 1 + next();
    let dy = next();
    let vN = read_array_while(next);
    let m = read_transposed(vN.length, 1 + w, next);
    return m.flatMap((v, i)=>{
        let [x, ...ys] = v;
        return Array(vN[i]).fill().map((_, j)=>{
            let j_dy = j * dy;
            return [
                x + j * dx,
                ys.map((y)=>y + j_dy)
            ];
        });
    });
}
// return [[x, ys...], ...]
// where w = length of y
function read_replacement_table(w, next) {
    let n = 1 + next();
    let m = read_transposed(n, 1 + w, next);
    return m.map((v)=>[
            v[0],
            v.slice(1)
        ]);
}
function read_trie(next) {
    let ret = [];
    let sorted = read_sorted(next);
    expand(decode([]), []);
    return ret; // not sorted
    "TURBOPACK unreachable";
    function decode(Q) {
        let S = next(); // state: valid, save, check
        let B = read_array_while(()=>{
            let cps = read_sorted(next).map((i)=>sorted[i]);
            if (cps.length) return decode(cps);
        });
        return {
            S,
            B,
            Q
        };
    }
    function expand({ S, B }, cps, saved) {
        if (S & 4 && saved === cps[cps.length - 1]) return;
        if (S & 2) saved = cps[cps.length - 1];
        if (S & 1) ret.push(cps);
        for (let br of B){
            for (let cp of br.Q){
                expand(br, [
                    ...cps,
                    cp
                ], saved);
            }
        }
    }
}
function hex_cp(cp) {
    return cp.toString(16).toUpperCase().padStart(2, '0');
}
function quote_cp(cp) {
    return `{${hex_cp(cp)}}`; // raffy convention: like "\u{X}" w/o the "\u"
}
/*
export function explode_cp(s) {
	return [...s].map(c => c.codePointAt(0));
}
*/ function explode_cp(s) {
    let cps = [];
    for(let pos = 0, len = s.length; pos < len;){
        let cp = s.codePointAt(pos);
        pos += cp < 0x10000 ? 1 : 2;
        cps.push(cp);
    }
    return cps;
}
function str_from_cps(cps) {
    const chunk = 4096;
    let len = cps.length;
    if (len < chunk) return String.fromCodePoint(...cps);
    let buf = [];
    for(let i = 0; i < len;){
        buf.push(String.fromCodePoint(...cps.slice(i, i += chunk)));
    }
    return buf.join('');
}
function compare_arrays(a, b) {
    let n = a.length;
    let c = n - b.length;
    for(let i = 0; c == 0 && i < n; i++)c = a[i] - b[i];
    return c;
}
// created 2023-09-25T01:01:55.148Z
// compressed base64-encoded blob for include-nf data
// source: https://github.com/adraffy/ens-normalize.js/blob/main/src/make.js
// see: https://github.com/adraffy/ens-normalize.js#security
// SHA-256: a974b6f8541fc29d919bc85118af0a44015851fab5343f8679cb31be2bdb209e
var COMPRESSED = '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';
// https://unicode.org/reports/tr15/
// for reference implementation
// see: /derive/nf.js
// algorithmic hangul
// https://www.unicode.org/versions/Unicode15.0.0/ch03.pdf (page 144)
const S0 = 0xAC00;
const L0 = 0x1100;
const V0 = 0x1161;
const T0 = 0x11A7;
const L_COUNT = 19;
const V_COUNT = 21;
const T_COUNT = 28;
const N_COUNT = V_COUNT * T_COUNT;
const S_COUNT = L_COUNT * N_COUNT;
const S1 = S0 + S_COUNT;
const L1 = L0 + L_COUNT;
const V1 = V0 + V_COUNT;
const T1 = T0 + T_COUNT;
function unpack_cc(packed) {
    return packed >> 24 & 0xFF;
}
function unpack_cp(packed) {
    return packed & 0xFFFFFF;
}
let SHIFTED_RANK, EXCLUSIONS, DECOMP, RECOMP;
function init$1() {
    //console.time('nf');
    let r = read_compressed_payload(COMPRESSED);
    SHIFTED_RANK = new Map(read_sorted_arrays(r).flatMap((v, i)=>v.map((x)=>[
                x,
                i + 1 << 24
            ]))); // pre-shifted
    EXCLUSIONS = new Set(read_sorted(r));
    DECOMP = new Map();
    RECOMP = new Map();
    for (let [cp, cps] of read_mapped(r)){
        if (!EXCLUSIONS.has(cp) && cps.length == 2) {
            let [a, b] = cps;
            let bucket = RECOMP.get(a);
            if (!bucket) {
                bucket = new Map();
                RECOMP.set(a, bucket);
            }
            bucket.set(b, cp);
        }
        DECOMP.set(cp, cps.reverse()); // stored reversed
    }
//console.timeEnd('nf');
// 20230905: 11ms
}
function is_hangul(cp) {
    return cp >= S0 && cp < S1;
}
function compose_pair(a, b) {
    if (a >= L0 && a < L1 && b >= V0 && b < V1) {
        return S0 + (a - L0) * N_COUNT + (b - V0) * T_COUNT;
    } else if (is_hangul(a) && b > T0 && b < T1 && (a - S0) % T_COUNT == 0) {
        return a + (b - T0);
    } else {
        let recomp = RECOMP.get(a);
        if (recomp) {
            recomp = recomp.get(b);
            if (recomp) {
                return recomp;
            }
        }
        return -1;
    }
}
function decomposed(cps) {
    if (!SHIFTED_RANK) init$1();
    let ret = [];
    let buf = [];
    let check_order = false;
    function add(cp) {
        let cc = SHIFTED_RANK.get(cp);
        if (cc) {
            check_order = true;
            cp |= cc;
        }
        ret.push(cp);
    }
    for (let cp of cps){
        while(true){
            if (cp < 0x80) {
                ret.push(cp);
            } else if (is_hangul(cp)) {
                let s_index = cp - S0;
                let l_index = s_index / N_COUNT | 0;
                let v_index = s_index % N_COUNT / T_COUNT | 0;
                let t_index = s_index % T_COUNT;
                add(L0 + l_index);
                add(V0 + v_index);
                if (t_index > 0) add(T0 + t_index);
            } else {
                let mapped = DECOMP.get(cp);
                if (mapped) {
                    buf.push(...mapped);
                } else {
                    add(cp);
                }
            }
            if (!buf.length) break;
            cp = buf.pop();
        }
    }
    if (check_order && ret.length > 1) {
        let prev_cc = unpack_cc(ret[0]);
        for(let i = 1; i < ret.length; i++){
            let cc = unpack_cc(ret[i]);
            if (cc == 0 || prev_cc <= cc) {
                prev_cc = cc;
                continue;
            }
            let j = i - 1;
            while(true){
                let tmp = ret[j + 1];
                ret[j + 1] = ret[j];
                ret[j] = tmp;
                if (!j) break;
                prev_cc = unpack_cc(ret[--j]);
                if (prev_cc <= cc) break;
            }
            prev_cc = unpack_cc(ret[i]);
        }
    }
    return ret;
}
function composed_from_decomposed(v) {
    let ret = [];
    let stack = [];
    let prev_cp = -1;
    let prev_cc = 0;
    for (let packed of v){
        let cc = unpack_cc(packed);
        let cp = unpack_cp(packed);
        if (prev_cp == -1) {
            if (cc == 0) {
                prev_cp = cp;
            } else {
                ret.push(cp);
            }
        } else if (prev_cc > 0 && prev_cc >= cc) {
            if (cc == 0) {
                ret.push(prev_cp, ...stack);
                stack.length = 0;
                prev_cp = cp;
            } else {
                stack.push(cp);
            }
            prev_cc = cc;
        } else {
            let composed = compose_pair(prev_cp, cp);
            if (composed >= 0) {
                prev_cp = composed;
            } else if (prev_cc == 0 && cc == 0) {
                ret.push(prev_cp);
                prev_cp = cp;
            } else {
                stack.push(cp);
                prev_cc = cc;
            }
        }
    }
    if (prev_cp >= 0) {
        ret.push(prev_cp, ...stack);
    }
    return ret;
}
// note: cps can be iterable
function nfd(cps) {
    return decomposed(cps).map(unpack_cp);
}
function nfc(cps) {
    return composed_from_decomposed(decomposed(cps));
}
const HYPHEN = 0x2D;
const STOP = 0x2E;
const STOP_CH = '.';
const FE0F = 0xFE0F;
const UNIQUE_PH = 1;
// 20230913: replace [...v] with Array_from(v) to avoid large spreads
const Array_from = (x)=>Array.from(x); // Array.from.bind(Array);
function group_has_cp(g, cp) {
    // 20230913: keep primary and secondary distinct instead of creating valid union
    return g.P.has(cp) || g.Q.has(cp);
}
class Emoji extends Array {
    get is_emoji() {
        return true;
    }
}
let MAPPED, IGNORED, CM, NSM, ESCAPE, NFC_CHECK, GROUPS, WHOLE_VALID, WHOLE_MAP, VALID, EMOJI_LIST, EMOJI_ROOT;
function init() {
    if (MAPPED) return;
    let r = read_compressed_payload(COMPRESSED$1);
    const read_sorted_array = ()=>read_sorted(r);
    const read_sorted_set = ()=>new Set(read_sorted_array());
    const set_add_many = (set, v)=>v.forEach((x)=>set.add(x));
    MAPPED = new Map(read_mapped(r));
    IGNORED = read_sorted_set(); // ignored characters are not valid, so just read raw codepoints
    /*
	// direct include from payload is smaller than the decompression code
	const FENCED = new Map(read_array_while(() => {
		let cp = r();
		if (cp) return [cp, read_str(r())];
	}));
	*/ // 20230217: we still need all CM for proper error formatting
    // but norm only needs NSM subset that are potentially-valid
    CM = read_sorted_array();
    NSM = new Set(read_sorted_array().map((i)=>CM[i]));
    CM = new Set(CM);
    ESCAPE = read_sorted_set(); // characters that should not be printed
    NFC_CHECK = read_sorted_set(); // only needed to illustrate ens_tokenize() transformations
    let chunks = read_sorted_arrays(r);
    let unrestricted = r();
    //const read_chunked = () => new Set(read_sorted_array().flatMap(i => chunks[i]).concat(read_sorted_array()));
    const read_chunked = ()=>{
        // 20230921: build set in parts, 2x faster
        let set = new Set();
        read_sorted_array().forEach((i)=>set_add_many(set, chunks[i]));
        set_add_many(set, read_sorted_array());
        return set;
    };
    GROUPS = read_array_while((i)=>{
        // minifier property mangling seems unsafe
        // so these are manually renamed to single chars
        let N = read_array_while(r).map((x)=>x + 0x60);
        if (N.length) {
            let R = i >= unrestricted; // unrestricted then restricted
            N[0] -= 32; // capitalize
            N = str_from_cps(N);
            if (R) N = `Restricted[${N}]`;
            let P = read_chunked(); // primary
            let Q = read_chunked(); // secondary
            let M = !r(); // not-whitelisted, check for NSM
            // *** this code currently isn't needed ***
            /*
			let V = [...P, ...Q].sort((a, b) => a-b); // derive: sorted valid
			let M = r()-1; // number of combining mark
			if (M < 0) { // whitelisted
				M = new Map(read_array_while(() => {
					let i = r();
					if (i) return [V[i-1], read_array_while(() => {
						let v = read_array_while(r);
						if (v.length) return v.map(x => x-1);
					})];
				}));
			}*/ return {
                N,
                P,
                Q,
                M,
                R
            };
        }
    });
    // decode compressed wholes
    WHOLE_VALID = read_sorted_set();
    WHOLE_MAP = new Map();
    let wholes = read_sorted_array().concat(Array_from(WHOLE_VALID)).sort((a, b)=>a - b); // must be sorted
    wholes.forEach((cp, i)=>{
        let d = r();
        let w = wholes[i] = d ? wholes[i - d] : {
            V: [],
            M: new Map()
        };
        w.V.push(cp); // add to member set
        if (!WHOLE_VALID.has(cp)) {
            WHOLE_MAP.set(cp, w); // register with whole map
        }
    });
    // compute confusable-extent complements
    // usage: WHOLE_MAP.get(cp).M.get(cp) = complement set
    for (let { V, M } of new Set(WHOLE_MAP.values())){
        // connect all groups that have each whole character
        let recs = [];
        for (let cp of V){
            let gs = GROUPS.filter((g)=>group_has_cp(g, cp));
            let rec = recs.find(({ G })=>gs.some((g)=>G.has(g)));
            if (!rec) {
                rec = {
                    G: new Set(),
                    V: []
                };
                recs.push(rec);
            }
            rec.V.push(cp);
            set_add_many(rec.G, gs);
        }
        // per character cache groups which are not a member of the extent
        let union = recs.flatMap((x)=>Array_from(x.G)); // all of the groups used by this whole
        for (let { G, V } of recs){
            let complement = new Set(union.filter((g)=>!G.has(g))); // groups not covered by the extent
            for (let cp of V){
                M.set(cp, complement); // this is the same reference
            }
        }
    }
    // compute valid set
    // 20230924: VALID was union but can be re-used
    VALID = new Set(); // exists in 1+ groups
    let multi = new Set(); // exists in 2+ groups
    const add_to_union = (cp)=>VALID.has(cp) ? multi.add(cp) : VALID.add(cp);
    for (let g of GROUPS){
        for (let cp of g.P)add_to_union(cp);
        for (let cp of g.Q)add_to_union(cp);
    }
    // dual purpose WHOLE_MAP: return placeholder if unique non-confusable
    for (let cp of VALID){
        if (!WHOLE_MAP.has(cp) && !multi.has(cp)) {
            WHOLE_MAP.set(cp, UNIQUE_PH);
        }
    }
    // add all decomposed parts
    // see derive: "Valid is Closed (via Brute-force)"
    set_add_many(VALID, nfd(VALID));
    // decode emoji
    // 20230719: emoji are now fully-expanded to avoid quirk logic 
    EMOJI_LIST = read_trie(r).map((v)=>Emoji.from(v)).sort(compare_arrays);
    EMOJI_ROOT = new Map(); // this has approx 7K nodes (2+ per emoji)
    for (let cps of EMOJI_LIST){
        // 20230719: change to *slightly* stricter algorithm which disallows 
        // insertion of misplaced FE0F in emoji sequences (matching ENSIP-15)
        // example: beautified [A B] (eg. flag emoji) 
        //  before: allow: [A FE0F B], error: [A FE0F FE0F B] 
        //   after: error: both
        // note: this code now matches ENSNormalize.{cs,java} logic
        let prev = [
            EMOJI_ROOT
        ];
        for (let cp of cps){
            let next = prev.map((node)=>{
                let child = node.get(cp);
                if (!child) {
                    // should this be object? 
                    // (most have 1-2 items, few have many)
                    // 20230719: no, v8 default map is 4?
                    child = new Map();
                    node.set(cp, child);
                }
                return child;
            });
            if (cp === FE0F) {
                prev.push(...next); // less than 20 elements
            } else {
                prev = next;
            }
        }
        for (let x of prev){
            x.V = cps;
        }
    }
}
// if escaped: {HEX}
//       else: "x" {HEX}
function quoted_cp(cp) {
    return (should_escape(cp) ? '' : `${bidi_qq(safe_str_from_cps([
        cp
    ]))} `) + quote_cp(cp);
}
// 20230211: some messages can be mixed-directional and result in spillover
// use 200E after a quoted string to force the remainder of a string from 
// acquring the direction of the quote
// https://www.w3.org/International/questions/qa-bidi-unicode-controls#exceptions
function bidi_qq(s) {
    return `"${s}"\u200E`; // strong LTR
}
function check_label_extension(cps) {
    if (cps.length >= 4 && cps[2] == HYPHEN && cps[3] == HYPHEN) {
        throw new Error(`invalid label extension: "${str_from_cps(cps.slice(0, 4))}"`); // this can only be ascii so cant be bidi
    }
}
function check_leading_underscore(cps) {
    const UNDERSCORE = 0x5F;
    for(let i = cps.lastIndexOf(UNDERSCORE); i > 0;){
        if (cps[--i] !== UNDERSCORE) {
            throw new Error('underscore allowed only at start');
        }
    }
}
// check that a fenced cp is not leading, trailing, or touching another fenced cp
function check_fenced(cps) {
    let cp = cps[0];
    let prev = FENCED.get(cp);
    if (prev) throw error_placement(`leading ${prev}`);
    let n = cps.length;
    let last = -1; // prevents trailing from throwing
    for(let i = 1; i < n; i++){
        cp = cps[i];
        let match = FENCED.get(cp);
        if (match) {
            // since cps[0] isn't fenced, cps[1] cannot throw
            if (last == i) throw error_placement(`${prev} + ${match}`);
            last = i + 1;
            prev = match;
        }
    }
    if (last == n) throw error_placement(`trailing ${prev}`);
}
// create a safe to print string 
// invisibles are escaped
// leading cm uses placeholder
// if cps exceed max, middle truncate with ellipsis
// quoter(cp) => string, eg. 3000 => "{3000}"
// note: in html, you'd call this function then replace [<>&] with entities
function safe_str_from_cps(cps, max = Infinity, quoter = quote_cp) {
    //if (Number.isInteger(cps)) cps = [cps];
    //if (!Array.isArray(cps)) throw new TypeError(`expected codepoints`);
    let buf = [];
    if (is_combining_mark(cps[0])) buf.push('◌');
    if (cps.length > max) {
        max >>= 1;
        cps = [
            ...cps.slice(0, max),
            0x2026,
            ...cps.slice(-max)
        ];
    }
    let prev = 0;
    let n = cps.length;
    for(let i = 0; i < n; i++){
        let cp = cps[i];
        if (should_escape(cp)) {
            buf.push(str_from_cps(cps.slice(prev, i)));
            buf.push(quoter(cp));
            prev = i + 1;
        }
    }
    buf.push(str_from_cps(cps.slice(prev, n)));
    return buf.join('');
}
// note: set(s) cannot be exposed because they can be modified
// note: Object.freeze() doesn't work
function is_combining_mark(cp) {
    init();
    return CM.has(cp);
}
function should_escape(cp) {
    init();
    return ESCAPE.has(cp);
}
// return all supported emoji as fully-qualified emoji 
// ordered by length then lexicographic 
function ens_emoji() {
    init();
    return EMOJI_LIST.map((x)=>x.slice()); // emoji are exposed so copy
}
function ens_normalize_fragment(frag, decompose) {
    init();
    let nf = decompose ? nfd : nfc;
    return frag.split(STOP_CH).map((label)=>str_from_cps(tokens_from_str(explode_cp(label), nf, filter_fe0f).flat())).join(STOP_CH);
}
function ens_normalize(name) {
    return flatten(split(name, nfc, filter_fe0f));
}
function ens_beautify(name) {
    let labels = split(name, nfc, (x)=>x); // emoji not exposed
    for (let { type, output, error } of labels){
        if (error) break; // flatten will throw
        // replace leading/trailing hyphen
        // 20230121: consider beautifing all or leading/trailing hyphen to unicode variant
        // not exactly the same in every font, but very similar: "-" vs "‐"
        /*
		const UNICODE_HYPHEN = 0x2010;
		// maybe this should replace all for visual consistancy?
		// `node tools/reg-count.js regex ^-\{2,\}` => 592
		//for (let i = 0; i < output.length; i++) if (output[i] == 0x2D) output[i] = 0x2010;
		if (output[0] == HYPHEN) output[0] = UNICODE_HYPHEN;
		let end = output.length-1;
		if (output[end] == HYPHEN) output[end] = UNICODE_HYPHEN;
		*/ // 20230123: WHATWG URL uses "CheckHyphens" false
        // https://url.spec.whatwg.org/#idna
        // update ethereum symbol
        // ξ => Ξ if not greek
        if (type !== 'Greek') array_replace(output, 0x3BE, 0x39E);
    // 20221213: fixes bidi subdomain issue, but breaks invariant (200E is disallowed)
    // could be fixed with special case for: 2D (.) + 200E (LTR)
    // https://discuss.ens.domains/t/bidi-label-ordering-spoof/15824
    //output.splice(0, 0, 0x200E);
    }
    return flatten(labels);
}
function array_replace(v, a, b) {
    let prev = 0;
    while(true){
        let next = v.indexOf(a, prev);
        if (next < 0) break;
        v[next] = b;
        prev = next + 1;
    }
}
function ens_split(name, preserve_emoji) {
    return split(name, nfc, preserve_emoji ? (x)=>x.slice() : filter_fe0f); // emoji are exposed so copy
}
function split(name, nf, ef) {
    if (!name) return []; // 20230719: empty name allowance
    init();
    let offset = 0;
    // https://unicode.org/reports/tr46/#Validity_Criteria
    // 4.) "The label must not contain a U+002E ( . ) FULL STOP."
    return name.split(STOP_CH).map((label)=>{
        let input = explode_cp(label);
        let info = {
            input,
            offset
        };
        offset += input.length + 1; // + stop
        try {
            // 1.) "The label must be in Unicode Normalization Form NFC"
            let tokens = info.tokens = tokens_from_str(input, nf, ef);
            let token_count = tokens.length;
            let type;
            if (!token_count) {
                //norm = [];
                //type = 'None'; // use this instead of next match, "ASCII"
                // 20230120: change to strict
                // https://discuss.ens.domains/t/ens-name-normalization-2nd/14564/59
                throw new Error(`empty label`);
            }
            let norm = info.output = tokens.flat();
            check_leading_underscore(norm);
            let emoji = info.emoji = token_count > 1 || tokens[0].is_emoji; // same as: tokens.some(x => x.is_emoji);
            if (!emoji && norm.every((cp)=>cp < 0x80)) {
                // 20230123: matches matches WHATWG, see note 3.3
                check_label_extension(norm); // only needed for ascii
                // cant have fenced
                // cant have cm
                // cant have wholes
                // see derive: "Fastpath ASCII"
                type = 'ASCII';
            } else {
                let chars = tokens.flatMap((x)=>x.is_emoji ? [] : x); // all of the nfc tokens concat together
                if (!chars.length) {
                    type = 'Emoji';
                } else {
                    // 5.) "The label must not begin with a combining mark, that is: General_Category=Mark."
                    if (CM.has(norm[0])) throw error_placement('leading combining mark');
                    for(let i = 1; i < token_count; i++){
                        let cps = tokens[i];
                        if (!cps.is_emoji && CM.has(cps[0])) {
                            // bidi_qq() not needed since emoji is LTR and cps is a CM
                            throw error_placement(`emoji + combining mark: "${str_from_cps(tokens[i - 1])} + ${safe_str_from_cps([
                                cps[0]
                            ])}"`);
                        }
                    }
                    check_fenced(norm);
                    let unique = Array_from(new Set(chars));
                    let [g] = determine_group(unique); // take the first match
                    // see derive: "Matching Groups have Same CM Style"
                    // alternative: could form a hybrid type: Latin/Japanese/...	
                    check_group(g, chars); // need text in order
                    check_whole(g, unique); // only need unique text (order would be required for multiple-char confusables)
                    type = g.N;
                // 20230121: consider exposing restricted flag
                // it's simpler to just check for 'Restricted'
                // or even better: type.endsWith(']')
                //if (g.R) info.restricted = true;
                }
            }
            info.type = type;
        } catch (err) {
            info.error = err; // use full error object
        }
        return info;
    });
}
function check_whole(group, unique) {
    let maker;
    let shared = [];
    for (let cp of unique){
        let whole = WHOLE_MAP.get(cp);
        if (whole === UNIQUE_PH) return; // unique, non-confusable
        if (whole) {
            let set = whole.M.get(cp); // groups which have a character that look-like this character
            maker = maker ? maker.filter((g)=>set.has(g)) : Array_from(set);
            if (!maker.length) return; // confusable intersection is empty
        } else {
            shared.push(cp);
        }
    }
    if (maker) {
        // we have 1+ confusable
        // check if any of the remaining groups
        // contain the shared characters too
        for (let g of maker){
            if (shared.every((cp)=>group_has_cp(g, cp))) {
                throw new Error(`whole-script confusable: ${group.N}/${g.N}`);
            }
        }
    }
}
// assumption: unique.size > 0
// returns list of matching groups
function determine_group(unique) {
    let groups = GROUPS;
    for (let cp of unique){
        // note: we need to dodge CM that are whitelisted
        // but that code isn't currently necessary
        let gs = groups.filter((g)=>group_has_cp(g, cp));
        if (!gs.length) {
            if (!GROUPS.some((g)=>group_has_cp(g, cp))) {
                // the character was composed of valid parts
                // but it's NFC form is invalid
                // 20230716: change to more exact statement, see: ENSNormalize.{cs,java}
                // note: this doesn't have to be a composition
                // 20230720: change to full check
                throw error_disallowed(cp); // this should be rare
            } else {
                // there is no group that contains all these characters
                // throw using the highest priority group that matched
                // https://www.unicode.org/reports/tr39/#mixed_script_confusables
                throw error_group_member(groups[0], cp);
            }
        }
        groups = gs;
        if (gs.length == 1) break; // there is only one group left
    }
    // there are at least 1 group(s) with all of these characters
    return groups;
}
// throw on first error
function flatten(split) {
    return split.map(({ input, error, output })=>{
        if (error) {
            // don't print label again if just a single label
            let msg = error.message;
            // bidi_qq() only necessary if msg is digits
            throw new Error(split.length == 1 ? msg : `Invalid label ${bidi_qq(safe_str_from_cps(input, 63))}: ${msg}`);
        }
        return str_from_cps(output);
    }).join(STOP_CH);
}
function error_disallowed(cp) {
    // TODO: add cp to error?
    return new Error(`disallowed character: ${quoted_cp(cp)}`);
}
function error_group_member(g, cp) {
    let quoted = quoted_cp(cp);
    let gg = GROUPS.find((g)=>g.P.has(cp)); // only check primary
    if (gg) {
        quoted = `${gg.N} ${quoted}`;
    }
    return new Error(`illegal mixture: ${g.N} + ${quoted}`);
}
function error_placement(where) {
    return new Error(`illegal placement: ${where}`);
}
// assumption: cps.length > 0
// assumption: cps[0] isn't a CM
// assumption: the previous character isn't an emoji
function check_group(g, cps) {
    for (let cp of cps){
        if (!group_has_cp(g, cp)) {
            // for whitelisted scripts, this will throw illegal mixture on invalid cm, eg. "e{300}{300}"
            // at the moment, it's unnecessary to introduce an extra error type
            // until there exists a whitelisted multi-character
            //   eg. if (M < 0 && is_combining_mark(cp)) { ... }
            // there are 3 cases:
            //   1. illegal cm for wrong group => mixture error
            //   2. illegal cm for same group => cm error
            //       requires set of whitelist cm per group: 
            //        eg. new Set([...g.P, ...g.Q].flatMap(nfc).filter(cp => CM.has(cp)))
            //   3. wrong group => mixture error
            throw error_group_member(g, cp);
        }
    }
    //if (M >= 0) { // we have a known fixed cm count
    if (g.M) {
        let decomposed = nfd(cps);
        for(let i = 1, e = decomposed.length; i < e; i++){
            // 20230210: bugfix: using cps instead of decomposed h/t Carbon225
            /*
			if (CM.has(decomposed[i])) {
				let j = i + 1;
				while (j < e && CM.has(decomposed[j])) j++;
				if (j - i > M) {
					throw new Error(`too many combining marks: ${g.N} ${bidi_qq(str_from_cps(decomposed.slice(i-1, j)))} (${j-i}/${M})`);
				}
				i = j;
			}
			*/ // 20230217: switch to NSM counting
            // https://www.unicode.org/reports/tr39/#Optional_Detection
            if (NSM.has(decomposed[i])) {
                let j = i + 1;
                for(let cp; j < e && NSM.has(cp = decomposed[j]); j++){
                    // a. Forbid sequences of the same nonspacing mark.
                    for(let k = i; k < j; k++){
                        if (decomposed[k] == cp) {
                            throw new Error(`duplicate non-spacing marks: ${quoted_cp(cp)}`);
                        }
                    }
                }
                // parse to end so we have full nsm count
                // b. Forbid sequences of more than 4 nonspacing marks (gc=Mn or gc=Me).
                if (j - i > NSM_MAX) {
                    // note: this slice starts with a base char or spacing-mark cm
                    throw new Error(`excessive non-spacing marks: ${bidi_qq(safe_str_from_cps(decomposed.slice(i - 1, j)))} (${j - i}/${NSM_MAX})`);
                }
                i = j;
            }
        }
    }
// *** this code currently isn't needed ***
/*
	let cm_whitelist = M instanceof Map;
	for (let i = 0, e = cps.length; i < e; ) {
		let cp = cps[i++];
		let seqs = cm_whitelist && M.get(cp);
		if (seqs) { 
			// list of codepoints that can follow
			// if this exists, this will always be 1+
			let j = i;
			while (j < e && CM.has(cps[j])) j++;
			let cms = cps.slice(i, j);
			let match = seqs.find(seq => !compare_arrays(seq, cms));
			if (!match) throw new Error(`disallowed combining mark sequence: "${safe_str_from_cps([cp, ...cms])}"`);
			i = j;
		} else if (!V.has(cp)) {
			// https://www.unicode.org/reports/tr39/#mixed_script_confusables
			let quoted = quoted_cp(cp);
			for (let cp of cps) {
				let u = UNIQUE.get(cp);
				if (u && u !== g) {
					// if both scripts are restricted this error is confusing
					// because we don't differentiate RestrictedA from RestrictedB 
					if (!u.R) quoted = `${quoted} is ${u.N}`;
					break;
				}
			}
			throw new Error(`disallowed ${g.N} character: ${quoted}`);
			//throw new Error(`disallowed character: ${quoted} (expected ${g.N})`);
			//throw new Error(`${g.N} does not allow: ${quoted}`);
		}
	}
	if (!cm_whitelist) {
		let decomposed = nfd(cps);
		for (let i = 1, e = decomposed.length; i < e; i++) { // we know it can't be cm leading
			if (CM.has(decomposed[i])) {
				let j = i + 1;
				while (j < e && CM.has(decomposed[j])) j++;
				if (j - i > M) {
					throw new Error(`too many combining marks: "${str_from_cps(decomposed.slice(i-1, j))}" (${j-i}/${M})`);
				}
				i = j;
			}
		}
	}
	*/ }
// given a list of codepoints
// returns a list of lists, where emoji are a fully-qualified (as Array subclass)
// eg. explode_cp("abc💩d") => [[61, 62, 63], Emoji[1F4A9, FE0F], [64]]
// 20230818: rename for 'process' name collision h/t Javarome
// https://github.com/adraffy/ens-normalize.js/issues/23
function tokens_from_str(input, nf, ef) {
    let ret = [];
    let chars = [];
    input = input.slice().reverse(); // flip so we can pop
    while(input.length){
        let emoji = consume_emoji_reversed(input);
        if (emoji) {
            if (chars.length) {
                ret.push(nf(chars));
                chars = [];
            }
            ret.push(ef(emoji));
        } else {
            let cp = input.pop();
            if (VALID.has(cp)) {
                chars.push(cp);
            } else {
                let cps = MAPPED.get(cp);
                if (cps) {
                    chars.push(...cps); // less than 10 elements
                } else if (!IGNORED.has(cp)) {
                    // 20230912: unicode 15.1 changed the order of processing such that
                    // disallowed parts are only rejected after NFC
                    // https://unicode.org/reports/tr46/#Validity_Criteria
                    // this doesn't impact normalization as of today
                    // technically, this error can be removed as the group logic will apply similar logic
                    // however the error type might be less clear
                    throw error_disallowed(cp);
                }
            }
        }
    }
    if (chars.length) {
        ret.push(nf(chars));
    }
    return ret;
}
function filter_fe0f(cps) {
    return cps.filter((cp)=>cp != FE0F);
}
// given array of codepoints
// returns the longest valid emoji sequence (or undefined if no match)
// *MUTATES* the supplied array
// disallows interleaved ignored characters
// fills (optional) eaten array with matched codepoints
function consume_emoji_reversed(cps, eaten) {
    let node = EMOJI_ROOT;
    let emoji;
    let pos = cps.length;
    while(pos){
        node = node.get(cps[--pos]);
        if (!node) break;
        let { V } = node;
        if (V) {
            emoji = V;
            if (eaten) eaten.push(...cps.slice(pos).reverse()); // (optional) copy input, used for ens_tokenize()
            cps.length = pos; // truncate
        }
    }
    return emoji;
}
// ************************************************************
// tokenizer 
const TY_VALID = 'valid';
const TY_MAPPED = 'mapped';
const TY_IGNORED = 'ignored';
const TY_DISALLOWED = 'disallowed';
const TY_EMOJI = 'emoji';
const TY_NFC = 'nfc';
const TY_STOP = 'stop';
function ens_tokenize(name, { nf = true } = {}) {
    init();
    let input = explode_cp(name).reverse();
    let eaten = [];
    let tokens = [];
    while(input.length){
        let emoji = consume_emoji_reversed(input, eaten);
        if (emoji) {
            tokens.push({
                type: TY_EMOJI,
                emoji: emoji.slice(),
                input: eaten,
                cps: filter_fe0f(emoji)
            });
            eaten = []; // reset buffer
        } else {
            let cp = input.pop();
            if (cp == STOP) {
                tokens.push({
                    type: TY_STOP,
                    cp
                });
            } else if (VALID.has(cp)) {
                tokens.push({
                    type: TY_VALID,
                    cps: [
                        cp
                    ]
                });
            } else if (IGNORED.has(cp)) {
                tokens.push({
                    type: TY_IGNORED,
                    cp
                });
            } else {
                let cps = MAPPED.get(cp);
                if (cps) {
                    tokens.push({
                        type: TY_MAPPED,
                        cp,
                        cps: cps.slice()
                    });
                } else {
                    tokens.push({
                        type: TY_DISALLOWED,
                        cp
                    });
                }
            }
        }
    }
    if (nf) {
        for(let i = 0, start = -1; i < tokens.length; i++){
            let token = tokens[i];
            if (is_valid_or_mapped(token.type)) {
                if (requires_check(token.cps)) {
                    let end = i + 1;
                    for(let pos = end; pos < tokens.length; pos++){
                        let { type, cps } = tokens[pos];
                        if (is_valid_or_mapped(type)) {
                            if (!requires_check(cps)) break;
                            end = pos + 1;
                        } else if (type !== TY_IGNORED) {
                            break;
                        }
                    }
                    if (start < 0) start = i;
                    let slice = tokens.slice(start, end);
                    let cps0 = slice.flatMap((x)=>is_valid_or_mapped(x.type) ? x.cps : []); // strip junk tokens
                    let cps = nfc(cps0);
                    if (compare_arrays(cps, cps0)) {
                        tokens.splice(start, end - start, {
                            type: TY_NFC,
                            input: cps0,
                            cps,
                            tokens0: collapse_valid_tokens(slice),
                            tokens: ens_tokenize(str_from_cps(cps), {
                                nf: false
                            })
                        });
                        i = start;
                    } else {
                        i = end - 1; // skip to end of slice
                    }
                    start = -1; // reset
                } else {
                    start = i; // remember last
                }
            } else if (token.type !== TY_IGNORED) {
                start = -1; // reset
            }
        }
    }
    return collapse_valid_tokens(tokens);
}
function is_valid_or_mapped(type) {
    return type == TY_VALID || type == TY_MAPPED;
}
function requires_check(cps) {
    return cps.some((cp)=>NFC_CHECK.has(cp));
}
function collapse_valid_tokens(tokens) {
    for(let i = 0; i < tokens.length; i++){
        if (tokens[i].type == TY_VALID) {
            let j = i + 1;
            while(j < tokens.length && tokens[j].type == TY_VALID)j++;
            tokens.splice(i, j - i, {
                type: TY_VALID,
                cps: tokens.slice(i, j).flatMap((x)=>x.cps)
            });
        }
    }
    return tokens;
}
;
}}),
"[project]/node_modules/ethers/node_modules/ws/lib/constants.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
module.exports = {
    BINARY_TYPES: [
        'nodebuffer',
        'arraybuffer',
        'fragments'
    ],
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
    kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
    kListener: Symbol('kListener'),
    kStatusCode: Symbol('status-code'),
    kWebSocket: Symbol('websocket'),
    NOOP: ()=>{}
};
}}),
"[project]/node_modules/ethers/node_modules/ws/lib/buffer-util.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const { EMPTY_BUFFER } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/constants.js [app-rsc] (ecmascript)");
const FastBuffer = Buffer[Symbol.species];
/**
 * Merges an array of buffers into a new buffer.
 *
 * @param {Buffer[]} list The array of buffers to concat
 * @param {Number} totalLength The total length of buffers in the list
 * @return {Buffer} The resulting buffer
 * @public
 */ function concat(list, totalLength) {
    if (list.length === 0) return EMPTY_BUFFER;
    if (list.length === 1) return list[0];
    const target = Buffer.allocUnsafe(totalLength);
    let offset = 0;
    for(let i = 0; i < list.length; i++){
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
    }
    if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
    }
    return target;
}
/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */ function _mask(source, mask, output, offset, length) {
    for(let i = 0; i < length; i++){
        output[offset + i] = source[i] ^ mask[i & 3];
    }
}
/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */ function _unmask(buffer, mask) {
    for(let i = 0; i < buffer.length; i++){
        buffer[i] ^= mask[i & 3];
    }
}
/**
 * Converts a buffer to an `ArrayBuffer`.
 *
 * @param {Buffer} buf The buffer to convert
 * @return {ArrayBuffer} Converted buffer
 * @public
 */ function toArrayBuffer(buf) {
    if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
    }
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
}
/**
 * Converts `data` to a `Buffer`.
 *
 * @param {*} data The data to convert
 * @return {Buffer} The buffer
 * @throws {TypeError}
 * @public
 */ function toBuffer(data) {
    toBuffer.readOnly = true;
    if (Buffer.isBuffer(data)) return data;
    let buf;
    if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
    } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
    } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
    }
    return buf;
}
module.exports = {
    concat,
    mask: _mask,
    toArrayBuffer,
    toBuffer,
    unmask: _unmask
};
/* istanbul ignore else  */ if (!process.env.WS_NO_BUFFER_UTIL) {
    try {
        const bufferUtil = __turbopack_require__("[project]/node_modules/bufferutil/index.js [app-rsc] (ecmascript)");
        module.exports.mask = function(source, mask, output, offset, length) {
            if (length < 48) _mask(source, mask, output, offset, length);
            else bufferUtil.mask(source, mask, output, offset, length);
        };
        module.exports.unmask = function(buffer, mask) {
            if (buffer.length < 32) _unmask(buffer, mask);
            else bufferUtil.unmask(buffer, mask);
        };
    } catch (e) {
    // Continue regardless of the error.
    }
}
}}),
"[project]/node_modules/ethers/node_modules/ws/lib/limiter.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const kDone = Symbol('kDone');
const kRun = Symbol('kRun');
/**
 * A very simple job queue with adjustable concurrency. Adapted from
 * https://github.com/STRML/async-limiter
 */ class Limiter {
    /**
   * Creates a new `Limiter`.
   *
   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
   *     to run concurrently
   */ constructor(concurrency){
        this[kDone] = ()=>{
            this.pending--;
            this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
    }
    /**
   * Adds a job to the queue.
   *
   * @param {Function} job The job to run
   * @public
   */ add(job) {
        this.jobs.push(job);
        this[kRun]();
    }
    /**
   * Removes a job from the queue and runs it if possible.
   *
   * @private
   */ [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
            const job = this.jobs.shift();
            this.pending++;
            job(this[kDone]);
        }
    }
}
module.exports = Limiter;
}}),
"[project]/node_modules/ethers/node_modules/ws/lib/permessage-deflate.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const zlib = __turbopack_require__("[externals]/ [external] (zlib, cjs)");
const bufferUtil = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/buffer-util.js [app-rsc] (ecmascript)");
const Limiter = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/limiter.js [app-rsc] (ecmascript)");
const { kStatusCode } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/constants.js [app-rsc] (ecmascript)");
const FastBuffer = Buffer[Symbol.species];
const TRAILER = Buffer.from([
    0x00,
    0x00,
    0xff,
    0xff
]);
const kPerMessageDeflate = Symbol('permessage-deflate');
const kTotalLength = Symbol('total-length');
const kCallback = Symbol('callback');
const kBuffers = Symbol('buffers');
const kError = Symbol('error');
//
// We limit zlib concurrency, which prevents severe memory fragmentation
// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
// and https://github.com/websockets/ws/issues/1202
//
// Intentionally global; it's the global thread pool that's an issue.
//
let zlibLimiter;
/**
 * permessage-deflate implementation.
 */ class PerMessageDeflate {
    /**
   * Creates a PerMessageDeflate instance.
   *
   * @param {Object} [options] Configuration options
   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
   *     for, or request, a custom client window size
   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
   *     acknowledge disabling of client context takeover
   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
   *     calls to zlib
   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
   *     use of a custom server window size
   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
   *     disabling of server context takeover
   * @param {Number} [options.threshold=1024] Size (in bytes) below which
   *     messages should not be compressed if context takeover is disabled
   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
   *     deflate
   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
   *     inflate
   * @param {Boolean} [isServer=false] Create the instance in either server or
   *     client mode
   * @param {Number} [maxPayload=0] The maximum allowed message length
   */ constructor(options, isServer, maxPayload){
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold = this._options.threshold !== undefined ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
            const concurrency = this._options.concurrencyLimit !== undefined ? this._options.concurrencyLimit : 10;
            zlibLimiter = new Limiter(concurrency);
        }
    }
    /**
   * @type {String}
   */ static get extensionName() {
        return 'permessage-deflate';
    }
    /**
   * Create an extension negotiation offer.
   *
   * @return {Object} Extension parameters
   * @public
   */ offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
            params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
            params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
            params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
            params.client_max_window_bits = true;
        }
        return params;
    }
    /**
   * Accept an extension negotiation offer/response.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Object} Accepted configuration
   * @public
   */ accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
    }
    /**
   * Releases all resources used by the extension.
   *
   * @public
   */ cleanup() {
        if (this._inflate) {
            this._inflate.close();
            this._inflate = null;
        }
        if (this._deflate) {
            const callback = this._deflate[kCallback];
            this._deflate.close();
            this._deflate = null;
            if (callback) {
                callback(new Error('The deflate stream was closed while data was being processed'));
            }
        }
    }
    /**
   *  Accept an extension negotiation offer.
   *
   * @param {Array} offers The extension negotiation offers
   * @return {Object} Accepted configuration
   * @private
   */ acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params)=>{
            if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === 'number' && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === 'number' && !params.client_max_window_bits) {
                return false;
            }
            return true;
        });
        if (!accepted) {
            throw new Error('None of the extension offers can be accepted');
        }
        if (opts.serverNoContextTakeover) {
            accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
            accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === 'number') {
            accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === 'number') {
            accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
            delete accepted.client_max_window_bits;
        }
        return accepted;
    }
    /**
   * Accept the extension negotiation response.
   *
   * @param {Array} response The extension negotiation response
   * @return {Object} Accepted configuration
   * @private
   */ acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
            throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
            if (typeof this._options.clientMaxWindowBits === 'number') {
                params.client_max_window_bits = this._options.clientMaxWindowBits;
            }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === 'number' && params.client_max_window_bits > this._options.clientMaxWindowBits) {
            throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
        }
        return params;
    }
    /**
   * Normalize parameters.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Array} The offers/response with normalized parameters
   * @private
   */ normalizeParams(configurations) {
        configurations.forEach((params)=>{
            Object.keys(params).forEach((key)=>{
                let value = params[key];
                if (value.length > 1) {
                    throw new Error(`Parameter "${key}" must have only a single value`);
                }
                value = value[0];
                if (key === 'client_max_window_bits') {
                    if (value !== true) {
                        const num = +value;
                        if (!Number.isInteger(num) || num < 8 || num > 15) {
                            throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                        }
                        value = num;
                    } else if (!this._isServer) {
                        throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                    }
                } else if (key === 'server_max_window_bits') {
                    const num = +value;
                    if (!Number.isInteger(num) || num < 8 || num > 15) {
                        throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                    }
                    value = num;
                } else if (key === 'client_no_context_takeover' || key === 'server_no_context_takeover') {
                    if (value !== true) {
                        throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
                    }
                } else {
                    throw new Error(`Unknown parameter "${key}"`);
                }
                params[key] = value;
            });
        });
        return configurations;
    }
    /**
   * Decompress data. Concurrency limited.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */ decompress(data, fin, callback) {
        zlibLimiter.add((done)=>{
            this._decompress(data, fin, (err, result)=>{
                done();
                callback(err, result);
            });
        });
    }
    /**
   * Compress data. Concurrency limited.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */ compress(data, fin, callback) {
        zlibLimiter.add((done)=>{
            this._compress(data, fin, (err, result)=>{
                done();
                callback(err, result);
            });
        });
    }
    /**
   * Decompress data.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */ _decompress(data, fin, callback) {
        const endpoint = this._isServer ? 'client' : 'server';
        if (!this._inflate) {
            const key = `${endpoint}_max_window_bits`;
            const windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
            this._inflate = zlib.createInflateRaw({
                ...this._options.zlibInflateOptions,
                windowBits
            });
            this._inflate[kPerMessageDeflate] = this;
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            this._inflate.on('error', inflateOnError);
            this._inflate.on('data', inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(()=>{
            const err = this._inflate[kError];
            if (err) {
                this._inflate.close();
                this._inflate = null;
                callback(err);
                return;
            }
            const data = bufferUtil.concat(this._inflate[kBuffers], this._inflate[kTotalLength]);
            if (this._inflate._readableState.endEmitted) {
                this._inflate.close();
                this._inflate = null;
            } else {
                this._inflate[kTotalLength] = 0;
                this._inflate[kBuffers] = [];
                if (fin && this.params[`${endpoint}_no_context_takeover`]) {
                    this._inflate.reset();
                }
            }
            callback(null, data);
        });
    }
    /**
   * Compress data.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */ _compress(data, fin, callback) {
        const endpoint = this._isServer ? 'server' : 'client';
        if (!this._deflate) {
            const key = `${endpoint}_max_window_bits`;
            const windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
            this._deflate = zlib.createDeflateRaw({
                ...this._options.zlibDeflateOptions,
                windowBits
            });
            this._deflate[kTotalLength] = 0;
            this._deflate[kBuffers] = [];
            this._deflate.on('data', deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, ()=>{
            if (!this._deflate) {
                //
                // The deflate stream was closed while data was being processed.
                //
                return;
            }
            let data = bufferUtil.concat(this._deflate[kBuffers], this._deflate[kTotalLength]);
            if (fin) {
                data = new FastBuffer(data.buffer, data.byteOffset, data.length - 4);
            }
            //
            // Ensure that the callback will not be called again in
            // `PerMessageDeflate#cleanup()`.
            //
            this._deflate[kCallback] = null;
            this._deflate[kTotalLength] = 0;
            this._deflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
                this._deflate.reset();
            }
            callback(null, data);
        });
    }
}
module.exports = PerMessageDeflate;
/**
 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function deflateOnData(chunk) {
    this[kBuffers].push(chunk);
    this[kTotalLength] += chunk.length;
}
/**
 * The listener of the `zlib.InflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function inflateOnData(chunk) {
    this[kTotalLength] += chunk.length;
    if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
    }
    this[kError] = new RangeError('Max payload size exceeded');
    this[kError].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
    this[kError][kStatusCode] = 1009;
    this.removeListener('data', inflateOnData);
    this.reset();
}
/**
 * The listener of the `zlib.InflateRaw` stream `'error'` event.
 *
 * @param {Error} err The emitted error
 * @private
 */ function inflateOnError(err) {
    //
    // There is no need to call `Zlib#close()` as the handle is automatically
    // closed when an error is emitted.
    //
    this[kPerMessageDeflate]._inflate = null;
    err[kStatusCode] = 1007;
    this[kCallback](err);
}
}}),
"[project]/node_modules/ethers/node_modules/ws/lib/validation.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const { isUtf8 } = __turbopack_require__("[externals]/ [external] (buffer, cjs)");
//
// Allowed token characters:
//
// '!', '#', '$', '%', '&', ''', '*', '+', '-',
// '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
//
// tokenChars[32] === 0 // ' '
// tokenChars[33] === 1 // '!'
// tokenChars[34] === 0 // '"'
// ...
//
// prettier-ignore
const tokenChars = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0 // 112 - 127
];
/**
 * Checks if a status code is allowed in a close frame.
 *
 * @param {Number} code The status code
 * @return {Boolean} `true` if the status code is valid, else `false`
 * @public
 */ function isValidStatusCode(code) {
    return code >= 1000 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3000 && code <= 4999;
}
/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */ function _isValidUTF8(buf) {
    const len = buf.length;
    let i = 0;
    while(i < len){
        if ((buf[i] & 0x80) === 0) {
            // 0xxxxxxx
            i++;
        } else if ((buf[i] & 0xe0) === 0xc0) {
            // 110xxxxx 10xxxxxx
            if (i + 1 === len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i] & 0xfe) === 0xc0 // Overlong
            ) {
                return false;
            }
            i += 2;
        } else if ((buf[i] & 0xf0) === 0xe0) {
            // 1110xxxx 10xxxxxx 10xxxxxx
            if (i + 2 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 || buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0 // Surrogate (U+D800 - U+DFFF)
            ) {
                return false;
            }
            i += 3;
        } else if ((buf[i] & 0xf8) === 0xf0) {
            // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
            if (i + 3 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || (buf[i + 3] & 0xc0) !== 0x80 || buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 || buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4 // > U+10FFFF
            ) {
                return false;
            }
            i += 4;
        } else {
            return false;
        }
    }
    return true;
}
module.exports = {
    isValidStatusCode,
    isValidUTF8: _isValidUTF8,
    tokenChars
};
if (isUtf8) {
    module.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
    };
} else if (!process.env.WS_NO_UTF_8_VALIDATE) {
    try {
        const isValidUTF8 = __turbopack_require__("[project]/node_modules/utf-8-validate/index.js [app-rsc] (ecmascript)");
        module.exports.isValidUTF8 = function(buf) {
            return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
    } catch (e) {
    // Continue regardless of the error.
    }
}
}}),
"[project]/node_modules/ethers/node_modules/ws/lib/receiver.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const { Writable } = __turbopack_require__("[externals]/ [external] (stream, cjs)");
const PerMessageDeflate = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/permessage-deflate.js [app-rsc] (ecmascript)");
const { BINARY_TYPES, EMPTY_BUFFER, kStatusCode, kWebSocket } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/constants.js [app-rsc] (ecmascript)");
const { concat, toArrayBuffer, unmask } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/buffer-util.js [app-rsc] (ecmascript)");
const { isValidStatusCode, isValidUTF8 } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/validation.js [app-rsc] (ecmascript)");
const FastBuffer = Buffer[Symbol.species];
const GET_INFO = 0;
const GET_PAYLOAD_LENGTH_16 = 1;
const GET_PAYLOAD_LENGTH_64 = 2;
const GET_MASK = 3;
const GET_DATA = 4;
const INFLATING = 5;
const DEFER_EVENT = 6;
/**
 * HyBi Receiver implementation.
 *
 * @extends Writable
 */ class Receiver extends Writable {
    /**
   * Creates a Receiver instance.
   *
   * @param {Object} [options] Options object
   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
   *     multiple times in the same tick
   * @param {String} [options.binaryType=nodebuffer] The type for binary data
   * @param {Object} [options.extensions] An object containing the negotiated
   *     extensions
   * @param {Boolean} [options.isServer=false] Specifies whether to operate in
   *     client or server mode
   * @param {Number} [options.maxPayload=0] The maximum allowed message length
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   */ constructor(options = {}){
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== undefined ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = undefined;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = undefined;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
    }
    /**
   * Implements `Writable.prototype._write()`.
   *
   * @param {Buffer} chunk The chunk of data to write
   * @param {String} encoding The character encoding of `chunk`
   * @param {Function} cb Callback
   * @private
   */ _write(chunk, encoding, cb) {
        if (this._opcode === 0x08 && this._state == GET_INFO) return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
    }
    /**
   * Consumes `n` bytes from the buffered data.
   *
   * @param {Number} n The number of bytes to consume
   * @return {Buffer} The consumed bytes
   * @private
   */ consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
            const buf = this._buffers[0];
            this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
            return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
            const buf = this._buffers[0];
            const offset = dst.length - n;
            if (n >= buf.length) {
                dst.set(this._buffers.shift(), offset);
            } else {
                dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
                this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
            }
            n -= buf.length;
        }while (n > 0)
        return dst;
    }
    /**
   * Starts the parsing loop.
   *
   * @param {Function} cb Callback
   * @private
   */ startLoop(cb) {
        this._loop = true;
        do {
            switch(this._state){
                case GET_INFO:
                    this.getInfo(cb);
                    break;
                case GET_PAYLOAD_LENGTH_16:
                    this.getPayloadLength16(cb);
                    break;
                case GET_PAYLOAD_LENGTH_64:
                    this.getPayloadLength64(cb);
                    break;
                case GET_MASK:
                    this.getMask();
                    break;
                case GET_DATA:
                    this.getData(cb);
                    break;
                case INFLATING:
                case DEFER_EVENT:
                    this._loop = false;
                    return;
            }
        }while (this._loop)
        if (!this._errored) cb();
    }
    /**
   * Reads the first two bytes of a frame.
   *
   * @param {Function} cb Callback
   * @private
   */ getInfo(cb) {
        if (this._bufferedBytes < 2) {
            this._loop = false;
            return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 0x30) !== 0x00) {
            const error = this.createError(RangeError, 'RSV2 and RSV3 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_2_3');
            cb(error);
            return;
        }
        const compressed = (buf[0] & 0x40) === 0x40;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
            const error = this.createError(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
            cb(error);
            return;
        }
        this._fin = (buf[0] & 0x80) === 0x80;
        this._opcode = buf[0] & 0x0f;
        this._payloadLength = buf[1] & 0x7f;
        if (this._opcode === 0x00) {
            if (compressed) {
                const error = this.createError(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
                cb(error);
                return;
            }
            if (!this._fragmented) {
                const error = this.createError(RangeError, 'invalid opcode 0', true, 1002, 'WS_ERR_INVALID_OPCODE');
                cb(error);
                return;
            }
            this._opcode = this._fragmented;
        } else if (this._opcode === 0x01 || this._opcode === 0x02) {
            if (this._fragmented) {
                const error = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, 'WS_ERR_INVALID_OPCODE');
                cb(error);
                return;
            }
            this._compressed = compressed;
        } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
            if (!this._fin) {
                const error = this.createError(RangeError, 'FIN must be set', true, 1002, 'WS_ERR_EXPECTED_FIN');
                cb(error);
                return;
            }
            if (compressed) {
                const error = this.createError(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
                cb(error);
                return;
            }
            if (this._payloadLength > 0x7d || this._opcode === 0x08 && this._payloadLength === 1) {
                const error = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, 'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH');
                cb(error);
                return;
            }
        } else {
            const error = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, 'WS_ERR_INVALID_OPCODE');
            cb(error);
            return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 0x80) === 0x80;
        if (this._isServer) {
            if (!this._masked) {
                const error = this.createError(RangeError, 'MASK must be set', true, 1002, 'WS_ERR_EXPECTED_MASK');
                cb(error);
                return;
            }
        } else if (this._masked) {
            const error = this.createError(RangeError, 'MASK must be clear', true, 1002, 'WS_ERR_UNEXPECTED_MASK');
            cb(error);
            return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
    }
    /**
   * Gets extended payload length (7+16).
   *
   * @param {Function} cb Callback
   * @private
   */ getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
            this._loop = false;
            return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
    }
    /**
   * Gets extended payload length (7+64).
   *
   * @param {Function} cb Callback
   * @private
   */ getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
            this._loop = false;
            return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        //
        // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
        // if payload length is greater than this number.
        //
        if (num > Math.pow(2, 53 - 32) - 1) {
            const error = this.createError(RangeError, 'Unsupported WebSocket frame: payload length > 2^53 - 1', false, 1009, 'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH');
            cb(error);
            return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
    }
    /**
   * Payload length has been read.
   *
   * @param {Function} cb Callback
   * @private
   */ haveLength(cb) {
        if (this._payloadLength && this._opcode < 0x08) {
            this._totalPayloadLength += this._payloadLength;
            if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
                const error = this.createError(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH');
                cb(error);
                return;
            }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
    }
    /**
   * Reads mask bytes.
   *
   * @private
   */ getMask() {
        if (this._bufferedBytes < 4) {
            this._loop = false;
            return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
    }
    /**
   * Reads data bytes.
   *
   * @param {Function} cb Callback
   * @private
   */ getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
            if (this._bufferedBytes < this._payloadLength) {
                this._loop = false;
                return;
            }
            data = this.consume(this._payloadLength);
            if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
                unmask(data, this._mask);
            }
        }
        if (this._opcode > 0x07) {
            this.controlMessage(data, cb);
            return;
        }
        if (this._compressed) {
            this._state = INFLATING;
            this.decompress(data, cb);
            return;
        }
        if (data.length) {
            //
            // This message is not compressed so its length is the sum of the payload
            // length of all fragments.
            //
            this._messageLength = this._totalPayloadLength;
            this._fragments.push(data);
        }
        this.dataMessage(cb);
    }
    /**
   * Decompresses data.
   *
   * @param {Buffer} data Compressed data
   * @param {Function} cb Callback
   * @private
   */ decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf)=>{
            if (err) return cb(err);
            if (buf.length) {
                this._messageLength += buf.length;
                if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
                    const error = this.createError(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH');
                    cb(error);
                    return;
                }
                this._fragments.push(buf);
            }
            this.dataMessage(cb);
            if (this._state === GET_INFO) this.startLoop(cb);
        });
    }
    /**
   * Handles a data message.
   *
   * @param {Function} cb Callback
   * @private
   */ dataMessage(cb) {
        if (!this._fin) {
            this._state = GET_INFO;
            return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];
        if (this._opcode === 2) {
            let data;
            if (this._binaryType === 'nodebuffer') {
                data = concat(fragments, messageLength);
            } else if (this._binaryType === 'arraybuffer') {
                data = toArrayBuffer(concat(fragments, messageLength));
            } else {
                data = fragments;
            }
            if (this._allowSynchronousEvents) {
                this.emit('message', data, true);
                this._state = GET_INFO;
            } else {
                this._state = DEFER_EVENT;
                setImmediate(()=>{
                    this.emit('message', data, true);
                    this._state = GET_INFO;
                    this.startLoop(cb);
                });
            }
        } else {
            const buf = concat(fragments, messageLength);
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
                const error = this.createError(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
                cb(error);
                return;
            }
            if (this._state === INFLATING || this._allowSynchronousEvents) {
                this.emit('message', buf, false);
                this._state = GET_INFO;
            } else {
                this._state = DEFER_EVENT;
                setImmediate(()=>{
                    this.emit('message', buf, false);
                    this._state = GET_INFO;
                    this.startLoop(cb);
                });
            }
        }
    }
    /**
   * Handles a control message.
   *
   * @param {Buffer} data Data to handle
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */ controlMessage(data, cb) {
        if (this._opcode === 0x08) {
            if (data.length === 0) {
                this._loop = false;
                this.emit('conclude', 1005, EMPTY_BUFFER);
                this.end();
            } else {
                const code = data.readUInt16BE(0);
                if (!isValidStatusCode(code)) {
                    const error = this.createError(RangeError, `invalid status code ${code}`, true, 1002, 'WS_ERR_INVALID_CLOSE_CODE');
                    cb(error);
                    return;
                }
                const buf = new FastBuffer(data.buffer, data.byteOffset + 2, data.length - 2);
                if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
                    const error = this.createError(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
                    cb(error);
                    return;
                }
                this._loop = false;
                this.emit('conclude', code, buf);
                this.end();
            }
            this._state = GET_INFO;
            return;
        }
        if (this._allowSynchronousEvents) {
            this.emit(this._opcode === 0x09 ? 'ping' : 'pong', data);
            this._state = GET_INFO;
        } else {
            this._state = DEFER_EVENT;
            setImmediate(()=>{
                this.emit(this._opcode === 0x09 ? 'ping' : 'pong', data);
                this._state = GET_INFO;
                this.startLoop(cb);
            });
        }
    }
    /**
   * Builds an error object.
   *
   * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
   * @param {String} message The error message
   * @param {Boolean} prefix Specifies whether or not to add a default prefix to
   *     `message`
   * @param {Number} statusCode The status code
   * @param {String} errorCode The exposed error code
   * @return {(Error|RangeError)} The error
   * @private
   */ createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(prefix ? `Invalid WebSocket frame: ${message}` : message);
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
    }
}
module.exports = Receiver;
}}),
"[project]/node_modules/ethers/node_modules/ws/lib/sender.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex" }] */ 'use strict';
const { Duplex } = __turbopack_require__("[externals]/ [external] (stream, cjs)");
const { randomFillSync } = __turbopack_require__("[externals]/ [external] (crypto, cjs)");
const PerMessageDeflate = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/permessage-deflate.js [app-rsc] (ecmascript)");
const { EMPTY_BUFFER } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/constants.js [app-rsc] (ecmascript)");
const { isValidStatusCode } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/validation.js [app-rsc] (ecmascript)");
const { mask: applyMask, toBuffer } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/buffer-util.js [app-rsc] (ecmascript)");
const kByteLength = Symbol('kByteLength');
const maskBuffer = Buffer.alloc(4);
const RANDOM_POOL_SIZE = 8 * 1024;
let randomPool;
let randomPoolPointer = RANDOM_POOL_SIZE;
/**
 * HyBi Sender implementation.
 */ class Sender {
    /**
   * Creates a Sender instance.
   *
   * @param {Duplex} socket The connection socket
   * @param {Object} [extensions] An object containing the negotiated extensions
   * @param {Function} [generateMask] The function used to generate the masking
   *     key
   */ constructor(socket, extensions, generateMask){
        this._extensions = extensions || {};
        if (generateMask) {
            this._generateMask = generateMask;
            this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._deflating = false;
        this._queue = [];
    }
    /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {(Buffer|String)} data The data to frame
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @return {(Buffer|String)[]} The framed data
   * @public
   */ static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
            mask = options.maskBuffer || maskBuffer;
            if (options.generateMask) {
                options.generateMask(mask);
            } else {
                if (randomPoolPointer === RANDOM_POOL_SIZE) {
                    /* istanbul ignore else  */ if (randomPool === undefined) {
                        //
                        // This is lazily initialized because server-sent frames must not
                        // be masked so it may never be used.
                        //
                        randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
                    }
                    randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
                    randomPoolPointer = 0;
                }
                mask[0] = randomPool[randomPoolPointer++];
                mask[1] = randomPool[randomPoolPointer++];
                mask[2] = randomPool[randomPoolPointer++];
                mask[3] = randomPool[randomPoolPointer++];
            }
            skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
            offset = 6;
        }
        let dataLength;
        if (typeof data === 'string') {
            if ((!options.mask || skipMasking) && options[kByteLength] !== undefined) {
                dataLength = options[kByteLength];
            } else {
                data = Buffer.from(data);
                dataLength = data.length;
            }
        } else {
            dataLength = data.length;
            merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
            offset += 8;
            payloadLength = 127;
        } else if (dataLength > 125) {
            offset += 2;
            payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
        if (options.rsv1) target[0] |= 0x40;
        target[1] = payloadLength;
        if (payloadLength === 126) {
            target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
            target[2] = target[3] = 0;
            target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) return [
            target,
            data
        ];
        target[1] |= 0x80;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [
            target,
            data
        ];
        if (merge) {
            applyMask(data, mask, target, offset, dataLength);
            return [
                target
            ];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [
            target,
            data
        ];
    }
    /**
   * Sends a close message to the other peer.
   *
   * @param {Number} [code] The status code component of the body
   * @param {(String|Buffer)} [data] The message component of the body
   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
   * @param {Function} [cb] Callback
   * @public
   */ close(code, data, mask, cb) {
        let buf;
        if (code === undefined) {
            buf = EMPTY_BUFFER;
        } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
            throw new TypeError('First argument must be a valid error code number');
        } else if (data === undefined || !data.length) {
            buf = Buffer.allocUnsafe(2);
            buf.writeUInt16BE(code, 0);
        } else {
            const length = Buffer.byteLength(data);
            if (length > 123) {
                throw new RangeError('The message must not be greater than 123 bytes');
            }
            buf = Buffer.allocUnsafe(2 + length);
            buf.writeUInt16BE(code, 0);
            if (typeof data === 'string') {
                buf.write(data, 2);
            } else {
                buf.set(data, 2);
            }
        }
        const options = {
            [kByteLength]: buf.length,
            fin: true,
            generateMask: this._generateMask,
            mask,
            maskBuffer: this._maskBuffer,
            opcode: 0x08,
            readOnly: false,
            rsv1: false
        };
        if (this._deflating) {
            this.enqueue([
                this.dispatch,
                buf,
                false,
                options,
                cb
            ]);
        } else {
            this.sendFrame(Sender.frame(buf, options), cb);
        }
    }
    /**
   * Sends a ping message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */ ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === 'string') {
            byteLength = Buffer.byteLength(data);
            readOnly = false;
        } else {
            data = toBuffer(data);
            byteLength = data.length;
            readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
            throw new RangeError('The data size must not be greater than 125 bytes');
        }
        const options = {
            [kByteLength]: byteLength,
            fin: true,
            generateMask: this._generateMask,
            mask,
            maskBuffer: this._maskBuffer,
            opcode: 0x09,
            readOnly,
            rsv1: false
        };
        if (this._deflating) {
            this.enqueue([
                this.dispatch,
                data,
                false,
                options,
                cb
            ]);
        } else {
            this.sendFrame(Sender.frame(data, options), cb);
        }
    }
    /**
   * Sends a pong message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */ pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === 'string') {
            byteLength = Buffer.byteLength(data);
            readOnly = false;
        } else {
            data = toBuffer(data);
            byteLength = data.length;
            readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
            throw new RangeError('The data size must not be greater than 125 bytes');
        }
        const options = {
            [kByteLength]: byteLength,
            fin: true,
            generateMask: this._generateMask,
            mask,
            maskBuffer: this._maskBuffer,
            opcode: 0x0a,
            readOnly,
            rsv1: false
        };
        if (this._deflating) {
            this.enqueue([
                this.dispatch,
                data,
                false,
                options,
                cb
            ]);
        } else {
            this.sendFrame(Sender.frame(data, options), cb);
        }
    }
    /**
   * Sends a data message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Object} options Options object
   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
   *     or text
   * @param {Boolean} [options.compress=false] Specifies whether or not to
   *     compress `data`
   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Function} [cb] Callback
   * @public
   */ send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === 'string') {
            byteLength = Buffer.byteLength(data);
            readOnly = false;
        } else {
            data = toBuffer(data);
            byteLength = data.length;
            readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
            this._firstFragment = false;
            if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? 'server_no_context_takeover' : 'client_no_context_takeover']) {
                rsv1 = byteLength >= perMessageDeflate._threshold;
            }
            this._compress = rsv1;
        } else {
            rsv1 = false;
            opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        if (perMessageDeflate) {
            const opts = {
                [kByteLength]: byteLength,
                fin: options.fin,
                generateMask: this._generateMask,
                mask: options.mask,
                maskBuffer: this._maskBuffer,
                opcode,
                readOnly,
                rsv1
            };
            if (this._deflating) {
                this.enqueue([
                    this.dispatch,
                    data,
                    this._compress,
                    opts,
                    cb
                ]);
            } else {
                this.dispatch(data, this._compress, opts, cb);
            }
        } else {
            this.sendFrame(Sender.frame(data, {
                [kByteLength]: byteLength,
                fin: options.fin,
                generateMask: this._generateMask,
                mask: options.mask,
                maskBuffer: this._maskBuffer,
                opcode,
                readOnly,
                rsv1: false
            }), cb);
        }
    }
    /**
   * Dispatches a message.
   *
   * @param {(Buffer|String)} data The message to send
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     `data`
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */ dispatch(data, compress, options, cb) {
        if (!compress) {
            this.sendFrame(Sender.frame(data, options), cb);
            return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._deflating = true;
        perMessageDeflate.compress(data, options.fin, (_, buf)=>{
            if (this._socket.destroyed) {
                const err = new Error('The socket was closed while data was being compressed');
                if (typeof cb === 'function') cb(err);
                for(let i = 0; i < this._queue.length; i++){
                    const params = this._queue[i];
                    const callback = params[params.length - 1];
                    if (typeof callback === 'function') callback(err);
                }
                return;
            }
            this._bufferedBytes -= options[kByteLength];
            this._deflating = false;
            options.readOnly = false;
            this.sendFrame(Sender.frame(buf, options), cb);
            this.dequeue();
        });
    }
    /**
   * Executes queued send operations.
   *
   * @private
   */ dequeue() {
        while(!this._deflating && this._queue.length){
            const params = this._queue.shift();
            this._bufferedBytes -= params[3][kByteLength];
            Reflect.apply(params[0], this, params.slice(1));
        }
    }
    /**
   * Enqueues a send operation.
   *
   * @param {Array} params Send operation parameters.
   * @private
   */ enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
    }
    /**
   * Sends a frame.
   *
   * @param {Buffer[]} list The frame to send
   * @param {Function} [cb] Callback
   * @private
   */ sendFrame(list, cb) {
        if (list.length === 2) {
            this._socket.cork();
            this._socket.write(list[0]);
            this._socket.write(list[1], cb);
            this._socket.uncork();
        } else {
            this._socket.write(list[0], cb);
        }
    }
}
module.exports = Sender;
}}),
"[project]/node_modules/ethers/node_modules/ws/lib/event-target.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const { kForOnEventAttribute, kListener } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/constants.js [app-rsc] (ecmascript)");
const kCode = Symbol('kCode');
const kData = Symbol('kData');
const kError = Symbol('kError');
const kMessage = Symbol('kMessage');
const kReason = Symbol('kReason');
const kTarget = Symbol('kTarget');
const kType = Symbol('kType');
const kWasClean = Symbol('kWasClean');
/**
 * Class representing an event.
 */ class Event {
    /**
   * Create a new `Event`.
   *
   * @param {String} type The name of the event
   * @throws {TypeError} If the `type` argument is not specified
   */ constructor(type){
        this[kTarget] = null;
        this[kType] = type;
    }
    /**
   * @type {*}
   */ get target() {
        return this[kTarget];
    }
    /**
   * @type {String}
   */ get type() {
        return this[kType];
    }
}
Object.defineProperty(Event.prototype, 'target', {
    enumerable: true
});
Object.defineProperty(Event.prototype, 'type', {
    enumerable: true
});
/**
 * Class representing a close event.
 *
 * @extends Event
 */ class CloseEvent extends Event {
    /**
   * Create a new `CloseEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {Number} [options.code=0] The status code explaining why the
   *     connection was closed
   * @param {String} [options.reason=''] A human-readable string explaining why
   *     the connection was closed
   * @param {Boolean} [options.wasClean=false] Indicates whether or not the
   *     connection was cleanly closed
   */ constructor(type, options = {}){
        super(type);
        this[kCode] = options.code === undefined ? 0 : options.code;
        this[kReason] = options.reason === undefined ? '' : options.reason;
        this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
    }
    /**
   * @type {Number}
   */ get code() {
        return this[kCode];
    }
    /**
   * @type {String}
   */ get reason() {
        return this[kReason];
    }
    /**
   * @type {Boolean}
   */ get wasClean() {
        return this[kWasClean];
    }
}
Object.defineProperty(CloseEvent.prototype, 'code', {
    enumerable: true
});
Object.defineProperty(CloseEvent.prototype, 'reason', {
    enumerable: true
});
Object.defineProperty(CloseEvent.prototype, 'wasClean', {
    enumerable: true
});
/**
 * Class representing an error event.
 *
 * @extends Event
 */ class ErrorEvent extends Event {
    /**
   * Create a new `ErrorEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.error=null] The error that generated this event
   * @param {String} [options.message=''] The error message
   */ constructor(type, options = {}){
        super(type);
        this[kError] = options.error === undefined ? null : options.error;
        this[kMessage] = options.message === undefined ? '' : options.message;
    }
    /**
   * @type {*}
   */ get error() {
        return this[kError];
    }
    /**
   * @type {String}
   */ get message() {
        return this[kMessage];
    }
}
Object.defineProperty(ErrorEvent.prototype, 'error', {
    enumerable: true
});
Object.defineProperty(ErrorEvent.prototype, 'message', {
    enumerable: true
});
/**
 * Class representing a message event.
 *
 * @extends Event
 */ class MessageEvent extends Event {
    /**
   * Create a new `MessageEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.data=null] The message content
   */ constructor(type, options = {}){
        super(type);
        this[kData] = options.data === undefined ? null : options.data;
    }
    /**
   * @type {*}
   */ get data() {
        return this[kData];
    }
}
Object.defineProperty(MessageEvent.prototype, 'data', {
    enumerable: true
});
/**
 * This provides methods for emulating the `EventTarget` interface. It's not
 * meant to be used directly.
 *
 * @mixin
 */ const EventTarget = {
    /**
   * Register an event listener.
   *
   * @param {String} type A string representing the event type to listen for
   * @param {(Function|Object)} handler The listener to add
   * @param {Object} [options] An options object specifies characteristics about
   *     the event listener
   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
   *     listener should be invoked at most once after being added. If `true`,
   *     the listener would be automatically removed when invoked.
   * @public
   */ addEventListener (type, handler, options = {}) {
        for (const listener of this.listeners(type)){
            if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
                return;
            }
        }
        let wrapper;
        if (type === 'message') {
            wrapper = function onMessage(data, isBinary) {
                const event = new MessageEvent('message', {
                    data: isBinary ? data : data.toString()
                });
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else if (type === 'close') {
            wrapper = function onClose(code, message) {
                const event = new CloseEvent('close', {
                    code,
                    reason: message.toString(),
                    wasClean: this._closeFrameReceived && this._closeFrameSent
                });
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else if (type === 'error') {
            wrapper = function onError(error) {
                const event = new ErrorEvent('error', {
                    error,
                    message: error.message
                });
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else if (type === 'open') {
            wrapper = function onOpen() {
                const event = new Event('open');
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else {
            return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
            this.once(type, wrapper);
        } else {
            this.on(type, wrapper);
        }
    },
    /**
   * Remove an event listener.
   *
   * @param {String} type A string representing the event type to remove
   * @param {(Function|Object)} handler The listener to remove
   * @public
   */ removeEventListener (type, handler) {
        for (const listener of this.listeners(type)){
            if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
                this.removeListener(type, listener);
                break;
            }
        }
    }
};
module.exports = {
    CloseEvent,
    ErrorEvent,
    Event,
    EventTarget,
    MessageEvent
};
/**
 * Call an event listener
 *
 * @param {(Function|Object)} listener The listener to call
 * @param {*} thisArg The value to use as `this`` when calling the listener
 * @param {Event} event The event to pass to the listener
 * @private
 */ function callListener(listener, thisArg, event) {
    if (typeof listener === 'object' && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
    } else {
        listener.call(thisArg, event);
    }
}
}}),
"[project]/node_modules/ethers/node_modules/ws/lib/extension.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
const { tokenChars } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/validation.js [app-rsc] (ecmascript)");
/**
 * Adds an offer to the map of extension offers or a parameter to the map of
 * parameters.
 *
 * @param {Object} dest The map of extension offers or parameters
 * @param {String} name The extension or parameter name
 * @param {(Object|Boolean|String)} elem The extension parameters or the
 *     parameter value
 * @private
 */ function push(dest, name, elem) {
    if (dest[name] === undefined) dest[name] = [
        elem
    ];
    else dest[name].push(elem);
}
/**
 * Parses the `Sec-WebSocket-Extensions` header into an object.
 *
 * @param {String} header The field value of the header
 * @return {Object} The parsed object
 * @public
 */ function parse(header) {
    const offers = Object.create(null);
    let params = Object.create(null);
    let mustUnescape = false;
    let isEscaping = false;
    let inQuotes = false;
    let extensionName;
    let paramName;
    let start = -1;
    let code = -1;
    let end = -1;
    let i = 0;
    for(; i < header.length; i++){
        code = header.charCodeAt(i);
        if (extensionName === undefined) {
            if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (i !== 0 && (code === 0x20 /* ' ' */  || code === 0x09)) {
                if (end === -1 && start !== -1) end = i;
            } else if (code === 0x3b /* ';' */  || code === 0x2c /* ',' */ ) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                const name = header.slice(start, end);
                if (code === 0x2c) {
                    push(offers, name, params);
                    params = Object.create(null);
                } else {
                    extensionName = name;
                }
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        } else if (paramName === undefined) {
            if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (code === 0x20 || code === 0x09) {
                if (end === -1 && start !== -1) end = i;
            } else if (code === 0x3b || code === 0x2c) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                push(params, header.slice(start, end), true);
                if (code === 0x2c) {
                    push(offers, extensionName, params);
                    params = Object.create(null);
                    extensionName = undefined;
                }
                start = end = -1;
            } else if (code === 0x3d /* '=' */  && start !== -1 && end === -1) {
                paramName = header.slice(start, i);
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        } else {
            //
            // The value of a quoted-string after unescaping must conform to the
            // token ABNF, so only token characters are valid.
            // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
            //
            if (isEscaping) {
                if (tokenChars[code] !== 1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (start === -1) start = i;
                else if (!mustUnescape) mustUnescape = true;
                isEscaping = false;
            } else if (inQuotes) {
                if (tokenChars[code] === 1) {
                    if (start === -1) start = i;
                } else if (code === 0x22 /* '"' */  && start !== -1) {
                    inQuotes = false;
                    end = i;
                } else if (code === 0x5c /* '\' */ ) {
                    isEscaping = true;
                } else {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
            } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
                inQuotes = true;
            } else if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
                if (end === -1) end = i;
            } else if (code === 0x3b || code === 0x2c) {
                if (start === -1) {
                    throw new SyntaxError(`Unexpected character at index ${i}`);
                }
                if (end === -1) end = i;
                let value = header.slice(start, end);
                if (mustUnescape) {
                    value = value.replace(/\\/g, '');
                    mustUnescape = false;
                }
                push(params, paramName, value);
                if (code === 0x2c) {
                    push(offers, extensionName, params);
                    params = Object.create(null);
                    extensionName = undefined;
                }
                paramName = undefined;
                start = end = -1;
            } else {
                throw new SyntaxError(`Unexpected character at index ${i}`);
            }
        }
    }
    if (start === -1 || inQuotes || code === 0x20 || code === 0x09) {
        throw new SyntaxError('Unexpected end of input');
    }
    if (end === -1) end = i;
    const token = header.slice(start, end);
    if (extensionName === undefined) {
        push(offers, token, params);
    } else {
        if (paramName === undefined) {
            push(params, token, true);
        } else if (mustUnescape) {
            push(params, paramName, token.replace(/\\/g, ''));
        } else {
            push(params, paramName, token);
        }
        push(offers, extensionName, params);
    }
    return offers;
}
/**
 * Builds the `Sec-WebSocket-Extensions` header field value.
 *
 * @param {Object} extensions The map of extensions and parameters to format
 * @return {String} A string representing the given object
 * @public
 */ function format(extensions) {
    return Object.keys(extensions).map((extension)=>{
        let configurations = extensions[extension];
        if (!Array.isArray(configurations)) configurations = [
            configurations
        ];
        return configurations.map((params)=>{
            return [
                extension
            ].concat(Object.keys(params).map((k)=>{
                let values = params[k];
                if (!Array.isArray(values)) values = [
                    values
                ];
                return values.map((v)=>v === true ? k : `${k}=${v}`).join('; ');
            })).join('; ');
        }).join(', ');
    }).join(', ');
}
module.exports = {
    format,
    parse
};
}}),
"[project]/node_modules/ethers/node_modules/ws/lib/websocket.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex|Readable$", "caughtErrors": "none" }] */ 'use strict';
const EventEmitter = __turbopack_require__("[externals]/ [external] (events, cjs)");
const https = __turbopack_require__("[externals]/ [external] (https, cjs)");
const http = __turbopack_require__("[externals]/ [external] (http, cjs)");
const net = __turbopack_require__("[externals]/ [external] (net, cjs)");
const tls = __turbopack_require__("[externals]/ [external] (tls, cjs)");
const { randomBytes, createHash } = __turbopack_require__("[externals]/ [external] (crypto, cjs)");
const { Duplex, Readable } = __turbopack_require__("[externals]/ [external] (stream, cjs)");
const { URL } = __turbopack_require__("[externals]/ [external] (url, cjs)");
const PerMessageDeflate = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/permessage-deflate.js [app-rsc] (ecmascript)");
const Receiver = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/receiver.js [app-rsc] (ecmascript)");
const Sender = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/sender.js [app-rsc] (ecmascript)");
const { BINARY_TYPES, EMPTY_BUFFER, GUID, kForOnEventAttribute, kListener, kStatusCode, kWebSocket, NOOP } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/constants.js [app-rsc] (ecmascript)");
const { EventTarget: { addEventListener, removeEventListener } } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/event-target.js [app-rsc] (ecmascript)");
const { format, parse } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/extension.js [app-rsc] (ecmascript)");
const { toBuffer } = __turbopack_require__("[project]/node_modules/ethers/node_modules/ws/lib/buffer-util.js [app-rsc] (ecmascript)");
const closeTimeout = 30 * 1000;
const kAborted = Symbol('kAborted');
const protocolVersions = [
    8,
    13
];
const readyStates = [
    'CONNECTING',
    'OPEN',
    'CLOSING',
    'CLOSED'
];
const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
/**
 * Class representing a WebSocket.
 *
 * @extends EventEmitter
 */ class WebSocket extends EventEmitter {
    /**
   * Create a new `WebSocket`.
   *
   * @param {(String|URL)} address The URL to which to connect
   * @param {(String|String[])} [protocols] The subprotocols
   * @param {Object} [options] Connection options
   */ constructor(address, protocols, options){
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._extensions = {};
        this._paused = false;
        this._protocol = '';
        this._readyState = WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
            this._bufferedAmount = 0;
            this._isServer = false;
            this._redirects = 0;
            if (protocols === undefined) {
                protocols = [];
            } else if (!Array.isArray(protocols)) {
                if (typeof protocols === 'object' && protocols !== null) {
                    options = protocols;
                    protocols = [];
                } else {
                    protocols = [
                        protocols
                    ];
                }
            }
            initAsClient(this, address, protocols, options);
        } else {
            this._autoPong = options.autoPong;
            this._isServer = true;
        }
    }
    /**
   * This deviates from the WHATWG interface since ws doesn't support the
   * required default "blob" type (instead we define a custom "nodebuffer"
   * type).
   *
   * @type {String}
   */ get binaryType() {
        return this._binaryType;
    }
    set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        //
        // Allow to change `binaryType` on the fly.
        //
        if (this._receiver) this._receiver._binaryType = type;
    }
    /**
   * @type {Number}
   */ get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
    }
    /**
   * @type {String}
   */ get extensions() {
        return Object.keys(this._extensions).join();
    }
    /**
   * @type {Boolean}
   */ get isPaused() {
        return this._paused;
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onclose() {
        return null;
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onerror() {
        return null;
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onopen() {
        return null;
    }
    /**
   * @type {Function}
   */ /* istanbul ignore next */ get onmessage() {
        return null;
    }
    /**
   * @type {String}
   */ get protocol() {
        return this._protocol;
    }
    /**
   * @type {Number}
   */ get readyState() {
        return this._readyState;
    }
    /**
   * @type {String}
   */ get url() {
        return this._url;
    }
    /**
   * Set up the socket and the internal resources.
   *
   * @param {Duplex} socket The network socket between the server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Object} options Options object
   * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
   *     multiple times in the same tick
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Number} [options.maxPayload=0] The maximum allowed message size
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @private
   */ setSocket(socket, head, options) {
        const receiver = new Receiver({
            allowSynchronousEvents: options.allowSynchronousEvents,
            binaryType: this.binaryType,
            extensions: this._extensions,
            isServer: this._isServer,
            maxPayload: options.maxPayload,
            skipUTF8Validation: options.skipUTF8Validation
        });
        this._sender = new Sender(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._socket = socket;
        receiver[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on('conclude', receiverOnConclude);
        receiver.on('drain', receiverOnDrain);
        receiver.on('error', receiverOnError);
        receiver.on('message', receiverOnMessage);
        receiver.on('ping', receiverOnPing);
        receiver.on('pong', receiverOnPong);
        //
        // These methods may not be available if `socket` is just a `Duplex`.
        //
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on('close', socketOnClose);
        socket.on('data', socketOnData);
        socket.on('end', socketOnEnd);
        socket.on('error', socketOnError);
        this._readyState = WebSocket.OPEN;
        this.emit('open');
    }
    /**
   * Emit the `'close'` event.
   *
   * @private
   */ emitClose() {
        if (!this._socket) {
            this._readyState = WebSocket.CLOSED;
            this.emit('close', this._closeCode, this._closeMessage);
            return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
            this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = WebSocket.CLOSED;
        this.emit('close', this._closeCode, this._closeMessage);
    }
    /**
   * Start a closing handshake.
   *
   *          +----------+   +-----------+   +----------+
   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
   *    |     +----------+   +-----------+   +----------+     |
   *          +----------+   +-----------+         |
   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
   *          +----------+   +-----------+   |
   *    |           |                        |   +---+        |
   *                +------------------------+-->|fin| - - - -
   *    |         +---+                      |   +---+
   *     - - - - -|fin|<---------------------+
   *              +---+
   *
   * @param {Number} [code] Status code explaining why the connection is closing
   * @param {(String|Buffer)} [data] The reason why the connection is
   *     closing
   * @public
   */ close(code, data) {
        if (this.readyState === WebSocket.CLOSED) return;
        if (this.readyState === WebSocket.CONNECTING) {
            const msg = 'WebSocket was closed before the connection was established';
            abortHandshake(this, this._req, msg);
            return;
        }
        if (this.readyState === WebSocket.CLOSING) {
            if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
                this._socket.end();
            }
            return;
        }
        this._readyState = WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err)=>{
            //
            // This error is handled by the `'error'` listener on the socket. We only
            // want to know if the close frame has been sent here.
            //
            if (err) return;
            this._closeFrameSent = true;
            if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
                this._socket.end();
            }
        });
        //
        // Specify a timeout for the closing handshake to complete.
        //
        this._closeTimer = setTimeout(this._socket.destroy.bind(this._socket), closeTimeout);
    }
    /**
   * Pause the socket.
   *
   * @public
   */ pause() {
        if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
            return;
        }
        this._paused = true;
        this._socket.pause();
    }
    /**
   * Send a ping.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the ping is sent
   * @public
   */ ping(data, mask, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        if (typeof data === 'function') {
            cb = data;
            data = mask = undefined;
        } else if (typeof mask === 'function') {
            cb = mask;
            mask = undefined;
        }
        if (typeof data === 'number') data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        if (mask === undefined) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
    }
    /**
   * Send a pong.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the pong is sent
   * @public
   */ pong(data, mask, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        if (typeof data === 'function') {
            cb = data;
            data = mask = undefined;
        } else if (typeof mask === 'function') {
            cb = mask;
            mask = undefined;
        }
        if (typeof data === 'number') data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        if (mask === undefined) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
    }
    /**
   * Resume the socket.
   *
   * @public
   */ resume() {
        if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
            return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
    }
    /**
   * Send a data message.
   *
   * @param {*} data The message to send
   * @param {Object} [options] Options object
   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
   *     text
   * @param {Boolean} [options.compress] Specifies whether or not to compress
   *     `data`
   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when data is written out
   * @public
   */ send(data, options, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
            throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
        }
        if (typeof options === 'function') {
            cb = options;
            options = {};
        }
        if (typeof data === 'number') data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
            sendAfterClose(this, data, cb);
            return;
        }
        const opts = {
            binary: typeof data !== 'string',
            mask: !this._isServer,
            compress: true,
            fin: true,
            ...options
        };
        if (!this._extensions[PerMessageDeflate.extensionName]) {
            opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
    }
    /**
   * Forcibly close the connection.
   *
   * @public
   */ terminate() {
        if (this.readyState === WebSocket.CLOSED) return;
        if (this.readyState === WebSocket.CONNECTING) {
            const msg = 'WebSocket was closed before the connection was established';
            abortHandshake(this, this._req, msg);
            return;
        }
        if (this._socket) {
            this._readyState = WebSocket.CLOSING;
            this._socket.destroy();
        }
    }
}
/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CONNECTING', {
    enumerable: true,
    value: readyStates.indexOf('CONNECTING')
});
/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CONNECTING', {
    enumerable: true,
    value: readyStates.indexOf('CONNECTING')
});
/**
 * @constant {Number} OPEN
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'OPEN', {
    enumerable: true,
    value: readyStates.indexOf('OPEN')
});
/**
 * @constant {Number} OPEN
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'OPEN', {
    enumerable: true,
    value: readyStates.indexOf('OPEN')
});
/**
 * @constant {Number} CLOSING
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CLOSING', {
    enumerable: true,
    value: readyStates.indexOf('CLOSING')
});
/**
 * @constant {Number} CLOSING
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CLOSING', {
    enumerable: true,
    value: readyStates.indexOf('CLOSING')
});
/**
 * @constant {Number} CLOSED
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CLOSED', {
    enumerable: true,
    value: readyStates.indexOf('CLOSED')
});
/**
 * @constant {Number} CLOSED
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CLOSED', {
    enumerable: true,
    value: readyStates.indexOf('CLOSED')
});
[
    'binaryType',
    'bufferedAmount',
    'extensions',
    'isPaused',
    'protocol',
    'readyState',
    'url'
].forEach((property)=>{
    Object.defineProperty(WebSocket.prototype, property, {
        enumerable: true
    });
});
//
// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
//
[
    'open',
    'error',
    'close',
    'message'
].forEach((method)=>{
    Object.defineProperty(WebSocket.prototype, `on${method}`, {
        enumerable: true,
        get () {
            for (const listener of this.listeners(method)){
                if (listener[kForOnEventAttribute]) return listener[kListener];
            }
            return null;
        },
        set (handler) {
            for (const listener of this.listeners(method)){
                if (listener[kForOnEventAttribute]) {
                    this.removeListener(method, listener);
                    break;
                }
            }
            if (typeof handler !== 'function') return;
            this.addEventListener(method, handler, {
                [kForOnEventAttribute]: true
            });
        }
    });
});
WebSocket.prototype.addEventListener = addEventListener;
WebSocket.prototype.removeEventListener = removeEventListener;
module.exports = WebSocket;
/**
 * Initialize a WebSocket client.
 *
 * @param {WebSocket} websocket The client to initialize
 * @param {(String|URL)} address The URL to which to connect
 * @param {Array} protocols The subprotocols
 * @param {Object} [options] Connection options
 * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether any
 *     of the `'message'`, `'ping'`, and `'pong'` events can be emitted multiple
 *     times in the same tick
 * @param {Boolean} [options.autoPong=true] Specifies whether or not to
 *     automatically send a pong in response to a ping
 * @param {Function} [options.finishRequest] A function which can be used to
 *     customize the headers of each http request before it is sent
 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
 *     redirects
 * @param {Function} [options.generateMask] The function used to generate the
 *     masking key
 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
 *     handshake request
 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
 *     size
 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
 *     allowed
 * @param {String} [options.origin] Value of the `Origin` or
 *     `Sec-WebSocket-Origin` header
 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
 *     permessage-deflate
 * @param {Number} [options.protocolVersion=13] Value of the
 *     `Sec-WebSocket-Version` header
 * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
 *     not to skip UTF-8 validation for text and close messages
 * @private
 */ function initAsClient(websocket, address, protocols, options) {
    const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: undefined,
        hostname: undefined,
        protocol: undefined,
        timeout: undefined,
        method: 'GET',
        host: undefined,
        path: undefined,
        port: undefined
    };
    websocket._autoPong = opts.autoPong;
    if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(`Unsupported protocol version: ${opts.protocolVersion} ` + `(supported versions: ${protocolVersions.join(', ')})`);
    }
    let parsedUrl;
    if (address instanceof URL) {
        parsedUrl = address;
    } else {
        try {
            parsedUrl = new URL(address);
        } catch (e) {
            throw new SyntaxError(`Invalid URL: ${address}`);
        }
    }
    if (parsedUrl.protocol === 'http:') {
        parsedUrl.protocol = 'ws:';
    } else if (parsedUrl.protocol === 'https:') {
        parsedUrl.protocol = 'wss:';
    }
    websocket._url = parsedUrl.href;
    const isSecure = parsedUrl.protocol === 'wss:';
    const isIpcUrl = parsedUrl.protocol === 'ws+unix:';
    let invalidUrlMessage;
    if (parsedUrl.protocol !== 'ws:' && !isSecure && !isIpcUrl) {
        invalidUrlMessage = 'The URL\'s protocol must be one of "ws:", "wss:", ' + '"http:", "https", or "ws+unix:"';
    } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
    } else if (parsedUrl.hash) {
        invalidUrlMessage = 'The URL contains a fragment identifier';
    }
    if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
            throw err;
        } else {
            emitErrorAndClose(websocket, err);
            return;
        }
    }
    const defaultPort = isSecure ? 443 : 80;
    const key = randomBytes(16).toString('base64');
    const request = isSecure ? https.request : http.request;
    const protocolSet = new Set();
    let perMessageDeflate;
    opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
    opts.defaultPort = opts.defaultPort || defaultPort;
    opts.port = parsedUrl.port || defaultPort;
    opts.host = parsedUrl.hostname.startsWith('[') ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
    opts.headers = {
        ...opts.headers,
        'Sec-WebSocket-Version': opts.protocolVersion,
        'Sec-WebSocket-Key': key,
        Connection: 'Upgrade',
        Upgrade: 'websocket'
    };
    opts.path = parsedUrl.pathname + parsedUrl.search;
    opts.timeout = opts.handshakeTimeout;
    if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate(opts.perMessageDeflate !== true ? opts.perMessageDeflate : {}, false, opts.maxPayload);
        opts.headers['Sec-WebSocket-Extensions'] = format({
            [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
    }
    if (protocols.length) {
        for (const protocol of protocols){
            if (typeof protocol !== 'string' || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
                throw new SyntaxError('An invalid or duplicated subprotocol was specified');
            }
            protocolSet.add(protocol);
        }
        opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
    }
    if (opts.origin) {
        if (opts.protocolVersion < 13) {
            opts.headers['Sec-WebSocket-Origin'] = opts.origin;
        } else {
            opts.headers.Origin = opts.origin;
        }
    }
    if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
    }
    if (isIpcUrl) {
        const parts = opts.path.split(':');
        opts.socketPath = parts[0];
        opts.path = parts[1];
    }
    let req;
    if (opts.followRedirects) {
        if (websocket._redirects === 0) {
            websocket._originalIpc = isIpcUrl;
            websocket._originalSecure = isSecure;
            websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
            const headers = options && options.headers;
            //
            // Shallow copy the user provided options so that headers can be changed
            // without mutating the original object.
            //
            options = {
                ...options,
                headers: {}
            };
            if (headers) {
                for (const [key, value] of Object.entries(headers)){
                    options.headers[key.toLowerCase()] = value;
                }
            }
        } else if (websocket.listenerCount('redirect') === 0) {
            const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
            if (!isSameHost || websocket._originalSecure && !isSecure) {
                //
                // Match curl 7.77.0 behavior and drop the following headers. These
                // headers are also dropped when following a redirect to a subdomain.
                //
                delete opts.headers.authorization;
                delete opts.headers.cookie;
                if (!isSameHost) delete opts.headers.host;
                opts.auth = undefined;
            }
        }
        //
        // Match curl 7.77.0 behavior and make the first `Authorization` header win.
        // If the `Authorization` header is set, then there is nothing to do as it
        // will take precedence.
        //
        if (opts.auth && !options.headers.authorization) {
            options.headers.authorization = 'Basic ' + Buffer.from(opts.auth).toString('base64');
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
            //
            // Unlike what is done for the `'upgrade'` event, no early exit is
            // triggered here if the user calls `websocket.close()` or
            // `websocket.terminate()` from a listener of the `'redirect'` event. This
            // is because the user can also call `request.destroy()` with an error
            // before calling `websocket.close()` or `websocket.terminate()` and this
            // would result in an error being emitted on the `request` object with no
            // `'error'` event listeners attached.
            //
            websocket.emit('redirect', websocket.url, req);
        }
    } else {
        req = websocket._req = request(opts);
    }
    if (opts.timeout) {
        req.on('timeout', ()=>{
            abortHandshake(websocket, req, 'Opening handshake has timed out');
        });
    }
    req.on('error', (err)=>{
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
    });
    req.on('response', (res)=>{
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
            if (++websocket._redirects > opts.maxRedirects) {
                abortHandshake(websocket, req, 'Maximum redirects exceeded');
                return;
            }
            req.abort();
            let addr;
            try {
                addr = new URL(location, address);
            } catch (e) {
                const err = new SyntaxError(`Invalid URL: ${location}`);
                emitErrorAndClose(websocket, err);
                return;
            }
            initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit('unexpected-response', req, res)) {
            abortHandshake(websocket, req, `Unexpected server response: ${res.statusCode}`);
        }
    });
    req.on('upgrade', (res, socket, head)=>{
        websocket.emit('upgrade', res);
        //
        // The user may have closed the connection from a listener of the
        // `'upgrade'` event.
        //
        if (websocket.readyState !== WebSocket.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === undefined || upgrade.toLowerCase() !== 'websocket') {
            abortHandshake(websocket, socket, 'Invalid Upgrade header');
            return;
        }
        const digest = createHash('sha1').update(key + GUID).digest('base64');
        if (res.headers['sec-websocket-accept'] !== digest) {
            abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
            return;
        }
        const serverProt = res.headers['sec-websocket-protocol'];
        let protError;
        if (serverProt !== undefined) {
            if (!protocolSet.size) {
                protError = 'Server sent a subprotocol but none was requested';
            } else if (!protocolSet.has(serverProt)) {
                protError = 'Server sent an invalid subprotocol';
            }
        } else if (protocolSet.size) {
            protError = 'Server sent no subprotocol';
        }
        if (protError) {
            abortHandshake(websocket, socket, protError);
            return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers['sec-websocket-extensions'];
        if (secWebSocketExtensions !== undefined) {
            if (!perMessageDeflate) {
                const message = 'Server sent a Sec-WebSocket-Extensions header but no extension ' + 'was requested';
                abortHandshake(websocket, socket, message);
                return;
            }
            let extensions;
            try {
                extensions = parse(secWebSocketExtensions);
            } catch (err) {
                const message = 'Invalid Sec-WebSocket-Extensions header';
                abortHandshake(websocket, socket, message);
                return;
            }
            const extensionNames = Object.keys(extensions);
            if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
                const message = 'Server indicated an extension that was not requested';
                abortHandshake(websocket, socket, message);
                return;
            }
            try {
                perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
            } catch (err) {
                const message = 'Invalid Sec-WebSocket-Extensions header';
                abortHandshake(websocket, socket, message);
                return;
            }
            websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
            allowSynchronousEvents: opts.allowSynchronousEvents,
            generateMask: opts.generateMask,
            maxPayload: opts.maxPayload,
            skipUTF8Validation: opts.skipUTF8Validation
        });
    });
    if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
    } else {
        req.end();
    }
}
/**
 * Emit the `'error'` and `'close'` events.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {Error} The error to emit
 * @private
 */ function emitErrorAndClose(websocket, err) {
    websocket._readyState = WebSocket.CLOSING;
    websocket.emit('error', err);
    websocket.emitClose();
}
/**
 * Create a `net.Socket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {net.Socket} The newly created socket used to start the connection
 * @private
 */ function netConnect(options) {
    options.path = options.socketPath;
    return net.connect(options);
}
/**
 * Create a `tls.TLSSocket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {tls.TLSSocket} The newly created socket used to start the connection
 * @private
 */ function tlsConnect(options) {
    options.path = undefined;
    if (!options.servername && options.servername !== '') {
        options.servername = net.isIP(options.host) ? '' : options.host;
    }
    return tls.connect(options);
}
/**
 * Abort the handshake and emit an error.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
 *     abort or the socket to destroy
 * @param {String} message The error message
 * @private
 */ function abortHandshake(websocket, stream, message) {
    websocket._readyState = WebSocket.CLOSING;
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshake);
    if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
            //
            // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
            // called after the request completed. See
            // https://github.com/websockets/ws/issues/1869.
            //
            stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
    } else {
        stream.destroy(err);
        stream.once('error', websocket.emit.bind(websocket, 'error'));
        stream.once('close', websocket.emitClose.bind(websocket));
    }
}
/**
 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {*} [data] The data to send
 * @param {Function} [cb] Callback
 * @private
 */ function sendAfterClose(websocket, data, cb) {
    if (data) {
        const length = toBuffer(data).length;
        //
        // The `_bufferedAmount` property is used only when the peer is a client and
        // the opening handshake fails. Under these circumstances, in fact, the
        // `setSocket()` method is not called, so the `_socket` and `_sender`
        // properties are set to `null`.
        //
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
    }
    if (cb) {
        const err = new Error(`WebSocket is not open: readyState ${websocket.readyState} ` + `(${readyStates[websocket.readyState]})`);
        process.nextTick(cb, err);
    }
}
/**
 * The listener of the `Receiver` `'conclude'` event.
 *
 * @param {Number} code The status code
 * @param {Buffer} reason The reason for closing
 * @private
 */ function receiverOnConclude(code, reason) {
    const websocket = this[kWebSocket];
    websocket._closeFrameReceived = true;
    websocket._closeMessage = reason;
    websocket._closeCode = code;
    if (websocket._socket[kWebSocket] === undefined) return;
    websocket._socket.removeListener('data', socketOnData);
    process.nextTick(resume, websocket._socket);
    if (code === 1005) websocket.close();
    else websocket.close(code, reason);
}
/**
 * The listener of the `Receiver` `'drain'` event.
 *
 * @private
 */ function receiverOnDrain() {
    const websocket = this[kWebSocket];
    if (!websocket.isPaused) websocket._socket.resume();
}
/**
 * The listener of the `Receiver` `'error'` event.
 *
 * @param {(RangeError|Error)} err The emitted error
 * @private
 */ function receiverOnError(err) {
    const websocket = this[kWebSocket];
    if (websocket._socket[kWebSocket] !== undefined) {
        websocket._socket.removeListener('data', socketOnData);
        //
        // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
        // https://github.com/websockets/ws/issues/1940.
        //
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
    }
    websocket.emit('error', err);
}
/**
 * The listener of the `Receiver` `'finish'` event.
 *
 * @private
 */ function receiverOnFinish() {
    this[kWebSocket].emitClose();
}
/**
 * The listener of the `Receiver` `'message'` event.
 *
 * @param {Buffer|ArrayBuffer|Buffer[])} data The message
 * @param {Boolean} isBinary Specifies whether the message is binary or not
 * @private
 */ function receiverOnMessage(data, isBinary) {
    this[kWebSocket].emit('message', data, isBinary);
}
/**
 * The listener of the `Receiver` `'ping'` event.
 *
 * @param {Buffer} data The data included in the ping frame
 * @private
 */ function receiverOnPing(data) {
    const websocket = this[kWebSocket];
    if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
    websocket.emit('ping', data);
}
/**
 * The listener of the `Receiver` `'pong'` event.
 *
 * @param {Buffer} data The data included in the pong frame
 * @private
 */ function receiverOnPong(data) {
    this[kWebSocket].emit('pong', data);
}
/**
 * Resume a readable stream
 *
 * @param {Readable} stream The readable stream
 * @private
 */ function resume(stream) {
    stream.resume();
}
/**
 * The listener of the socket `'close'` event.
 *
 * @private
 */ function socketOnClose() {
    const websocket = this[kWebSocket];
    this.removeListener('close', socketOnClose);
    this.removeListener('data', socketOnData);
    this.removeListener('end', socketOnEnd);
    websocket._readyState = WebSocket.CLOSING;
    let chunk;
    //
    // The close frame might not have been received or the `'end'` event emitted,
    // for example, if the socket was destroyed due to an error. Ensure that the
    // `receiver` stream is closed after writing any remaining buffered data to
    // it. If the readable side of the socket is in flowing mode then there is no
    // buffered data as everything has been already written and `readable.read()`
    // will return `null`. If instead, the socket is paused, any possible buffered
    // data will be read as a single chunk.
    //
    if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && (chunk = websocket._socket.read()) !== null) {
        websocket._receiver.write(chunk);
    }
    websocket._receiver.end();
    this[kWebSocket] = undefined;
    clearTimeout(websocket._closeTimer);
    if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
    } else {
        websocket._receiver.on('error', receiverOnFinish);
        websocket._receiver.on('finish', receiverOnFinish);
    }
}
/**
 * The listener of the socket `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function socketOnData(chunk) {
    if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
    }
}
/**
 * The listener of the socket `'end'` event.
 *
 * @private
 */ function socketOnEnd() {
    const websocket = this[kWebSocket];
    websocket._readyState = WebSocket.CLOSING;
    websocket._receiver.end();
    this.end();
}
/**
 * The listener of the socket `'error'` event.
 *
 * @private
 */ function socketOnError() {
    const websocket = this[kWebSocket];
    this.removeListener('error', socketOnError);
    this.on('error', NOOP);
    if (websocket) {
        websocket._readyState = WebSocket.CLOSING;
        this.destroy();
    }
}
}}),
"[project]/node_modules/ethers/node_modules/ws/lib/websocket.js [app-rsc] (ecmascript) <export default as WebSocket>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "WebSocket": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f$ws$2f$lib$2f$websocket$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f$ws$2f$lib$2f$websocket$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ethers/node_modules/ws/lib/websocket.js [app-rsc] (ecmascript)");
}}),

};

//# sourceMappingURL=004bd_d7d9e7._.js.map
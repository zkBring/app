module.exports = {

"[externals]/ [external] (tty, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("tty");

module.exports = mod;
}}),
"[externals]/ [external] (websocket, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("websocket");

module.exports = mod;
}}),
"[project]/src/utils/define-alchemy-network.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$alchemy$2d$sdk$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/alchemy-sdk/dist/cjs/index.js [app-ssr] (ecmascript)");
;
const defineAlchemyNetwork = (chainId)=>{
    if (!chainId) {
        return;
    }
    switch(Number(chainId)){
        case 1:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$alchemy$2d$sdk$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Network"].ETH_MAINNET;
        case 137:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$alchemy$2d$sdk$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Network"].MATIC_MAINNET;
        case 8453:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$alchemy$2d$sdk$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Network"].BASE_MAINNET;
        default:
            return;
    }
};
const __TURBOPACK__default__export__ = defineAlchemyNetwork;
}}),
"[project]/src/utils/define-alchemy-network.tsx [app-ssr] (ecmascript) <export default as defineAlchemyNetwork>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "defineAlchemyNetwork": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$alchemy$2d$network$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$alchemy$2d$network$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/define-alchemy-network.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/utils/create-alchemy-instance.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/configs/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$alchemy$2d$network$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineAlchemyNetwork$3e$__ = __turbopack_import__("[project]/src/utils/define-alchemy-network.tsx [app-ssr] (ecmascript) <export default as defineAlchemyNetwork>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$alchemy$2d$sdk$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/alchemy-sdk/dist/cjs/index.js [app-ssr] (ecmascript)");
;
;
;
const createAlchemyInstance = (chainId)=>{
    const alchemyNetwork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$alchemy$2d$network$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineAlchemyNetwork$3e$__["defineAlchemyNetwork"])(chainId);
    if (!alchemyNetwork) {
        return;
    }
    const alchemy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$alchemy$2d$sdk$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alchemy"]({
        apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alchemyApiKey"],
        network: alchemyNetwork
    });
    return alchemy;
};
const __TURBOPACK__default__export__ = createAlchemyInstance;
}}),
"[project]/src/abi/erc20-contract.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"faucet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]"));}}),
"[project]/src/abi/erc1155-contract.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]"));}}),
"[project]/src/abi/erc721-contract.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]"));}}),
"[project]/src/abi/index.tsx [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
}}),
"[project]/src/abi/index.tsx [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc20$2d$contract$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/abi/erc20-contract.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc1155$2d$contract$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/abi/erc1155-contract.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc721$2d$contract$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/abi/erc721-contract.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/abi/index.tsx [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/utils/create-alchemy-instance.tsx [app-ssr] (ecmascript) <export default as createAlchemyInstance>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createAlchemyInstance": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$create$2d$alchemy$2d$instance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$create$2d$alchemy$2d$instance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/create-alchemy-instance.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/utils/define-json-rpc.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/configs/index.tsx [app-ssr] (ecmascript)");
;
const defineJSONRpcUrl = (chainId)=>{
    switch(chainId){
        case 1:
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonRPCMainnet"];
        case 137:
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonRPCPolygon"];
        case 543210:
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonRPCZero"];
        case 13371:
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonRPCZKEVM"];
        case 8453:
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonRPCBase"];
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonRPCBase"];
    }
};
const __TURBOPACK__default__export__ = defineJSONRpcUrl;
}}),
"[project]/src/utils/define-json-rpc.tsx [app-ssr] (ecmascript) <export default as defineJSONRPC>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "defineJSONRPC": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/define-json-rpc.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/abi/erc20-contract.json (json) <export default as ERC20Contract>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ERC20Contract": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc20$2d$contract$2e$json__$28$json$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc20$2d$contract$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/abi/erc20-contract.json (json)");
}}),
"[project]/src/utils/get-erc20-token-data.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/abi/index.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$create$2d$alchemy$2d$instance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createAlchemyInstance$3e$__ = __turbopack_import__("[project]/src/utils/create-alchemy-instance.tsx [app-ssr] (ecmascript) <export default as createAlchemyInstance>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineJSONRPC$3e$__ = __turbopack_import__("[project]/src/utils/define-json-rpc.tsx [app-ssr] (ecmascript) <export default as defineJSONRPC>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_import__("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc20$2d$contract$2e$json__$28$json$29$__$3c$export__default__as__ERC20Contract$3e$__ = __turbopack_import__("[project]/src/abi/erc20-contract.json (json) <export default as ERC20Contract>");
;
;
;
const getTokenERC20Data = async (tokenAddress, chainId)=>{
    try {
        const alchemy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$create$2d$alchemy$2d$instance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createAlchemyInstance$3e$__["createAlchemyInstance"])(chainId);
        if (!alchemy) {
            throw new Error('No Alchemy instance is created');
        }
        const tokenData = await alchemy.core.getTokenMetadata(tokenAddress);
        const { symbol, decimals, logo } = tokenData;
        return {
            symbol: symbol || 'ERC20 Token',
            decimals: Number(decimals),
            description: '',
            image: logo || undefined,
            standard: 'ERC20',
            address: tokenAddress
        };
    } catch (err) {
        console.log(err);
        try {
            const jsonRpcUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineJSONRPC$3e$__["defineJSONRPC"])(chainId);
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(jsonRpcUrl, chainId, {
                staticNetwork: true
            });
            const contractInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(tokenAddress, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc20$2d$contract$2e$json__$28$json$29$__$3c$export__default__as__ERC20Contract$3e$__["ERC20Contract"], provider);
            const symbol = await contractInstance.symbol();
            const decimals = await contractInstance.decimals();
            return {
                symbol,
                decimals,
                description: '',
                standard: 'ERC20',
                address: tokenAddress
            };
        } catch (err) {
            console.log(err);
            return {
                symbol: 'ERC20 Token',
                decimals: 18,
                description: '',
                standard: 'ERC20',
                address: tokenAddress
            };
        }
    }
};
const __TURBOPACK__default__export__ = getTokenERC20Data;
}}),
"[project]/src/utils/define-network-name.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const defineNetworkName = (chainId)=>{
    switch(chainId){
        case 1:
            return 'mainnet';
        case 137:
            return 'polygon';
        case 8453:
            return 'base';
        case 13371:
            return 'immutableZkevm';
        case 196:
            return 'xlayer';
        case 543210:
            return 'zero';
        default:
            return 'mainnet';
    }
};
const __TURBOPACK__default__export__ = defineNetworkName;
}}),
"[project]/src/app/configs/chains.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "zeroChain": (()=>zeroChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/configs/index.tsx [app-ssr] (ecmascript)");
;
const zeroChain = {
    id: 543210,
    name: 'ZERϴ Network',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.zerion.io/v1/zero'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Zerion Explorer',
            url: 'https://explorer.zero.network/'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1142990
        }
    }
};
const chains = {
    137: {
        chainName: 'Polygon',
        displayName: 'Polygon',
        defaultWalletApp: 'coinbase_smart_wallet',
        testnet: false,
        alchemySupport: true,
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18
        },
        rpcUrls: [
            'https://poly-rpc.gateway.pokt.network/'
        ],
        blockExplorerUrls: [
            'https://polygonscan.com'
        ]
    },
    1: {
        chainName: 'Ethereum Mainnet',
        displayName: 'Mainnet',
        defaultWalletApp: 'coinbase_smart_wallet',
        testnet: false,
        alchemySupport: true,
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: [
            `https://mainnet.infura.io/v3/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alchemyApiKey"]}`
        ],
        blockExplorerUrls: [
            'https://etherscan.io'
        ]
    },
    13371: {
        chainName: 'Immutable zkEVM',
        displayName: 'Immutable zkEVM',
        defaultWalletApp: 'coinbase_smart_wallet',
        testnet: false,
        alchemySupport: false,
        nativeCurrency: {
            name: 'IMX',
            symbol: 'IMX',
            decimals: 18
        },
        rpcUrls: [
            'https://immutable-zkevm.drpc.org'
        ],
        blockExplorerUrls: [
            'https://explorer.immutable.com'
        ]
    },
    8453: {
        chainName: 'Base',
        defaultWalletApp: 'coinbase_smart_wallet',
        displayName: 'Base',
        testnet: false,
        alchemySupport: false,
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: [
            'https://developer-access-mainnet.base.org'
        ],
        blockExplorerUrls: [
            'https://basescan.org'
        ]
    }
};
const __TURBOPACK__default__export__ = chains;
}}),
"[project]/src/utils/define-explorer-url.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$chains$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/configs/chains.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$network$2d$name$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/define-network-name.tsx [app-ssr] (ecmascript)");
;
;
const defineExplorerURL = (chainId)=>{
    const chainConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$chains$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][chainId];
    if (chainConfig) {
        const { blockExplorerUrls } = chainConfig;
        if (blockExplorerUrls) {
            const explorerURL = blockExplorerUrls[0];
            if (explorerURL) {
                return explorerURL;
            }
        }
    }
    const networkName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$network$2d$name$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(chainId);
    return `https://${networkName}.etherscan.io`;
};
const __TURBOPACK__default__export__ = defineExplorerURL;
}}),
"[project]/src/utils/check-redeem-status.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineJSONRPC$3e$__ = __turbopack_import__("[project]/src/utils/define-json-rpc.tsx [app-ssr] (ecmascript) <export default as defineJSONRPC>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_import__("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
;
;
const checkRedeemStatus = (claimLink, txHash, chainId, optimisticClaimUI)=>{
    return new Promise((resolve, reject)=>{
        (async ()=>{
            const interval = window.setInterval(async ()=>{
                if (claimLink) {
                    const statusData = await claimLink.getStatus();
                    if (statusData) {
                        const { status } = statusData;
                        if (status === 'redeeming') {
                            if (optimisticClaimUI) {
                                resolve(true);
                                clearInterval(interval);
                            }
                        } else if (status === 'redeemed') {
                            resolve(true);
                            clearInterval(interval);
                        } else if (status === 'cancelled' || status === 'error') {
                            reject();
                        } else if (status === 'deposited') {
                            // second claim for the same batch to the same wallet address
                            const jsonRpcUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineJSONRPC$3e$__["defineJSONRPC"])(chainId);
                            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(jsonRpcUrl, chainId, {
                                staticNetwork: true
                            });
                            const receipt = await provider.getTransactionReceipt(txHash);
                            if (receipt && receipt.status !== undefined && receipt.status === 1) {
                                resolve(true);
                            }
                        }
                    }
                }
            }, 1000);
        })();
    });
};
const __TURBOPACK__default__export__ = checkRedeemStatus;
}}),
"[project]/src/utils/ipfs-redefine-url.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const ipfsPinataGatewayUrl = 'https://gateway.pinata.cloud/ipfs';
const addTokenIdToIPFS = (url, tokenId)=>{
    if (url.indexOf('{id}') > -1) {
        if (tokenId !== undefined) {
            return url.replace('0x{id}', tokenId).replace('{id}', tokenId);
        }
        return url;
    } else {
        return url;
    }
};
const redefineURL = (url, tokenId)=>{
    if (url.startsWith('ipfs://')) {
        const urlUpdated = `${ipfsPinataGatewayUrl}/${url.replaceAll('ipfs://', '').replaceAll('ipfs/', '')}`;
        return addTokenIdToIPFS(urlUpdated, tokenId);
    } else {
        return addTokenIdToIPFS(url, tokenId);
    }
};
const __TURBOPACK__default__export__ = redefineURL;
}}),
"[project]/src/utils/ipfs-redefine-url.tsx [app-ssr] (ecmascript) <export default as ipfsRedefineURL>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ipfsRedefineURL": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ipfs$2d$redefine$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ipfs$2d$redefine$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/ipfs-redefine-url.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/utils/get-valid-image.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ipfs$2d$redefine$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ipfsRedefineURL$3e$__ = __turbopack_import__("[project]/src/utils/ipfs-redefine-url.tsx [app-ssr] (ecmascript) <export default as ipfsRedefineURL>");
;
const getValidImage = async (imageUrl)=>{
    if (!imageUrl) {
        return '';
    }
    try {
        const redefinedURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ipfs$2d$redefine$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ipfsRedefineURL$3e$__["ipfsRedefineURL"])(imageUrl);
        const checkImage = await fetch(redefinedURL);
        if (checkImage.status === 404) {
            throw new Error();
        }
        return redefinedURL;
    } catch (err) {
        console.log(err);
        return '';
    }
};
const __TURBOPACK__default__export__ = getValidImage;
}}),
"[project]/src/utils/get-valid-image.tsx [app-ssr] (ecmascript) <export default as getValidImage>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getValidImage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$valid$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$valid$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/get-valid-image.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/utils/get-alchemy-token-image.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$valid$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getValidImage$3e$__ = __turbopack_import__("[project]/src/utils/get-valid-image.tsx [app-ssr] (ecmascript) <export default as getValidImage>");
;
const getAlchemyTokenImage = async (tokenData)=>{
    if (tokenData.rawMetadata) {
        if (tokenData.rawMetadata.image) {
            const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$valid$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getValidImage$3e$__["getValidImage"])(tokenData.rawMetadata.image);
            return image;
        }
        if (tokenData.rawMetadata.animation_url) {
            const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$valid$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getValidImage$3e$__["getValidImage"])(tokenData.rawMetadata.animation_url);
            return image;
        }
    } else if (tokenData.media && tokenData.media[0] && tokenData.media[0].raw) {
        const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$valid$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getValidImage$3e$__["getValidImage"])(tokenData.media[0].raw);
        return image;
    }
    return;
};
const __TURBOPACK__default__export__ = getAlchemyTokenImage;
}}),
"[project]/src/app/api/get-qr-data/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/configs/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
;
const getQRData = (qrId)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardServerURL"]}/api/v2/user/QR/${qrId}`, {
        headers: {
            'Authorization': `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardApiKey"]}`
        }
    });
};
const __TURBOPACK__default__export__ = getQRData;
}}),
"[project]/src/app/api/get-erc721-token-data/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const getERC721TokenData = (url)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(url);
};
const __TURBOPACK__default__export__ = getERC721TokenData;
}}),
"[project]/src/utils/metadata-resolve-url.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const metadataUrlResolve = (ipfsUrl, tokenId)=>{
    if (ipfsUrl.indexOf('{id}') === -1) {
        return ipfsUrl;
    }
    const tokenIdAsUrlString = `${new Array(64 - tokenId.length).fill(0).join('')}${tokenId}`;
    return ipfsUrl.replace('{id}', tokenIdAsUrlString);
};
const __TURBOPACK__default__export__ = metadataUrlResolve;
}}),
"[project]/src/utils/metadata-resolve-url.tsx [app-ssr] (ecmascript) <export default as metadataUrlResolve>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "metadataUrlResolve": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$metadata$2d$resolve$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$metadata$2d$resolve$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/metadata-resolve-url.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/app/api/get-erc1155-token-data/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$metadata$2d$resolve$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__metadataUrlResolve$3e$__ = __turbopack_import__("[project]/src/utils/metadata-resolve-url.tsx [app-ssr] (ecmascript) <export default as metadataUrlResolve>");
;
;
const getERC1155TokenData = (url, tokenId)=>{
    const tokenDataURL = url.replace('0x{id}', tokenId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$metadata$2d$resolve$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__metadataUrlResolve$3e$__["metadataUrlResolve"])(tokenDataURL, tokenId), {
        timeout: 1500
    });
};
const __TURBOPACK__default__export__ = getERC1155TokenData;
}}),
"[project]/src/app/api/index.tsx [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
}}),
"[project]/src/app/api/index.tsx [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$get$2d$qr$2d$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/get-qr-data/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$get$2d$erc721$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/get-erc721-token-data/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$get$2d$erc1155$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/get-erc1155-token-data/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/app/api/index.tsx [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/utils/get-alchemy-token-image.tsx [app-ssr] (ecmascript) <export default as getAlchemyTokenImage>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getAlchemyTokenImage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$alchemy$2d$token$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$alchemy$2d$token$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/get-alchemy-token-image.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/abi/erc721-contract.json (json) <export default as ERC721Contract>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ERC721Contract": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc721$2d$contract$2e$json__$28$json$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc721$2d$contract$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/abi/erc721-contract.json (json)");
}}),
"[project]/src/app/api/get-erc721-token-data/index.tsx [app-ssr] (ecmascript) <export default as getERC721TokenData>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getERC721TokenData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$get$2d$erc721$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$get$2d$erc721$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/get-erc721-token-data/index.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/utils/get-erc721-token-data.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/abi/index.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/app/api/index.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$create$2d$alchemy$2d$instance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createAlchemyInstance$3e$__ = __turbopack_import__("[project]/src/utils/create-alchemy-instance.tsx [app-ssr] (ecmascript) <export default as createAlchemyInstance>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$alchemy$2d$token$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getAlchemyTokenImage$3e$__ = __turbopack_import__("[project]/src/utils/get-alchemy-token-image.tsx [app-ssr] (ecmascript) <export default as getAlchemyTokenImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineJSONRPC$3e$__ = __turbopack_import__("[project]/src/utils/define-json-rpc.tsx [app-ssr] (ecmascript) <export default as defineJSONRPC>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_import__("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc721$2d$contract$2e$json__$28$json$29$__$3c$export__default__as__ERC721Contract$3e$__ = __turbopack_import__("[project]/src/abi/erc721-contract.json (json) <export default as ERC721Contract>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ipfs$2d$redefine$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ipfsRedefineURL$3e$__ = __turbopack_import__("[project]/src/utils/ipfs-redefine-url.tsx [app-ssr] (ecmascript) <export default as ipfsRedefineURL>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$get$2d$erc721$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getERC721TokenData$3e$__ = __turbopack_import__("[project]/src/app/api/get-erc721-token-data/index.tsx [app-ssr] (ecmascript) <export default as getERC721TokenData>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$valid$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getValidImage$3e$__ = __turbopack_import__("[project]/src/utils/get-valid-image.tsx [app-ssr] (ecmascript) <export default as getValidImage>");
;
;
;
;
const getTokenERC721Data = async (tokenAddress, chainId, tokenId)=>{
    try {
        const alchemy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$create$2d$alchemy$2d$instance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createAlchemyInstance$3e$__["createAlchemyInstance"])(chainId);
        if (!alchemy) {
            throw new Error('No Alchemy instance is created');
        }
        const tokenData = await alchemy.nft.getNftMetadata(tokenAddress, tokenId);
        const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$alchemy$2d$token$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getAlchemyTokenImage$3e$__["getAlchemyTokenImage"])(tokenData);
        return {
            name: tokenData.name || 'ERC721 Token',
            image: image || '',
            description: tokenData.description,
            standard: 'ERC721',
            address: tokenAddress,
            decimals: 0,
            id: tokenId,
            symbol: 'ERC721 Token'
        };
    } catch (err) {
        console.log({
            err
        });
        try {
            const jsonRpcUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineJSONRPC$3e$__["defineJSONRPC"])(chainId);
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(jsonRpcUrl, chainId, {
                staticNetwork: true
            });
            const contractInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(tokenAddress, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc721$2d$contract$2e$json__$28$json$29$__$3c$export__default__as__ERC721Contract$3e$__["ERC721Contract"], provider);
            const actualUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ipfs$2d$redefine$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ipfsRedefineURL$3e$__["ipfsRedefineURL"])(await contractInstance.tokenURI(tokenId), tokenId);
            const tokenData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$get$2d$erc721$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getERC721TokenData$3e$__["getERC721TokenData"])(actualUrl);
            const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$valid$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getValidImage$3e$__["getValidImage"])(tokenData.data.animation_url || tokenData.data.image);
            return {
                decimals: 0,
                description: '',
                standard: 'ERC721',
                address: tokenAddress,
                id: tokenId,
                image,
                symbol: tokenData.data.name
            };
        } catch (err) {
            console.log({
                err
            });
            return {
                symbol: 'ERC721 Token',
                decimals: 0,
                description: '',
                standard: 'ERC721',
                address: tokenAddress,
                id: tokenId
            };
        }
    }
};
const __TURBOPACK__default__export__ = getTokenERC721Data;
}}),
"[project]/src/abi/erc1155-contract.json (json) <export default as ERC1155Contract>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ERC1155Contract": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc1155$2d$contract$2e$json__$28$json$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc1155$2d$contract$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/abi/erc1155-contract.json (json)");
}}),
"[project]/src/app/api/get-erc1155-token-data/index.tsx [app-ssr] (ecmascript) <export default as getERC1155TokenData>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getERC1155TokenData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$get$2d$erc1155$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$get$2d$erc1155$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/get-erc1155-token-data/index.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/utils/get-erc1155-token-data.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/abi/index.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/app/api/index.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$create$2d$alchemy$2d$instance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createAlchemyInstance$3e$__ = __turbopack_import__("[project]/src/utils/create-alchemy-instance.tsx [app-ssr] (ecmascript) <export default as createAlchemyInstance>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$alchemy$2d$token$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getAlchemyTokenImage$3e$__ = __turbopack_import__("[project]/src/utils/get-alchemy-token-image.tsx [app-ssr] (ecmascript) <export default as getAlchemyTokenImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineJSONRPC$3e$__ = __turbopack_import__("[project]/src/utils/define-json-rpc.tsx [app-ssr] (ecmascript) <export default as defineJSONRPC>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_import__("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc1155$2d$contract$2e$json__$28$json$29$__$3c$export__default__as__ERC1155Contract$3e$__ = __turbopack_import__("[project]/src/abi/erc1155-contract.json (json) <export default as ERC1155Contract>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ipfs$2d$redefine$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ipfsRedefineURL$3e$__ = __turbopack_import__("[project]/src/utils/ipfs-redefine-url.tsx [app-ssr] (ecmascript) <export default as ipfsRedefineURL>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$get$2d$erc1155$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getERC1155TokenData$3e$__ = __turbopack_import__("[project]/src/app/api/get-erc1155-token-data/index.tsx [app-ssr] (ecmascript) <export default as getERC1155TokenData>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$valid$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getValidImage$3e$__ = __turbopack_import__("[project]/src/utils/get-valid-image.tsx [app-ssr] (ecmascript) <export default as getValidImage>");
;
;
;
;
const getTokenERC1155Data = async (tokenAddress, chainId, tokenId, tokenName, tokenImage)=>{
    if (tokenName && tokenImage) {
        return {
            name: tokenName,
            image: tokenImage,
            description: tokenName,
            standard: 'ERC1155',
            address: tokenAddress,
            decimals: 0,
            id: tokenId,
            symbol: tokenName
        };
    }
    try {
        const alchemy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$create$2d$alchemy$2d$instance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createAlchemyInstance$3e$__["createAlchemyInstance"])(chainId);
        if (!alchemy) {
            throw new Error('No Alchemy instance is created');
        }
        const tokenData = await alchemy.nft.getNftMetadata(tokenAddress, tokenId);
        const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$alchemy$2d$token$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getAlchemyTokenImage$3e$__["getAlchemyTokenImage"])(tokenData);
        return {
            name: tokenData.name || 'ERC1155 Token',
            image: image || '',
            description: tokenData.description,
            standard: 'ERC1155',
            address: tokenAddress,
            decimals: 0,
            id: tokenId,
            symbol: 'ERC1155 Token'
        };
    } catch (err) {
        console.log({
            err
        });
        try {
            const jsonRpcUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineJSONRPC$3e$__["defineJSONRPC"])(chainId);
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(jsonRpcUrl, chainId, {
                staticNetwork: true
            });
            const contractInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(tokenAddress, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$erc1155$2d$contract$2e$json__$28$json$29$__$3c$export__default__as__ERC1155Contract$3e$__["ERC1155Contract"], provider);
            const actualUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ipfs$2d$redefine$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ipfsRedefineURL$3e$__["ipfsRedefineURL"])(await contractInstance.uri(tokenId), tokenId);
            const tokenData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$get$2d$erc1155$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getERC1155TokenData$3e$__["getERC1155TokenData"])(actualUrl, tokenId);
            const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$valid$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getValidImage$3e$__["getValidImage"])(tokenData.data.animation_url || tokenData.data.image);
            return {
                decimals: 0,
                description: '',
                standard: 'ERC1155',
                address: tokenAddress,
                id: tokenId,
                image,
                symbol: tokenData.data.name
            };
        } catch (err) {
            console.log({
                err
            });
            return {
                symbol: 'ERC1155 Token',
                decimals: 0,
                description: '',
                standard: 'ERC1155',
                address: tokenAddress,
                id: tokenId
            };
        }
    }
};
const __TURBOPACK__default__export__ = getTokenERC1155Data;
}}),
"[project]/src/utils/shorten-string.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const shortenString = (string, symbolsToShow = 5)=>{
    if (!string) return '...';
    return `${string.slice(0, symbolsToShow)}...${string.slice(-symbolsToShow)}`;
};
const __TURBOPACK__default__export__ = shortenString;
}}),
"[project]/src/utils/define-initial-claim-screen.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const defineInitialClaimScreen = (error, expiration, status)=>{
    if (error) {
        if (error === 404) {
            return 'link_not_found';
        }
    }
    if (expiration) {
        if (Number(expiration) < +new Date()) {
            return 'link_expired';
        }
    }
    if (error === 500) {
        return 'server_error';
    }
    if (status === 'redeemed') {
        return 'already_claimed';
    }
    return 'initial';
};
const __TURBOPACK__default__export__ = defineInitialClaimScreen;
}}),
"[project]/src/utils/define-qr-screen.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const defineQRScreen = (error)=>{
    if (error) {
        if (error === 404) {
            return 'qr_not_found';
        }
    }
    return 'qr_not_found';
};
const __TURBOPACK__default__export__ = defineQRScreen;
}}),
"[project]/src/utils/resolve-address.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineJSONRPC$3e$__ = __turbopack_import__("[project]/src/utils/define-json-rpc.tsx [app-ssr] (ecmascript) <export default as defineJSONRPC>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_import__("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
;
;
const resolveAddress = async (address)=>{
    if (address.length === 42 && address.startsWith('0x')) {
        return address;
    }
    const jsonRpcUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineJSONRPC$3e$__["defineJSONRPC"])(1);
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(jsonRpcUrl, 1, {
        staticNetwork: true
    });
    try {
        const resolve = await provider.resolveName(address);
        return resolve;
    } catch (e) {
        console.log(e);
        return null;
    }
};
const __TURBOPACK__default__export__ = resolveAddress;
}}),
"[project]/src/images/base-network-icon.png [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/base-network-icon.1ad00269.png");}}),
"[project]/src/images/base-network-icon.png.mjs { IMAGE => \"[project]/src/images/base-network-icon.png [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$base$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/images/base-network-icon.png [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$base$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABC0lEQVR42gWATShDcQDA/3rGu7k4OLpNSjIlB6ntFScf0Q6a7Lj+5LCDfBzmKxdkJReNg6UU5WKN8vZKJFwmHz1rmkehWCuH947/n0StrmsjUWmcXTvmTRE394i3m3GsniFp+Gp0TQyHI6F8oWzbn6i7Vzh/gONb1Ha2YgcHpCHun0vWzx/q/Rfyb5DNw/4lpHKo5bRjiuI3XuELnj7g6gXSF7B5ChsZWD/BFa1TuIFp6JiD3hWQOzB7AIlDWDjCEw2jjtk4gWqOQ1cCwkmIpSC+h4olS5aoa5GGf7xit8+ggoswuAZjW6hosmz7OyMhUVWta/Vt0ghMOpaxhNe/its375hN3dLQfLr2DzTtqbqSDmXpAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/src/images/polygon-network-icon.png [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/polygon-network-icon.cef5ca2a.png");}}),
"[project]/src/images/polygon-network-icon.png.mjs { IMAGE => \"[project]/src/images/polygon-network-icon.png [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$polygon$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/images/polygon-network-icon.png [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$polygon$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA70lEQVR42jWPu2oCURRFL0mK/EIC8RPsbA3MEJJ0iaQMpkgjaKFioWKlFoIoKIpPFBHsFRF8tmKtMv7A+JgRZqaxvFvPFYtTnXX22Ys93D3eO17cctC5mMTf1RNNwDmf2Z9cEu2Y/dklRd9WSvH/wHO/eyQ+VFwgHpaWCh0yojuxIx8UTAxLJioeDanvrYAolVFkN2OgGdDRDh8xbVgYVS1UvRpBJwHk//bo5wyMaxZaIR01n4Ze1rgCwVdRjic/VRA4LJsY1y00/Dqn98xhc8sRab0h6DJIfW2R/tnxiLxSSIAJTZvQnN00qRwZ0O4MhcGWiMp70SMAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/src/images/mainnet-network-icon.png [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/mainnet-network-icon.36d8f0c7.png");}}),
"[project]/src/images/mainnet-network-icon.png.mjs { IMAGE => \"[project]/src/images/mainnet-network-icon.png [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$mainnet$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/images/mainnet-network-icon.png [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$mainnet$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42kVPvQqCUBi9UEOP4l5v0Du4uPQ3hg1R0ZINIRFFNUUIQSBtBUFtYlOjBk3mI9w0DcVo8et+F6rhg8M5h/OdQzLZXEbIl4qibBm1Pk1qCk0YNpFDjSCQWq5T7dF0sg5hsHxAhWGpdXNQI6Jsm0g0xx5c3TfsTzHU1Ts3YSphIKkqFLTtkxv0QwT9BU/BS36GmR7CzohhtAqgO/f/BrFhGxjXmfpwvrxgc4xAHnrfFyYRCuWi1GYlFZpiiqoFgIWREwqsJJ/JTGLDMvlMdgwbKKL2AS/cm76eluT3AAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/src/images/xlayer-network-icon.png [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/xlayer-network-icon.f55f18d8.png");}}),
"[project]/src/images/xlayer-network-icon.png.mjs { IMAGE => \"[project]/src/images/xlayer-network-icon.png [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$xlayer$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/images/xlayer-network-icon.png [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$xlayer$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8ElEQVR42hWOOQqDQBiFJ0mXQCCEkLg14oKgqGDhVgjTC4J4B1tbOxX0GBaCIIgXEM/hSaacP9q+5XsPXa/XG8Mw2HGc1fd94rousSxr+3w++PTQ7/fDQRDsGGPqeR5EUQRHkJqmub/fb4zOdFEUdJ5niOMYlmWBqqogDEMqy/KKDjRJkgS6roNhGKBpGsiyDGzbBlVVyUkgZ7NtW+j7Huq6hjRNwTAMEEWRIEVR1jzP6TiOcPyAaZqgLMuTQFmW3dDr9cKapu3HKSpJEui6Dsc25ThufzweGF0ul9vz+cSHsAmCQHieJ9/vd73f7/j0/jYIYpseml7JAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/src/utils/define-network-icon.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$base$2d$network$2d$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$base$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/images/base-network-icon.png.mjs { IMAGE => "[project]/src/images/base-network-icon.png [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$polygon$2d$network$2d$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$polygon$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/images/polygon-network-icon.png.mjs { IMAGE => "[project]/src/images/polygon-network-icon.png [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$mainnet$2d$network$2d$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$mainnet$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/images/mainnet-network-icon.png.mjs { IMAGE => "[project]/src/images/mainnet-network-icon.png [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$xlayer$2d$network$2d$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$xlayer$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/images/xlayer-network-icon.png.mjs { IMAGE => "[project]/src/images/xlayer-network-icon.png [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
;
;
;
;
const defineNetworkIcon = (chainId)=>{
    switch(chainId){
        case 1:
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$mainnet$2d$network$2d$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$mainnet$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"];
        case 137:
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$polygon$2d$network$2d$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$polygon$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"];
        case 8453:
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$base$2d$network$2d$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$base$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"];
        case 196:
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$xlayer$2d$network$2d$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$xlayer$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"];
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$mainnet$2d$network$2d$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$mainnet$2d$network$2d$icon$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"];
    }
};
const __TURBOPACK__default__export__ = defineNetworkIcon;
}}),
"[project]/src/utils/generate-metadata.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const generateMetadataUtil = ({ title, description, image })=>{
    return {
        title: title || 'Linkdrop Claim App',
        description,
        openGraph: {
            title: title || 'Linkdrop Claim App',
            images: [
                image || '/meta-image.png'
            ],
            description
        }
    };
};
const __TURBOPACK__default__export__ = generateMetadataUtil;
}}),
"[project]/src/utils/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$alchemy$2d$network$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/define-alchemy-network.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$create$2d$alchemy$2d$instance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/create-alchemy-instance.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$erc20$2d$token$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/get-erc20-token-data.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$json$2d$rpc$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/define-json-rpc.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$network$2d$name$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/define-network-name.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$explorer$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/define-explorer-url.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$check$2d$redeem$2d$status$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/check-redeem-status.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ipfs$2d$redefine$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/ipfs-redefine-url.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$valid$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/get-valid-image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$alchemy$2d$token$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/get-alchemy-token-image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$erc721$2d$token$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/get-erc721-token-data.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$get$2d$erc1155$2d$token$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/get-erc1155-token-data.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$shorten$2d$string$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/shorten-string.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$initial$2d$claim$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/define-initial-claim-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$qr$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/define-qr-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$resolve$2d$address$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/resolve-address.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$network$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/define-network-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generate$2d$metadata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/generate-metadata.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$metadata$2d$resolve$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/metadata-resolve-url.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/themes/dark.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const theme = {
    colors: {
        colorName1: '#aabbcc',
        colorName2: 'hsla(50, 60%, 70%, 0.5)'
    }
};
const __TURBOPACK__default__export__ = theme;
}}),
"[project]/src/themes/light.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const themes = {
    primaryTextColor: '#121212',
    secondaryTextColor: '#FFF',
    additionalTextColor: '#9D9D9D',
    dangerTextColor: '#FF2C2C',
    highlightColor: '#0C5EFF',
    backgroundColor: '#F7F8FA',
    blankColor: '#FFF',
    primaryBorderColor: '#E4E4E4',
    buttonActionBackgroundColor: '#0C5EFF',
    buttonActionBackgroundHoverColor: '#357AFF',
    buttonActionBackgroundActiveColor: '#095AF5',
    buttonDisabledBackgroundColor: '#E4E4E4',
    buttonDefaultBackgroundColor: 'transparent',
    buttonDefaultBackgroundHoverColor: 'transparent',
    buttonDefaultBackgroundActiveColor: 'transparent',
    buttonDefaultBorderHoverColor: '#121212',
    buttonDefaultBorderActiveColor: '#121212',
    buttonDefaultDisabledBorderColor: '#E4E4E4',
    buttonDefaultDisabledTextColor: '#9D9D9D',
    buttonGradient: 'linear-gradient(to right, #00B2FF 0%, #FA00FF 50%, #00B2FF 100%)'
};
const __TURBOPACK__default__export__ = themes;
}}),
"[project]/src/themes/index.tsx [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
}}),
"[project]/src/themes/index.tsx [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$dark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/themes/dark.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$light$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/themes/light.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/themes/index.tsx [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/components/common/loader/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Loader": (()=>Loader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Loader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__Loader",
    componentId: "sc-d06ccea-0"
})`
  ${(props)=>{
    if (props.size === 'large') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        --uib-size: 40px;
        --uib-stroke: 5px;
      `;
    } else if (props.size === 'small') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        --uib-size: 16px;
        --uib-stroke: 2px;
      `;
    } else {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        --uib-size: 24px;
        --uib-stroke: 3px;
      `;
    }
}}
  
  --mask-size: calc(var(--uib-size) / 2 - var(--uib-stroke));
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
  mask: radial-gradient(circle var(--mask-size), transparent 99%, #000 100%);
  background-image: conic-gradient(transparent 25%, ${(props)=>props.theme.highlightColor});
  animation: ${rotation} .9s linear infinite;
  border-radius: 50%;
`;
}}),
"[project]/src/components/common/loader/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$loader$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/loader/styled-components.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const LoaderComponent = ({ size = 'default', className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$loader$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loader"], {
        className: className,
        size: size
    }, void 0, false, {
        fileName: "[project]/src/components/common/loader/index.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = LoaderComponent;
}}),
"[project]/src/components/common/button/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Anchor": (()=>Anchor),
    "Button": (()=>Button),
    "ButtonLoader": (()=>ButtonLoader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$loader$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/loader/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
;
const backgroundAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% { background-position: left top; }
  50% { background-position: right bottom; }
  100% { background-position: left top; }
`;
const ButtonLoader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$loader$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "styled-components__ButtonLoader",
    componentId: "sc-70ebdbfc-0"
})`
  margin-right: 8px;
`;
const Button = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.attrs((props)=>({
        className: props.className
    })).withConfig({
    displayName: "styled-components__Button",
    componentId: "sc-70ebdbfc-1"
})`
  cursor: pointer;
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 14px 30px;
  font-size: 16px;
  height: 48px;
  line-height: 1;
  display: flex;
  align-items: center;
  font-weight: 500;
  justify-content: center;
  border-radius: 12px;
  //default
  transition: color 0.3s, background-color 0.3s, border-color 0.3s;
  max-width: 345px;
  width: 100%;
  background-color: ${(props)=>props.theme && props.theme.buttonDefaultBackgroundColor};
  color: ${(props)=>props.theme && props.theme.primaryTextColor};
  border: 1px solid;
  border-color: ${(props)=>props.theme && props.theme.primaryBorderColor};
  box-sizing: border-box;

  ${(props)=>props.appearance === 'default' && props.disabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      border-color: ${(props)=>props.theme && props.theme.buttonDefaultDisabledBorderColor};
      color: ${(props)=>props.theme && props.theme.buttonDefaultDisabledTextColor};
    `}

  ${(props)=>!props.disabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      &:hover {
        border-color: ${(props)=>props.theme && props.theme.buttonDefaultBorderHoverColor};
        background-color: ${(props)=>props.theme && props.theme.buttonDefaultBackgroundHoverColor};
      }
      &:active {
        border-color: ${(props)=>props.theme && props.theme.buttonDefaultBorderActiveColor};
        background-color: ${(props)=>props.theme && props.theme.buttonDefaultBackgroundActiveColor};
      }
    `}

  ${(props)=>props.size === 'extra-small' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      padding: 4px 8px;
      height: 28px;
      font-size: 14px;
      border-radius: 8px;
    `}

  ${(props)=>props.size === 'small' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      padding: 12px 24px;
      height: 40px;
      font-size: 12px;
      border-radius: 12px;
    `}

  ${(props)=>props.appearance === 'action' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      border: none;
      background-color: ${(props)=>props.theme && props.theme.buttonActionBackgroundColor};
      color: ${(props)=>props.theme && props.theme.secondaryTextColor};

      ${!props.disabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        &:hover {
          background-color: ${(props)=>props.theme && props.theme.buttonActionBackgroundHoverColor};
        }
        &:active {
          background-color: ${(props)=>props.theme && props.theme.buttonActionBackgroundActiveColor};
        }
      `}

      ${props.disabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        background-color: ${(props)=>props.theme && props.theme.buttonDisabledBackgroundColor};
        color: ${(props)=>props.theme && props.theme.additionalTextColor};
      `}
    `}


  ${(props)=>props.appearance === 'additional' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      border: none;
      background-color: ${(props)=>props.theme && props.theme.buttonAdditionalBackgroundColor};
      color: ${(props)=>props.theme && props.theme.highlightColor};

      ${!props.disabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        &:hover {
          background-color: ${(props)=>props.theme && props.theme.buttonAdditionalBackgroundHoverColor};
          color: ${(props)=>props.theme && props.theme.buttonAdditionalTextHoverColor};
        }
        &:active {
          background-color: ${(props)=>props.theme && props.theme.buttonAdditionalBackgroundActiveColor};
          color: ${(props)=>props.theme && props.theme.buttonAdditionalTextActiveColor};
        }
      `}

      ${props.disabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        background-color: ${(props)=>props.theme && props.theme.buttonDisabledBackgroundColor};
        color: ${(props)=>props.theme && props.theme.additionalTextColor};
      `}
    `}

  ${(props)=>props.loading && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      background-image: ${(props)=>props.theme && props.theme.buttonGradient};
      background-size: 200%;
      background-position: left top;
      transition: background-position 0.3s, transform 0.3s;
      border: none;
      color: ${(props)=>props.theme && props.theme.secondaryTextColor};
      animation-name: ${backgroundAnimation};
      animation-duration: 10s;
      animation-iteration-count: infinite;
      transition: background-position 0.3s, transform 0.3s;
      background-position: left top;
      background-size: 200%;

      

      ${!props.disabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        &:hover {
          background-position: right top;
        }
        &:active {
          background-position: center center;
          transform: scale(1.01);
        }
      `}
    `}

  ${(props)=>props.disabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      cursor: not-allowed;
    `}
`;
const Anchor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "styled-components__Anchor",
    componentId: "sc-70ebdbfc-2"
})`
  text-decoration: none;
  width: 100%;
`;
}}),
"[project]/src/components/common/button/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/button/styled-components.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const ButtonOriginalComponent = ({ title, disabled = false, loading, onClick, appearance = 'default', className, size = 'default', children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        disabled: disabled,
        onClick: ()=>{
            if (loading || !onClick) {
                return;
            }
            onClick();
        },
        appearance: appearance,
        loading: loading,
        className: className,
        size: size,
        "data-testid": "button",
        children: title || children
    }, void 0, false, {
        fileName: "[project]/src/components/common/button/index.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
const ButtonComponent = (props)=>{
    const { href, to, target, className, size } = props;
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
            href: href,
            target: target,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ButtonOriginalComponent, {
                ...props,
                size: size,
                className: className
            }, void 0, false, {
                fileName: "[project]/src/components/common/button/index.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/button/index.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    if (to) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ButtonOriginalComponent, {
            ...props,
            size: size
        }, void 0, false, {
            fileName: "[project]/src/components/common/button/index.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ButtonOriginalComponent, {
        ...props,
        size: size,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/common/button/index.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = ButtonComponent;
}}),
"[project]/src/components/common/header/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Account": (()=>Account),
    "Address": (()=>Address),
    "LinkdropHeader": (()=>LinkdropHeader),
    "Logout": (()=>Logout),
    "Profile": (()=>Profile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const backgroundAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% { background-position: left top; }
  50% { background-position: right bottom; }
  100% { background-position: left top; }
`;
const LinkdropHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].header.withConfig({
    displayName: "styled-components__LinkdropHeader",
    componentId: "sc-1a3add99-0"
})`
  position: relative;
  width: 100%;
  display: flex;
  min-height: 58px;
  justify-content: center;
  align-items: center;

  ${(props)=>props.address && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
    justify-content: space-between;
  `}
`;
const Account = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__Account",
    componentId: "sc-1a3add99-1"
})`
  height: 36px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 2px 0 2px;
  color: ${(props)=>props.theme.primaryTextColor};
  justify-content: center;
  font-size: 14px;
  border-radius: 36px;
  border: 1px solid ${(props)=>props.theme.primaryBorderColor};
  background: ${(props)=>props.theme.backgroundColor};

  @media (max-width: 450px) {
    display: none;
  }
`;
const Address = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__Address",
    componentId: "sc-1a3add99-2"
})`
  height: 28px;
  border-radius: 28px;
  background: ${(props)=>props.theme.secondaryColor};
  color: ${(props)=>props.theme.primaryTextColor};
  padding: 4px 8px;
  display: flex;
  align-items: center;

  ${(props)=>props.loading && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
    color: ${props.theme.secondaryTextColor};
    background-image: ${props.theme.buttonGradient};
    animation-name: ${backgroundAnimation};
    animation-duration: 10s;
    animation-iteration-count: infinite;
    transition: background-position 0.3s, transform 0.3s;
    background-position: left top;
    background-size: 200%;
  `}
`;
const Profile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__Profile",
    componentId: "sc-1a3add99-3"
})`
  position: relative;
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: end;
  font-size: 12px;
  line-height: 36px;
  min-height: 58px;
  margin-left: auto;
  color: ${(props)=>props.theme.primaryTextColor};
`;
const Logout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__Logout",
    componentId: "sc-1a3add99-4"
})`
  border-radius: 36px;
  border: 1px solid ${(props)=>props.theme.primaryBorderColor};
  background: ${(props)=>props.theme.backgroundColor};
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s;
  svg {
    path {
      stroke: ${(props)=>props.theme.primaryTextColor};
    }
  }
  &:hover {
    ${(props)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        border-color: transparent;
        background-color: ${props.theme.tagDefaultColor};
      `;
}};
  }
`;
}}),
"[project]/src/images/linkdrop.png [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/linkdrop.7ba08957.png");}}),
"[project]/src/images/linkdrop.png.mjs { IMAGE => \"[project]/src/images/linkdrop.png [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$linkdrop$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/images/linkdrop.png [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$linkdrop$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 214,
    height: 80,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAWklEQVR42i3MPQ5AMACG4U8ISVMD7U5isonV5gD+YiIcodzCmbiY2HxNOjzLO7zIm9Pocurh+TEA4UiKKER3vV+13w8C0TIMtNBGM61Q9WFkMdpDypCQIu1kP5JLC5QyZVMeAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/src/lib/hooks.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useAppDispatch": (()=>useAppDispatch),
    "useAppSelector": (()=>useAppSelector),
    "useAppStore": (()=>useAppStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
;
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"].withTypes();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"].withTypes();
const useAppStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"].withTypes();
}}),
"[project]/src/components/icons/done-icon.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const DoneIcon = ({ className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15.9999 31.5999C24.7599 31.5999 31.5999 24.4799 31.5999 15.9999C31.5999 7.2799 24.7199 0.399902 15.9999 0.399902C7.2799 0.399902 0.399902 7.2799 0.399902 15.9999C0.399902 24.7199 7.2799 31.5999 15.9999 31.5999ZM7.4399 15.4799L9.6799 13.2399L14.6399 18.1599L23.4399 9.3999L25.6799 11.6399L14.6399 22.7199L7.4399 15.4799Z",
            fill: "#6EC85C"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/done-icon.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/done-icon.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = DoneIcon;
}}),
"[project]/src/components/icons/logout-icon.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const LogoutIcon = ({ className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.3333 8.66663V10.1733C14.3333 13.1533 13.1399 14.3466 10.1599 14.3466H10.0733C7.39327 14.3466 6.15994 13.38 5.93994 11.02",
                stroke: "#121212",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/logout-icon.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.93311 5.04003C6.13977 2.64003 7.37311 1.66003 10.0731 1.66003H10.1598C13.1398 1.66003 14.3331 2.85337 14.3331 5.83337",
                stroke: "#121212",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/logout-icon.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.0002 8H2.41357",
                stroke: "#121212",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/logout-icon.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.89984 5.76672L1.6665 8.00006L3.89984 10.2334",
                stroke: "#121212",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/logout-icon.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/logout-icon.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = LogoutIcon;
}}),
"[project]/src/components/icons/check-icon.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const CheckIcon = ({ className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        width: "31",
        height: "22",
        viewBox: "0 0 31 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1.88278",
                y1: "9.13792",
                x2: "13.1782",
                y2: "20.5959",
                stroke: "white",
                "stroke-width": "4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/check-icon.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "11.9647",
                y1: "19.0421",
                x2: "29.233",
                y2: "1.77377",
                stroke: "white",
                "stroke-width": "4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/check-icon.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/check-icon.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = CheckIcon;
}}),
"[project]/src/components/icons/index.tsx [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
}}),
"[project]/src/components/icons/index.tsx [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$done$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/done-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$logout$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/logout-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$check$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/check-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/components/icons/index.tsx [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/utils/shorten-string.tsx [app-ssr] (ecmascript) <export default as shortenString>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "shortenString": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$shorten$2d$string$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$shorten$2d$string$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/shorten-string.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/common/network-indicator/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Container": (()=>Container)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
;
const Container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "styled-components__Container",
    componentId: "sc-588e7a5d-0"
})`
  display: block;
  cursor: pointer;
  border-radius: 16px;
  margin-left: 8px;
`;
}}),
"[project]/src/utils/define-network-icon.tsx [app-ssr] (ecmascript) <export default as defineNetworkIcon>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "defineNetworkIcon": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$network$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$network$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/define-network-icon.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/common/network-indicator/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$network$2d$indicator$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/network-indicator/styled-components.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$network$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineNetworkIcon$3e$__ = __turbopack_import__("[project]/src/utils/define-network-icon.tsx [app-ssr] (ecmascript) <export default as defineNetworkIcon>");
'use client';
;
;
;
const NetworkIndicator = ({ chainId })=>{
    if (!chainId) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$network$2d$indicator$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
        alt: "network logo",
        width: "16",
        height: "16",
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$network$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineNetworkIcon$3e$__["defineNetworkIcon"])(chainId)
    }, void 0, false, {
        fileName: "[project]/src/components/common/network-indicator/index.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = NetworkIndicator;
}}),
"[project]/src/components/common/network-indicator/index.tsx [app-ssr] (ecmascript) <export default as NetworkIndicator>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "NetworkIndicator": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$network$2d$indicator$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$network$2d$indicator$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/network-indicator/index.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/icons/logout-icon.tsx [app-ssr] (ecmascript) <export default as LogoutIcon>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "LogoutIcon": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$logout$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$logout$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/logout-icon.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/common/header/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$header$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/header/styled-components.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$linkdrop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$linkdrop$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/images/linkdrop.png.mjs { IMAGE => "[project]/src/images/linkdrop.png [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/components/common/index.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/components/icons/index.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/lib/slices/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$shorten$2d$string$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__shortenString$3e$__ = __turbopack_import__("[project]/src/utils/shorten-string.tsx [app-ssr] (ecmascript) <export default as shortenString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$network$2d$indicator$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NetworkIndicator$3e$__ = __turbopack_import__("[project]/src/components/common/network-indicator/index.tsx [app-ssr] (ecmascript) <export default as NetworkIndicator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$user$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/slices/user/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$logout$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutIcon$3e$__ = __turbopack_import__("[project]/src/components/icons/logout-icon.tsx [app-ssr] (ecmascript) <export default as LogoutIcon>");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const PageHeader = ()=>{
    const { disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisconnect"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { user: { address, chainId }, link: { loading } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>({
            user: {
                chainId: state.user.chain_id,
                address: state.user.address
            },
            link: {
                loading: state.link.loading
            }
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$header$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkdropHeader"], {
        address: address,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$linkdrop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$linkdrop$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                alt: "Application Logo",
                width: "107",
                height: "40"
            }, void 0, false, {
                fileName: "[project]/src/components/common/header/index.tsx",
                lineNumber: 51,
                columnNumber: 5
            }, this),
            address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$header$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Profile"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$header$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Account"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$header$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Address"], {
                            loading: loading,
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$shorten$2d$string$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__shortenString$3e$__["shortenString"])(address),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$network$2d$indicator$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NetworkIndicator$3e$__["NetworkIndicator"], {
                                    chainId: chainId
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/header/index.tsx",
                                    lineNumber: 62,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/header/index.tsx",
                            lineNumber: 60,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/header/index.tsx",
                        lineNumber: 59,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$header$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logout"], {
                        onClick: ()=>{
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$user$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setUserAddress"])(null));
                            disconnect();
                            window.location.reload();
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$logout$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutIcon$3e$__["LogoutIcon"], {}, void 0, false, {
                            fileName: "[project]/src/components/common/header/index.tsx",
                            lineNumber: 74,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/header/index.tsx",
                        lineNumber: 67,
                        columnNumber: 8
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/header/index.tsx",
                lineNumber: 58,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/header/index.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = PageHeader;
}}),
"[project]/src/images/erc20-token-placeholder.png [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/erc20-token-placeholder.3f498607.png");}}),
"[project]/src/images/erc20-token-placeholder.png.mjs { IMAGE => \"[project]/src/images/erc20-token-placeholder.png [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$erc20$2d$token$2d$placeholder$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/images/erc20-token-placeholder.png [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$erc20$2d$token$2d$placeholder$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAiklEQVR42lWPPQoDIRCFhRR7sNzCsy4KFqIiiJV6EctM/GQTdouB4f3NPHUcx0tr/bbWnmOMyazdgMEplpRSX8SntSa9d2EHg1OoAUopEkKQnLMgBCNVEQmwHOKckxij1FoRMHMLiMXpvd8piK5TU13P7fs4IREvASfM40licUL+n7zVNLea56/mFwYhukNHyG43AAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/src/components/common/token-preview-erc20/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Container": (()=>Container),
    "ImageStyled": (()=>ImageStyled),
    "SymbolERC20": (()=>SymbolERC20),
    "TitleERC20Component": (()=>TitleERC20Component),
    "TokenAmount": (()=>TokenAmount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
;
const TokenAmount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__TokenAmount",
    componentId: "sc-8625dd9e-0"
})`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
`;
const TitleERC20Component = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h4.withConfig({
    displayName: "styled-components__TitleERC20Component",
    componentId: "sc-8625dd9e-1"
})`
  font-size: 16px;
  margin: 0 0 4px;
  color: ${(props)=>props.theme.additionalTextColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SymbolERC20 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "styled-components__SymbolERC20",
    componentId: "sc-8625dd9e-2"
})`
  color: ${(props)=>props.theme.primaryTextColor};
`;
const Container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__Container",
    componentId: "sc-8625dd9e-3"
})`
  text-align: center;
  width: 100%;
  margin-bottom: 32px;
  padding-top: 40px;
`;
const ImageStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "styled-components__ImageStyled",
    componentId: "sc-8625dd9e-4"
})`
  margin-right: 4px;
`;
}}),
"[project]/src/components/common/token-preview-erc20/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$erc20$2d$token$2d$placeholder$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$erc20$2d$token$2d$placeholder$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/images/erc20-token-placeholder.png.mjs { IMAGE => "[project]/src/images/erc20-token-placeholder.png [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$erc20$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/token-preview-erc20/styled-components.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_import__("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
'use client';
;
;
;
;
const defineTitle = (status)=>{
    switch(status){
        case 'finished':
            return 'You have received';
        case 'initial':
            return 'You were sent';
        default:
            return null;
    }
};
const ERC20TokenPreview = ({ src, amount, decimals, name, status })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$erc20$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$erc20$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleERC20Component"], {
                children: [
                    defineTitle(status),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$erc20$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageStyled"], {
                        src: src || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$erc20$2d$token$2d$placeholder$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$erc20$2d$token$2d$placeholder$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                        alt: name,
                        width: 16,
                        height: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/token-preview-erc20/index.tsx",
                        lineNumber: 38,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$erc20$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SymbolERC20"], {
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/token-preview-erc20/index.tsx",
                        lineNumber: 44,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/token-preview-erc20/index.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$erc20$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenAmount"], {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatUnits(amount, decimals)
            }, void 0, false, {
                fileName: "[project]/src/components/common/token-preview-erc20/index.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/token-preview-erc20/index.tsx",
        lineNumber: 35,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = ERC20TokenPreview;
}}),
"[project]/src/images/token-placeholder.png [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/token-placeholder.14914d99.png");}}),
"[project]/src/images/token-placeholder.png.mjs { IMAGE => \"[project]/src/images/token-placeholder.png [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$token$2d$placeholder$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/images/token-placeholder.png [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$token$2d$placeholder$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 368,
    height: 368,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAWUlEQVR42oVPQQrAIAzz/y/VmyCzMGyzptAxGG4BMSVpSMuc81gbnI5Cgg/cBjND7x1jjOAvA79aK1preIaGgRuqCu8DEQmeKcV7LAop5uNM039JnrITPUEv8Gv8SHs19mEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/src/components/common/token-image/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ImageStyled": (()=>ImageStyled),
    "TokenImage": (()=>TokenImage),
    "TokenVideo": (()=>TokenVideo),
    "TokenVideoSource": (()=>TokenVideoSource)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
;
const TokenImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].img.withConfig({
    displayName: "styled-components__TokenImage",
    componentId: "sc-3493cc25-0"
})`
  width: 226px;
  height: 226px;
  background: ${(props)=>props.theme.widgetColor};
  object-fit: cover;
  display: block; 
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
`;
const TokenVideo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].video.withConfig({
    displayName: "styled-components__TokenVideo",
    componentId: "sc-3493cc25-1"
})`
  width: 226px;
  height: 226px;
  object-fit: cover;
  display: block; 
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
`;
const TokenVideoSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].source.withConfig({
    displayName: "styled-components__TokenVideoSource",
    componentId: "sc-3493cc25-2"
})`
  
`;
const ImageStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "styled-components__ImageStyled",
    componentId: "sc-3493cc25-3"
})`
  object-fit: cover;
  display: block; 
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
`;
}}),
"[project]/src/components/common/token-image/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$token$2d$placeholder$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$token$2d$placeholder$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/src/images/token-placeholder.png.mjs { IMAGE => "[project]/src/images/token-placeholder.png [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$image$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/token-image/styled-components.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const defineSrcURL = (src)=>{
    // current solution
    if (!src.includes('ucarecdn.com')) {
        return src;
    }
    return `${src}-/preview/452x452/-/format/auto/-/quality/smart/`;
};
const TokenImageComponent = ({ src, alt, className })=>{
    if (!src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$image$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageStyled"], {
            alt: alt,
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$images$2f$token$2d$placeholder$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$images$2f$token$2d$placeholder$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            width: 226,
            height: 226,
            className: className
        }, void 0, false, {
            fileName: "[project]/src/components/common/token-image/index.tsx",
            lineNumber: 25,
            columnNumber: 12
        }, this);
    }
    if (src.includes('.mp4') || src.includes('video/mp4')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$image$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenVideo"], {
            muted: true,
            autoPlay: true,
            className: className,
            loop: true,
            playsInline: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$image$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenVideoSource"], {
                    src: src,
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/src/components/common/token-image/index.tsx",
                    lineNumber: 36,
                    columnNumber: 7
                }, this),
                "Your browser does not support the video tag."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/token-image/index.tsx",
            lineNumber: 35,
            columnNumber: 12
        }, this);
    }
    const finalSrcURL = defineSrcURL(src);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$image$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenImage"], {
        src: finalSrcURL,
        alt: alt,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/common/token-image/index.tsx",
        lineNumber: 42,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = TokenImageComponent;
}}),
"[project]/src/components/icons/done-icon.tsx [app-ssr] (ecmascript) <export default as DoneIcon>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DoneIcon": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$done$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$done$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/done-icon.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/common/token-preview-nft/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Container": (()=>Container),
    "DoneIconStyled": (()=>DoneIconStyled),
    "TokenImageStyled": (()=>TokenImageStyled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$image$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/token-image/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/components/icons/index.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$done$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DoneIcon$3e$__ = __turbopack_import__("[project]/src/components/icons/done-icon.tsx [app-ssr] (ecmascript) <export default as DoneIcon>");
;
;
;
const Container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__Container",
    componentId: "sc-716b66db-0"
})`
  position: relative;
  padding: 12px 12px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
`;
const TokenImageStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$image$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "styled-components__TokenImageStyled",
    componentId: "sc-716b66db-1"
})`
  margin-bottom: 24px;
`;
const DoneIconStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$done$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DoneIcon$3e$__["DoneIcon"]).withConfig({
    displayName: "styled-components__DoneIconStyled",
    componentId: "sc-716b66db-2"
})`
  position: absolute;
  border: 6px solid ${(props)=>props.theme.backgroundColor};
  border-radius: 100%;
  top: 0px;
  right: 0px;
  background: ${(props)=>props.theme.backgroundColor};
`;
}}),
"[project]/src/components/common/token-preview-nft/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$nft$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/token-preview-nft/styled-components.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const TokenPreviewNFT = ({ src, name, claimed })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$nft$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
        children: [
            claimed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$nft$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoneIconStyled"], {}, void 0, false, {
                fileName: "[project]/src/components/common/token-preview-nft/index.tsx",
                lineNumber: 17,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$nft$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenImageStyled"], {
                src: src,
                alt: name
            }, void 0, false, {
                fileName: "[project]/src/components/common/token-preview-nft/index.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/token-preview-nft/index.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = TokenPreviewNFT;
}}),
"[project]/src/components/common/token-preview/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$nft$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/token-preview-nft/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$erc20$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/token-preview-erc20/index.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const TokenPreview = ({ tokenStandard, name, src, className, decimals, amount, claimed })=>{
    if (tokenStandard === 'ERC20') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$erc20$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: className,
            src: src,
            name: name,
            decimals: decimals,
            amount: amount
        }, void 0, false, {
            fileName: "[project]/src/components/common/token-preview/index.tsx",
            lineNumber: 18,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$nft$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        src: src,
        claimed: claimed,
        name: name,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/common/token-preview/index.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = TokenPreview;
}}),
"[project]/src/components/common/title/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "TitleComponent": (()=>TitleComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const TitleComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h1.withConfig({
    displayName: "styled-components__TitleComponent",
    componentId: "sc-789e56c2-0"
})`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  margin: 0;
  color: ${(props)=>props.theme.primaryTextColor}
`;
}}),
"[project]/src/components/common/title/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$title$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/title/styled-components.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const Title = ({ children, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$title$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleComponent"], {
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/common/title/index.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = Title;
}}),
"[project]/src/components/common/popup/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ButtonStyled": (()=>ButtonStyled),
    "Container": (()=>Container),
    "Content": (()=>Content),
    "Controls": (()=>Controls),
    "Overlay": (()=>Overlay),
    "Subtitle": (()=>Subtitle),
    "Title": (()=>Title)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/button/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
;
const appearance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    translate: -50% 100%;
  }
  100% {
    translate: -50% 0%;
  }
`;
const overlay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "styled-components__Title",
    componentId: "sc-f69637a3-0"
})`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 12px;
  color: ${(props)=>props.theme.primaryTextColor};
`;
const Subtitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "styled-components__Subtitle",
    componentId: "sc-f69637a3-1"
})`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 24px;
  color: ${(props)=>props.theme.primaryTextColor};
`;
const Overlay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__Overlay",
    componentId: "sc-f69637a3-2"
})`
  background-color: rgba(0, 0, 0, .4);
  position: fixed;
  inset: 0;
  opacity: 0;
  animation: ${overlay} .3s forwards;
`;
const Container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__Container",
    componentId: "sc-f69637a3-3"
})`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 50%;
  translate: -50% 100%;
  max-width: 420px;
  padding: 16px;
  background-color: ${(props)=>props.theme.blankColor};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  animation: ${appearance} .3s forwards;
`;
const Content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__Content",
    componentId: "sc-f69637a3-4"
})`
`;
const Controls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__Controls",
    componentId: "sc-f69637a3-5"
})`

`;
const ButtonStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "styled-components__ButtonStyled",
    componentId: "sc-f69637a3-6"
})`
  width: 100%;
  max-width: 100%;
`;
}}),
"[project]/src/components/common/popup/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$popup$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/popup/styled-components.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const Popup = ({ children, title, subtitle, buttonAction, buttonTitle, buttonDisabled, onClose, buttonLoading })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$popup$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        onClick: (evt)=>{
            if (evt.target === evt.currentTarget) {
                onClose();
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$popup$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$popup$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/common/popup/index.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$popup$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subtitle"], {
                    children: subtitle
                }, void 0, false, {
                    fileName: "[project]/src/components/common/popup/index.tsx",
                    lineNumber: 31,
                    columnNumber: 20
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$popup$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/common/popup/index.tsx",
                    lineNumber: 32,
                    columnNumber: 7
                }, this),
                buttonAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$popup$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Controls"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$popup$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonStyled"], {
                        disabled: buttonDisabled,
                        onClick: buttonAction,
                        loading: buttonLoading,
                        appearance: "action",
                        children: buttonTitle || 'OK'
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/popup/index.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/common/popup/index.tsx",
                    lineNumber: 35,
                    columnNumber: 24
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/popup/index.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/popup/index.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = Popup;
}}),
"[project]/src/components/common/subtitle/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "SubtitleComponent": (()=>SubtitleComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const SubtitleComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "styled-components__SubtitleComponent",
    componentId: "sc-6a256ad7-0"
})`
  color: ${(props)=>props.theme.additionalTextColor};
  font-size: 14px;
  margin: 0;
  text-align: center;
`;
}}),
"[project]/src/components/common/subtitle/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$subtitle$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/subtitle/styled-components.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const Subtitle = ({ children, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$subtitle$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubtitleComponent"], {
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/common/subtitle/index.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = Subtitle;
}}),
"[project]/src/components/common/link/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "LinkComponent": (()=>LinkComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const LinkComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "styled-components__LinkComponent",
    componentId: "sc-d23ecc35-0"
})`
  color: ${(props)=>props.theme.highlightColor};
  font-size: 14px;
  text-decoration: underline;
`;
}}),
"[project]/src/components/common/link/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$link$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/link/styled-components.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const Link = ({ children, className, href, target })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$link$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkComponent"], {
        className: className,
        target: target,
        href: href,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/common/link/index.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = Link;
}}),
"[project]/src/components/common/explorer-button/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ButtonStyled": (()=>ButtonStyled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/button/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
;
const ButtonStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "styled-components__ButtonStyled",
    componentId: "sc-9e08cda2-0"
})`
  width: 100%;
  margin-bottom: 12px;
`;
}}),
"[project]/src/utils/define-explorer-url.tsx [app-ssr] (ecmascript) <export default as defineExplorerURL>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "defineExplorerURL": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$explorer$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$explorer$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/define-explorer-url.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/common/explorer-button/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$explorer$2d$button$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/explorer-button/styled-components.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$explorer$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineExplorerURL$3e$__ = __turbopack_import__("[project]/src/utils/define-explorer-url.tsx [app-ssr] (ecmascript) <export default as defineExplorerURL>");
"use client";
;
;
;
const ExplorerButton = ({ chainId, hash })=>{
    if (!chainId) {
        return null;
    }
    const explorerUrl = chainId && hash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$explorer$2d$button$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonStyled"], {
        onClick: ()=>{
            window.open(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$define$2d$explorer$2d$url$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineExplorerURL$3e$__["defineExplorerURL"])(chainId)}/tx/${hash}`, '_blank');
        },
        title: "View in Explorer"
    }, void 0, false, {
        fileName: "[project]/src/components/common/explorer-button/index.tsx",
        lineNumber: 12,
        columnNumber: 41
    }, this) : null;
    return explorerUrl;
};
const __TURBOPACK__default__export__ = ExplorerButton;
}}),
"[project]/src/components/common/custom-redirect-button/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ButtonStyled": (()=>ButtonStyled),
    "LoaderStyled": (()=>LoaderStyled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/button/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$loader$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/loader/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
;
;
const ButtonStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "styled-components__ButtonStyled",
    componentId: "sc-b530610c-0"
})`
  width: 100%;
  margin-bottom: 12px;
`;
const LoaderStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$loader$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "styled-components__LoaderStyled",
    componentId: "sc-b530610c-1"
})`

`;
}}),
"[project]/src/components/common/custom-redirect-button/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/components/common/index.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$custom$2d$redirect$2d$button$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/custom-redirect-button/styled-components.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
// import { useConnect } from 'wagmi'
const CustomRedirectButton = ({ claimingFinishedButtonTitle, claimingFinishedButtonURL, // claimingFinishedAutoRedirect
claimingFinishedButtonOn })=>{
    if (!claimingFinishedButtonOn) {
        return null;
    }
    // const { connectors } = useConnect()
    // const [ isSmartWallet, setIsSmartWallet ] = useState<boolean>(false)
    // const [ loading, setLoading ] = useState<boolean>(true)
    // useEffect(( ) => {
    //   const init = async () => {
    //     const coinbaseConnector = connectors.find(connector => connector.id === "coinbaseWalletSDK")
    //     if (coinbaseConnector) {
    //       const isAuthorized = await coinbaseConnector?.isAuthorized()
    //       setIsSmartWallet(isAuthorized)
    //     }
    //     if (claimingFinishedAutRedirect) {
    //       if (claimingFinishedButtonURL) {
    //         window.location.href = claimingFinishedButtonURL
    //         return
    //       }
    //     }
    //     setLoading(false)
    //   }
    //   init()
    // }, [])
    // if (loading) {
    //   return <LoaderStyled size='small' />
    // }
    if (claimingFinishedButtonURL) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$custom$2d$redirect$2d$button$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonStyled"], {
            onClick: ()=>{
                window.open(claimingFinishedButtonURL, '_blank');
            },
            appearance: "action",
            children: claimingFinishedButtonTitle || 'About drop'
        }, void 0, false, {
            fileName: "[project]/src/components/common/custom-redirect-button/index.tsx",
            lineNumber: 57,
            columnNumber: 12
        }, this);
    }
    // if (isSmartWallet) {
    //   return <ButtonStyled
    //     href="https://keys.coinbase.com"
    //     target='_blank'
    //     appearance='action'
    //   >
    //     See in Wallet
    //   </ButtonStyled>
    // } 
    return null;
};
const __TURBOPACK__default__export__ = CustomRedirectButton;
}}),
"[project]/src/components/common/link-button/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Button": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const Button = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "styled-components__Button",
    componentId: "sc-4471d4bd-0"
})`
  color: ${(props)=>props.theme.highlightColor};
  font-size: 16px;
  line-height: 1;
  height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
}}),
"[project]/src/components/common/link-button/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$link$2d$button$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/link-button/styled-components.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const LinkButton = ({ className, children, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$link$2d$button$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        className: className,
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/common/link-button/index.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = LinkButton;
}}),
"[project]/src/components/common/input/styled-components.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "InputAdditionalText": (()=>InputAdditionalText),
    "InputContainer": (()=>InputContainer),
    "InputField": (()=>InputField),
    "InputTitle": (()=>InputTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const InputContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.attrs((props)=>({
        className: props.className
    })).withConfig({
    displayName: "styled-components__InputContainer",
    componentId: "sc-8c41d952-0"
})`
  margin-bottom: 24px;
  box-sizing: border-box;
`;
const InputTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "styled-components__InputTitle",
    componentId: "sc-8c41d952-1"
})`
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 16px;
  margin: 0 0 12px;
  color: ${(props)=>props.theme && props.theme.primaryTextColor};

  ${(props)=>props.error && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      color: ${(props)=>props.theme && props.theme.dangerTextColor};
    `}
`;
const InputField = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "styled-components__InputField",
    componentId: "sc-8c41d952-2"
})`
  color: ${(props)=>props.theme && props.theme.primaryTextColor};
  font-size: 16px;
  width: 100%;
  line-height: 20px;
  font-weight: 500;
  padding: 11px 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  margin: 0;
  background-color: ${(props)=>props.theme.backgroundColor};

  ::placeholder {
    color: ${(props)=>props.theme && props.theme.additionalTextColor};
  }

  &:focus {
    outline: none;
    font-size: 16px;
  }

  ${(props)=>props.error && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      &:focus {
        outline: none;
      }
    `}

  ${(props)=>props.disabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      cursor: not-allowed;
      background: ${(props)=>props.theme && props.theme.inputDisabledBackgroundColor};
    `}
  &:hover:not(:focus) {
    ${(props)=>!props.error && !props.disabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        outline: none;
      `}
  }
`;
const InputAdditionalText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "styled-components__InputAdditionalText",
    componentId: "sc-8c41d952-3"
})`
  margin-top: 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: ${(props)=>props.theme && props.theme.primaryTextColor};

  ${(prosp)=>prosp.type === 'error' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      color: ${(props)=>props.theme && props.theme.dangerTextColor};
    `}
`;
}}),
"[project]/src/components/common/input/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$input$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/input/styled-components.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const InputComponent = ({ placeholder, title, disabled = false, type = 'text', onChange, error, name, value = '', className, refProp, note, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$input$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputContainer"], {
        disabled: disabled,
        error: error,
        className: className,
        onClick: onClick,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$input$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputTitle"], {
                error: error,
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/common/input/index.tsx",
                lineNumber: 32,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$input$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputField"], {
                ref: refProp,
                name: name,
                onChange: (evt)=>onChange(evt.target.value),
                type: type,
                disabled: disabled,
                placeholder: placeholder,
                value: value,
                error: error
            }, void 0, false, {
                fileName: "[project]/src/components/common/input/index.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$input$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputAdditionalText"], {
                type: "error",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/common/input/index.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$input$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputAdditionalText"], {
                type: "note",
                children: note
            }, void 0, false, {
                fileName: "[project]/src/components/common/input/index.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/input/index.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = InputComponent;
}}),
"[project]/src/components/common/index.tsx [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/src/components/common/index.tsx [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/button/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$loader$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/loader/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$header$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/header/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$erc20$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/token-preview-erc20/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2d$nft$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/token-preview-nft/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$image$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/token-image/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$token$2d$preview$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/token-preview/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$title$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/title/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$popup$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/popup/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$subtitle$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/subtitle/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$link$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/link/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$explorer$2d$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/explorer-button/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$custom$2d$redirect$2d$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/custom-redirect-button/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$link$2d$button$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/link-button/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$input$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/input/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$network$2d$indicator$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/network-indicator/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/components/common/index.tsx [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/themes/light.tsx [app-ssr] (ecmascript) <export default as light>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "light": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$light$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$light$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/themes/light.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/common/header/index.tsx [app-ssr] (ecmascript) <export default as Header>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Header": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$header$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$header$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/header/index.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/utils/generate-metadata.tsx [app-ssr] (ecmascript) <export default as generateMetadataUtil>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "generateMetadataUtil": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generate$2d$metadata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generate$2d$metadata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/generate-metadata.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/app/drops/content/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "generateMetadata": (()=>generateMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$drops$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/drops/styled-components.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$drops$2f$content$2f$search$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/drops/content/search/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/themes/index.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/components/common/index.tsx [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$light$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__light$3e$__ = __turbopack_import__("[project]/src/themes/light.tsx [app-ssr] (ecmascript) <export default as light>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$header$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Header$3e$__ = __turbopack_import__("[project]/src/components/common/header/index.tsx [app-ssr] (ecmascript) <export default as Header>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generate$2d$metadata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__generateMetadataUtil$3e$__ = __turbopack_import__("[project]/src/utils/generate-metadata.tsx [app-ssr] (ecmascript) <export default as generateMetadataUtil>");
'use client';
;
;
;
;
;
;
;
;
async function generateMetadata() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generate$2d$metadata$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__generateMetadataUtil$3e$__["generateMetadataUtil"])({
        description: `All drops`
    });
}
const Content = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{}, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$light$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__light$3e$__["light"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$header$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Header$3e$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/app/drops/content/index.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$drops$2f$styled$2d$components$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$drops$2f$content$2f$search$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onChange: (value)=>{}
                }, void 0, false, {
                    fileName: "[project]/src/app/drops/content/index.tsx",
                    lineNumber: 46,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/drops/content/index.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/drops/content/index.tsx",
        lineNumber: 43,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = Content;
}}),
"[project]/src/app/drops/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__3a5750._.js.map
module.exports = {

"[project]/node_modules/@walletconnect/universal-provider/node_modules/@walletconnect/core/dist/index.es.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "CORE_CONTEXT": (()=>ie),
    "CORE_DEFAULT": (()=>Ye),
    "CORE_PROTOCOL": (()=>ye),
    "CORE_STORAGE_OPTIONS": (()=>Je),
    "CORE_STORAGE_PREFIX": (()=>x),
    "CORE_VERSION": (()=>De),
    "CRYPTO_CLIENT_SEED": (()=>me),
    "CRYPTO_CONTEXT": (()=>Xe),
    "CRYPTO_JWT_TTL": (()=>We),
    "Core": (()=>bn),
    "Crypto": (()=>Ht),
    "ECHO_CONTEXT": (()=>It),
    "ECHO_URL": (()=>Tt),
    "EVENTS_CLIENT_API_URL": (()=>Rt),
    "EVENTS_STORAGE_CLEANUP_INTERVAL": (()=>St),
    "EVENTS_STORAGE_CONTEXT": (()=>Pt),
    "EVENTS_STORAGE_VERSION": (()=>Ct),
    "EVENT_CLIENT_AUTHENTICATE_ERRORS": (()=>Ps),
    "EVENT_CLIENT_AUTHENTICATE_TRACES": (()=>Cs),
    "EVENT_CLIENT_CONTEXT": (()=>ws),
    "EVENT_CLIENT_PAIRING_ERRORS": (()=>$),
    "EVENT_CLIENT_PAIRING_TRACES": (()=>z),
    "EVENT_CLIENT_SESSION_ERRORS": (()=>Ts),
    "EVENT_CLIENT_SESSION_TRACES": (()=>Is),
    "EXPIRER_CONTEXT": (()=>bt),
    "EXPIRER_DEFAULT_TTL": (()=>Es),
    "EXPIRER_EVENTS": (()=>S),
    "EXPIRER_STORAGE_VERSION": (()=>ft),
    "EchoClient": (()=>li),
    "EventClient": (()=>pi),
    "Expirer": (()=>hi),
    "HISTORY_CONTEXT": (()=>Dt),
    "HISTORY_EVENTS": (()=>P),
    "HISTORY_STORAGE_VERSION": (()=>mt),
    "JsonRpcHistory": (()=>ai),
    "KEYCHAIN_CONTEXT": (()=>Ze),
    "KEYCHAIN_STORAGE_VERSION": (()=>Qe),
    "KeyChain": (()=>Gt),
    "MESSAGES_CONTEXT": (()=>et),
    "MESSAGES_STORAGE_VERSION": (()=>tt),
    "MessageTracker": (()=>Yt),
    "PAIRING_CONTEXT": (()=>gt),
    "PAIRING_DEFAULT_TTL": (()=>_s),
    "PAIRING_EVENTS": (()=>V),
    "PAIRING_RPC_OPTS": (()=>B),
    "PAIRING_STORAGE_VERSION": (()=>yt),
    "PENDING_SUB_RESOLUTION_TIMEOUT": (()=>pt),
    "PUBLISHER_CONTEXT": (()=>st),
    "PUBLISHER_DEFAULT_TTL": (()=>it),
    "Pairing": (()=>oi),
    "RELAYER_CONTEXT": (()=>ot),
    "RELAYER_DEFAULT_LOGGER": (()=>nt),
    "RELAYER_DEFAULT_PROTOCOL": (()=>rt),
    "RELAYER_DEFAULT_RELAY_URL": (()=>be),
    "RELAYER_EVENTS": (()=>v),
    "RELAYER_PROVIDER_EVENTS": (()=>I),
    "RELAYER_RECONNECT_TIMEOUT": (()=>ht),
    "RELAYER_SDK_VERSION": (()=>se),
    "RELAYER_STORAGE_OPTIONS": (()=>ms),
    "RELAYER_SUBSCRIBER_SUFFIX": (()=>at),
    "RELAYER_TRANSPORT_CUTOFF": (()=>bs),
    "Relayer": (()=>ti),
    "STORE_STORAGE_VERSION": (()=>ct),
    "SUBSCRIBER_CONTEXT": (()=>ut),
    "SUBSCRIBER_DEFAULT_TTL": (()=>fs),
    "SUBSCRIBER_EVENTS": (()=>O),
    "SUBSCRIBER_STORAGE_VERSION": (()=>dt),
    "Store": (()=>ni),
    "Subscriber": (()=>Wt),
    "TRANSPORT_TYPES": (()=>M),
    "TRUSTED_VERIFY_URLS": (()=>wt),
    "VERIFY_CONTEXT": (()=>_t),
    "VERIFY_SERVER": (()=>J),
    "VERIFY_SERVER_V3": (()=>vt),
    "Verify": (()=>ci),
    "WALLETCONNECT_CLIENT_ID": (()=>lt),
    "WALLETCONNECT_LINK_MODE_APPS": (()=>fe),
    "default": (()=>ne)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/heartbeat/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$keyvaluestorage$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/keyvaluestorage/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/time/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/relay-auth/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/uint8arrays/esm/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$ws$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$isequal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash.isequal/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/window-getters/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/universal-provider/node_modules/@walletconnect/utils/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/relay-auth/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/types/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__ = __turbopack_import__("[project]/node_modules/pino/pino.js [app-ssr] (ecmascript) <export default as pino>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/relay-auth/dist/esm/utils.js [app-ssr] (ecmascript)");
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
const ye = "wc", De = 2, ie = "core", x = `${ye}@2:${ie}:`, Ye = {
    name: ie,
    logger: "error"
}, Je = {
    database: ":memory:"
}, Xe = "crypto", me = "client_ed25519_seed", We = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"], Ze = "keychain", Qe = "0.3", et = "messages", tt = "0.3", it = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIX_HOURS"], st = "publisher", rt = "irn", nt = "error", be = "wss://relay.walletconnect.org", ot = "relayer", v = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}, at = "_subscription", I = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}, ht = .1, ms = {
    database: ":memory:"
}, se = "2.17.2", bs = 1e4, M = {
    link_mode: "link_mode",
    relay: "relay"
}, ct = "0.3", lt = "WALLETCONNECT_CLIENT_ID", fe = "WALLETCONNECT_LINK_MODE_APPS", O = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}, fs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"], ut = "subscription", dt = "0.3", pt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_SECONDS"] * 1e3, gt = "pairing", yt = "0.3", _s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"], B = {
    wc_pairingDelete: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"],
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"],
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 0
        }
    }
}, V = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}, P = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}, Dt = "history", mt = "0.3", bt = "expirer", S = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}, ft = "0.3", Es = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"], _t = "verify-api", vs = "https://verify.walletconnect.com", Et = "https://verify.walletconnect.org", J = Et, vt = `${J}/v3`, wt = [
    vs,
    Et
], It = "echo", Tt = "https://echo.walletconnect.com", ws = "event-client", z = {
    pairing_started: "pairing_started",
    pairing_uri_validation_success: "pairing_uri_validation_success",
    pairing_uri_not_expired: "pairing_uri_not_expired",
    store_new_pairing: "store_new_pairing",
    subscribing_pairing_topic: "subscribing_pairing_topic",
    subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
    existing_pairing: "existing_pairing",
    pairing_not_expired: "pairing_not_expired",
    emit_inactive_pairing: "emit_inactive_pairing",
    emit_session_proposal: "emit_session_proposal",
    subscribing_to_pairing_topic: "subscribing_to_pairing_topic"
}, $ = {
    no_wss_connection: "no_wss_connection",
    no_internet_connection: "no_internet_connection",
    malformed_pairing_uri: "malformed_pairing_uri",
    active_pairing_already_exists: "active_pairing_already_exists",
    subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
    pairing_expired: "pairing_expired",
    proposal_expired: "proposal_expired",
    proposal_listener_not_found: "proposal_listener_not_found"
}, Is = {
    session_approve_started: "session_approve_started",
    proposal_not_expired: "proposal_not_expired",
    session_namespaces_validation_success: "session_namespaces_validation_success",
    create_session_topic: "create_session_topic",
    subscribing_session_topic: "subscribing_session_topic",
    subscribe_session_topic_success: "subscribe_session_topic_success",
    publishing_session_approve: "publishing_session_approve",
    session_approve_publish_success: "session_approve_publish_success",
    store_session: "store_session",
    publishing_session_settle: "publishing_session_settle",
    session_settle_publish_success: "session_settle_publish_success"
}, Ts = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    proposal_expired: "proposal_expired",
    subscribe_session_topic_failure: "subscribe_session_topic_failure",
    session_approve_publish_failure: "session_approve_publish_failure",
    session_settle_publish_failure: "session_settle_publish_failure",
    session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure",
    proposal_not_found: "proposal_not_found"
}, Cs = {
    authenticated_session_approve_started: "authenticated_session_approve_started",
    authenticated_session_not_expired: "authenticated_session_not_expired",
    chains_caip2_compliant: "chains_caip2_compliant",
    chains_evm_compliant: "chains_evm_compliant",
    create_authenticated_session_topic: "create_authenticated_session_topic",
    cacaos_verified: "cacaos_verified",
    store_authenticated_session: "store_authenticated_session",
    subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic",
    subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success",
    publishing_authenticated_session_approve: "publishing_authenticated_session_approve",
    authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success"
}, Ps = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    missing_session_authenticate_request: "missing_session_authenticate_request",
    session_authenticate_request_expired: "session_authenticate_request_expired",
    chains_caip2_compliant_failure: "chains_caip2_compliant_failure",
    chains_evm_compliant_failure: "chains_evm_compliant_failure",
    invalid_cacao: "invalid_cacao",
    subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure",
    authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure",
    authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found"
}, Ct = .1, Pt = "event-client", St = 86400, Rt = "https://pulse.walletconnect.org/batch";
function Ss(o, e) {
    if (o.length >= 255) throw new TypeError("Alphabet too long");
    for(var t = new Uint8Array(256), s = 0; s < t.length; s++)t[s] = 255;
    for(var i = 0; i < o.length; i++){
        var r = o.charAt(i), n = r.charCodeAt(0);
        if (t[n] !== 255) throw new TypeError(r + " is ambiguous");
        t[n] = i;
    }
    var a = o.length, h = o.charAt(0), c = Math.log(a) / Math.log(256), l = Math.log(256) / Math.log(a);
    function p(u) {
        if (u instanceof Uint8Array || (ArrayBuffer.isView(u) ? u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength) : Array.isArray(u) && (u = Uint8Array.from(u))), !(u instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (u.length === 0) return "";
        for(var g = 0, _ = 0, y = 0, b = u.length; y !== b && u[y] === 0;)y++, g++;
        for(var A = (b - y) * l + 1 >>> 0, T = new Uint8Array(A); y !== b;){
            for(var N = u[y], k = 0, R = A - 1; (N !== 0 || k < _) && R !== -1; R--, k++)N += 256 * T[R] >>> 0, T[R] = N % a >>> 0, N = N / a >>> 0;
            if (N !== 0) throw new Error("Non-zero carry");
            _ = k, y++;
        }
        for(var L = A - _; L !== A && T[L] === 0;)L++;
        for(var Q = h.repeat(g); L < A; ++L)Q += o.charAt(T[L]);
        return Q;
    }
    function D(u) {
        if (typeof u != "string") throw new TypeError("Expected String");
        if (u.length === 0) return new Uint8Array;
        var g = 0;
        if (u[g] !== " ") {
            for(var _ = 0, y = 0; u[g] === h;)_++, g++;
            for(var b = (u.length - g) * c + 1 >>> 0, A = new Uint8Array(b); u[g];){
                var T = t[u.charCodeAt(g)];
                if (T === 255) return;
                for(var N = 0, k = b - 1; (T !== 0 || N < y) && k !== -1; k--, N++)T += a * A[k] >>> 0, A[k] = T % 256 >>> 0, T = T / 256 >>> 0;
                if (T !== 0) throw new Error("Non-zero carry");
                y = N, g++;
            }
            if (u[g] !== " ") {
                for(var R = b - y; R !== b && A[R] === 0;)R++;
                for(var L = new Uint8Array(_ + (b - R)), Q = _; R !== b;)L[Q++] = A[R++];
                return L;
            }
        }
    }
    function m(u) {
        var g = D(u);
        if (g) return g;
        throw new Error(`Non-${e} character`);
    }
    return {
        encode: p,
        decodeUnsafe: D,
        decode: m
    };
}
var Rs = Ss, xs = Rs;
const xt = (o)=>{
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array") return o;
    if (o instanceof ArrayBuffer) return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    throw new Error("Unknown type, must be binary type");
}, Os = (o)=>new TextEncoder().encode(o), As = (o)=>new TextDecoder().decode(o);
class Ns {
    constructor(e, t, s){
        this.name = e, this.prefix = t, this.baseEncode = s;
    }
    encode(e) {
        if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type");
    }
}
class zs {
    constructor(e, t, s){
        if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s;
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length));
        } else throw Error("Can only multibase decode strings");
    }
    or(e) {
        return Ot(this, e);
    }
}
class Ls {
    constructor(e){
        this.decoders = e;
    }
    or(e) {
        return Ot(this, e);
    }
    decode(e) {
        const t = e[0], s = this.decoders[t];
        if (s) return s.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
}
const Ot = (o, e)=>new Ls({
        ...o.decoders || {
            [o.prefix]: o
        },
        ...e.decoders || {
            [e.prefix]: e
        }
    });
class $s {
    constructor(e, t, s, i){
        this.name = e, this.prefix = t, this.baseEncode = s, this.baseDecode = i, this.encoder = new Ns(e, t, s), this.decoder = new zs(e, t, i);
    }
    encode(e) {
        return this.encoder.encode(e);
    }
    decode(e) {
        return this.decoder.decode(e);
    }
}
const re = ({ name: o, prefix: e, encode: t, decode: s })=>new $s(o, e, t, s), X = ({ prefix: o, name: e, alphabet: t })=>{
    const { encode: s, decode: i } = xs(t, e);
    return re({
        prefix: o,
        name: e,
        encode: s,
        decode: (r)=>xt(i(r))
    });
}, ks = (o, e, t, s)=>{
    const i = {};
    for(let l = 0; l < e.length; ++l)i[e[l]] = l;
    let r = o.length;
    for(; o[r - 1] === "=";)--r;
    const n = new Uint8Array(r * t / 8 | 0);
    let a = 0, h = 0, c = 0;
    for(let l = 0; l < r; ++l){
        const p = i[o[l]];
        if (p === void 0) throw new SyntaxError(`Non-${s} character`);
        h = h << t | p, a += t, a >= 8 && (a -= 8, n[c++] = 255 & h >> a);
    }
    if (a >= t || 255 & h << 8 - a) throw new SyntaxError("Unexpected end of data");
    return n;
}, Ms = (o, e, t)=>{
    const s = e[e.length - 1] === "=", i = (1 << t) - 1;
    let r = "", n = 0, a = 0;
    for(let h = 0; h < o.length; ++h)for(a = a << 8 | o[h], n += 8; n > t;)n -= t, r += e[i & a >> n];
    if (n && (r += e[i & a << t - n]), s) for(; r.length * t & 7;)r += "=";
    return r;
}, f = ({ name: o, prefix: e, bitsPerChar: t, alphabet: s })=>re({
        prefix: e,
        name: o,
        encode (i) {
            return Ms(i, s, t);
        },
        decode (i) {
            return ks(i, s, t, o);
        }
    }), Us = re({
    prefix: "\0",
    name: "identity",
    encode: (o)=>As(o),
    decode: (o)=>Os(o)
});
var Fs = Object.freeze({
    __proto__: null,
    identity: Us
});
const Ks = f({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var Bs = Object.freeze({
    __proto__: null,
    base2: Ks
});
const Vs = f({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var js = Object.freeze({
    __proto__: null,
    base8: Vs
});
const qs = X({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var Gs = Object.freeze({
    __proto__: null,
    base10: qs
});
const Hs = f({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
}), Ys = f({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var Js = Object.freeze({
    __proto__: null,
    base16: Hs,
    base16upper: Ys
});
const Xs = f({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
}), Ws = f({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
}), Zs = f({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
}), Qs = f({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
}), er = f({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
}), tr = f({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
}), ir = f({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
}), sr = f({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
}), rr = f({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var nr = Object.freeze({
    __proto__: null,
    base32: Xs,
    base32upper: Ws,
    base32pad: Zs,
    base32padupper: Qs,
    base32hex: er,
    base32hexupper: tr,
    base32hexpad: ir,
    base32hexpadupper: sr,
    base32z: rr
});
const or = X({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), ar = X({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var hr = Object.freeze({
    __proto__: null,
    base36: or,
    base36upper: ar
});
const cr = X({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), lr = X({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var ur = Object.freeze({
    __proto__: null,
    base58btc: cr,
    base58flickr: lr
});
const dr = f({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
}), pr = f({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
}), gr = f({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
}), yr = f({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var Dr = Object.freeze({
    __proto__: null,
    base64: dr,
    base64pad: pr,
    base64url: gr,
    base64urlpad: yr
});
const At = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), mr = At.reduce((o, e, t)=>(o[t] = e, o), []), br = At.reduce((o, e, t)=>(o[e.codePointAt(0)] = t, o), []);
function fr(o) {
    return o.reduce((e, t)=>(e += mr[t], e), "");
}
function _r(o) {
    const e = [];
    for (const t of o){
        const s = br[t.codePointAt(0)];
        if (s === void 0) throw new Error(`Non-base256emoji character: ${t}`);
        e.push(s);
    }
    return new Uint8Array(e);
}
const Er = re({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: fr,
    decode: _r
});
var vr = Object.freeze({
    __proto__: null,
    base256emoji: Er
}), wr = zt, Nt = 128, Ir = 127, Tr = ~Ir, Cr = Math.pow(2, 31);
function zt(o, e, t) {
    e = e || [], t = t || 0;
    for(var s = t; o >= Cr;)e[t++] = o & 255 | Nt, o /= 128;
    for(; o & Tr;)e[t++] = o & 255 | Nt, o >>>= 7;
    return e[t] = o | 0, zt.bytes = t - s + 1, e;
}
var Pr = _e, Sr = 128, Lt = 127;
function _e(o, s) {
    var t = 0, s = s || 0, i = 0, r = s, n, a = o.length;
    do {
        if (r >= a) throw _e.bytes = 0, new RangeError("Could not decode varint");
        n = o[r++], t += i < 28 ? (n & Lt) << i : (n & Lt) * Math.pow(2, i), i += 7;
    }while (n >= Sr)
    return _e.bytes = r - s, t;
}
var Rr = Math.pow(2, 7), xr = Math.pow(2, 14), Or = Math.pow(2, 21), Ar = Math.pow(2, 28), Nr = Math.pow(2, 35), zr = Math.pow(2, 42), Lr = Math.pow(2, 49), $r = Math.pow(2, 56), kr = Math.pow(2, 63), Mr = function(o) {
    return o < Rr ? 1 : o < xr ? 2 : o < Or ? 3 : o < Ar ? 4 : o < Nr ? 5 : o < zr ? 6 : o < Lr ? 7 : o < $r ? 8 : o < kr ? 9 : 10;
}, Ur = {
    encode: wr,
    decode: Pr,
    encodingLength: Mr
}, $t = Ur;
const kt = (o, e, t = 0)=>($t.encode(o, e, t), e), Mt = (o)=>$t.encodingLength(o), Ee = (o, e)=>{
    const t = e.byteLength, s = Mt(o), i = s + Mt(t), r = new Uint8Array(i + t);
    return kt(o, r, 0), kt(t, r, s), r.set(e, i), new Fr(o, t, e, r);
};
class Fr {
    constructor(e, t, s, i){
        this.code = e, this.size = t, this.digest = s, this.bytes = i;
    }
}
const Ut = ({ name: o, code: e, encode: t })=>new Kr(o, e, t);
class Kr {
    constructor(e, t, s){
        this.name = e, this.code = t, this.encode = s;
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? Ee(this.code, t) : t.then((s)=>Ee(this.code, s));
        } else throw Error("Unknown type, must be binary type");
    }
}
const Ft = (o)=>async (e)=>new Uint8Array(await crypto.subtle.digest(o, e)), Br = Ut({
    name: "sha2-256",
    code: 18,
    encode: Ft("SHA-256")
}), Vr = Ut({
    name: "sha2-512",
    code: 19,
    encode: Ft("SHA-512")
});
var jr = Object.freeze({
    __proto__: null,
    sha256: Br,
    sha512: Vr
});
const Kt = 0, qr = "identity", Bt = xt, Gr = (o)=>Ee(Kt, Bt(o)), Hr = {
    code: Kt,
    name: qr,
    encode: Bt,
    digest: Gr
};
var Yr = Object.freeze({
    __proto__: null,
    identity: Hr
});
new TextEncoder, new TextDecoder;
const Vt = {
    ...Fs,
    ...Bs,
    ...js,
    ...Gs,
    ...Js,
    ...nr,
    ...hr,
    ...ur,
    ...Dr,
    ...vr
};
({
    ...jr,
    ...Yr
});
function Jr(o = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(o) : new Uint8Array(o);
}
function jt(o, e, t, s) {
    return {
        name: o,
        prefix: e,
        encoder: {
            name: o,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: s
        }
    };
}
const qt = jt("utf8", "u", (o)=>"u" + new TextDecoder("utf8").decode(o), (o)=>new TextEncoder().encode(o.substring(1))), ve = jt("ascii", "a", (o)=>{
    let e = "a";
    for(let t = 0; t < o.length; t++)e += String.fromCharCode(o[t]);
    return e;
}, (o)=>{
    o = o.substring(1);
    const e = Jr(o.length);
    for(let t = 0; t < o.length; t++)e[t] = o.charCodeAt(t);
    return e;
}), Xr = {
    utf8: qt,
    "utf-8": qt,
    hex: Vt.base16,
    latin1: ve,
    ascii: ve,
    binary: ve,
    ...Vt
};
function Wr(o, e = "utf8") {
    const t = Xr[e];
    if (!t) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(o, "utf8") : t.decoder.decode(`${t.prefix}${o}`);
}
class Gt {
    constructor(e, t){
        this.core = e, this.logger = t, this.keychain = new Map, this.name = Ze, this.version = Qe, this.initialized = !1, this.storagePrefix = x, this.init = async ()=>{
            if (!this.initialized) {
                const s = await this.getKeyChain();
                typeof s < "u" && (this.keychain = s), this.initialized = !0;
            }
        }, this.has = (s)=>(this.isInitialized(), this.keychain.has(s)), this.set = async (s, i)=>{
            this.isInitialized(), this.keychain.set(s, i), await this.persist();
        }, this.get = (s)=>{
            this.isInitialized();
            const i = this.keychain.get(s);
            if (typeof i > "u") {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${s}`);
                throw new Error(r);
            }
            return i;
        }, this.del = async (s)=>{
            this.isInitialized(), this.keychain.delete(s), await this.persist();
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapToObj"])(e));
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objToMap"])(e) : void 0;
    }
    async persist() {
        await this.setKeyChain(this.keychain);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Ht {
    constructor(e, t, s){
        this.core = e, this.logger = t, this.name = Xe, this.randomSessionIdentifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), this.initialized = !1, this.init = async ()=>{
            this.initialized || (await this.keychain.init(), this.initialized = !0);
        }, this.hasKeys = (i)=>(this.isInitialized(), this.keychain.has(i)), this.getClientId = async ()=>{
            this.isInitialized();
            const i = await this.getClientSeed(), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.generateKeyPair(i);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.encodeIss(r.publicKey);
        }, this.generateKeyPair = ()=>{
            this.isInitialized();
            const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateKeyPair"])();
            return this.setPrivateKey(i.publicKey, i.privateKey);
        }, this.signJWT = async (i)=>{
            this.isInitialized();
            const r = await this.getClientSeed(), n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.generateKeyPair(r), a = this.randomSessionIdentifier, h = We;
            return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.signJWT(a, i, h, n);
        }, this.generateSharedKey = (i, r, n)=>{
            this.isInitialized();
            const a = this.getPrivateKey(i), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deriveSymKey"])(a, r);
            return this.setSymKey(h, n);
        }, this.setSymKey = async (i, r)=>{
            this.isInitialized();
            const n = r || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKey"])(i);
            return await this.keychain.set(n, i), n;
        }, this.deleteKeyPair = async (i)=>{
            this.isInitialized(), await this.keychain.del(i);
        }, this.deleteSymKey = async (i)=>{
            this.isInitialized(), await this.keychain.del(i);
        }, this.encode = async (i, r, n)=>{
            this.isInitialized();
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateEncoding"])(n), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])(r);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypeTwoEnvelope"])(a)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeTypeTwoEnvelope"])(h, n?.encoding);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypeOneEnvelope"])(a)) {
                const D = a.senderPublicKey, m = a.receiverPublicKey;
                i = await this.generateSharedKey(D, m);
            }
            const c = this.getSymKey(i), { type: l, senderPublicKey: p } = a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encrypt"])({
                type: l,
                symKey: c,
                message: h,
                senderPublicKey: p,
                encoding: n?.encoding
            });
        }, this.decode = async (i, r, n)=>{
            this.isInitialized();
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDecoding"])(r, n);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypeTwoEnvelope"])(a)) {
                const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTypeTwoEnvelope"])(r, n?.encoding);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonParse"])(h);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypeOneEnvelope"])(a)) {
                const h = a.receiverPublicKey, c = a.senderPublicKey;
                i = await this.generateSharedKey(h, c);
            }
            try {
                const h = this.getSymKey(i), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrypt"])({
                    symKey: h,
                    encoded: r,
                    encoding: n?.encoding
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonParse"])(c);
            } catch (h) {
                this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(h);
            }
        }, this.getPayloadType = (i, r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE64"])=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])({
                encoded: i,
                encoding: r
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTypeByte"])(n.type);
        }, this.getPayloadSenderPublicKey = (i, r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE64"])=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])({
                encoded: i,
                encoding: r
            });
            return n.senderPublicKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(n.senderPublicKey, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE16"]) : void 0;
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.keychain = s || new Gt(this.core, this.logger);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    async setPrivateKey(e, t) {
        return await this.keychain.set(e, t), e;
    }
    getPrivateKey(e) {
        return this.keychain.get(e);
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get(me);
        } catch  {
            e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), await this.keychain.set(me, e);
        }
        return Wr(e, "base16");
    }
    getSymKey(e) {
        return this.keychain.get(e);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Yt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMessageTracker"] {
    constructor(e, t){
        super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = et, this.version = tt, this.initialized = !1, this.storagePrefix = x, this.init = async ()=>{
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const s = await this.getRelayerMessages();
                    typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    });
                } catch (s) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
                } finally{
                    this.initialized = !0;
                }
            }
        }, this.set = async (s, i)=>{
            this.isInitialized();
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(i);
            let n = this.messages.get(s);
            return typeof n > "u" && (n = {}), typeof n[r] < "u" || (n[r] = i, this.messages.set(s, n), await this.persist()), r;
        }, this.get = (s)=>{
            this.isInitialized();
            let i = this.messages.get(s);
            return typeof i > "u" && (i = {}), i;
        }, this.has = (s, i)=>{
            this.isInitialized();
            const r = this.get(s), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(i);
            return typeof r[n] < "u";
        }, this.del = async (s)=>{
            this.isInitialized(), this.messages.delete(s), await this.persist();
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(e, this.name), this.core = t;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapToObj"])(e));
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objToMap"])(e) : void 0;
    }
    async persist() {
        await this.setRelayerMessages(this.messages);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Zr extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IPublisher"] {
    constructor(e, t){
        super(e, t), this.relayer = e, this.logger = t, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = st, this.queue = new Map, this.publishTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_MINUTE"]), this.failedPublishTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"]), this.needsTransportRestart = !1, this.publish = async (s, i, r)=>{
            var n;
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: s,
                    message: i,
                    opts: r
                }
            });
            const a = r?.ttl || it, h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(r), c = r?.prompt || !1, l = r?.tag || 0, p = r?.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString(), D = {
                topic: s,
                message: i,
                opts: {
                    ttl: a,
                    relay: h,
                    prompt: c,
                    tag: l,
                    id: p,
                    attestation: r?.attestation
                }
            }, m = `Failed to publish payload, please try again. id:${p} tag:${l}`, u = Date.now();
            let g, _ = 1;
            try {
                for(; g === void 0;){
                    if (Date.now() - u > this.publishTimeout) throw new Error(m);
                    this.logger.trace({
                        id: p,
                        attempts: _
                    }, `publisher.publish - attempt ${_}`), g = await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.rpcPublish(s, i, a, h, c, l, p, r?.attestation).catch((y)=>this.logger.warn(y)), this.publishTimeout, m), _++, g || await new Promise((y)=>setTimeout(y, this.failedPublishTimeout));
                }
                this.relayer.events.emit(v.publish, D), this.logger.debug("Successfully Published Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        id: p,
                        topic: s,
                        message: i,
                        opts: r
                    }
                });
            } catch (y) {
                if (this.logger.debug("Failed to Publish Payload"), this.logger.error(y), (n = r?.internal) != null && n.throwOnFailedPublish) throw y;
                this.queue.set(p, D);
            }
        }, this.on = (s, i)=>{
            this.events.on(s, i);
        }, this.once = (s, i)=>{
            this.events.once(s, i);
        }, this.off = (s, i)=>{
            this.events.off(s, i);
        }, this.removeListener = (s, i)=>{
            this.events.removeListener(s, i);
        }, this.relayer = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.registerEventListeners();
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    rpcPublish(e, t, s, i, r, n, a, h) {
        var c, l, p, D;
        const m = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(i.protocol).publish,
            params: {
                topic: e,
                message: t,
                ttl: s,
                prompt: r,
                tag: n,
                attestation: h
            },
            id: a
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"])((c = m.params) == null ? void 0 : c.prompt) && ((l = m.params) == null || delete l.prompt), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"])((p = m.params) == null ? void 0 : p.tag) && ((D = m.params) == null || delete D.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: m
        }), this.relayer.request(m);
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e);
    }
    checkQueue() {
        this.queue.forEach(async (e)=>{
            const { topic: t, message: s, opts: i } = e;
            await this.publish(t, s, i);
        });
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>{
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1, this.relayer.events.emit(v.connection_stalled);
                return;
            }
            this.checkQueue();
        }), this.relayer.on(v.message_ack, (e)=>{
            this.removeRequestFromQueue(e.id.toString());
        });
    }
}
class Qr {
    constructor(){
        this.map = new Map, this.set = (e, t)=>{
            const s = this.get(e);
            this.exists(e, t) || this.map.set(e, [
                ...s,
                t
            ]);
        }, this.get = (e)=>this.map.get(e) || [], this.exists = (e, t)=>this.get(e).includes(t), this.delete = (e, t)=>{
            if (typeof t > "u") {
                this.map.delete(e);
                return;
            }
            if (!this.map.has(e)) return;
            const s = this.get(e);
            if (!this.exists(e, t)) return;
            const i = s.filter((r)=>r !== t);
            if (!i.length) {
                this.map.delete(e);
                return;
            }
            this.map.set(e, i);
        }, this.clear = ()=>{
            this.map.clear();
        };
    }
    get topics() {
        return Array.from(this.map.keys());
    }
}
var en = Object.defineProperty, tn = Object.defineProperties, sn = Object.getOwnPropertyDescriptors, Jt = Object.getOwnPropertySymbols, rn = Object.prototype.hasOwnProperty, nn = Object.prototype.propertyIsEnumerable, Xt = (o, e, t)=>e in o ? en(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, W = (o, e)=>{
    for(var t in e || (e = {}))rn.call(e, t) && Xt(o, t, e[t]);
    if (Jt) for (var t of Jt(e))nn.call(e, t) && Xt(o, t, e[t]);
    return o;
}, we = (o, e)=>tn(o, sn(e));
class Wt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ISubscriber"] {
    constructor(e, t){
        super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new Qr, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = ut, this.version = dt, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = x, this.subscribeTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_MINUTE"]), this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId(), await this.restore()), this.initialized = !0;
        }, this.subscribe = async (s, i)=>{
            this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: s,
                    opts: i
                }
            });
            try {
                const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(i), n = {
                    topic: s,
                    relay: r,
                    transportType: i?.transportType
                };
                this.pending.set(s, n);
                const a = await this.rpcSubscribe(s, r, i);
                return typeof a == "string" && (this.onSubscribe(a, n), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: s,
                        opts: i
                    }
                })), a;
            } catch (r) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r), r;
            }
        }, this.unsubscribe = async (s, i)=>{
            await this.restartToComplete(), this.isInitialized(), typeof i?.id < "u" ? await this.unsubscribeById(s, i.id, i) : await this.unsubscribeByTopic(s, i);
        }, this.isSubscribed = async (s)=>{
            if (this.topics.includes(s)) return !0;
            const i = `${this.pendingSubscriptionWatchLabel}_${s}`;
            return await new Promise((r, n)=>{
                const a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Watch"];
                a.start(i);
                const h = setInterval(()=>{
                    !this.pending.has(s) && this.topics.includes(s) && (clearInterval(h), a.stop(i), r(!0)), a.elapsed(i) >= pt && (clearInterval(h), a.stop(i), n(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
            }).catch(()=>!1);
        }, this.on = (s, i)=>{
            this.events.on(s, i);
        }, this.once = (s, i)=>{
            this.events.once(s, i);
        }, this.off = (s, i)=>{
            this.events.off(s, i);
        }, this.removeListener = (s, i)=>{
            this.events.removeListener(s, i);
        }, this.start = async ()=>{
            await this.onConnect();
        }, this.stop = async ()=>{
            await this.onDisconnect();
        }, this.restart = async ()=>{
            this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
        }, this.relayer = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.clientId = "";
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.subscriptions.size;
    }
    get ids() {
        return Array.from(this.subscriptions.keys());
    }
    get values() {
        return Array.from(this.subscriptions.values());
    }
    get topics() {
        return this.topicMap.topics;
    }
    hasSubscription(e, t) {
        let s = !1;
        try {
            s = this.getSubscription(e).topic === t;
        } catch  {}
        return s;
    }
    onEnable() {
        this.cached = [], this.initialized = !0;
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
    }
    async unsubscribeByTopic(e, t) {
        const s = this.topicMap.get(e);
        await Promise.all(s.map(async (i)=>await this.unsubscribeById(e, i, t)));
    }
    async unsubscribeById(e, t, s) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: t,
                opts: s
            }
        });
        try {
            const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(s);
            await this.rpcUnsubscribe(e, t, i);
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, r), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: s
                }
            });
        } catch (i) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
        }
    }
    async rpcSubscribe(e, t, s) {
        var i;
        s?.transportType === M.relay && await this.restartToComplete();
        const r = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).subscribe,
            params: {
                topic: e
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r
        });
        const n = (i = s?.internal) == null ? void 0 : i.throwOnFailedPublish;
        try {
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(e + this.clientId);
            if (s?.transportType === M.link_mode) return setTimeout(()=>{
                (this.relayer.connected || this.relayer.connecting) && this.relayer.request(r).catch((c)=>this.logger.warn(c));
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"])), a;
            const h = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.relayer.request(r).catch((c)=>this.logger.warn(c)), this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
            if (!h && n) throw new Error(`Subscribing to ${e} failed, please try again`);
            return h ? a : null;
        } catch (a) {
            if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(v.connection_stalled), n) throw a;
        }
        return null;
    }
    async rpcBatchSubscribe(e) {
        if (!e.length) return;
        const t = e[0].relay, s = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).batchSubscribe,
            params: {
                topics: e.map((i)=>i.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        try {
            return await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.relayer.request(s).catch((i)=>this.logger.warn(i)), this.subscribeTimeout);
        } catch  {
            this.relayer.events.emit(v.connection_stalled);
        }
    }
    async rpcBatchFetchMessages(e) {
        if (!e.length) return;
        const t = e[0].relay, s = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).batchFetchMessages,
            params: {
                topics: e.map((r)=>r.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        let i;
        try {
            i = await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.relayer.request(s).catch((r)=>this.logger.warn(r)), this.subscribeTimeout);
        } catch  {
            this.relayer.events.emit(v.connection_stalled);
        }
        return i;
    }
    rpcUnsubscribe(e, t, s) {
        const i = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(s.protocol).unsubscribe,
            params: {
                topic: e,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        }), this.relayer.request(i);
    }
    onSubscribe(e, t) {
        this.setSubscription(e, we(W({}, t), {
            id: e
        })), this.pending.delete(t.topic);
    }
    onBatchSubscribe(e) {
        e.length && e.forEach((t)=>{
            this.setSubscription(t.id, W({}, t)), this.pending.delete(t.topic);
        });
    }
    async onUnsubscribe(e, t, s) {
        this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, s), await this.relayer.messages.del(e);
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e);
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey);
    }
    setSubscription(e, t) {
        this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
        }), this.addSubscription(e, t);
    }
    addSubscription(e, t) {
        this.subscriptions.set(e, W({}, t)), this.topicMap.set(t.topic, e), this.events.emit(O.created, t);
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const t = this.subscriptions.get(e);
        if (!t) {
            const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(s);
        }
        return t;
    }
    deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
        });
        const s = this.getSubscription(e);
        this.subscriptions.delete(e), this.topicMap.delete(s.topic, e), this.events.emit(O.deleted, we(W({}, s), {
            reason: t
        }));
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(O.sync);
    }
    async reset() {
        if (this.cached.length) {
            const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for(let t = 0; t < e; t++){
                const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchFetchMessages(s), await this.batchSubscribe(s);
            }
        }
        this.events.emit(O.resubscribed);
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
        }
    }
    async batchSubscribe(e) {
        if (!e.length) return;
        const t = await this.rpcBatchSubscribe(e);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(t) && this.onBatchSubscribe(t.map((s, i)=>we(W({}, e[i]), {
                id: s
            })));
    }
    async batchFetchMessages(e) {
        if (!e.length) return;
        this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
        const t = await this.rpcBatchFetchMessages(e);
        t && t.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(t.messages));
    }
    async onConnect() {
        await this.restart(), this.onEnable();
    }
    onDisconnect() {
        this.onDisable();
    }
    async checkPending() {
        if (!this.initialized || !this.relayer.connected) return;
        const e = [];
        this.pending.forEach((t)=>{
            e.push(t);
        }), await this.batchSubscribe(e), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = []);
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, async ()=>{
            await this.checkPending();
        }), this.events.on(O.created, async (e)=>{
            const t = O.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist();
        }), this.events.on(O.deleted, async (e)=>{
            const t = O.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist();
        });
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    async restartToComplete() {
        !this.relayer.connected && !this.relayer.connecting && await this.relayer.transportOpen(), this.restartInProgress && await new Promise((e)=>{
            const t = setInterval(()=>{
                this.restartInProgress || (clearInterval(t), e());
            }, this.pollingInterval);
        });
    }
}
var on = Object.defineProperty, Zt = Object.getOwnPropertySymbols, an = Object.prototype.hasOwnProperty, hn = Object.prototype.propertyIsEnumerable, Qt = (o, e, t)=>e in o ? on(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, ei = (o, e)=>{
    for(var t in e || (e = {}))an.call(e, t) && Qt(o, t, e[t]);
    if (Zt) for (var t of Zt(e))hn.call(e, t) && Qt(o, t, e[t]);
    return o;
};
class ti extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IRelayer"] {
    constructor(e){
        super(e), this.protocol = "wc", this.version = 2, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = ot, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = [
            "socket hang up",
            "stalled",
            "interrupted"
        ], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = new Map, this.heartBeatTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"]), this.request = async (t)=>{
            var s, i;
            this.logger.debug("Publishing Request Payload");
            const r = t.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString();
            await this.toEstablishConnection();
            try {
                const n = this.provider.request(t);
                this.requestsInFlight.set(r, {
                    promise: n,
                    request: t
                }), this.logger.trace({
                    id: r,
                    method: t.method,
                    topic: (s = t.params) == null ? void 0 : s.topic
                }, "relayer.request - attempt to publish...");
                const a = await new Promise(async (h, c)=>{
                    const l = ()=>{
                        c(new Error(`relayer.request - publish interrupted, id: ${r}`));
                    };
                    this.provider.on(I.disconnect, l);
                    const p = await n;
                    this.provider.off(I.disconnect, l), h(p);
                });
                return this.logger.trace({
                    id: r,
                    method: t.method,
                    topic: (i = t.params) == null ? void 0 : i.topic
                }, "relayer.request - published"), a;
            } catch (n) {
                throw this.logger.debug(`Failed to Publish Request: ${r}`), n;
            } finally{
                this.requestsInFlight.delete(r);
            }
        }, this.resetPingTimeout = ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNode"])()) try {
                clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(()=>{
                    var t, s, i;
                    (i = (s = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : s.socket) == null || i.terminate();
                }, this.heartBeatTimeout);
            } catch (t) {
                this.logger.warn(t);
            }
        }, this.onPayloadHandler = (t)=>{
            this.onProviderPayload(t), this.resetPingTimeout();
        }, this.onConnectHandler = ()=>{
            this.logger.trace("relayer connected"), this.startPingTimeout(), this.events.emit(v.connect);
        }, this.onDisconnectHandler = ()=>{
            this.logger.trace("relayer disconnected"), this.onProviderDisconnect();
        }, this.onProviderErrorHandler = (t)=>{
            this.logger.error(t), this.events.emit(v.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
        }, this.registerProviderListeners = ()=>{
            this.provider.on(I.payload, this.onPayloadHandler), this.provider.on(I.connect, this.onConnectHandler), this.provider.on(I.disconnect, this.onDisconnectHandler), this.provider.on(I.error, this.onProviderErrorHandler);
        }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(e.logger, this.name) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__["pino"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: e.logger || nt
        })), this.messages = new Yt(this.logger, e.core), this.subscriber = new Wt(this, this.logger), this.publisher = new Zr(this, this.logger), this.relayUrl = e?.relayUrl || be, this.projectId = e.projectId, this.bundleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBundleId"])(), this.provider = {};
    }
    async init() {
        if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([
            this.messages.init(),
            this.subscriber.init()
        ]), this.initialized = !0, this.subscriber.cached.length > 0) try {
            await this.transportOpen();
        } catch (e) {
            this.logger.warn(e);
        }
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get connected() {
        var e, t, s;
        return ((s = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : s.readyState) === 1;
    }
    get connecting() {
        var e, t, s;
        return ((s = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : s.readyState) === 0;
    }
    async publish(e, t, s) {
        this.isInitialized(), await this.publisher.publish(e, t, s), await this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now(),
            transportType: M.relay
        });
    }
    async subscribe(e, t) {
        var s, i, r;
        this.isInitialized(), t?.transportType === "relay" && await this.toEstablishConnection();
        const n = typeof ((s = t?.internal) == null ? void 0 : s.throwOnFailedPublish) > "u" ? !0 : (i = t?.internal) == null ? void 0 : i.throwOnFailedPublish;
        let a = ((r = this.subscriber.topicMap.get(e)) == null ? void 0 : r[0]) || "", h;
        const c = (l)=>{
            l.topic === e && (this.subscriber.off(O.created, c), h());
        };
        return await Promise.all([
            new Promise((l)=>{
                h = l, this.subscriber.on(O.created, c);
            }),
            new Promise(async (l, p)=>{
                a = await this.subscriber.subscribe(e, ei({
                    internal: {
                        throwOnFailedPublish: n
                    }
                }, t)).catch((D)=>{
                    n && p(D);
                }) || a, l();
            })
        ]), a;
    }
    async unsubscribe(e, t) {
        this.isInitialized(), await this.subscriber.unsubscribe(e, t);
    }
    on(e, t) {
        this.events.on(e, t);
    }
    once(e, t) {
        this.events.once(e, t);
    }
    off(e, t) {
        this.events.off(e, t);
    }
    removeListener(e, t) {
        this.events.removeListener(e, t);
    }
    async transportDisconnect() {
        if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
            await Promise.all(Array.from(this.requestsInFlight.values()).map((e)=>e.promise));
        } catch (e) {
            this.logger.warn(e);
        }
        this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(()=>this.onProviderDisconnect()) : this.onProviderDisconnect();
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0, await this.transportDisconnect();
    }
    async transportOpen(e) {
        await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
        try {
            await new Promise(async (t, s)=>{
                const i = ()=>{
                    this.provider.off(I.disconnect, i), s(new Error("Connection interrupted while trying to subscribe"));
                };
                this.provider.on(I.disconnect, i), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.provider.connect(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_MINUTE"]), `Socket stalled when trying to connect to ${this.relayUrl}`).catch((r)=>{
                    s(r);
                }).finally(()=>{
                    clearTimeout(this.reconnectTimeout), this.reconnectTimeout = void 0;
                }), this.subscriber.start().catch((r)=>{
                    this.logger.error(r), this.onDisconnectHandler();
                }), this.hasExperiencedNetworkDisruption = !1, t();
            });
        } catch (t) {
            this.logger.error(t);
            const s = t;
            if (this.hasExperiencedNetworkDisruption = !0, !this.isConnectionStalled(s.message)) throw t;
        } finally{
            this.connectionAttemptInProgress = !1;
        }
    }
    async restartTransport(e) {
        this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
    }
    async confirmOnlineStateOrThrow() {
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOnline"])()) throw new Error("No internet connection detected. Please restart your network and try again.");
    }
    async handleBatchMessageEvents(e) {
        if (e?.length === 0) {
            this.logger.trace("Batch message events is empty. Ignoring...");
            return;
        }
        const t = e.sort((s, i)=>s.publishedAt - i.publishedAt);
        this.logger.trace(`Batch of ${t.length} message events sorted`);
        for (const s of t)try {
            await this.onMessageEvent(s);
        } catch (i) {
            this.logger.warn(i);
        }
        this.logger.trace(`Batch of ${t.length} message events processed`);
    }
    async onLinkMessageEvent(e, t) {
        const { topic: s } = e;
        if (!t.sessionExists) {
            const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]), r = {
                topic: s,
                expiry: i,
                relay: {
                    protocol: "irn"
                },
                active: !1
            };
            await this.core.pairing.pairings.set(s, r);
        }
        this.events.emit(v.message, e), await this.recordMessageEvent(e);
    }
    startPingTimeout() {
        var e, t, s, i, r;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNode"])()) try {
            (t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((r = (i = (s = this.provider) == null ? void 0 : s.connection) == null ? void 0 : i.socket) == null || r.once("ping", ()=>{
                this.resetPingTimeout();
            })), this.resetPingTimeout();
        } catch (n) {
            this.logger.warn(n);
        }
    }
    isConnectionStalled(e) {
        return this.staleConnectionErrors.some((t)=>e.includes(t));
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const e = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$ws$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelayRpcUrl"])({
            sdkVersion: se,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e,
            useOnCloseEvent: !0,
            bundleId: this.bundleId
        }))), this.registerProviderListeners();
    }
    async recordMessageEvent(e) {
        const { topic: t, message: s } = e;
        await this.messages.set(t, s);
    }
    async shouldIgnoreMessageEvent(e) {
        const { topic: t, message: s } = e;
        if (!s || s.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
        if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
        const i = this.messages.has(t, s);
        return i && this.logger.debug(`Ignoring duplicate message: ${s}`), i;
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcRequest"])(e)) {
            if (!e.method.endsWith(at)) return;
            const t = e.params, { topic: s, message: i, publishedAt: r, attestation: n } = t.data, a = {
                topic: s,
                message: i,
                publishedAt: r,
                transportType: M.relay,
                attestation: n
            };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace(ei({
                type: "event",
                event: t.id
            }, a)), this.events.emit(t.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
        } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResponse"])(e) && this.events.emit(v.message_ack, e);
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit(v.message, e), await this.recordMessageEvent(e));
    }
    async acknowledgePayload(e) {
        const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(e.id, !0);
        await this.provider.connection.send(t);
    }
    unregisterProviderListeners() {
        this.provider.off(I.payload, this.onPayloadHandler), this.provider.off(I.connect, this.onConnectHandler), this.provider.off(I.disconnect, this.onDisconnectHandler), this.provider.off(I.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
    }
    async registerEventListeners() {
        let e = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOnline"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeToNetworkChange"])(async (t)=>{
            e !== t && (e = t, t ? await this.restartTransport().catch((s)=>this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
        });
    }
    async onProviderDisconnect() {
        await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(v.disconnect), this.connectionAttemptInProgress = !1, !this.transportExplicitlyClosed && (this.reconnectTimeout || (this.reconnectTimeout = setTimeout(async ()=>{
            await this.transportOpen().catch((e)=>this.logger.error(e));
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(ht))));
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    async toEstablishConnection() {
        await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise((e)=>{
            const t = setInterval(()=>{
                this.connected && (clearInterval(t), e());
            }, this.connectionStatusPollingInterval);
        }), await this.transportOpen());
    }
}
var cn = Object.defineProperty, ii = Object.getOwnPropertySymbols, ln = Object.prototype.hasOwnProperty, un = Object.prototype.propertyIsEnumerable, si = (o, e, t)=>e in o ? cn(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, ri = (o, e)=>{
    for(var t in e || (e = {}))ln.call(e, t) && si(o, t, e[t]);
    if (ii) for (var t of ii(e))un.call(e, t) && si(o, t, e[t]);
    return o;
};
class ni extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IStore"] {
    constructor(e, t, s, i = x, r = void 0){
        super(e, t, s, i), this.core = e, this.logger = t, this.name = s, this.map = new Map, this.version = ct, this.cached = [], this.initialized = !1, this.storagePrefix = x, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n)=>{
                this.getKey && n !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"])(n) ? this.map.set(this.getKey(n), n) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProposalStruct"])(n) ? this.map.set(n.id, n) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSessionStruct"])(n) && this.map.set(n.topic, n);
            }), this.cached = [], this.initialized = !0);
        }, this.set = async (n, a)=>{
            this.isInitialized(), this.map.has(n) ? await this.update(n, a) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: n,
                value: a
            }), this.map.set(n, a), await this.persist());
        }, this.get = (n)=>(this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                type: "method",
                method: "get",
                key: n
            }), this.getData(n)), this.getAll = (n)=>(this.isInitialized(), n ? this.values.filter((a)=>Object.keys(n).every((h)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$isequal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(a[h], n[h]))) : this.values), this.update = async (n, a)=>{
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: n,
                update: a
            });
            const h = ri(ri({}, this.getData(n)), a);
            this.map.set(n, h), await this.persist();
        }, this.delete = async (n, a)=>{
            this.isInitialized(), this.map.has(n) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: n,
                reason: a
            }), this.map.delete(n), this.addToRecentlyDeleted(n), await this.persist());
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.storagePrefix = i, this.getKey = r;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.map.size;
    }
    get keys() {
        return Array.from(this.map.keys());
    }
    get values() {
        return Array.from(this.map.values());
    }
    addToRecentlyDeleted(e) {
        this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
    }
    async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey);
    }
    getData(e) {
        const t = this.map.get(e);
        if (!t) {
            if (this.recentlyDeleted.includes(e)) {
                const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
                throw this.logger.error(i), new Error(i);
            }
            const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(s), new Error(s);
        }
        return t;
    }
    async persist() {
        await this.setDataStore(this.values);
    }
    async restore() {
        try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class oi {
    constructor(e, t){
        this.core = e, this.logger = t, this.name = gt, this.version = yt, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$events$2c$__cjs$29$__["default"], this.initialized = !1, this.storagePrefix = x, this.ignoredPayloadTypes = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE_1"]
        ], this.registeredMethods = [], this.init = async ()=>{
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
        }, this.register = ({ methods: s })=>{
            this.isInitialized(), this.registeredMethods = [
                ...new Set([
                    ...this.registeredMethods,
                    ...s
                ])
            ];
        }, this.create = async (s)=>{
            this.isInitialized();
            const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), r = await this.core.crypto.setSymKey(i), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]), a = {
                protocol: rt
            }, h = {
                topic: r,
                expiry: n,
                relay: a,
                active: !1,
                methods: s?.methods
            }, c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUri"])({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: r,
                symKey: i,
                relay: a,
                expiryTimestamp: n,
                methods: s?.methods
            });
            return this.events.emit(V.create, h), this.core.expirer.set(r, n), await this.pairings.set(r, h), await this.core.relayer.subscribe(r, {
                transportType: s?.transportType
            }), {
                topic: r,
                uri: c
            };
        }, this.pair = async (s)=>{
            this.isInitialized();
            const i = this.core.eventClient.createEvent({
                properties: {
                    topic: s?.uri,
                    trace: [
                        z.pairing_started
                    ]
                }
            });
            this.isValidPair(s, i);
            const { topic: r, symKey: n, relay: a, expiryTimestamp: h, methods: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUri"])(s.uri);
            i.props.properties.topic = r, i.addTrace(z.pairing_uri_validation_success), i.addTrace(z.pairing_uri_not_expired);
            let l;
            if (this.pairings.keys.includes(r)) {
                if (l = this.pairings.get(r), i.addTrace(z.existing_pairing), l.active) throw i.setError($.active_pairing_already_exists), new Error(`Pairing already exists: ${r}. Please try again with a new connection URI.`);
                i.addTrace(z.pairing_not_expired);
            }
            const p = h || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]), D = {
                topic: r,
                relay: a,
                expiry: p,
                active: !1,
                methods: c
            };
            this.core.expirer.set(r, p), await this.pairings.set(r, D), i.addTrace(z.store_new_pairing), s.activatePairing && await this.activate({
                topic: r
            }), this.events.emit(V.create, D), i.addTrace(z.emit_inactive_pairing), this.core.crypto.keychain.has(r) || await this.core.crypto.setSymKey(n, r), i.addTrace(z.subscribing_pairing_topic);
            try {
                await this.core.relayer.confirmOnlineStateOrThrow();
            } catch  {
                i.setError($.no_internet_connection);
            }
            try {
                await this.core.relayer.subscribe(r, {
                    relay: a
                });
            } catch (m) {
                throw i.setError($.subscribe_pairing_topic_failure), m;
            }
            return i.addTrace(z.subscribe_pairing_topic_success), D;
        }, this.activate = async ({ topic: s })=>{
            this.isInitialized();
            const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"]);
            this.core.expirer.set(s, i), await this.pairings.update(s, {
                active: !0,
                expiry: i
            });
        }, this.ping = async (s)=>{
            this.isInitialized(), await this.isValidPing(s);
            const { topic: i } = s;
            if (this.pairings.keys.includes(i)) {
                const r = await this.sendRequest(i, "wc_pairingPing", {}), { done: n, resolve: a, reject: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDelayedPromise"])();
                this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", r), ({ error: c })=>{
                    c ? h(c) : a();
                }), await n();
            }
        }, this.updateExpiry = async ({ topic: s, expiry: i })=>{
            this.isInitialized(), await this.pairings.update(s, {
                expiry: i
            });
        }, this.updateMetadata = async ({ topic: s, metadata: i })=>{
            this.isInitialized(), await this.pairings.update(s, {
                peerMetadata: i
            });
        }, this.getPairings = ()=>(this.isInitialized(), this.pairings.values), this.disconnect = async (s)=>{
            this.isInitialized(), await this.isValidDisconnect(s);
            const { topic: i } = s;
            this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), await this.deletePairing(i));
        }, this.formatUriFromPairing = (s)=>{
            this.isInitialized();
            const { topic: i, relay: r, expiry: n, methods: a } = s, h = this.core.crypto.keychain.get(i);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUri"])({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: i,
                symKey: h,
                relay: r,
                expiryTimestamp: n,
                methods: a
            });
        }, this.sendRequest = async (s, i, r)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])(i, r), a = await this.core.crypto.encode(s, n), h = B[i].req;
            return this.core.history.set(s, n), this.core.relayer.publish(s, a, h), n.id;
        }, this.sendResult = async (s, i, r)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(s, r), a = await this.core.crypto.encode(i, n), h = await this.core.history.get(i, s), c = B[h.request.method].res;
            await this.core.relayer.publish(i, a, c), await this.core.history.resolve(n);
        }, this.sendError = async (s, i, r)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcError"])(s, r), a = await this.core.crypto.encode(i, n), h = await this.core.history.get(i, s), c = B[h.request.method] ? B[h.request.method].res : B.unregistered_method.res;
            await this.core.relayer.publish(i, a, c), await this.core.history.resolve(n);
        }, this.deletePairing = async (s, i)=>{
            await this.core.relayer.unsubscribe(s), await Promise.all([
                this.pairings.delete(s, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")),
                this.core.crypto.deleteSymKey(s),
                i ? Promise.resolve() : this.core.expirer.del(s)
            ]);
        }, this.cleanup = async ()=>{
            const s = this.pairings.getAll().filter((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpired"])(i.expiry));
            await Promise.all(s.map((i)=>this.deletePairing(i.topic)));
        }, this.onRelayEventRequest = (s)=>{
            const { topic: i, payload: r } = s;
            switch(r.method){
                case "wc_pairingPing":
                    return this.onPairingPingRequest(i, r);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(i, r);
                default:
                    return this.onUnknownRpcMethodRequest(i, r);
            }
        }, this.onRelayEventResponse = async (s)=>{
            const { topic: i, payload: r } = s, n = (await this.core.history.get(i, r.id)).request.method;
            switch(n){
                case "wc_pairingPing":
                    return this.onPairingPingResponse(i, r);
                default:
                    return this.onUnknownRpcMethodResponse(n);
            }
        }, this.onPairingPingRequest = async (s, i)=>{
            const { id: r } = i;
            try {
                this.isValidPing({
                    topic: s
                }), await this.sendResult(r, s, !0), this.events.emit(V.ping, {
                    id: r,
                    topic: s
                });
            } catch (n) {
                await this.sendError(r, s, n), this.logger.error(n);
            }
        }, this.onPairingPingResponse = (s, i)=>{
            const { id: r } = i;
            setTimeout(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(i) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", r), {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcError"])(i) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", r), {
                    error: i.error
                });
            }, 500);
        }, this.onPairingDeleteRequest = async (s, i)=>{
            const { id: r } = i;
            try {
                this.isValidDisconnect({
                    topic: s
                }), await this.deletePairing(s), this.events.emit(V.delete, {
                    id: r,
                    topic: s
                });
            } catch (n) {
                await this.sendError(r, s, n), this.logger.error(n);
            }
        }, this.onUnknownRpcMethodRequest = async (s, i)=>{
            const { id: r, method: n } = i;
            try {
                if (this.registeredMethods.includes(n)) return;
                const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("WC_METHOD_UNSUPPORTED", n);
                await this.sendError(r, s, a), this.logger.error(a);
            } catch (a) {
                await this.sendError(r, s, a), this.logger.error(a);
            }
        }, this.onUnknownRpcMethodResponse = (s)=>{
            this.registeredMethods.includes(s) || this.logger.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("WC_METHOD_UNSUPPORTED", s));
        }, this.isValidPair = (s, i)=>{
            var r;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidParams"])(s)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pair() params: ${s}`);
                throw i.setError($.malformed_pairing_uri), new Error(a);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidUrl"])(s.uri)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
                throw i.setError($.malformed_pairing_uri), new Error(a);
            }
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUri"])(s?.uri);
            if (!((r = n?.relay) != null && r.protocol)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw i.setError($.malformed_pairing_uri), new Error(a);
            }
            if (!(n != null && n.symKey)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", "pair() uri#symKey");
                throw i.setError($.malformed_pairing_uri), new Error(a);
            }
            if (n != null && n.expiryTimestamp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(n?.expiryTimestamp) < Date.now()) {
                i.setError($.pairing_expired);
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(a);
            }
        }, this.isValidPing = async (s)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidParams"])(s)) {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `ping() params: ${s}`);
                throw new Error(r);
            }
            const { topic: i } = s;
            await this.isValidPairingTopic(i);
        }, this.isValidDisconnect = async (s)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidParams"])(s)) {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `disconnect() params: ${s}`);
                throw new Error(r);
            }
            const { topic: i } = s;
            await this.isValidPairingTopic(i);
        }, this.isValidPairingTopic = async (s)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidString"])(s, !1)) {
                const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
                throw new Error(i);
            }
            if (!this.pairings.keys.includes(s)) {
                const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
                throw new Error(i);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpired"])(this.pairings.get(s).expiry)) {
                await this.deletePairing(s);
                const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", `pairing topic: ${s}`);
                throw new Error(i);
            }
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.pairings = new ni(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(v.message, async (e)=>{
            const { topic: t, message: s, transportType: i } = e;
            if (!this.pairings.keys.includes(t) || i === M.link_mode || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))) return;
            const r = await this.core.crypto.decode(t, s);
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcRequest"])(r) ? (this.core.history.set(t, r), this.onRelayEventRequest({
                    topic: t,
                    payload: r
                })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResponse"])(r) && (await this.core.history.resolve(r), await this.onRelayEventResponse({
                    topic: t,
                    payload: r
                }), this.core.history.delete(t, r.id));
            } catch (n) {
                this.logger.error(n);
            }
        });
    }
    registerExpirerEvents() {
        this.core.expirer.on(S.expired, async (e)=>{
            const { topic: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseExpirerTarget"])(e.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(V.expire, {
                topic: t
            }));
        });
    }
}
class ai extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IJsonRpcHistory"] {
    constructor(e, t){
        super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = Dt, this.version = mt, this.cached = [], this.initialized = !1, this.storagePrefix = x, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s)=>this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.set = (s, i, r)=>{
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                type: "method",
                method: "set",
                topic: s,
                request: i,
                chainId: r
            }), this.records.has(i.id)) return;
            const n = {
                id: i.id,
                topic: s,
                request: {
                    method: i.method,
                    params: i.params || null
                },
                chainId: r,
                expiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"])
            };
            this.records.set(n.id, n), this.persist(), this.events.emit(P.created, n);
        }, this.resolve = async (s)=>{
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                type: "method",
                method: "update",
                response: s
            }), !this.records.has(s.id)) return;
            const i = await this.getRecord(s.id);
            typeof i.response > "u" && (i.response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcError"])(s) ? {
                error: s.error
            } : {
                result: s.result
            }, this.records.set(i.id, i), this.persist(), this.events.emit(P.updated, i));
        }, this.get = async (s, i)=>(this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                type: "method",
                method: "get",
                topic: s,
                id: i
            }), await this.getRecord(i)), this.delete = (s, i)=>{
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: i
            }), this.values.forEach((r)=>{
                if (r.topic === s) {
                    if (typeof i < "u" && r.id !== i) return;
                    this.records.delete(r.id), this.events.emit(P.deleted, r);
                }
            }), this.persist();
        }, this.exists = async (s, i)=>(this.isInitialized(), this.records.has(i) ? (await this.getRecord(i)).topic === s : !1), this.on = (s, i)=>{
            this.events.on(s, i);
        }, this.once = (s, i)=>{
            this.events.once(s, i);
        }, this.off = (s, i)=>{
            this.events.off(s, i);
        }, this.removeListener = (s, i)=>{
            this.events.removeListener(s, i);
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get size() {
        return this.records.size;
    }
    get keys() {
        return Array.from(this.records.keys());
    }
    get values() {
        return Array.from(this.records.values());
    }
    get pending() {
        const e = [];
        return this.values.forEach((t)=>{
            if (typeof t.response < "u") return;
            const s = {
                topic: t.topic,
                request: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(s);
        }), e;
    }
    async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey);
    }
    getRecord(e) {
        this.isInitialized();
        const t = this.records.get(e);
        if (!t) {
            const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(s);
        }
        return t;
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(P.sync);
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
        }
    }
    registerEventListeners() {
        this.events.on(P.created, (e)=>{
            const t = P.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            });
        }), this.events.on(P.updated, (e)=>{
            const t = P.updated;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            });
        }), this.events.on(P.deleted, (e)=>{
            const t = P.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            });
        }), this.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>{
            this.cleanup();
        });
    }
    cleanup() {
        try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(P.deleted, t, !1), e = !0);
            }), e && this.persist();
        } catch (e) {
            this.logger.warn(e);
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class hi extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IExpirer"] {
    constructor(e, t){
        super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = bt, this.version = ft, this.cached = [], this.initialized = !1, this.storagePrefix = x, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s)=>this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.has = (s)=>{
            try {
                const i = this.formatTarget(s);
                return typeof this.getExpiration(i) < "u";
            } catch  {
                return !1;
            }
        }, this.set = (s, i)=>{
            this.isInitialized();
            const r = this.formatTarget(s), n = {
                target: r,
                expiry: i
            };
            this.expirations.set(r, n), this.checkExpiry(r, n), this.events.emit(S.created, {
                target: r,
                expiration: n
            });
        }, this.get = (s)=>{
            this.isInitialized();
            const i = this.formatTarget(s);
            return this.getExpiration(i);
        }, this.del = (s)=>{
            if (this.isInitialized(), this.has(s)) {
                const i = this.formatTarget(s), r = this.getExpiration(i);
                this.expirations.delete(i), this.events.emit(S.deleted, {
                    target: i,
                    expiration: r
                });
            }
        }, this.on = (s, i)=>{
            this.events.on(s, i);
        }, this.once = (s, i)=>{
            this.events.once(s, i);
        }, this.off = (s, i)=>{
            this.events.off(s, i);
        }, this.removeListener = (s, i)=>{
            this.events.removeListener(s, i);
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.expirations.size;
    }
    get keys() {
        return Array.from(this.expirations.keys());
    }
    get values() {
        return Array.from(this.expirations.values());
    }
    formatTarget(e) {
        if (typeof e == "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTopicTarget"])(e);
        if (typeof e == "number") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIdTarget"])(e);
        const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(t);
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit(S.sync);
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
        }
    }
    getExpiration(e) {
        const t = this.expirations.get(e);
        if (!t) {
            const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.warn(s), new Error(s);
        }
        return t;
    }
    checkExpiry(e, t) {
        const { expiry: s } = t;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(s) - Date.now() <= 0 && this.expire(e, t);
    }
    expire(e, t) {
        this.expirations.delete(e), this.events.emit(S.expired, {
            target: e,
            expiration: t
        });
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((e, t)=>this.checkExpiry(t, e));
    }
    registerEventListeners() {
        this.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>this.checkExpirations()), this.events.on(S.created, (e)=>{
            const t = S.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        }), this.events.on(S.expired, (e)=>{
            const t = S.expired;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        }), this.events.on(S.deleted, (e)=>{
            const t = S.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        });
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class ci extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IVerify"] {
    constructor(e, t, s){
        super(e, t, s), this.core = e, this.logger = t, this.store = s, this.name = _t, this.verifyUrlV3 = vt, this.storagePrefix = x, this.version = De, this.init = async ()=>{
            var i;
            this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])((i = this.publicKey) == null ? void 0 : i.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
        }, this.register = async (i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])() || this.isDevEnv) return;
            const r = window.location.origin, { id: n, decryptedId: a } = i, h = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${r}&id=${n}&decryptedId=${a}`;
            try {
                const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocument"])(), l = this.startAbortTimer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"] * 5), p = await new Promise((D, m)=>{
                    const u = ()=>{
                        window.removeEventListener("message", _), c.body.removeChild(g), m("attestation aborted");
                    };
                    this.abortController.signal.addEventListener("abort", u);
                    const g = c.createElement("iframe");
                    g.src = h, g.style.display = "none", g.addEventListener("error", u, {
                        signal: this.abortController.signal
                    });
                    const _ = (y)=>{
                        if (y.data && typeof y.data == "string") try {
                            const b = JSON.parse(y.data);
                            if (b.type === "verify_attestation") {
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(b.attestation).payload.id !== n) return;
                                clearInterval(l), c.body.removeChild(g), this.abortController.signal.removeEventListener("abort", u), window.removeEventListener("message", _), D(b.attestation === null ? "" : b.attestation);
                            }
                        } catch (b) {
                            this.logger.warn(b);
                        }
                    };
                    c.body.appendChild(g), window.addEventListener("message", _, {
                        signal: this.abortController.signal
                    });
                });
                return this.logger.debug("jwt attestation", p), p;
            } catch (c) {
                this.logger.warn(c);
            }
            return "";
        }, this.resolve = async (i)=>{
            if (this.isDevEnv) return "";
            const { attestationId: r, hash: n, encryptedId: a } = i;
            if (r === "") {
                this.logger.debug("resolve: attestationId is empty, skipping");
                return;
            }
            if (r) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(r).payload.id !== a) return;
                const c = await this.isValidJwtAttestation(r);
                if (c) {
                    if (!c.isVerified) {
                        this.logger.warn("resolve: jwt attestation: origin url not verified");
                        return;
                    }
                    return c;
                }
            }
            if (!n) return;
            const h = this.getVerifyUrl(i?.verifyUrl);
            return this.fetchAttestation(n, h);
        }, this.fetchAttestation = async (i, r)=>{
            this.logger.debug(`resolving attestation: ${i} from url: ${r}`);
            const n = this.startAbortTimer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"] * 5), a = await fetch(`${r}/attestation/${i}?v2Supported=true`, {
                signal: this.abortController.signal
            });
            return clearTimeout(n), a.status === 200 ? await a.json() : void 0;
        }, this.getVerifyUrl = (i)=>{
            let r = i || J;
            return wt.includes(r) || (this.logger.info(`verify url: ${r}, not included in trusted list, assigning default: ${J}`), r = J), r;
        }, this.fetchPublicKey = async ()=>{
            try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                const i = this.startAbortTimer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_SECONDS"]), r = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal
                });
                return clearTimeout(i), await r.json();
            } catch (i) {
                this.logger.warn(i);
            }
        }, this.persistPublicKey = async (i)=>{
            this.logger.debug("persisting public key to local storage", i), await this.store.setItem(this.storeKey, i), this.publicKey = i;
        }, this.removePublicKey = async ()=>{
            this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
        }, this.isValidJwtAttestation = async (i)=>{
            const r = await this.getPublicKey();
            try {
                if (r) return this.validateAttestation(i, r);
            } catch (a) {
                this.logger.error(a), this.logger.warn("error validating attestation");
            }
            const n = await this.fetchAndPersistPublicKey();
            try {
                if (n) return this.validateAttestation(i, n);
            } catch (a) {
                this.logger.error(a), this.logger.warn("error validating attestation");
            }
        }, this.getPublicKey = async ()=>this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey(), this.fetchAndPersistPublicKey = async ()=>{
            if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
            this.fetchPromise = new Promise(async (r)=>{
                const n = await this.fetchPublicKey();
                n && (await this.persistPublicKey(n), r(n));
            });
            const i = await this.fetchPromise;
            return this.fetchPromise = void 0, i;
        }, this.validateAttestation = (i, r)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyP256Jwt"])(i, r.publicKey), a = {
                hasExpired: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(n.exp) < Date.now(),
                payload: n
            };
            if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
            return {
                origin: a.payload.origin,
                isScam: a.payload.isScam,
                isVerified: a.payload.isVerified
            };
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.abortController = new AbortController, this.isDevEnv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTestRun"])(), this.init();
    }
    get storeKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController, setTimeout(()=>this.abortController.abort(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(e));
    }
}
class li extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEchoClient"] {
    constructor(e, t){
        super(e, t), this.projectId = e, this.logger = t, this.context = It, this.registerDeviceToken = async (s)=>{
            const { clientId: i, token: r, notificationType: n, enableEncrypted: a = !1 } = s, h = `${Tt}/${this.projectId}/clients`;
            await fetch(h, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: i,
                    type: n,
                    token: r,
                    always_raw: a
                })
            });
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.context);
    }
}
var dn = Object.defineProperty, ui = Object.getOwnPropertySymbols, pn = Object.prototype.hasOwnProperty, gn = Object.prototype.propertyIsEnumerable, di = (o, e, t)=>e in o ? dn(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, Z = (o, e)=>{
    for(var t in e || (e = {}))pn.call(e, t) && di(o, t, e[t]);
    if (ui) for (var t of ui(e))gn.call(e, t) && di(o, t, e[t]);
    return o;
};
class pi extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEventClient"] {
    constructor(e, t, s = !0){
        super(e, t, s), this.core = e, this.logger = t, this.context = Pt, this.storagePrefix = x, this.storageVersion = Ct, this.events = new Map, this.shouldPersist = !1, this.init = async ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTestRun"])()) try {
                const i = {
                    eventId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uuidv4"])(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                        event: "INIT",
                        type: "",
                        properties: {
                            client_id: await this.core.crypto.getClientId(),
                            user_agent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUA"])(this.core.relayer.protocol, this.core.relayer.version, se)
                        }
                    }
                };
                await this.sendEvent([
                    i
                ]);
            } catch (i) {
                this.logger.warn(i);
            }
        }, this.createEvent = (i)=>{
            const { event: r = "ERROR", type: n = "", properties: { topic: a, trace: h } } = i, c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uuidv4"])(), l = this.core.projectId || "", p = Date.now(), D = Z({
                eventId: c,
                timestamp: p,
                props: {
                    event: r,
                    type: n,
                    properties: {
                        topic: a,
                        trace: h
                    }
                },
                bundleId: l,
                domain: this.getAppDomain()
            }, this.setMethods(c));
            return this.telemetryEnabled && (this.events.set(c, D), this.shouldPersist = !0), D;
        }, this.getEvent = (i)=>{
            const { eventId: r, topic: n } = i;
            if (r) return this.events.get(r);
            const a = Array.from(this.events.values()).find((h)=>h.props.properties.topic === n);
            if (a) return Z(Z({}, a), this.setMethods(a.eventId));
        }, this.deleteEvent = (i)=>{
            const { eventId: r } = i;
            this.events.delete(r), this.shouldPersist = !0;
        }, this.setEventListeners = ()=>{
            this.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, async ()=>{
                this.shouldPersist && await this.persist(), this.events.forEach((i)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromMiliseconds"])(Date.now()) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromMiliseconds"])(i.timestamp) > St && (this.events.delete(i.eventId), this.shouldPersist = !0);
                });
            });
        }, this.setMethods = (i)=>({
                addTrace: (r)=>this.addTrace(i, r),
                setError: (r)=>this.setError(i, r)
            }), this.addTrace = (i, r)=>{
            const n = this.events.get(i);
            n && (n.props.properties.trace.push(r), this.events.set(i, n), this.shouldPersist = !0);
        }, this.setError = (i, r)=>{
            const n = this.events.get(i);
            n && (n.props.type = r, n.timestamp = Date.now(), this.events.set(i, n), this.shouldPersist = !0);
        }, this.persist = async ()=>{
            await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1;
        }, this.restore = async ()=>{
            try {
                const i = await this.core.storage.getItem(this.storageKey) || [];
                if (!i.length) return;
                i.forEach((r)=>{
                    this.events.set(r.eventId, Z(Z({}, r), this.setMethods(r.eventId)));
                });
            } catch (i) {
                this.logger.warn(i);
            }
        }, this.submit = async ()=>{
            if (!this.telemetryEnabled || this.events.size === 0) return;
            const i = [];
            for (const [r, n] of this.events)n.props.type && i.push(n);
            if (i.length !== 0) try {
                if ((await this.sendEvent(i)).ok) for (const r of i)this.events.delete(r.eventId), this.shouldPersist = !0;
            } catch (r) {
                this.logger.warn(r);
            }
        }, this.sendEvent = async (i)=>{
            const r = this.getAppDomain() ? "" : "&sp=desktop";
            return await fetch(`${Rt}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${se}${r}`, {
                method: "POST",
                body: JSON.stringify(i)
            });
        }, this.getAppDomain = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppMetadata"])().url, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.context), this.telemetryEnabled = s, s ? this.restore().then(async ()=>{
            await this.submit(), this.setEventListeners();
        }) : this.persist();
    }
    get storageKey() {
        return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
    }
}
var yn = Object.defineProperty, gi = Object.getOwnPropertySymbols, Dn = Object.prototype.hasOwnProperty, mn = Object.prototype.propertyIsEnumerable, yi = (o, e, t)=>e in o ? yn(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, Di = (o, e)=>{
    for(var t in e || (e = {}))Dn.call(e, t) && yi(o, t, e[t]);
    if (gi) for (var t of gi(e))mn.call(e, t) && yi(o, t, e[t]);
    return o;
};
class ne extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICore"] {
    constructor(e){
        var t;
        super(e), this.protocol = ye, this.version = De, this.name = ie, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.initialized = !1, this.on = (n, a)=>this.events.on(n, a), this.once = (n, a)=>this.events.once(n, a), this.off = (n, a)=>this.events.off(n, a), this.removeListener = (n, a)=>this.events.removeListener(n, a), this.dispatchEnvelope = ({ topic: n, message: a, sessionExists: h })=>{
            if (!n || !a) return;
            const c = {
                topic: n,
                message: a,
                publishedAt: Date.now(),
                transportType: M.link_mode
            };
            this.relayer.onLinkMessageEvent(c, {
                sessionExists: h
            });
        }, this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || be, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: typeof e?.logger == "string" && e.logger ? e.logger : Ye.logger
        }), { logger: i, chunkLoggerController: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlatformLogger"])({
            opts: s,
            maxSizeInBytes: e?.maxLogBlobSizeInBytes,
            loggerOverride: e?.logger
        });
        this.logChunkController = r, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async ()=>{
            var n, a;
            (n = this.logChunkController) != null && n.downloadLogsBlobInBrowser && ((a = this.logChunkController) == null || a.downloadLogsBlobInBrowser({
                clientId: await this.crypto.getClientId()
            }));
        }), this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(i, this.name), this.heartbeat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeartBeat"], this.crypto = new Ht(this, this.logger, e?.keychain), this.history = new ai(this, this.logger), this.expirer = new hi(this, this.logger), this.storage = e != null && e.storage ? e.storage : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$keyvaluestorage$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](Di(Di({}, Je), e?.storageOptions)), this.relayer = new ti({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }), this.pairing = new oi(this, this.logger), this.verify = new ci(this, this.logger, this.storage), this.echoClient = new li(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new pi(this, this.logger, e?.telemetryEnabled);
    }
    static async init(e) {
        const t = new ne(e);
        await t.initialize();
        const s = await t.crypto.getClientId();
        return await t.storage.setItem(lt, s), t;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    async start() {
        this.initialized || await this.initialize();
    }
    async getLogsBlob() {
        var e;
        return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({
            clientId: await this.crypto.getClientId()
        });
    }
    async addLinkModeSupportedApp(e) {
        this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(fe, this.linkModeSupportedApps));
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.eventClient.init(), this.linkModeSupportedApps = await this.storage.getItem(fe) || [], this.initialized = !0, this.logger.info("Core Initialization Success");
        } catch (e) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
        }
    }
}
const bn = ne;
;
 //# sourceMappingURL=index.es.js.map
}}),

};

//# sourceMappingURL=e2162_%40walletconnect_core_dist_index_es_9c47f6.js.map
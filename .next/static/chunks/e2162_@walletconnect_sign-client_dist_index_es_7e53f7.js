(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/e2162_@walletconnect_sign-client_dist_index_es_7e53f7.js", {

"[project]/node_modules/@walletconnect/universal-provider/node_modules/@walletconnect/sign-client/dist/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AUTH_CONTEXT": (()=>lt),
    "AUTH_KEYS_CONTEXT": (()=>pt),
    "AUTH_PAIRING_TOPIC_CONTEXT": (()=>ht),
    "AUTH_PROTOCOL": (()=>ct),
    "AUTH_PUBLIC_KEY_NAME": (()=>ae),
    "AUTH_REQUEST_CONTEXT": (()=>dt),
    "AUTH_STORAGE_PREFIX": (()=>oe),
    "AUTH_VERSION": (()=>gs),
    "ENGINE_CONTEXT": (()=>nt),
    "ENGINE_QUEUE_STATES": (()=>x),
    "ENGINE_RPC_OPTS": (()=>v),
    "HISTORY_CONTEXT": (()=>hs),
    "HISTORY_EVENTS": (()=>ps),
    "HISTORY_STORAGE_VERSION": (()=>ds),
    "METHODS_TO_VERIFY": (()=>at),
    "PROPOSAL_CONTEXT": (()=>st),
    "PROPOSAL_EXPIRY": (()=>us),
    "PROPOSAL_EXPIRY_MESSAGE": (()=>it),
    "REQUEST_CONTEXT": (()=>ot),
    "SESSION_CONTEXT": (()=>rt),
    "SESSION_EXPIRY": (()=>z),
    "SESSION_REQUEST_EXPIRY_BOUNDARIES": (()=>me),
    "SIGN_CLIENT_CONTEXT": (()=>Le),
    "SIGN_CLIENT_DEFAULT": (()=>we),
    "SIGN_CLIENT_EVENTS": (()=>cs),
    "SIGN_CLIENT_PROTOCOL": (()=>be),
    "SIGN_CLIENT_STORAGE_OPTIONS": (()=>ls),
    "SIGN_CLIENT_STORAGE_PREFIX": (()=>ye),
    "SIGN_CLIENT_VERSION": (()=>Ce),
    "SessionStore": (()=>Ns),
    "SignClient": (()=>Ps),
    "WALLETCONNECT_DEEPLINK_CHOICE": (()=>xe),
    "default": (()=>_e)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/events/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/time/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/universal-provider/node_modules/@walletconnect/utils/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/universal-provider/node_modules/@walletconnect/core/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/types/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__ = __turbopack_import__("[project]/node_modules/pino/browser.js [app-client] (ecmascript) <export default as pino>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
const be = "wc", Ce = 2, Le = "client", ye = `${be}@${Ce}:${Le}:`, we = {
    name: Le,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.org"
}, cs = {
    session_proposal: "session_proposal",
    session_update: "session_update",
    session_extend: "session_extend",
    session_ping: "session_ping",
    session_delete: "session_delete",
    session_expire: "session_expire",
    session_request: "session_request",
    session_request_sent: "session_request_sent",
    session_event: "session_event",
    proposal_expire: "proposal_expire",
    session_authenticate: "session_authenticate",
    session_request_expire: "session_request_expire"
}, ls = {
    database: ":memory:"
}, xe = "WALLETCONNECT_DEEPLINK_CHOICE", ps = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}, hs = "history", ds = "0.3", st = "proposal", us = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THIRTY_DAYS"], it = "Proposal expired", rt = "session", z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVEN_DAYS"], nt = "engine", v = {
    wc_sessionPropose: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !0,
            tag: 1100
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1101
        },
        reject: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1120
        },
        autoReject: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1121
        }
    },
    wc_sessionSettle: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1102
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1103
        }
    },
    wc_sessionUpdate: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1104
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1105
        }
    },
    wc_sessionExtend: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1106
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1107
        }
    },
    wc_sessionRequest: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !0,
            tag: 1108
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1109
        }
    },
    wc_sessionEvent: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !0,
            tag: 1110
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1111
        }
    },
    wc_sessionDelete: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1112
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1113
        }
    },
    wc_sessionPing: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1114
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1115
        }
    },
    wc_sessionAuthenticate: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_HOUR"],
            prompt: !0,
            tag: 1116
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_HOUR"],
            prompt: !1,
            tag: 1117
        },
        reject: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1118
        },
        autoReject: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1119
        }
    }
}, me = {
    min: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
    max: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVEN_DAYS"]
}, x = {
    idle: "IDLE",
    active: "ACTIVE"
}, ot = "request", at = [
    "wc_sessionPropose",
    "wc_sessionRequest",
    "wc_authRequest",
    "wc_sessionAuthenticate"
], ct = "wc", gs = 1.5, lt = "auth", pt = "authKeys", ht = "pairingTopics", dt = "requests", oe = `${ct}@${1.5}:${lt}:`, ae = `${oe}:PUB_KEY`;
var ys = Object.defineProperty, ws = Object.defineProperties, ms = Object.getOwnPropertyDescriptors, ut = Object.getOwnPropertySymbols, _s = Object.prototype.hasOwnProperty, Es = Object.prototype.propertyIsEnumerable, gt = (q, o, e)=>o in q ? ys(q, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : q[o] = e, I = (q, o)=>{
    for(var e in o || (o = {}))_s.call(o, e) && gt(q, e, o[e]);
    if (ut) for (var e of ut(o))Es.call(o, e) && gt(q, e, o[e]);
    return q;
}, D = (q, o)=>ws(q, ms(o));
class Rs extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEngine"] {
    constructor(o){
        super(o), this.name = nt, this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], this.initialized = !1, this.requestQueue = {
            state: x.idle,
            queue: []
        }, this.sessionRequestQueue = {
            state: x.idle,
            queue: []
        }, this.requestQueueDelay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_SECOND"], this.expectedPairingMethodMap = new Map, this.recentlyDeletedMap = new Map, this.recentlyDeletedLimit = 200, this.relayMessageCache = [], this.init = async ()=>{
            this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({
                methods: Object.keys(v)
            }), this.initialized = !0, setTimeout(()=>{
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(this.requestQueueDelay)));
        }, this.connect = async (e)=>{
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
            const t = D(I({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {}
            });
            await this.isValidConnect(t);
            const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: r, sessionProperties: n, relays: a } = t;
            let c = s, h, p = !1;
            try {
                c && (p = this.client.core.pairing.pairings.get(c).active);
            } catch (E) {
                throw this.client.logger.error(`connect() -> pairing.get(${c}) failed`), E;
            }
            if (!c || !p) {
                const { topic: E, uri: S } = await this.client.core.pairing.create();
                c = E, h = S;
            }
            if (!c) {
                const { message: E } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
                throw new Error(E);
            }
            const d = await this.client.core.crypto.generateKeyPair(), l = v.wc_sessionPropose.req.ttl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"], w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(l), m = I({
                requiredNamespaces: i,
                optionalNamespaces: r,
                relays: a ?? [
                    {
                        protocol: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_DEFAULT_PROTOCOL"]
                    }
                ],
                proposer: {
                    publicKey: d,
                    metadata: this.client.metadata
                },
                expiryTimestamp: w,
                pairingTopic: c
            }, n && {
                sessionProperties: n
            }), { reject: y, resolve: _, done: R } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelayedPromise"])(l, it);
            this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), async ({ error: E, session: S })=>{
                if (E) y(E);
                else if (S) {
                    S.self.publicKey = d;
                    const M = D(I({}, S), {
                        pairingTopic: m.pairingTopic,
                        requiredNamespaces: m.requiredNamespaces,
                        optionalNamespaces: m.optionalNamespaces,
                        transportType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].relay
                    });
                    await this.client.session.set(S.topic, M), await this.setExpiry(S.topic, S.expiry), c && await this.client.core.pairing.updateMetadata({
                        topic: c,
                        metadata: S.peer.metadata
                    }), this.cleanupDuplicatePairings(M), _(M);
                }
            });
            const V = await this.sendRequest({
                topic: c,
                method: "wc_sessionPropose",
                params: m,
                throwOnFailedPublish: !0
            });
            return await this.setProposal(V, I({
                id: V
            }, m)), {
                uri: h,
                approval: R
            };
        }, this.pair = async (e)=>{
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
            try {
                return await this.client.core.pairing.pair(e);
            } catch (t) {
                throw this.client.logger.error("pair() failed"), t;
            }
        }, this.approve = async (e)=>{
            var t, s, i;
            const r = this.client.core.eventClient.createEvent({
                properties: {
                    topic: (t = e?.id) == null ? void 0 : t.toString(),
                    trace: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_TRACES"].session_approve_started
                    ]
                }
            });
            try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
            } catch (N) {
                throw r.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_ERRORS"].no_internet_connection), N;
            }
            try {
                await this.isValidProposalId(e?.id);
            } catch (N) {
                throw this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`), r.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_ERRORS"].proposal_not_found), N;
            }
            try {
                await this.isValidApprove(e);
            } catch (N) {
                throw this.client.logger.error("approve() -> isValidApprove() failed"), r.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_ERRORS"].session_approve_namespace_validation_failure), N;
            }
            const { id: n, relayProtocol: a, namespaces: c, sessionProperties: h, sessionConfig: p } = e, d = this.client.proposal.get(n);
            this.client.core.eventClient.deleteEvent({
                eventId: r.eventId
            });
            const { pairingTopic: l, proposer: w, requiredNamespaces: m, optionalNamespaces: y } = d;
            let _ = (s = this.client.core.eventClient) == null ? void 0 : s.getEvent({
                topic: l
            });
            _ || (_ = (i = this.client.core.eventClient) == null ? void 0 : i.createEvent({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_TRACES"].session_approve_started,
                properties: {
                    topic: l,
                    trace: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_TRACES"].session_approve_started,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_TRACES"].session_namespaces_validation_success
                    ]
                }
            }));
            const R = await this.client.core.crypto.generateKeyPair(), V = w.publicKey, E = await this.client.core.crypto.generateSharedKey(R, V), S = I(I({
                relay: {
                    protocol: a ?? "irn"
                },
                namespaces: c,
                controller: {
                    publicKey: R,
                    metadata: this.client.metadata
                },
                expiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(z)
            }, h && {
                sessionProperties: h
            }), p && {
                sessionConfig: p
            }), M = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].relay;
            _.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_TRACES"].subscribing_session_topic);
            try {
                await this.client.core.relayer.subscribe(E, {
                    transportType: M
                });
            } catch (N) {
                throw _.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_ERRORS"].subscribe_session_topic_failure), N;
            }
            _.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_TRACES"].subscribe_session_topic_success);
            const W = D(I({}, S), {
                topic: E,
                requiredNamespaces: m,
                optionalNamespaces: y,
                pairingTopic: l,
                acknowledged: !1,
                self: S.controller,
                peer: {
                    publicKey: w.publicKey,
                    metadata: w.metadata
                },
                controller: R,
                transportType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].relay
            });
            await this.client.session.set(E, W), _.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_TRACES"].store_session);
            try {
                _.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_TRACES"].publishing_session_settle), await this.sendRequest({
                    topic: E,
                    method: "wc_sessionSettle",
                    params: S,
                    throwOnFailedPublish: !0
                }).catch((N)=>{
                    throw _?.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_ERRORS"].session_settle_publish_failure), N;
                }), _.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_TRACES"].session_settle_publish_success), _.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_TRACES"].publishing_session_approve), await this.sendResult({
                    id: n,
                    topic: l,
                    result: {
                        relay: {
                            protocol: a ?? "irn"
                        },
                        responderPublicKey: R
                    },
                    throwOnFailedPublish: !0
                }).catch((N)=>{
                    throw _?.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_ERRORS"].session_approve_publish_failure), N;
                }), _.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_TRACES"].session_approve_publish_success);
            } catch (N) {
                throw this.client.logger.error(N), this.client.session.delete(E, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(E), N;
            }
            return this.client.core.eventClient.deleteEvent({
                eventId: _.eventId
            }), await this.client.core.pairing.updateMetadata({
                topic: l,
                metadata: w.metadata
            }), await this.client.proposal.delete(n, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                topic: l
            }), await this.setExpiry(E, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(z)), {
                topic: E,
                acknowledged: ()=>Promise.resolve(this.client.session.get(E))
            };
        }, this.reject = async (e)=>{
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
            try {
                await this.isValidReject(e);
            } catch (r) {
                throw this.client.logger.error("reject() -> isValidReject() failed"), r;
            }
            const { id: t, reason: s } = e;
            let i;
            try {
                i = this.client.proposal.get(t).pairingTopic;
            } catch (r) {
                throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`), r;
            }
            i && (await this.sendError({
                id: t,
                topic: i,
                error: s,
                rpcOpts: v.wc_sessionPropose.reject
            }), await this.client.proposal.delete(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")));
        }, this.update = async (e)=>{
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
            try {
                await this.isValidUpdate(e);
            } catch (p) {
                throw this.client.logger.error("update() -> isValidUpdate() failed"), p;
            }
            const { topic: t, namespaces: s } = e, { done: i, resolve: r, reject: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelayedPromise"])(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["payloadId"])(), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString(), h = this.client.session.get(t).namespaces;
            return this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_update", a), ({ error: p })=>{
                p ? n(p) : r();
            }), await this.client.session.update(t, {
                namespaces: s
            }), await this.sendRequest({
                topic: t,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: s
                },
                throwOnFailedPublish: !0,
                clientRpcId: a,
                relayRpcId: c
            }).catch((p)=>{
                this.client.logger.error(p), this.client.session.update(t, {
                    namespaces: h
                }), n(p);
            }), {
                acknowledged: i
            };
        }, this.extend = async (e)=>{
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
            try {
                await this.isValidExtend(e);
            } catch (a) {
                throw this.client.logger.error("extend() -> isValidExtend() failed"), a;
            }
            const { topic: t } = e, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["payloadId"])(), { done: i, resolve: r, reject: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelayedPromise"])();
            return this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_extend", s), ({ error: a })=>{
                a ? n(a) : r();
            }), await this.setExpiry(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(z)), this.sendRequest({
                topic: t,
                method: "wc_sessionExtend",
                params: {},
                clientRpcId: s,
                throwOnFailedPublish: !0
            }).catch((a)=>{
                n(a);
            }), {
                acknowledged: i
            };
        }, this.request = async (e)=>{
            this.isInitialized();
            try {
                await this.isValidRequest(e);
            } catch (w) {
                throw this.client.logger.error("request() -> isValidRequest() failed"), w;
            }
            const { chainId: t, request: s, topic: i, expiry: r = v.wc_sessionRequest.req.ttl } = e, n = this.client.session.get(i);
            n?.transportType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].relay && await this.confirmOnlineStateOrThrow();
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["payloadId"])(), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString(), { done: h, resolve: p, reject: d } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelayedPromise"])(r, "Request expired. Please try again.");
            this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", a), ({ error: w, result: m })=>{
                w ? d(w) : p(m);
            });
            const l = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
            return l ? (await this.sendRequest({
                clientRpcId: a,
                relayRpcId: c,
                topic: i,
                method: "wc_sessionRequest",
                params: {
                    request: D(I({}, s), {
                        expiryTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(r)
                    }),
                    chainId: t
                },
                expiry: r,
                throwOnFailedPublish: !0,
                appLink: l
            }).catch((w)=>d(w)), this.client.events.emit("session_request_sent", {
                topic: i,
                request: s,
                chainId: t,
                id: a
            }), await h()) : await Promise.all([
                new Promise(async (w)=>{
                    await this.sendRequest({
                        clientRpcId: a,
                        relayRpcId: c,
                        topic: i,
                        method: "wc_sessionRequest",
                        params: {
                            request: D(I({}, s), {
                                expiryTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(r)
                            }),
                            chainId: t
                        },
                        expiry: r,
                        throwOnFailedPublish: !0
                    }).catch((m)=>d(m)), this.client.events.emit("session_request_sent", {
                        topic: i,
                        request: s,
                        chainId: t,
                        id: a
                    }), w();
                }),
                new Promise(async (w)=>{
                    var m;
                    if (!((m = n.sessionConfig) != null && m.disableDeepLink)) {
                        const y = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeepLink"])(this.client.core.storage, xe);
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleDeeplinkRedirect"])({
                            id: a,
                            topic: i,
                            wcDeepLink: y
                        });
                    }
                    w();
                }),
                h()
            ]).then((w)=>w[2]);
        }, this.respond = async (e)=>{
            this.isInitialized(), await this.isValidRespond(e);
            const { topic: t, response: s } = e, { id: i } = s, r = this.client.session.get(t);
            r.transportType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].relay && await this.confirmOnlineStateOrThrow();
            const n = this.getAppLinkIfEnabled(r.peer.metadata, r.transportType);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(s) ? await this.sendResult({
                id: i,
                topic: t,
                result: s.result,
                throwOnFailedPublish: !0,
                appLink: n
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcError"])(s) && await this.sendError({
                id: i,
                topic: t,
                error: s.error,
                appLink: n
            }), this.cleanupAfterResponse(e);
        }, this.ping = async (e)=>{
            this.isInitialized(), await this.confirmOnlineStateOrThrow();
            try {
                await this.isValidPing(e);
            } catch (s) {
                throw this.client.logger.error("ping() -> isValidPing() failed"), s;
            }
            const { topic: t } = e;
            if (this.client.session.keys.includes(t)) {
                const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["payloadId"])(), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString(), { done: r, resolve: n, reject: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelayedPromise"])();
                this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_ping", s), ({ error: c })=>{
                    c ? a(c) : n();
                }), await Promise.all([
                    this.sendRequest({
                        topic: t,
                        method: "wc_sessionPing",
                        params: {},
                        throwOnFailedPublish: !0,
                        clientRpcId: s,
                        relayRpcId: i
                    }),
                    r()
                ]);
            } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                topic: t
            });
        }, this.emit = async (e)=>{
            this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(e);
            const { topic: t, event: s, chainId: i } = e, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString();
            await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: {
                    event: s,
                    chainId: i
                },
                throwOnFailedPublish: !0,
                relayRpcId: r
            });
        }, this.disconnect = async (e)=>{
            this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(e);
            const { topic: t } = e;
            if (this.client.session.keys.includes(t)) await this.sendRequest({
                topic: t,
                method: "wc_sessionDelete",
                params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED"),
                throwOnFailedPublish: !0
            }), await this.deleteSession({
                topic: t,
                emitEvent: !1
            });
            else if (this.client.core.pairing.pairings.keys.includes(t)) await this.client.core.pairing.disconnect({
                topic: t
            });
            else {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
                throw new Error(s);
            }
        }, this.find = (e)=>(this.isInitialized(), this.client.session.getAll().filter((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSessionCompatible"])(t, e))), this.getPendingSessionRequests = ()=>this.client.pendingRequest.getAll(), this.authenticate = async (e, t)=>{
            var s;
            this.isInitialized(), this.isValidAuthenticate(e);
            const i = t && this.client.core.linkModeSupportedApps.includes(t) && ((s = this.client.metadata.redirect) == null ? void 0 : s.linkMode), r = i ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].link_mode : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].relay;
            r === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].relay && await this.confirmOnlineStateOrThrow();
            const { chains: n, statement: a = "", uri: c, domain: h, nonce: p, type: d, exp: l, nbf: w, methods: m = [], expiry: y } = e, _ = [
                ...e.resources || []
            ], { topic: R, uri: V } = await this.client.core.pairing.create({
                methods: [
                    "wc_sessionAuthenticate"
                ],
                transportType: r
            });
            this.client.logger.info({
                message: "Generated new pairing",
                pairing: {
                    topic: R,
                    uri: V
                }
            });
            const E = await this.client.core.crypto.generateKeyPair(), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(E);
            if (await Promise.all([
                this.client.auth.authKeys.set(ae, {
                    responseTopic: S,
                    publicKey: E
                }),
                this.client.auth.pairingTopics.set(S, {
                    topic: S,
                    pairingTopic: R
                })
            ]), await this.client.core.relayer.subscribe(S, {
                transportType: r
            }), this.client.logger.info(`sending request to new pairing topic: ${R}`), m.length > 0) {
                const { namespace: O } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChainId"])(n[0]);
                let T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncodedRecap"])(O, "request", m);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecapFromResources"])(_) && (T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeEncodedRecaps"])(T, _.pop())), _.push(T);
            }
            const M = y && y > v.wc_sessionAuthenticate.req.ttl ? y : v.wc_sessionAuthenticate.req.ttl, W = {
                authPayload: {
                    type: d ?? "caip122",
                    chains: n,
                    statement: a,
                    aud: c,
                    domain: h,
                    version: "1",
                    nonce: p,
                    iat: new Date().toISOString(),
                    exp: l,
                    nbf: w,
                    resources: _
                },
                requester: {
                    publicKey: E,
                    metadata: this.client.metadata
                },
                expiryTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(M)
            }, N = {
                eip155: {
                    chains: n,
                    methods: [
                        ...new Set([
                            "personal_sign",
                            ...m
                        ])
                    ],
                    events: [
                        "chainChanged",
                        "accountsChanged"
                    ]
                }
            }, De = {
                requiredNamespaces: {},
                optionalNamespaces: N,
                relays: [
                    {
                        protocol: "irn"
                    }
                ],
                pairingTopic: R,
                proposer: {
                    publicKey: E,
                    metadata: this.client.metadata
                },
                expiryTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(v.wc_sessionPropose.req.ttl)
            }, { done: wt, resolve: Ve, reject: Ee } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelayedPromise"])(M, "Request expired"), ce = async ({ error: O, session: T })=>{
                if (this.events.off((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", G), Re), O) Ee(O);
                else if (T) {
                    T.self.publicKey = E, await this.client.session.set(T.topic, T), await this.setExpiry(T.topic, T.expiry), R && await this.client.core.pairing.updateMetadata({
                        topic: R,
                        metadata: T.peer.metadata
                    });
                    const le = this.client.session.get(T.topic);
                    await this.deleteProposal(Z), Ve({
                        session: le
                    });
                }
            }, Re = async (O)=>{
                var T, le, Me;
                if (await this.deletePendingAuthRequest(G, {
                    message: "fulfilled",
                    code: 0
                }), O.error) {
                    const te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                    return O.error.code === te.code ? void 0 : (this.events.off((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), ce), Ee(O.error.message));
                }
                await this.deleteProposal(Z), this.events.off((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), ce);
                const { cacaos: ke, responder: j } = O.result, Ie = [], $e = [];
                for (const te of ke){
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSignedCacao"])({
                        cacao: te,
                        projectId: this.client.core.projectId
                    }) || (this.client.logger.error(te, "Signature verification failed"), Ee((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
                    const { p: fe } = te, ve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecapFromResources"])(fe.resources), Ke = [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNamespacedDidChainId"])(fe.iss)
                    ], mt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDidAddress"])(fe.iss);
                    if (ve) {
                        const qe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMethodsFromRecap"])(ve), _t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainsFromRecap"])(ve);
                        Ie.push(...qe), Ke.push(..._t);
                    }
                    for (const qe of Ke)$e.push(`${qe}:${mt}`);
                }
                const ee = await this.client.core.crypto.generateSharedKey(E, j.publicKey);
                let pe;
                Ie.length > 0 && (pe = {
                    topic: ee,
                    acknowledged: !0,
                    self: {
                        publicKey: E,
                        metadata: this.client.metadata
                    },
                    peer: j,
                    controller: j.publicKey,
                    expiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(z),
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: {
                        protocol: "irn"
                    },
                    pairingTopic: R,
                    namespaces: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildNamespacesFromAuth"])([
                        ...new Set(Ie)
                    ], [
                        ...new Set($e)
                    ]),
                    transportType: r
                }, await this.client.core.relayer.subscribe(ee, {
                    transportType: r
                }), await this.client.session.set(ee, pe), R && await this.client.core.pairing.updateMetadata({
                    topic: R,
                    metadata: j.metadata
                }), pe = this.client.session.get(ee)), (T = this.client.metadata.redirect) != null && T.linkMode && (le = j.metadata.redirect) != null && le.linkMode && (Me = j.metadata.redirect) != null && Me.universal && t && (this.client.core.addLinkModeSupportedApp(j.metadata.redirect.universal), this.client.session.update(ee, {
                    transportType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].link_mode
                })), Ve({
                    auths: ke,
                    session: pe
                });
            }, G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["payloadId"])(), Z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["payloadId"])();
            this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), ce), this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", G), Re);
            let Se;
            try {
                if (i) {
                    const O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])("wc_sessionAuthenticate", W, G);
                    this.client.core.history.set(R, O);
                    const T = await this.client.core.crypto.encode("", O, {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_2"],
                        encoding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE64URL"]
                    });
                    Se = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkModeURL"])(t, R, T);
                } else await Promise.all([
                    this.sendRequest({
                        topic: R,
                        method: "wc_sessionAuthenticate",
                        params: W,
                        expiry: e.expiry,
                        throwOnFailedPublish: !0,
                        clientRpcId: G
                    }),
                    this.sendRequest({
                        topic: R,
                        method: "wc_sessionPropose",
                        params: De,
                        expiry: v.wc_sessionPropose.req.ttl,
                        throwOnFailedPublish: !0,
                        clientRpcId: Z
                    })
                ]);
            } catch (O) {
                throw this.events.off((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), ce), this.events.off((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", G), Re), O;
            }
            return await this.setProposal(Z, I({
                id: Z
            }, De)), await this.setAuthRequest(G, {
                request: D(I({}, W), {
                    verifyContext: {}
                }),
                pairingTopic: R,
                transportType: r
            }), {
                uri: Se ?? V,
                response: wt
            };
        }, this.approveSessionAuthenticate = async (e)=>{
            const { id: t, auths: s } = e, i = this.client.core.eventClient.createEvent({
                properties: {
                    topic: t.toString(),
                    trace: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_AUTHENTICATE_TRACES"].authenticated_session_approve_started
                    ]
                }
            });
            try {
                this.isInitialized();
            } catch (y) {
                throw i.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_AUTHENTICATE_ERRORS"].no_internet_connection), y;
            }
            const r = this.getPendingAuthRequest(t);
            if (!r) throw i.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_AUTHENTICATE_ERRORS"].authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${t}`);
            const n = r.transportType || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].relay;
            n === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].relay && await this.confirmOnlineStateOrThrow();
            const a = r.requester.publicKey, c = await this.client.core.crypto.generateKeyPair(), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(a), p = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_1"],
                receiverPublicKey: a,
                senderPublicKey: c
            }, d = [], l = [];
            for (const y of s){
                if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSignedCacao"])({
                    cacao: y,
                    projectId: this.client.core.projectId
                })) {
                    i.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_AUTHENTICATE_ERRORS"].invalid_cacao);
                    const S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
                    throw await this.sendError({
                        id: t,
                        topic: h,
                        error: S,
                        encodeOpts: p
                    }), new Error(S.message);
                }
                i.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_AUTHENTICATE_TRACES"].cacaos_verified);
                const { p: _ } = y, R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecapFromResources"])(_.resources), V = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNamespacedDidChainId"])(_.iss)
                ], E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDidAddress"])(_.iss);
                if (R) {
                    const S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMethodsFromRecap"])(R), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainsFromRecap"])(R);
                    d.push(...S), V.push(...M);
                }
                for (const S of V)l.push(`${S}:${E}`);
            }
            const w = await this.client.core.crypto.generateSharedKey(c, a);
            i.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_AUTHENTICATE_TRACES"].create_authenticated_session_topic);
            let m;
            if (d?.length > 0) {
                m = {
                    topic: w,
                    acknowledged: !0,
                    self: {
                        publicKey: c,
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: a,
                        metadata: r.requester.metadata
                    },
                    controller: a,
                    expiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(z),
                    authentication: s,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: {
                        protocol: "irn"
                    },
                    pairingTopic: r.pairingTopic,
                    namespaces: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildNamespacesFromAuth"])([
                        ...new Set(d)
                    ], [
                        ...new Set(l)
                    ]),
                    transportType: n
                }, i.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_AUTHENTICATE_TRACES"].subscribing_authenticated_session_topic);
                try {
                    await this.client.core.relayer.subscribe(w, {
                        transportType: n
                    });
                } catch (y) {
                    throw i.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_AUTHENTICATE_ERRORS"].subscribe_authenticated_session_topic_failure), y;
                }
                i.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_AUTHENTICATE_TRACES"].subscribe_authenticated_session_topic_success), await this.client.session.set(w, m), i.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_AUTHENTICATE_TRACES"].store_authenticated_session), await this.client.core.pairing.updateMetadata({
                    topic: r.pairingTopic,
                    metadata: r.requester.metadata
                });
            }
            i.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_AUTHENTICATE_TRACES"].publishing_authenticated_session_approve);
            try {
                await this.sendResult({
                    topic: h,
                    id: t,
                    result: {
                        cacaos: s,
                        responder: {
                            publicKey: c,
                            metadata: this.client.metadata
                        }
                    },
                    encodeOpts: p,
                    throwOnFailedPublish: !0,
                    appLink: this.getAppLinkIfEnabled(r.requester.metadata, n)
                });
            } catch (y) {
                throw i.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_AUTHENTICATE_ERRORS"].authenticated_session_approve_publish_failure), y;
            }
            return await this.client.auth.requests.delete(t, {
                message: "fulfilled",
                code: 0
            }), await this.client.core.pairing.activate({
                topic: r.pairingTopic
            }), this.client.core.eventClient.deleteEvent({
                eventId: i.eventId
            }), {
                session: m
            };
        }, this.rejectSessionAuthenticate = async (e)=>{
            this.isInitialized();
            const { id: t, reason: s } = e, i = this.getPendingAuthRequest(t);
            if (!i) throw new Error(`Could not find pending auth request with id ${t}`);
            i.transportType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].relay && await this.confirmOnlineStateOrThrow();
            const r = i.requester.publicKey, n = await this.client.core.crypto.generateKeyPair(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(r), c = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_1"],
                receiverPublicKey: r,
                senderPublicKey: n
            };
            await this.sendError({
                id: t,
                topic: a,
                error: s,
                encodeOpts: c,
                rpcOpts: v.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType)
            }), await this.client.auth.requests.delete(t, {
                message: "rejected",
                code: 0
            }), await this.client.proposal.delete(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED"));
        }, this.formatAuthMessage = (e)=>{
            this.isInitialized();
            const { request: t, iss: s } = e;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMessage"])(t, s);
        }, this.processRelayMessageCache = ()=>{
            setTimeout(async ()=>{
                if (this.relayMessageCache.length !== 0) for(; this.relayMessageCache.length > 0;)try {
                    const e = this.relayMessageCache.shift();
                    e && await this.onRelayMessage(e);
                } catch (e) {
                    this.client.logger.error(e);
                }
            }, 50);
        }, this.cleanupDuplicatePairings = async (e)=>{
            if (e.pairingTopic) try {
                const t = this.client.core.pairing.pairings.get(e.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((i)=>{
                    var r, n;
                    return ((r = i.peerMetadata) == null ? void 0 : r.url) && ((n = i.peerMetadata) == null ? void 0 : n.url) === e.peer.metadata.url && i.topic && i.topic !== t.topic;
                });
                if (s.length === 0) return;
                this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((i)=>this.client.core.pairing.disconnect({
                        topic: i.topic
                    }))), this.client.logger.info("Duplicate pairings clean up finished");
            } catch (t) {
                this.client.logger.error(t);
            }
        }, this.deleteSession = async (e)=>{
            var t;
            const { topic: s, expirerHasDeleted: i = !1, emitEvent: r = !0, id: n = 0 } = e, { self: a } = this.client.session.get(s);
            await this.client.core.relayer.unsubscribe(s), await this.client.session.delete(s, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), this.addToRecentlyDeleted(s, "session"), this.client.core.crypto.keychain.has(a.publicKey) && await this.client.core.crypto.deleteKeyPair(a.publicKey), this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s), i || this.client.core.expirer.del(s), this.client.core.storage.removeItem(xe).catch((c)=>this.client.logger.warn(c)), this.getPendingSessionRequests().forEach((c)=>{
                c.topic === s && this.deletePendingSessionRequest(c.id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED"));
            }), s === ((t = this.sessionRequestQueue.queue[0]) == null ? void 0 : t.topic) && (this.sessionRequestQueue.state = x.idle), r && this.client.events.emit("session_delete", {
                id: n,
                topic: s
            });
        }, this.deleteProposal = async (e, t)=>{
            if (t) try {
                const s = this.client.proposal.get(e), i = this.client.core.eventClient.getEvent({
                    topic: s.pairingTopic
                });
                i?.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_SESSION_ERRORS"].proposal_expired);
            } catch  {}
            await Promise.all([
                this.client.proposal.delete(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e)
            ]), this.addToRecentlyDeleted(e, "proposal");
        }, this.deletePendingSessionRequest = async (e, t, s = !1)=>{
            await Promise.all([
                this.client.pendingRequest.delete(e, t),
                s ? Promise.resolve() : this.client.core.expirer.del(e)
            ]), this.addToRecentlyDeleted(e, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i)=>i.id !== e), s && (this.sessionRequestQueue.state = x.idle, this.client.events.emit("session_request_expire", {
                id: e
            }));
        }, this.deletePendingAuthRequest = async (e, t, s = !1)=>{
            await Promise.all([
                this.client.auth.requests.delete(e, t),
                s ? Promise.resolve() : this.client.core.expirer.del(e)
            ]);
        }, this.setExpiry = async (e, t)=>{
            this.client.session.keys.includes(e) && (this.client.core.expirer.set(e, t), await this.client.session.update(e, {
                expiry: t
            }));
        }, this.setProposal = async (e, t)=>{
            this.client.core.expirer.set(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(v.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e, t);
        }, this.setAuthRequest = async (e, t)=>{
            const { request: s, pairingTopic: i, transportType: r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].relay } = t;
            this.client.core.expirer.set(e, s.expiryTimestamp), await this.client.auth.requests.set(e, {
                authPayload: s.authPayload,
                requester: s.requester,
                expiryTimestamp: s.expiryTimestamp,
                id: e,
                pairingTopic: i,
                verifyContext: s.verifyContext,
                transportType: r
            });
        }, this.setPendingSessionRequest = async (e)=>{
            const { id: t, topic: s, params: i, verifyContext: r } = e, n = i.request.expiryTimestamp || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(v.wc_sessionRequest.req.ttl);
            this.client.core.expirer.set(t, n), await this.client.pendingRequest.set(t, {
                id: t,
                topic: s,
                params: i,
                verifyContext: r
            });
        }, this.sendRequest = async (e)=>{
            const { topic: t, method: s, params: i, expiry: r, relayRpcId: n, clientRpcId: a, throwOnFailedPublish: c, appLink: h } = e, p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])(s, i, a);
            let d;
            const l = !!h;
            try {
                const y = l ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE64URL"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE64"];
                d = await this.client.core.crypto.encode(t, p, {
                    encoding: y
                });
            } catch (y) {
                throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`), y;
            }
            let w;
            if (at.includes(s)) {
                const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(JSON.stringify(p)), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(d);
                w = await this.client.core.verify.register({
                    id: _,
                    decryptedId: y
                });
            }
            const m = v[s].req;
            if (m.attestation = w, r && (m.ttl = r), n && (m.id = n), this.client.core.history.set(t, p), l) {
                const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkModeURL"])(h, t, d);
                await global.Linking.openURL(y, this.client.name);
            } else {
                const y = v[s].req;
                r && (y.ttl = r), n && (y.id = n), c ? (y.internal = D(I({}, y.internal), {
                    throwOnFailedPublish: !0
                }), await this.client.core.relayer.publish(t, d, y)) : this.client.core.relayer.publish(t, d, y).catch((_)=>this.client.logger.error(_));
            }
            return p.id;
        }, this.sendResult = async (e)=>{
            const { id: t, topic: s, result: i, throwOnFailedPublish: r, encodeOpts: n, appLink: a } = e, c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(t, i);
            let h;
            const p = a && typeof (global == null ? void 0 : global.Linking) < "u";
            try {
                const l = p ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE64URL"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE64"];
                h = await this.client.core.crypto.encode(s, c, D(I({}, n || {}), {
                    encoding: l
                }));
            } catch (l) {
                throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`), l;
            }
            let d;
            try {
                d = await this.client.core.history.get(s, t);
            } catch (l) {
                throw this.client.logger.error(`sendResult() -> history.get(${s}, ${t}) failed`), l;
            }
            if (p) {
                const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkModeURL"])(a, s, h);
                await global.Linking.openURL(l, this.client.name);
            } else {
                const l = v[d.request.method].res;
                r ? (l.internal = D(I({}, l.internal), {
                    throwOnFailedPublish: !0
                }), await this.client.core.relayer.publish(s, h, l)) : this.client.core.relayer.publish(s, h, l).catch((w)=>this.client.logger.error(w));
            }
            await this.client.core.history.resolve(c);
        }, this.sendError = async (e)=>{
            const { id: t, topic: s, error: i, encodeOpts: r, rpcOpts: n, appLink: a } = e, c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcError"])(t, i);
            let h;
            const p = a && typeof (global == null ? void 0 : global.Linking) < "u";
            try {
                const l = p ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE64URL"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE64"];
                h = await this.client.core.crypto.encode(s, c, D(I({}, r || {}), {
                    encoding: l
                }));
            } catch (l) {
                throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`), l;
            }
            let d;
            try {
                d = await this.client.core.history.get(s, t);
            } catch (l) {
                throw this.client.logger.error(`sendError() -> history.get(${s}, ${t}) failed`), l;
            }
            if (p) {
                const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLinkModeURL"])(a, s, h);
                await global.Linking.openURL(l, this.client.name);
            } else {
                const l = n || v[d.request.method].res;
                this.client.core.relayer.publish(s, h, l);
            }
            await this.client.core.history.resolve(c);
        }, this.cleanup = async ()=>{
            const e = [], t = [];
            this.client.session.getAll().forEach((s)=>{
                let i = !1;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpired"])(s.expiry) && (i = !0), this.client.core.crypto.keychain.has(s.topic) || (i = !0), i && e.push(s.topic);
            }), this.client.proposal.getAll().forEach((s)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpired"])(s.expiryTimestamp) && t.push(s.id);
            }), await Promise.all([
                ...e.map((s)=>this.deleteSession({
                        topic: s
                    })),
                ...t.map((s)=>this.deleteProposal(s))
            ]);
        }, this.onRelayEventRequest = async (e)=>{
            this.requestQueue.queue.push(e), await this.processRequestsQueue();
        }, this.processRequestsQueue = async ()=>{
            if (this.requestQueue.state === x.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return;
            }
            for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;){
                this.requestQueue.state = x.active;
                const e = this.requestQueue.queue.shift();
                if (e) try {
                    await this.processRequest(e);
                } catch (t) {
                    this.client.logger.warn(t);
                }
            }
            this.requestQueue.state = x.idle;
        }, this.processRequest = async (e)=>{
            const { topic: t, payload: s, attestation: i, transportType: r, encryptedId: n } = e, a = s.method;
            if (!this.shouldIgnorePairingRequest({
                topic: t,
                requestMethod: a
            })) switch(a){
                case "wc_sessionPropose":
                    return await this.onSessionProposeRequest({
                        topic: t,
                        payload: s,
                        attestation: i,
                        encryptedId: n
                    });
                case "wc_sessionSettle":
                    return await this.onSessionSettleRequest(t, s);
                case "wc_sessionUpdate":
                    return await this.onSessionUpdateRequest(t, s);
                case "wc_sessionExtend":
                    return await this.onSessionExtendRequest(t, s);
                case "wc_sessionPing":
                    return await this.onSessionPingRequest(t, s);
                case "wc_sessionDelete":
                    return await this.onSessionDeleteRequest(t, s);
                case "wc_sessionRequest":
                    return await this.onSessionRequest({
                        topic: t,
                        payload: s,
                        attestation: i,
                        encryptedId: n,
                        transportType: r
                    });
                case "wc_sessionEvent":
                    return await this.onSessionEventRequest(t, s);
                case "wc_sessionAuthenticate":
                    return await this.onSessionAuthenticateRequest({
                        topic: t,
                        payload: s,
                        attestation: i,
                        encryptedId: n,
                        transportType: r
                    });
                default:
                    return this.client.logger.info(`Unsupported request method ${a}`);
            }
        }, this.onRelayEventResponse = async (e)=>{
            const { topic: t, payload: s, transportType: i } = e, r = (await this.client.core.history.get(t, s.id)).request.method;
            switch(r){
                case "wc_sessionPropose":
                    return this.onSessionProposeResponse(t, s, i);
                case "wc_sessionSettle":
                    return this.onSessionSettleResponse(t, s);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateResponse(t, s);
                case "wc_sessionExtend":
                    return this.onSessionExtendResponse(t, s);
                case "wc_sessionPing":
                    return this.onSessionPingResponse(t, s);
                case "wc_sessionRequest":
                    return this.onSessionRequestResponse(t, s);
                case "wc_sessionAuthenticate":
                    return this.onSessionAuthenticateResponse(t, s);
                default:
                    return this.client.logger.info(`Unsupported response method ${r}`);
            }
        }, this.onRelayEventUnknownPayload = (e)=>{
            const { topic: t } = e, { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(s);
        }, this.shouldIgnorePairingRequest = (e)=>{
            const { topic: t, requestMethod: s } = e, i = this.expectedPairingMethodMap.get(t);
            return !i || i.includes(s) ? !1 : !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
        }, this.onSessionProposeRequest = async (e)=>{
            const { topic: t, payload: s, attestation: i, encryptedId: r } = e, { params: n, id: a } = s;
            try {
                const c = this.client.core.eventClient.getEvent({
                    topic: t
                });
                this.isValidConnect(I({}, s.params));
                const h = n.expiryTimestamp || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(v.wc_sessionPropose.req.ttl), p = I({
                    id: a,
                    pairingTopic: t,
                    expiryTimestamp: h
                }, n);
                await this.setProposal(a, p);
                const d = await this.getVerifyContext({
                    attestationId: i,
                    hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(JSON.stringify(s)),
                    encryptedId: r,
                    metadata: p.proposer.metadata
                });
                this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), c?.setError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_PAIRING_ERRORS"].proposal_listener_not_found)), c?.addTrace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_CLIENT_PAIRING_TRACES"].emit_session_proposal), this.client.events.emit("session_proposal", {
                    id: a,
                    params: p,
                    verifyContext: d
                });
            } catch (c) {
                await this.sendError({
                    id: a,
                    topic: t,
                    error: c,
                    rpcOpts: v.wc_sessionPropose.autoReject
                }), this.client.logger.error(c);
            }
        }, this.onSessionProposeResponse = async (e, t, s)=>{
            const { id: i } = t;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(t)) {
                const { result: r } = t;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: r
                });
                const n = this.client.proposal.get(i);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: n
                });
                const a = n.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: a
                });
                const c = r.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: c
                });
                const h = await this.client.core.crypto.generateSharedKey(a, c);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: h
                });
                const p = await this.client.core.relayer.subscribe(h, {
                    transportType: s
                });
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: p
                }), await this.client.core.pairing.activate({
                    topic: e
                });
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcError"])(t)) {
                await this.client.proposal.delete(i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED"));
                const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect");
                if (this.events.listenerCount(r) === 0) throw new Error(`emitting ${r} without any listeners, 954`);
                this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), {
                    error: t.error
                });
            }
        }, this.onSessionSettleRequest = async (e, t)=>{
            const { id: s, params: i } = t;
            try {
                this.isValidSessionSettleRequest(i);
                const { relay: r, controller: n, expiry: a, namespaces: c, sessionProperties: h, sessionConfig: p } = t.params, d = D(I(I({
                    topic: e,
                    relay: r,
                    expiry: a,
                    namespaces: c,
                    acknowledged: !0,
                    pairingTopic: "",
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    controller: n.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: n.publicKey,
                        metadata: n.metadata
                    }
                }, h && {
                    sessionProperties: h
                }), p && {
                    sessionConfig: p
                }), {
                    transportType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].relay
                }), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect");
                if (this.events.listenerCount(l) === 0) throw new Error(`emitting ${l} without any listeners 997`);
                this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), {
                    session: d
                }), await this.sendResult({
                    id: t.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0
                });
            } catch (r) {
                await this.sendError({
                    id: s,
                    topic: e,
                    error: r
                }), this.client.logger.error(r);
            }
        }, this.onSessionSettleResponse = async (e, t)=>{
            const { id: s } = t;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(t) ? (await this.client.session.update(e, {
                acknowledged: !0
            }), this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_approve", s), {})) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcError"])(t) && (await this.client.session.delete(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_approve", s), {
                error: t.error
            }));
        }, this.onSessionUpdateRequest = async (e, t)=>{
            const { params: s, id: i } = t;
            try {
                const r = `${e}_session_update`, n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryStore"].get(r);
                if (n && this.isRequestOutOfSync(n, i)) {
                    this.client.logger.info(`Discarding out of sync request - ${i}`), this.sendError({
                        id: i,
                        topic: e,
                        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("INVALID_UPDATE_REQUEST")
                    });
                    return;
                }
                this.isValidUpdate(I({
                    topic: e
                }, s));
                try {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryStore"].set(r, i), await this.client.session.update(e, {
                        namespaces: s.namespaces
                    }), await this.sendResult({
                        id: i,
                        topic: e,
                        result: !0,
                        throwOnFailedPublish: !0
                    });
                } catch (a) {
                    throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryStore"].delete(r), a;
                }
                this.client.events.emit("session_update", {
                    id: i,
                    topic: e,
                    params: s
                });
            } catch (r) {
                await this.sendError({
                    id: i,
                    topic: e,
                    error: r
                }), this.client.logger.error(r);
            }
        }, this.isRequestOutOfSync = (e, t)=>parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, t)=>{
            const { id: s } = t, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_update", s);
            if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(t) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_update", s), {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcError"])(t) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_update", s), {
                error: t.error
            });
        }, this.onSessionExtendRequest = async (e, t)=>{
            const { id: s } = t;
            try {
                this.isValidExtend({
                    topic: e
                }), await this.setExpiry(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(z)), await this.sendResult({
                    id: s,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.client.events.emit("session_extend", {
                    id: s,
                    topic: e
                });
            } catch (i) {
                await this.sendError({
                    id: s,
                    topic: e,
                    error: i
                }), this.client.logger.error(i);
            }
        }, this.onSessionExtendResponse = (e, t)=>{
            const { id: s } = t, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_extend", s);
            if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(t) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_extend", s), {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcError"])(t) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_extend", s), {
                error: t.error
            });
        }, this.onSessionPingRequest = async (e, t)=>{
            const { id: s } = t;
            try {
                this.isValidPing({
                    topic: e
                }), await this.sendResult({
                    id: s,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.client.events.emit("session_ping", {
                    id: s,
                    topic: e
                });
            } catch (i) {
                await this.sendError({
                    id: s,
                    topic: e,
                    error: i
                }), this.client.logger.error(i);
            }
        }, this.onSessionPingResponse = (e, t)=>{
            const { id: s } = t, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_ping", s);
            if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
            setTimeout(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(t) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_ping", s), {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcError"])(t) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_ping", s), {
                    error: t.error
                });
            }, 500);
        }, this.onSessionDeleteRequest = async (e, t)=>{
            const { id: s } = t;
            try {
                this.isValidDisconnect({
                    topic: e,
                    reason: t.params
                }), Promise.all([
                    new Promise((i)=>{
                        this.client.core.relayer.once(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_EVENTS"].publish, async ()=>{
                            i(await this.deleteSession({
                                topic: e,
                                id: s
                            }));
                        });
                    }),
                    this.sendResult({
                        id: s,
                        topic: e,
                        result: !0,
                        throwOnFailedPublish: !0
                    }),
                    this.cleanupPendingSentRequestsForTopic({
                        topic: e,
                        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")
                    })
                ]).catch((i)=>this.client.logger.error(i));
            } catch (i) {
                this.client.logger.error(i);
            }
        }, this.onSessionRequest = async (e)=>{
            var t, s, i;
            const { topic: r, payload: n, attestation: a, encryptedId: c, transportType: h } = e, { id: p, params: d } = n;
            try {
                await this.isValidRequest(I({
                    topic: r
                }, d));
                const l = this.client.session.get(r), w = await this.getVerifyContext({
                    attestationId: a,
                    hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])("wc_sessionRequest", d, p))),
                    encryptedId: c,
                    metadata: l.peer.metadata,
                    transportType: h
                }), m = {
                    id: p,
                    topic: r,
                    params: d,
                    verifyContext: w
                };
                await this.setPendingSessionRequest(m), h === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].link_mode && (t = l.peer.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp((s = l.peer.metadata.redirect) == null ? void 0 : s.universal), (i = this.client.signConfig) != null && i.disableRequestQueue ? this.emitSessionRequest(m) : (this.addSessionRequestToSessionRequestQueue(m), this.processSessionRequestQueue());
            } catch (l) {
                await this.sendError({
                    id: p,
                    topic: r,
                    error: l
                }), this.client.logger.error(l);
            }
        }, this.onSessionRequestResponse = (e, t)=>{
            const { id: s } = t, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", s);
            if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(t) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", s), {
                result: t.result
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcError"])(t) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", s), {
                error: t.error
            });
        }, this.onSessionEventRequest = async (e, t)=>{
            const { id: s, params: i } = t;
            try {
                const r = `${e}_session_event_${i.event.name}`, n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryStore"].get(r);
                if (n && this.isRequestOutOfSync(n, s)) {
                    this.client.logger.info(`Discarding out of sync request - ${s}`);
                    return;
                }
                this.isValidEmit(I({
                    topic: e
                }, i)), this.client.events.emit("session_event", {
                    id: s,
                    topic: e,
                    params: i
                }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryStore"].set(r, s);
            } catch (r) {
                await this.sendError({
                    id: s,
                    topic: e,
                    error: r
                }), this.client.logger.error(r);
            }
        }, this.onSessionAuthenticateResponse = (e, t)=>{
            const { id: s } = t;
            this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: e,
                payload: t
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(t) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", s), {
                result: t.result
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcError"])(t) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", s), {
                error: t.error
            });
        }, this.onSessionAuthenticateRequest = async (e)=>{
            var t;
            const { topic: s, payload: i, attestation: r, encryptedId: n, transportType: a } = e;
            try {
                const { requester: c, authPayload: h, expiryTimestamp: p } = i.params, d = await this.getVerifyContext({
                    attestationId: r,
                    hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(JSON.stringify(i)),
                    encryptedId: n,
                    metadata: c.metadata,
                    transportType: a
                }), l = {
                    requester: c,
                    pairingTopic: s,
                    id: i.id,
                    authPayload: h,
                    verifyContext: d,
                    expiryTimestamp: p
                };
                await this.setAuthRequest(i.id, {
                    request: l,
                    pairingTopic: s,
                    transportType: a
                }), a === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].link_mode && (t = c.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp(c.metadata.redirect.universal), this.client.events.emit("session_authenticate", {
                    topic: s,
                    params: i.params,
                    id: i.id,
                    verifyContext: d
                });
            } catch (c) {
                this.client.logger.error(c);
                const h = i.params.requester.publicKey, p = await this.client.core.crypto.generateKeyPair(), d = this.getAppLinkIfEnabled(i.params.requester.metadata, a), l = {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_1"],
                    receiverPublicKey: h,
                    senderPublicKey: p
                };
                await this.sendError({
                    id: i.id,
                    topic: s,
                    error: c,
                    encodeOpts: l,
                    rpcOpts: v.wc_sessionAuthenticate.autoReject,
                    appLink: d
                });
            }
        }, this.addSessionRequestToSessionRequestQueue = (e)=>{
            this.sessionRequestQueue.queue.push(e);
        }, this.cleanupAfterResponse = (e)=>{
            this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0
            }), setTimeout(()=>{
                this.sessionRequestQueue.state = x.idle, this.processSessionRequestQueue();
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(this.requestQueueDelay));
        }, this.cleanupPendingSentRequestsForTopic = ({ topic: e, error: t })=>{
            const s = this.client.core.history.pending;
            s.length > 0 && s.filter((i)=>i.topic === e && i.request.method === "wc_sessionRequest").forEach((i)=>{
                const r = i.request.id, n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", r);
                if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
                this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", i.request.id), {
                    error: t
                });
            });
        }, this.processSessionRequestQueue = ()=>{
            if (this.sessionRequestQueue.state === x.active) {
                this.client.logger.info("session request queue is already active.");
                return;
            }
            const e = this.sessionRequestQueue.queue[0];
            if (!e) {
                this.client.logger.info("session request queue is empty.");
                return;
            }
            try {
                this.sessionRequestQueue.state = x.active, this.emitSessionRequest(e);
            } catch (t) {
                this.client.logger.error(t);
            }
        }, this.emitSessionRequest = (e)=>{
            this.client.events.emit("session_request", e);
        }, this.onPairingCreated = (e)=>{
            if (e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active) return;
            const t = this.client.proposal.getAll().find((s)=>s.pairingTopic === e.topic);
            t && this.onSessionProposeRequest({
                topic: e.topic,
                payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])("wc_sessionPropose", {
                    requiredNamespaces: t.requiredNamespaces,
                    optionalNamespaces: t.optionalNamespaces,
                    relays: t.relays,
                    proposer: t.proposer,
                    sessionProperties: t.sessionProperties
                }, t.id)
            });
        }, this.isValidConnect = async (e)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(e)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                throw new Error(a);
            }
            const { pairingTopic: t, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: r, relays: n } = e;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"])(t) || await this.isValidPairingTopic(t), !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidRelays"])(n, !0)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `connect() relays: ${n}`);
                throw new Error(a);
            }
            !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"])(s) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidObject"])(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"])(i) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidObject"])(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"])(r) || this.validateSessionProps(r, "sessionProperties");
        }, this.validateNamespaces = (e, t)=>{
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidRequiredNamespaces"])(e, "connect()", t);
            if (s) throw new Error(s.message);
        }, this.isValidApprove = async (e)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(e)) throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `approve() params: ${e}`).message);
            const { id: t, namespaces: s, relayProtocol: i, sessionProperties: r } = e;
            this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
            const n = this.client.proposal.get(t), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNamespaces"])(s, "approve()");
            if (a) throw new Error(a.message);
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isConformingNamespaces"])(n.requiredNamespaces, s, "approve()");
            if (c) throw new Error(c.message);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidString"])(i, !0)) {
                const { message: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                throw new Error(h);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"])(r) || this.validateSessionProps(r, "sessionProperties");
        }, this.isValidReject = async (e)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(e)) {
                const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `reject() params: ${e}`);
                throw new Error(i);
            }
            const { id: t, reason: s } = e;
            if (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidErrorReason"])(s)) {
                const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
                throw new Error(i);
            }
        }, this.isValidSessionSettleRequest = (e)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(e)) {
                const { message: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                throw new Error(c);
            }
            const { relay: t, controller: s, namespaces: i, expiry: r } = e;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidRelay"])(t)) {
                const { message: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(c);
            }
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidController"])(s, "onSessionSettleRequest()");
            if (n) throw new Error(n.message);
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNamespaces"])(i, "onSessionSettleRequest()");
            if (a) throw new Error(a.message);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpired"])(r)) {
                const { message: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", "onSessionSettleRequest()");
                throw new Error(c);
            }
        }, this.isValidUpdate = async (e)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(e)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `update() params: ${e}`);
                throw new Error(a);
            }
            const { topic: t, namespaces: s } = e;
            this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            const i = this.client.session.get(t), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNamespaces"])(s, "update()");
            if (r) throw new Error(r.message);
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isConformingNamespaces"])(i.requiredNamespaces, s, "update()");
            if (n) throw new Error(n.message);
        }, this.isValidExtend = async (e)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(e)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `extend() params: ${e}`);
                throw new Error(s);
            }
            const { topic: t } = e;
            this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
        }, this.isValidRequest = async (e)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(e)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `request() params: ${e}`);
                throw new Error(a);
            }
            const { topic: t, request: s, chainId: i, expiry: r } = e;
            this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            const { namespaces: n } = this.client.session.get(t);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNamespacesChainId"])(n, i)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `request() chainId: ${i}`);
                throw new Error(a);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidRequest"])(s)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
                throw new Error(a);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNamespacesRequest"])(n, i, s.method)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `request() method: ${s.method}`);
                throw new Error(a);
            }
            if (r && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidRequestExpiry"])(r, me)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `request() expiry: ${r}. Expiry must be a number (in seconds) between ${me.min} and ${me.max}`);
                throw new Error(a);
            }
        }, this.isValidRespond = async (e)=>{
            var t;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(e)) {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `respond() params: ${e}`);
                throw new Error(r);
            }
            const { topic: s, response: i } = e;
            try {
                await this.isValidSessionTopic(s);
            } catch (r) {
                throw (t = e?.response) != null && t.id && this.cleanupAfterResponse(e), r;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidResponse"])(i)) {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
                throw new Error(r);
            }
        }, this.isValidPing = async (e)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(e)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `ping() params: ${e}`);
                throw new Error(s);
            }
            const { topic: t } = e;
            await this.isValidSessionOrPairingTopic(t);
        }, this.isValidEmit = async (e)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(e)) {
                const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `emit() params: ${e}`);
                throw new Error(n);
            }
            const { topic: t, event: s, chainId: i } = e;
            await this.isValidSessionTopic(t);
            const { namespaces: r } = this.client.session.get(t);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNamespacesChainId"])(r, i)) {
                const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                throw new Error(n);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidEvent"])(s)) {
                const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
                throw new Error(n);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNamespacesEvent"])(r, i, s.name)) {
                const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
                throw new Error(n);
            }
        }, this.isValidDisconnect = async (e)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(e)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                throw new Error(s);
            }
            const { topic: t } = e;
            await this.isValidSessionOrPairingTopic(t);
        }, this.isValidAuthenticate = (e)=>{
            const { chains: t, uri: s, domain: i, nonce: r } = e;
            if (!Array.isArray(t) || t.length === 0) throw new Error("chains is required and must be a non-empty array");
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidString"])(s, !1)) throw new Error("uri is required parameter");
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidString"])(i, !1)) throw new Error("domain is required parameter");
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidString"])(r, !1)) throw new Error("nonce is required parameter");
            if ([
                ...new Set(t.map((a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChainId"])(a).namespace))
            ].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
            const { namespace: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChainId"])(t[0]);
            if (n !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
        }, this.getVerifyContext = async (e)=>{
            const { attestationId: t, hash: s, encryptedId: i, metadata: r, transportType: n } = e, a = {
                verified: {
                    verifyUrl: r.verifyUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERIFY_SERVER"],
                    validation: "UNKNOWN",
                    origin: r.url || ""
                }
            };
            try {
                if (n === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].link_mode) {
                    const h = this.getAppLinkIfEnabled(r, n);
                    return a.verified.validation = h && new URL(h).origin === new URL(r.url).origin ? "VALID" : "INVALID", a;
                }
                const c = await this.client.core.verify.resolve({
                    attestationId: t,
                    hash: s,
                    encryptedId: i,
                    verifyUrl: r.verifyUrl
                });
                c && (a.verified.origin = c.origin, a.verified.isScam = c.isScam, a.verified.validation = c.origin === new URL(r.url).origin ? "VALID" : "INVALID");
            } catch (c) {
                this.client.logger.warn(c);
            }
            return this.client.logger.debug(`Verify context: ${JSON.stringify(a)}`), a;
        }, this.validateSessionProps = (e, t)=>{
            Object.values(e).forEach((s)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidString"])(s, !1)) {
                    const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
                    throw new Error(i);
                }
            });
        }, this.getPendingAuthRequest = (e)=>{
            const t = this.client.auth.requests.get(e);
            return typeof t == "object" ? t : void 0;
        }, this.addToRecentlyDeleted = (e, t)=>{
            if (this.recentlyDeletedMap.set(e, t), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
                let s = 0;
                const i = this.recentlyDeletedLimit / 2;
                for (const r of this.recentlyDeletedMap.keys()){
                    if (s++ >= i) break;
                    this.recentlyDeletedMap.delete(r);
                }
            }
        }, this.checkRecentlyDeleted = (e)=>{
            const t = this.recentlyDeletedMap.get(e);
            if (t) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `Record was recently deleted - ${t}: ${e}`);
                throw new Error(s);
            }
        }, this.isLinkModeEnabled = (e, t)=>{
            var s, i, r, n, a, c, h, p, d;
            return !e || t !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].link_mode ? !1 : ((i = (s = this.client.metadata) == null ? void 0 : s.redirect) == null ? void 0 : i.linkMode) === !0 && ((n = (r = this.client.metadata) == null ? void 0 : r.redirect) == null ? void 0 : n.universal) !== void 0 && ((c = (a = this.client.metadata) == null ? void 0 : a.redirect) == null ? void 0 : c.universal) !== "" && ((h = e?.redirect) == null ? void 0 : h.universal) !== void 0 && ((p = e?.redirect) == null ? void 0 : p.universal) !== "" && ((d = e?.redirect) == null ? void 0 : d.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(e.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
        }, this.getAppLinkIfEnabled = (e, t)=>{
            var s;
            return this.isLinkModeEnabled(e, t) ? (s = e?.redirect) == null ? void 0 : s.universal : void 0;
        }, this.handleLinkModeMessage = ({ url: e })=>{
            if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
            const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSearchParamFromURL"])(e, "topic") || "", s = decodeURIComponent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSearchParamFromURL"])(e, "wc_ev") || ""), i = this.client.session.keys.includes(t);
            i && this.client.session.update(t, {
                transportType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].link_mode
            }), this.client.core.dispatchEnvelope({
                topic: t,
                message: s,
                sessionExists: i
            });
        }, this.registerLinkModeListeners = async ()=>{
            var e;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestRun"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactNative"])() && (e = this.client.metadata.redirect) != null && e.linkMode) {
                const t = global == null ? void 0 : global.Linking;
                if (typeof t < "u") {
                    t.addEventListener("url", this.handleLinkModeMessage, this.client.name);
                    const s = await t.getInitialURL();
                    s && setTimeout(()=>{
                        this.handleLinkModeMessage({
                            url: s
                        });
                    }, 50);
                }
            }
        };
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(o);
        }
    }
    async confirmOnlineStateOrThrow() {
        await this.client.core.relayer.confirmOnlineStateOrThrow();
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAYER_EVENTS"].message, (o)=>{
            !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(o) : this.onRelayMessage(o);
        });
    }
    async onRelayMessage(o) {
        const { topic: e, message: t, attestation: s, transportType: i } = o, { publicKey: r } = this.client.auth.authKeys.keys.includes(ae) ? this.client.auth.authKeys.get(ae) : {
            responseTopic: void 0,
            publicKey: void 0
        }, n = await this.client.core.crypto.decode(e, t, {
            receiverPublicKey: r,
            encoding: i === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORT_TYPES"].link_mode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE64URL"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE64"]
        });
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcRequest"])(n) ? (this.client.core.history.set(e, n), this.onRelayEventRequest({
                topic: e,
                payload: n,
                attestation: s,
                transportType: i,
                encryptedId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(t)
            })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcResponse"])(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({
                topic: e,
                payload: n,
                transportType: i
            }), this.client.core.history.delete(e, n.id)) : this.onRelayEventUnknownPayload({
                topic: e,
                payload: n,
                transportType: i
            });
        } catch (a) {
            this.client.logger.error(a);
        }
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPIRER_EVENTS"].expired, async (o)=>{
            const { topic: e, id: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExpirerTarget"])(o.target);
            if (t && this.client.pendingRequest.keys.includes(t)) return await this.deletePendingSessionRequest(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED"), !0);
            if (t && this.client.auth.requests.keys.includes(t)) return await this.deletePendingAuthRequest(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED"), !0);
            e ? this.client.session.keys.includes(e) && (await this.deleteSession({
                topic: e,
                expirerHasDeleted: !0
            }), this.client.events.emit("session_expire", {
                topic: e
            })) : t && (await this.deleteProposal(t, !0), this.client.events.emit("proposal_expire", {
                id: t
            }));
        });
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAIRING_EVENTS"].create, (o)=>this.onPairingCreated(o)), this.client.core.pairing.events.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAIRING_EVENTS"].delete, (o)=>{
            this.addToRecentlyDeleted(o.topic, "pairing");
        });
    }
    isValidPairingTopic(o) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidString"])(o, !1)) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pairing topic should be a string: ${o}`);
            throw new Error(e);
        }
        if (!this.client.core.pairing.pairings.keys.includes(o)) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `pairing topic doesn't exist: ${o}`);
            throw new Error(e);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpired"])(this.client.core.pairing.pairings.get(o).expiry)) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", `pairing topic: ${o}`);
            throw new Error(e);
        }
    }
    async isValidSessionTopic(o) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidString"])(o, !1)) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `session topic should be a string: ${o}`);
            throw new Error(e);
        }
        if (this.checkRecentlyDeleted(o), !this.client.session.keys.includes(o)) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `session topic doesn't exist: ${o}`);
            throw new Error(e);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpired"])(this.client.session.get(o).expiry)) {
            await this.deleteSession({
                topic: o
            });
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", `session topic: ${o}`);
            throw new Error(e);
        }
        if (!this.client.core.crypto.keychain.has(o)) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `session topic does not exist in keychain: ${o}`);
            throw await this.deleteSession({
                topic: o
            }), new Error(e);
        }
    }
    async isValidSessionOrPairingTopic(o) {
        if (this.checkRecentlyDeleted(o), this.client.session.keys.includes(o)) await this.isValidSessionTopic(o);
        else if (this.client.core.pairing.pairings.keys.includes(o)) this.isValidPairingTopic(o);
        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidString"])(o, !1)) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${o}`);
            throw new Error(e);
        } else {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `session or pairing topic should be a string: ${o}`);
            throw new Error(e);
        }
    }
    async isValidProposalId(o) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidId"])(o)) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `proposal id should be a number: ${o}`);
            throw new Error(e);
        }
        if (!this.client.proposal.keys.includes(o)) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `proposal id doesn't exist: ${o}`);
            throw new Error(e);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpired"])(this.client.proposal.get(o).expiryTimestamp)) {
            await this.deleteProposal(o);
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", `proposal id: ${o}`);
            throw new Error(e);
        }
    }
}
class Ss extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"] {
    constructor(o, e){
        super(o, e, st, ye), this.core = o, this.logger = e;
    }
}
class yt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"] {
    constructor(o, e){
        super(o, e, rt, ye), this.core = o, this.logger = e;
    }
}
class Is extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"] {
    constructor(o, e){
        super(o, e, ot, ye, (t)=>t.id), this.core = o, this.logger = e;
    }
}
class fs extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"] {
    constructor(o, e){
        super(o, e, pt, oe, ()=>ae), this.core = o, this.logger = e;
    }
}
class vs extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"] {
    constructor(o, e){
        super(o, e, ht, oe), this.core = o, this.logger = e;
    }
}
class qs extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"] {
    constructor(o, e){
        super(o, e, dt, oe, (t)=>t.id), this.core = o, this.logger = e;
    }
}
class Ts {
    constructor(o, e){
        this.core = o, this.logger = e, this.authKeys = new fs(this.core, this.logger), this.pairingTopics = new vs(this.core, this.logger), this.requests = new qs(this.core, this.logger);
    }
    async init() {
        await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
    }
}
class _e extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ISignClient"] {
    constructor(o){
        super(o), this.protocol = be, this.version = Ce, this.name = we.name, this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"], this.on = (t, s)=>this.events.on(t, s), this.once = (t, s)=>this.events.once(t, s), this.off = (t, s)=>this.events.off(t, s), this.removeListener = (t, s)=>this.events.removeListener(t, s), this.removeAllListeners = (t)=>this.events.removeAllListeners(t), this.connect = async (t)=>{
            try {
                return await this.engine.connect(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.pair = async (t)=>{
            try {
                return await this.engine.pair(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.approve = async (t)=>{
            try {
                return await this.engine.approve(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.reject = async (t)=>{
            try {
                return await this.engine.reject(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.update = async (t)=>{
            try {
                return await this.engine.update(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.extend = async (t)=>{
            try {
                return await this.engine.extend(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.request = async (t)=>{
            try {
                return await this.engine.request(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.respond = async (t)=>{
            try {
                return await this.engine.respond(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.ping = async (t)=>{
            try {
                return await this.engine.ping(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.emit = async (t)=>{
            try {
                return await this.engine.emit(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.disconnect = async (t)=>{
            try {
                return await this.engine.disconnect(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.find = (t)=>{
            try {
                return this.engine.find(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.getPendingSessionRequests = ()=>{
            try {
                return this.engine.getPendingSessionRequests();
            } catch (t) {
                throw this.logger.error(t.message), t;
            }
        }, this.authenticate = async (t, s)=>{
            try {
                return await this.engine.authenticate(t, s);
            } catch (i) {
                throw this.logger.error(i.message), i;
            }
        }, this.formatAuthMessage = (t)=>{
            try {
                return this.engine.formatAuthMessage(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.approveSessionAuthenticate = async (t)=>{
            try {
                return await this.engine.approveSessionAuthenticate(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.rejectSessionAuthenticate = async (t)=>{
            try {
                return await this.engine.rejectSessionAuthenticate(t);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.name = o?.name || we.name, this.metadata = o?.metadata || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAppMetadata"])(), this.signConfig = o?.signConfig;
        const e = typeof o?.logger < "u" && typeof o?.logger != "string" ? o.logger : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__["pino"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: o?.logger || we.logger
        }));
        this.core = o?.core || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Core"](o), this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(e, this.name), this.session = new yt(this.core, this.logger), this.proposal = new Ss(this.core, this.logger), this.pendingRequest = new Is(this.core, this.logger), this.engine = new Rs(this), this.auth = new Ts(this.core, this.logger);
    }
    static async init(o) {
        const e = new _e(o);
        return await e.initialize(), e;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get pairing() {
        return this.core.pairing.pairings;
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), this.engine.processRelayMessageCache();
        } catch (o) {
            throw this.logger.info("SignClient Initialization Failure"), this.logger.error(o.message), o;
        }
    }
}
const Ns = yt, Ps = _e;
;
 //# sourceMappingURL=index.es.js.map
}}),
}]);

//# sourceMappingURL=e2162_%40walletconnect_sign-client_dist_index_es_7e53f7.js.map
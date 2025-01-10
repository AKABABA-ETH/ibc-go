"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4711],{61057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(85893),i=t(11151);const a={title:"Keeper API",sidebar_label:"Keeper API",sidebar_position:3,slug:"/apps/interchain-accounts/legacy/keeper-api"},c="Keeper API",o={id:"apps/interchain-accounts/legacy/keeper-api",title:"Keeper API",description:"Deprecation Notice",source:"@site/versioned_docs/version-v6.3.x/02-apps/02-interchain-accounts/09-legacy/03-keeper-api.md",sourceDirName:"02-apps/02-interchain-accounts/09-legacy",slug:"/apps/interchain-accounts/legacy/keeper-api",permalink:"/v6/apps/interchain-accounts/legacy/keeper-api",draft:!1,unlisted:!1,tags:[],version:"v6.3.x",sidebarPosition:3,frontMatter:{title:"Keeper API",sidebar_label:"Keeper API",sidebar_position:3,slug:"/apps/interchain-accounts/legacy/keeper-api"},sidebar:"defaultSidebar",previous:{title:"Integration",permalink:"/v6/apps/interchain-accounts/legacy/integration"},next:{title:"Overview",permalink:"/v6/middleware/ics29-fee/overview"}},s={},l=[{value:"Deprecation Notice",id:"deprecation-notice",level:2},{value:"<code>RegisterInterchainAccount</code>",id:"registerinterchainaccount",level:2},{value:"<code>SendTx</code>",id:"sendtx",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"keeper-api",children:"Keeper API"}),"\n",(0,r.jsx)(n.h2,{id:"deprecation-notice",children:"Deprecation Notice"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"This document is deprecated and will be removed in future releases"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The controller submodule keeper exposes two legacy functions that allow respectively for custom authentication modules to register interchain accounts and send packets to the interchain account."}),"\n",(0,r.jsx)(n.h2,{id:"registerinterchainaccount",children:(0,r.jsx)(n.code,{children:"RegisterInterchainAccount"})}),"\n",(0,r.jsxs)(n.p,{children:["The authentication module can begin registering interchain accounts by calling ",(0,r.jsx)(n.code,{children:"RegisterInterchainAccount"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"if err := keeper.icaControllerKeeper.RegisterInterchainAccount(ctx, connectionID, owner.String(), version); err != nil {\n    return err\n}\n\nreturn nil\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"version"})," argument is used to support ICS-29 fee middleware for relayer incentivization of ICS-27 packets. Consumers of the ",(0,r.jsx)(n.code,{children:"RegisterInterchainAccount"})," are expected to build the appropriate JSON encoded version string themselves and pass it accordingly. If an empty string is passed in the ",(0,r.jsx)(n.code,{children:"version"})," argument, then the version will be initialized to a default value in the ",(0,r.jsx)(n.code,{children:"OnChanOpenInit"})," callback of the controller's handler, so that channel handshake can proceed."]}),"\n",(0,r.jsxs)(n.p,{children:["The following code snippet illustrates how to construct an appropriate interchain accounts ",(0,r.jsx)(n.code,{children:"Metadata"})," and encode it as a JSON bytestring:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"icaMetadata := icatypes.Metadata{\n    Version:                icatypes.Version,\n    ControllerConnectionId: controllerConnectionID,\n    HostConnectionId:       hostConnectionID,\n    Encoding:               icatypes.EncodingProtobuf,\n    TxType:                 icatypes.TxTypeSDKMultiMsg,\n}\n\nappVersion, err := icatypes.ModuleCdc.MarshalJSON(&icaMetadata)\nif err != nil {\n    return err\n}\n\nif err := keeper.icaControllerKeeper.RegisterInterchainAccount(ctx, controllerConnectionID, owner.String(), string(appVersion)); err != nil {\n    return err\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Similarly, if the application stack is configured to route through ICS-29 fee middleware and a fee enabled channel is desired, construct the appropriate ICS-29 ",(0,r.jsx)(n.code,{children:"Metadata"})," type:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"icaMetadata := icatypes.Metadata{\n    Version:                icatypes.Version,\n    ControllerConnectionId: controllerConnectionID,\n    HostConnectionId:       hostConnectionID,\n    Encoding:               icatypes.EncodingProtobuf,\n    TxType:                 icatypes.TxTypeSDKMultiMsg,\n}\n\nappVersion, err := icatypes.ModuleCdc.MarshalJSON(&icaMetadata)\nif err != nil {\n    return err\n}\n\nfeeMetadata := feetypes.Metadata{\n    AppVersion: string(appVersion),\n    FeeVersion: feetypes.Version,\n}\n\nfeeEnabledVersion, err := feetypes.ModuleCdc.MarshalJSON(&feeMetadata)\nif err != nil {\n    return err\n}\n\nif err := keeper.icaControllerKeeper.RegisterInterchainAccount(ctx, controllerConnectionID, owner.String(), string(feeEnabledVersion)); err != nil {\n    return err\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sendtx",children:(0,r.jsx)(n.code,{children:"SendTx"})}),"\n",(0,r.jsxs)(n.p,{children:["The authentication module can attempt to send a packet by calling ",(0,r.jsx)(n.code,{children:"SendTx"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// Authenticate owner\n// perform custom logic\n    \n// Construct controller portID based on interchain account owner address\nportID, err := icatypes.NewControllerPortID(owner.String())\nif err != nil {\n    return err\n}\n    \n// Obtain data to be sent to the host chain. \n// In this example, the owner of the interchain account would like to send a bank MsgSend to the host chain. \n// The appropriate serialization function should be called. The host chain must be able to deserialize the transaction. \n// If the host chain is using the ibc-go host module, `SerializeCosmosTx` should be used. \nmsg := &banktypes.MsgSend{FromAddress: fromAddr, ToAddress: toAddr, Amount: amt}\ndata, err := icatypes.SerializeCosmosTx(keeper.cdc, []proto.Message{msg})\nif err != nil {\n    return err\n}\n\n// Construct packet data\npacketData := icatypes.InterchainAccountPacketData{\n    Type: icatypes.EXECUTE_TX,\n    Data: data,\n}\n\n// Obtain timeout timestamp\n// An appropriate timeout timestamp must be determined based on the usage of the interchain account.\n// If the packet times out, the channel will be closed requiring a new channel to be created.\ntimeoutTimestamp := obtainTimeoutTimestamp()\n\n// Send the interchain accounts packet, returning the packet sequence\n// A nil channel capability can be passed, since the controller submodule (and not the authentication module) \n// claims the channel capability since ibc-go v6.\nseq, err = keeper.icaControllerKeeper.SendTx(ctx, nil, portID, packetData, timeoutTimestamp)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The data within an ",(0,r.jsx)(n.code,{children:"InterchainAccountPacketData"})," must be serialized using a format supported by the host chain.\nIf the host chain is using the ibc-go host chain submodule, ",(0,r.jsx)(n.code,{children:"SerializeCosmosTx"})," should be used. If the ",(0,r.jsx)(n.code,{children:"InterchainAccountPacketData.Data"})," is serialized using a format not supported by the host chain, the packet will not be successfully received."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var r=t(67294);const i={},a=r.createContext(i);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28450],{52148:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=r(85893),t=r(11151);const i={title:"Genesis Restart Upgrades",sidebar_label:"Genesis Restart Upgrades",sidebar_position:3,slug:"/ibc/upgrades/genesis-restart"},a="Genesis Restart Upgrades",d={id:"ibc/upgrades/genesis-restart",title:"Genesis Restart Upgrades",description:"Learn how to upgrade your chain and counterparty clients using genesis restarts.",source:"@site/versioned_docs/version-v9.0.x/01-ibc/05-upgrades/03-genesis-restart.md",sourceDirName:"01-ibc/05-upgrades",slug:"/ibc/upgrades/genesis-restart",permalink:"/v9/ibc/upgrades/genesis-restart",draft:!1,unlisted:!1,tags:[],version:"v9.0.x",sidebarPosition:3,frontMatter:{title:"Genesis Restart Upgrades",sidebar_label:"Genesis Restart Upgrades",sidebar_position:3,slug:"/ibc/upgrades/genesis-restart"},sidebar:"defaultSidebar",previous:{title:"IBC Client Developer Guide to Upgrades",permalink:"/v9/ibc/upgrades/developer-guide"},next:{title:"Channel Upgrades",permalink:"/v9/ibc/channel-upgrades"}},o={},c=[{value:"IBC Client Breaking Upgrades",id:"ibc-client-breaking-upgrades",level:2},{value:"Step-by-Step Upgrade Process for SDK Chains",id:"step-by-step-upgrade-process-for-sdk-chains",level:3},{value:"Step-by-Step Upgrade Process for Relayers Upgrading Counterparty Clients",id:"step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients",level:3},{value:"Non-IBC Client Breaking Upgrades",id:"non-ibc-client-breaking-upgrades",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"genesis-restart-upgrades",children:"Genesis Restart Upgrades"}),"\n",(0,n.jsx)(s.admonition,{title:"Synopsis",type:"note",children:(0,n.jsx)(s.p,{children:"Learn how to upgrade your chain and counterparty clients using genesis restarts."})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"NOTE"}),": Regular genesis restarts are currently unsupported by relayers!"]}),"\n",(0,n.jsx)(s.h2,{id:"ibc-client-breaking-upgrades",children:"IBC Client Breaking Upgrades"}),"\n",(0,n.jsx)(s.p,{children:"IBC client breaking upgrades are possible using genesis restarts.\nIt is highly recommended to use the in-place migrations instead of a genesis restart.\nGenesis restarts should be used sparingly and as backup plans."}),"\n",(0,n.jsx)(s.p,{children:"Genesis restarts still require the usage of an IBC upgrade proposal in order to correctly upgrade counterparty clients."}),"\n",(0,n.jsx)(s.h3,{id:"step-by-step-upgrade-process-for-sdk-chains",children:"Step-by-Step Upgrade Process for SDK Chains"}),"\n",(0,n.jsxs)(s.p,{children:["If the IBC-connected chain is conducting an upgrade that will break counterparty clients, it must ensure that the upgrade is first supported by IBC using the ",(0,n.jsx)(s.a,{href:"/v9/ibc/upgrades/quick-guide#ibc-client-breaking-upgrades",children:"IBC Client Breaking Upgrade List"})," and then execute the upgrade process described below in order to prevent counterparty clients from breaking."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Create a governance proposal with the ",(0,n.jsx)(s.a,{href:"https://buf.build/cosmos/ibc/docs/main:ibc.core.client.v1#ibc.core.client.v1.MsgIBCSoftwareUpgrade",children:(0,n.jsx)(s.code,{children:"MsgIBCSoftwareUpgrade"})})," which contains an ",(0,n.jsx)(s.code,{children:"UpgradePlan"})," and a new IBC ",(0,n.jsx)(s.code,{children:"ClientState"})," in the ",(0,n.jsx)(s.code,{children:"UpgradedClientState"})," field. Note that the ",(0,n.jsx)(s.code,{children:"UpgradePlan"})," must specify an upgrade height ",(0,n.jsx)(s.strong,{children:"only"})," (no upgrade time), and the ",(0,n.jsx)(s.code,{children:"ClientState"})," should only include the fields common to all valid clients and zero out any client-customizable fields (such as ",(0,n.jsx)(s.code,{children:"TrustingPeriod"}),")."]}),"\n",(0,n.jsx)(s.li,{children:"Vote on and pass the governance proposal."}),"\n",(0,n.jsx)(s.li,{children:"Halt the node after successful upgrade."}),"\n",(0,n.jsx)(s.li,{children:"Export the genesis file."}),"\n",(0,n.jsx)(s.li,{children:"Swap to the new binary."}),"\n",(0,n.jsx)(s.li,{children:"Run migrations on the genesis file."}),"\n",(0,n.jsx)(s.li,{children:"Remove the upgrade plan set by the governance proposal from the genesis file. This may be done by migrations."}),"\n",(0,n.jsx)(s.li,{children:"Change desired chain-specific fields (chain id, unbonding period, etc). This may be done by migrations."}),"\n",(0,n.jsx)(s.li,{children:"Reset the node's data."}),"\n",(0,n.jsx)(s.li,{children:"Start the chain."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Upon passing the governance proposal, the upgrade module will commit the ",(0,n.jsx)(s.code,{children:"UpgradedClient"})," under the key: ",(0,n.jsx)(s.code,{children:"upgrade/UpgradedIBCState/{upgradeHeight}/upgradedClient"}),". On the block right before the upgrade height, the upgrade module will also commit an initial consensus state for the next chain under the key: ",(0,n.jsx)(s.code,{children:"upgrade/UpgradedIBCState/{upgradeHeight}/upgradedConsState"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Once the chain reaches the upgrade height and halts, a relayer can upgrade the counterparty clients to the last block of the old chain. They can then submit the proofs of the ",(0,n.jsx)(s.code,{children:"UpgradedClient"})," and ",(0,n.jsx)(s.code,{children:"UpgradedConsensusState"})," against this last block and upgrade the counterparty client."]}),"\n",(0,n.jsx)(s.h3,{id:"step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients",children:"Step-by-Step Upgrade Process for Relayers Upgrading Counterparty Clients"}),"\n",(0,n.jsxs)(s.p,{children:["These steps are identical to the regular ",(0,n.jsx)(s.a,{href:"/v9/ibc/upgrades/quick-guide#step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients",children:"IBC client breaking upgrade process"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"non-ibc-client-breaking-upgrades",children:"Non-IBC Client Breaking Upgrades"}),"\n",(0,n.jsxs)(s.p,{children:["While ibc-go supports genesis restarts which do not break IBC clients, relayers do not support this upgrade path.\nHere is a tracking issue on ",(0,n.jsx)(s.a,{href:"https://github.com/informalsystems/ibc-rs/issues/1152",children:"Hermes"}),".\nPlease do not attempt a regular genesis restarts unless you have a tool to update counterparty clients correctly."]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>d,a:()=>a});var n=r(67294);const t={},i=n.createContext(t);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);
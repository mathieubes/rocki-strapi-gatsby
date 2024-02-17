"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3633],{43633:(As,G,e)=>{e.d(G,{ProtectedSettingsPage:()=>Os});var s=e(92132),f=e(21272),H=e(11273),X=e(76517),Z=e(80782),T=e(61485),p=e(99248),M=e(30893),B=e(6239),I=e(12081),y=e(83997),x=e(12408),S=e(48653),K=e(94061),j=e(24093),W=e(67030),P=e(85963),U=e(90151),v=e(68074),R=e(7537),J=e(4181),N=e(48323),w=e(35513),k=e(26127),$=e(90361),m=e(33363),q=e(98765),ss=e(25641),V=e(88353),es=e(38413),as=e(55356),ts=e(4198),ls=e(53563),r=e(51337),F=e(54514),ns=e(41909),is=e(50612),z=e(5194),os=e(36481),h=e(54894),O=e(61535),C=e(12083),ds=e(60256),cs=e(82437),a=e(40812),rs=e(74930),Ts=e(2600),ps=e(5409),Bs=e(51187),Is=e(59080),Ss=e(48940),Ks=e(35223);const gs=()=>{const[t,n]=f.useState(!1),d=(0,cs.wA)(),l=(0,r.hN)(),{post:c}=(0,r.ry)(),{formatAPIError:i}=(0,r.wq)();return{isAdding:t,addLocale:async g=>{n(!0);try{const{data:_}=await c("/i18n/locales",g);l({type:"success",message:{id:(0,a.g)("Settings.locales.modal.create.success")}}),d({type:a.A,newLocale:_})}catch(_){throw _ instanceof ds.pe?l({type:"warning",message:i(_)}):l({type:"warning",message:{id:"notification.error"}}),_}finally{n(!1)}}}},Y=()=>{const{formatMessage:t}=(0,h.A)(),{notifyStatus:n}=(0,H.W)(),d=(0,r.hN)(),{get:l}=(0,r.ry)(),{isLoading:c,data:i}=(0,rs.useQuery)(["plugin-i18n","locales"],async()=>{const{data:o}=await l("/i18n/iso-locales");if(Array.isArray(o))return o;throw new Error("The response is not an array.")},{onSuccess(){n(t({id:(0,a.g)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."}))},onError(){d({type:"warning",message:{id:"notification.error"}})},initialData:[]});return{defaultLocales:i,isLoading:c}},_s=({value:t,onClear:n,onLocaleChange:d,error:l})=>{const{formatMessage:c}=(0,h.A)(),{defaultLocales:i=[],isLoading:o}=Y(),{locales:g}=(0,a.u)(),_=i.map(E=>({label:E.name,value:E.code})).filter(E=>{const D=g.find(({code:u})=>u===E.value);return!D||D.code===t}),A=t||"";return(0,s.jsx)(X.G3,{"aria-busy":o,error:l,label:c({id:(0,a.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:A,onClear:n,onChange:E=>{const D=_.find(u=>u.value===E);D&&d({code:D.value,name:D.label})},placeholder:c({id:"components.placeholder.select",defaultMessage:"Select"}),children:_.map(E=>(0,s.jsx)(Z.j,{value:E.value,children:E.label},E.value))})},b=C.Ik().shape({code:C.Yj().required(),name:C.Yj().max(50,"Settings.locales.modal.locales.displayName.error").required(r.iW.required),isDefault:C.zM()}),Es={code:"",name:"",isDefault:!1},Ms=({onClose:t})=>{const{isAdding:n,addLocale:d}=gs(),{formatMessage:l}=(0,h.A)(),{refetchPermissions:c}=(0,r.r5)();return(0,s.jsx)(T.k,{onClose:t,labelledBy:"add-locale-title",children:(0,s.jsx)(O.l1,{initialValues:Es,onSubmit:async i=>{await d(i),await c()},validationSchema:b,validateOnChange:!1,children:(0,s.jsxs)(r.lV,{children:[(0,s.jsx)(p.r,{children:(0,s.jsx)(M.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title",children:l({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})})}),(0,s.jsx)(B.c,{children:(0,s.jsxs)(I.f,{label:l({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple",children:[(0,s.jsxs)(y.s,{justifyContent:"space-between",children:[(0,s.jsx)(M.o,{as:"h2",variant:"beta",children:l({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})}),(0,s.jsxs)(x.t,{children:[(0,s.jsx)(x.o,{children:l({id:(0,a.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),(0,s.jsx)(x.o,{children:l({id:(0,a.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,s.jsx)(S.c,{}),(0,s.jsx)(K.a,{paddingTop:7,paddingBottom:7,children:(0,s.jsxs)(j.T,{children:[(0,s.jsx)(j.K,{children:(0,s.jsx)(hs,{})}),(0,s.jsx)(j.K,{children:(0,s.jsx)(Q,{})})]})})]})}),(0,s.jsx)(W.j,{startActions:(0,s.jsx)(P.$,{variant:"tertiary",onClick:t,children:l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(P.$,{type:"submit",startIcon:(0,s.jsx)(F.A,{}),disabled:n,children:l({id:"global.save",defaultMessage:"Save"})})})]})})})},hs=()=>{const{formatMessage:t}=(0,h.A)(),{values:n,handleChange:d,setFieldValue:l,errors:c}=(0,O.j7)(),i=g=>{l("name",g.name),l("code",g.code)},o=()=>{l("displayName",""),l("code","")};return(0,s.jsxs)(U.x,{gap:4,children:[(0,s.jsx)(v.E,{col:6,children:(0,s.jsx)(_s,{error:c.code,value:n.code,onLocaleChange:i,onClear:o})}),(0,s.jsx)(v.E,{col:6,children:(0,s.jsx)(R.k,{name:"name",label:t({id:(0,a.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:t({id:(0,a.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.name?t({id:(0,a.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:n.name,onChange:d})})]})},Q=({isDefaultLocale:t})=>{const{values:n,setFieldValue:d}=(0,O.j7)(),{formatMessage:l}=(0,h.A)();return(0,s.jsx)(J.S,{name:"isDefault",hint:l({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>d("isDefault",!n.isDefault),value:n.isDefault,disabled:t,children:l({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"})})},ms=()=>{const[t,n]=(0,f.useState)(!1),d=(0,a.a)(),l=(0,r.hN)(),{del:c}=(0,r.ry)();return{isDeleting:t,deleteLocale:async o=>{try{n(!0),await c(`/i18n/locales/${o}`),l({type:"success",message:{id:(0,a.g)("Settings.locales.modal.delete.success")}}),d({type:a.D,id:o})}catch{l({type:"warning",message:{id:"notification.error"}})}finally{n(!1)}}}},Ds=({localeToDelete:t,onClose:n})=>{const{isDeleting:d,deleteLocale:l}=ms(),c=Boolean(t),i=()=>l(t.id).then(n);return(0,s.jsx)(r.TM,{isConfirmButtonLoading:d,onConfirm:i,onToggleDialog:n,isOpen:c})},us=()=>{const[t,n]=(0,f.useState)(!1),d=(0,a.a)(),l=(0,r.hN)(),{put:c}=(0,r.ry)();return{isEditing:t,editLocale:async(o,g)=>{try{n(!0);const{data:_}=await c(`/i18n/locales/${o}`,g);if("id"in _)l({type:"success",message:{id:(0,a.g)("Settings.locales.modal.edit.success")}}),d({type:a.U,editedLocale:_});else throw new Error("Invalid response")}catch{l({type:"warning",message:{id:"notification.error"}})}finally{n(!1)}}}},fs=({locale:t,onClose:n})=>{const{refetchPermissions:d}=(0,r.r5)(),{isEditing:l,editLocale:c}=us(),{formatMessage:i}=(0,h.A)(),o=async({name:g,isDefault:_})=>{await c(t.id,{name:g,isDefault:_}),await d()};return(0,s.jsx)(T.k,{onClose:n,labelledBy:"edit-locale-title",children:(0,s.jsx)(O.l1,{initialValues:{code:t.code??"",name:t.name??"",isDefault:Boolean(t.isDefault)},onSubmit:o,validationSchema:b,children:(0,s.jsxs)(r.lV,{children:[(0,s.jsx)(p.r,{children:(0,s.jsx)(M.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title",children:i({id:(0,a.g)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"})})}),(0,s.jsx)(B.c,{children:(0,s.jsxs)(I.f,{label:i({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple",children:[(0,s.jsxs)(y.s,{justifyContent:"space-between",children:[(0,s.jsx)(M.o,{as:"h2",children:i({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})}),(0,s.jsxs)(x.t,{children:[(0,s.jsx)(x.o,{children:i({id:(0,a.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),(0,s.jsx)(x.o,{children:i({id:(0,a.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,s.jsx)(S.c,{}),(0,s.jsx)(K.a,{paddingTop:7,paddingBottom:7,children:(0,s.jsxs)(j.T,{children:[(0,s.jsx)(j.K,{children:(0,s.jsx)(xs,{locale:t})}),(0,s.jsx)(j.K,{children:(0,s.jsx)(Q,{isDefaultLocale:Boolean(t&&t.isDefault)})})]})})]})}),(0,s.jsx)(W.j,{startActions:(0,s.jsx)(P.$,{variant:"tertiary",onClick:n,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(P.$,{type:"submit",startIcon:(0,s.jsx)(F.A,{}),disabled:l,children:i({id:"global.save",defaultMessage:"Save"})})})]})})})},xs=({locale:t})=>{const{formatMessage:n}=(0,h.A)(),{values:d,handleChange:l,errors:c}=(0,O.j7)(),{defaultLocales:i=[]}=Y(),o=i.find(g=>g.code===t.code);return(0,s.jsxs)(U.x,{gap:4,children:[(0,s.jsx)(v.E,{col:6,children:(0,s.jsx)(N.Z,{label:n({id:(0,a.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:o?.code||t.code,disabled:!0,children:(0,s.jsx)(N.eY,{value:o?.code||t.code,children:o?.name||t.code})})}),(0,s.jsx)(v.E,{col:6,children:(0,s.jsx)(R.k,{name:"name",label:n({id:(0,a.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:n({id:(0,a.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.name?n({id:(0,a.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:d.name,onChange:l})})]})},js=({locales:t=[],onDeleteLocale:n,onEditLocale:d,canDelete:l=!0,canEdit:c=!0})=>{const{formatMessage:i}=(0,h.A)();return(0,s.jsxs)(w.X,{colCount:4,rowCount:t.length+1,children:[(0,s.jsx)(k.d,{children:(0,s.jsxs)($.Tr,{children:[(0,s.jsx)(m.Th,{children:(0,s.jsx)(M.o,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.id"),defaultMessage:"ID"})})}),(0,s.jsx)(m.Th,{children:(0,s.jsx)(M.o,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.displayName"),defaultMessage:"Display name"})})}),(0,s.jsx)(m.Th,{children:(0,s.jsx)(M.o,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.default-locale"),defaultMessage:"Default locale"})})}),(0,s.jsx)(m.Th,{children:(0,s.jsx)(q.s,{children:"Actions"})})]})}),(0,s.jsx)(ss.N,{children:t.map(o=>(0,s.jsxs)($.Tr,{...(0,r.qM)({fn:()=>d(o),condition:Boolean(d)}),children:[(0,s.jsx)(m.Td,{children:(0,s.jsx)(M.o,{textColor:"neutral800",children:o.id})}),(0,s.jsx)(m.Td,{children:(0,s.jsx)(M.o,{textColor:"neutral800",children:o.name})}),(0,s.jsx)(m.Td,{children:(0,s.jsx)(M.o,{textColor:"neutral800",children:o.isDefault?i({id:(0,a.g)("Settings.locales.default"),defaultMessage:"Default"}):null})}),(0,s.jsx)(m.Td,{children:(0,s.jsxs)(y.s,{gap:1,justifyContent:"flex-end",onClick:g=>g.stopPropagation(),children:[c&&(0,s.jsx)(V.K,{onClick:()=>d(o),label:i({id:(0,a.g)("Settings.list.actions.edit"),defaultMessage:"Edit"}),icon:(0,s.jsx)(ns.A,{}),borderWidth:0}),l&&!o.isDefault&&(0,s.jsx)(V.K,{onClick:()=>n(o),label:i({id:(0,a.g)("Settings.list.actions.delete"),defaultMessage:"Delete"}),icon:(0,s.jsx)(is.A,{}),borderWidth:0})]})})]},o.id))})]})},Ps=()=>{const[t,n]=f.useState(!1),[d,l]=f.useState(),[c,i]=f.useState(),{locales:o}=(0,a.u)(),{formatMessage:g}=(0,h.A)(),{isLoading:_,allowedActions:{canUpdate:A,canCreate:E,canDelete:D}}=(0,r.ec)(a.P),u=()=>{n(L=>!L)};(0,r.L4)();const Ls=()=>l(void 0),vs=L=>{l(L)},Cs=()=>i(void 0),ys=L=>{i(L)};return _?(0,s.jsx)(r.Bl,{}):(0,s.jsxs)(es.g,{tabIndex:-1,children:[(0,s.jsx)(as.Q,{primaryAction:(0,s.jsx)(P.$,{disabled:!E,startIcon:(0,s.jsx)(z.A,{}),onClick:u,size:"S",children:g({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})}),title:g({id:(0,a.g)("plugin.name"),defaultMessage:"Internationalization"}),subtitle:g({id:(0,a.g)("Settings.list.description"),defaultMessage:"Configure the settings"})}),(0,s.jsx)(ts.s,{children:o?.length>0?(0,s.jsx)(js,{locales:o,canDelete:D,canEdit:A,onDeleteLocale:vs,onEditLocale:ys}):(0,s.jsx)(ls.p,{icon:(0,s.jsx)(os.A,{width:void 0,height:void 0}),content:g({id:(0,a.g)("Settings.list.empty.title"),defaultMessage:"There are no locales"}),action:(0,s.jsx)(P.$,{disabled:!E,variant:"secondary",startIcon:(0,s.jsx)(z.A,{}),onClick:u,children:g({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})})})}),t&&(0,s.jsx)(Ms,{onClose:u}),c&&(0,s.jsx)(fs,{onClose:Cs,locale:c}),d&&(0,s.jsx)(Ds,{localeToDelete:d,onClose:Ls})]})},Os=()=>(0,s.jsx)(r.kz,{permissions:a.P.read,children:(0,s.jsx)(Ps,{})})}}]);

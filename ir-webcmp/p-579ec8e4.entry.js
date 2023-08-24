import{r as e,c as t,h as i}from"./p-e56e81c3.js";const s=class{constructor(i){e(this,i);this.sendToParent=t(this,"sendToParent",7);this.testLoader=false;this.mode=undefined;this.connectionStatus="Not connected";this.data={id:"123456",channel:"Channel Name",group:"Group",title:"Title",property:"Property",hotelId:"hotelId"};this.selectedChannel="";this.connected=false}watchHandler(e,t){console.log(t);this.selectedChannel=e.channel}componentDidLoad(){const e=document.querySelector("ir-select#channel-select");console.log("channelSelect",e);e.addEventListener("selectChange",(e=>{this.selectedChannel=e.detail;this.data=Object.assign(Object.assign({},this.data),{channel:e.detail})}));const t=document.querySelector("ir-select#group-select");t.addEventListener("selectChange",(e=>{this.data=Object.assign(Object.assign({},this.data),{group:e.detail})}));const i=document.querySelector("ir-input-text#title-input");i.addEventListener("textChange",(e=>{console.log("titleInput",e.detail);this.data=Object.assign(Object.assign({},this.data),{title:e.detail})}));const s=document.querySelector("ir-select#property-select");s.addEventListener("selectChange",(e=>{this.data=Object.assign(Object.assign({},this.data),{property:e.detail})}))}componentDidUpdate(){const e=document.querySelector("ir-input-text#hotel-id");e.addEventListener("textChange",(e=>{this.connected=false;this.connectionStatus="Not connected";this.data=Object.assign(Object.assign({},this.data),{hotelId:e.detail.trim()})}));const t=document.querySelector("ir-select#minimum-stay-select");t.addEventListener("selectChange",(e=>{console.log("minimumStay",e.detail);this.data=Object.assign(Object.assign({},this.data),{minimumStay:e.detail.trim()})}));const i=document.querySelector("ir-select#channel-select");console.log("channelSelect",i);i.addEventListener("selectChange",(e=>{this.selectedChannel=e.detail;this.data=Object.assign(Object.assign({},this.data),{channel:e.detail})}));const s=document.querySelector("ir-select#group-select");s.addEventListener("selectChange",(e=>{this.data=Object.assign(Object.assign({},this.data),{group:e.detail})}));const n=document.querySelector("ir-input-text#title-input");n.addEventListener("textChange",(e=>{console.log("titleInput",e.detail);this.data=Object.assign(Object.assign({},this.data),{title:e.detail})}));const l=document.querySelector("ir-select#property-select");l.addEventListener("selectChange",(e=>{this.data=Object.assign(Object.assign({},this.data),{property:e.detail})}))}testConnection(){if(!this.data.hotelId){const e=document.querySelector("ir-modal.alertFields");e.openModal()}this.testLoader=true;setTimeout((()=>{this.testLoader=false;if(this.data.hotelId=="123456"){console.log("testConnection",this.data.hotelId);this.connected=true;this.connectionStatus=" Connected";this.sendToParent.emit(this.data);console.log("this.data",this.data)}else{this.connected=false}}),2e3)}_alert(e){return i("div",{class:"row"},i("div",{class:"col-2 d-flex justify-content-center "},i("ir-icon",{icon:"ft-alert-triangle warning h1"})),i("div",{class:"col-10"},i("div",{class:"font-weight-bold h3"},e)))}render(){return[i("div",{class:"General Settings"},i("div",{class:"container-fluid"},this.mode=="edit"&&i("div",{class:"text-light border-bottom-light mb-2"},`ID ${this.data.id}`),i("div",{class:"column"},i("ir-select",{id:"channel-select",label:"Channel",data:[{value:"expedia",text:"Expedia"},{value:"zourouna",text:"Zourouna"}],"label-background":"white","label-position":"right","label-border":"none",size:"sm",textSize:"sm",labelWidth:4,selectedValue:this.data.channel}),i("ir-select",{id:"group-select",label:"Group",data:[{value:"all",text:"All"}],"label-background":"white","label-position":"right","label-border":"none",size:"sm",textSize:"sm",labelWidth:4,selectedValue:this.data.group}),i("ir-input-text",{id:"title-input",label:"Title",placeholder:"Title",value:this.data.title,"label-background":"white","label-position":"right","label-border":"none",size:"sm",labelWidth:4}),i("ir-select",{id:"property-select",label:"Propery",data:[{value:"Mist",text:"Mist"}],"label-background":"white","label-position":"right","label-border":"none",size:"sm",textSize:"sm",labelWidth:4,selectedValue:this.data.property}))),this.selectedChannel&&i("div",{class:"container-fluid mt-1"},i("div",{class:"text-light border-bottom-light mb-2"},"Connection Settings"),i("div",{class:"row"},i("ir-input-text",{id:"hotel-id",label:"Hotel ID",placeholder:"Hotel ID",value:this.data.hotelId,"label-background":"white","label-position":"right","label-border":"none",size:"sm",labelWidth:4,class:"col-12"}),i("ir-select",{id:"minimum-stay-select",label:"Minimum Stay Type",data:[{value:"arrival",text:"Arrival"}],"label-background":"white","label-position":"right","label-border":"none",size:"sm",textSize:"sm",class:"col-12",labelWidth:4,selectedValue:this.data.minimumStay}),i("div",{class:"col-12 pb-1 "},i("div",{class:"row"},i("div",{class:"col-4"}),i("div",{class:"col-8 d-flex justify-content-between align-items-center"},i("div",null,this.testLoader?i("ir-loader",{size:"xs"}):i("span",null,i("ir-icon",{class:"test-icon",icon:this.connected?"ft-check-circle success":"ft-alert-triangle warning"}),this.connected&&this.connectionStatus,!this.connected&&this.connectionStatus)),!this.connected&&i("button",{onClick:()=>this.testConnection(),class:"btn btn-white border-light btn-sm text-dark "},"Test Connection")))))),i("ir-modal",{class:"alertFields",leftBtnActive:false,btnPosition:"center",rightBtnText:"Close",rightBtnColor:"primary"},this._alert("Please fill in all the fields")))]}static get watchers(){return{data:["watchHandler"]}}};const n=class{constructor(i){e(this,i);this.sendDelete=t(this,"sendDelete",7);this.openSidebar=t(this,"openSidebar",7);this.createNew=t(this,"createNew",7);this.changeStatus=t(this,"changeStatus",7);this.type="";this.dropdownData={name:"Action",icon:"",children:[{name:"Edit",icon:"ft-edit"},{name:"Delete",icon:"ft-trash"},{name:"Disable",icon:"ft-alert-triangle"}]};this.dropdownDataDisable={name:"Action",icon:"",children:[{name:"Edit",icon:"ft-edit"},{name:"Delete",icon:"ft-trash"},{name:"Enable",icon:"ft-check"}]};this.listData=[{title:"Title",channel:"Channel",status:"Status",id:"1",group:"All",property:"Twins",hotelId:"123"}]}addEventListenerToDropdown(e){const t=document.querySelector(`ir-dropdown.dropdown-action-${e.id}`);if(t){const i=t=>{if(t.detail.name==="Edit"){this.handleCreate("edit",e)}else if(t.detail.name==="Delete"){this.onPressDelete(e)}else if(t.detail.name==="Disable"){this.onPressDisable(e)}else if(t.detail.name==="Enable"){this.onPressDisable(e)}};t.addEventListener("dropdownItemCLicked",i)}}handleCreate(e,t){this.openSidebar.emit({mode:e,item:t})}onPressDelete(e){this.type="delete";const t=document.querySelector(`ir-modal`);console.log("modal",t);if(t){t.item=e;t.openModal()}}doAction(e){const t=e.detail;if(this.type==="delete"){this.sendDelete.emit(t.id);this.listData=this.listData.filter((e=>e.id!==t.id))}else if(this.type==="disable"){this.listData=this.listData.map((e=>{if(e.id===t.id){e.status="Disabled";this.changeStatus.emit(e)}return e}))}else if(this.type==="enable"){this.listData=this.listData.map((e=>{if(e.id===t.id){e.status="Active";this.changeStatus.emit(e)}return e}))}const i=document.querySelector(`ir-modal`);if(i){i.closeModal()}}onPressDisable(e){this.type=e.status==="Active"?"disable":"enable";const t=document.querySelector(`ir-modal`);if(t){t.openModal();t.item=e}}componentDidLoad(){this.listData.forEach((e=>{this.addEventListenerToDropdown(e)}))}componentDidUpdate(){console.log("componentDidUpdate");this.listData.forEach((e=>{this.addEventListenerToDropdown(e)}))}_renderEmptyState(){return i("div",{class:"cardBody"},i("div",{class:"emptyBody"},i("img",{src:"./my-assets/5058446.png",alt:"empty",class:"img-fluid emptyImg"}),i("p",{class:"font-size-small"},"You don't have any channels yet.",i("br",null),"It's a good time to create",i("a",{class:"text-primary openSidebar",onClick:()=>this.createNew.emit({mode:"create",item:null})}," ","new"))))}_renderItem(){return i("div",null,i("div",{class:"container-fluid"},this.listData.map((e=>i("div",{class:"row"},i("div",{class:"col-12 item-info"},i("div",{class:"row"},i("div",{class:"col-3 p-1"},e.title),i("div",{class:"col-3 p-1"},e.channel),i("div",{class:"col-3 p-1"},e.status),i("div",{class:"col-3 "},i("ir-dropdown",{class:`dropdown-action-${e.id}`,data:e.status==="Active"?this.dropdownData:this.dropdownDataDisable,object:e})))))))))}_confirmDelete(){return i("div",{class:"row"},i("div",{class:"col-2 d-flex justify-content-center "},i("ir-icon",{icon:"ft-trash danger h1"})),i("div",{class:"col-10"},i("div",{class:"font-weight-bold"},"Are you sure you want to delete?"),i("br",null),i("div",{class:"font-size-small"},"What you delete here will be permanently deleted.")))}_enable_disable(){return i("div",{class:"row"},i("div",{class:"col-2 d-flex justify-content-center "},i("ir-icon",{icon:"ft-alert-circle warning h1"})),i("div",{class:"col-10"},i("div",{class:"font-weight-bold"},"Would you like to ",this.type," this channel?"),i("br",null)))}render(){return[this.listData.length>0?this._renderItem():this._renderEmptyState(),i("ir-modal",null,this.type==="delete"?this._confirmDelete():this._enable_disable())]}};const l=[{id:"1",title:"Room Type 1",number_of_people:2,ratePlans:[{id:"1",name:"Rate Plan 1",price:100},{id:"2",name:"Rate Plan 2",price:200}]},{id:"2",title:"Room Type 2",number_of_people:4,ratePlans:[{id:"1",name:"Rate Plan 1",price:100},{id:"2",name:"Rate Plan 2",price:200}]},{id:"3",title:"Room Type 3",number_of_people:5,ratePlans:[{id:"1",name:"Rate Plan 1",price:100},{id:"2",name:"Rate Plan 2",price:200}]}];const o=[{id:"1",name:"Map Room Type 1",value:"RT1",number_of_people:2,services:[{id:"MAPROOOMTYPE1_1",name:"Rate Plan Type 1 Type 1",value:"ST1"},{id:"MAPROOMTYPE1_2",name:"Rate Plan Type 1 Type 2",value:"ST2"}]},{id:"2",name:"Map Room Type 2",value:"RT2",number_of_people:4,services:[{id:"MAPROOMTYPE2_1",name:"Rate Plan Type 2 Type 1",value:"ST1"},{id:"MAPROOMTYPE2_2",name:"Rate Plan Type 2 Type 2",value:"ST2"}]},{id:"3",name:"Map Room Type 3",value:"RT3",number_of_people:5,services:[{id:"MAPROOMTYPE3_1",name:"Rate Plan Type 3 Type 1",value:"ST1"},{id:"MAPROOMTYPE3_2",name:"Rate Plan Type 3 Type 2",value:"ST2"}]}];const a=class{constructor(i){e(this,i);this.sendMappingToParent=t(this,"sendMappingToParent",7);this.mapRoom=o;this.hostRoom=l;this.mapped=[];this.mappingWithServices=[];this.map={};this.mapState=undefined;this.selectedMap=[]}mapChangedHandler(e){this.mapState=new Array(e.mapping.length).fill("notMapped")}async _onSaveMapping(){const e=this.mapped.every((e=>e.selectedPlans!==undefined));if(e){this.sendMappingToParent.emit(this.mapped)}else{const e=document.querySelector("ir-modal.mapAlert");e.openModal()}}componentWillLoad(){console.log(this.map.mapping);this.mapped=this.map.mapping||[];let e=this.hostRoom.map((e=>({room:"notMapped",plans:e.ratePlans.map((()=>({plan:"notMapped",selectedPlan:""})))})));console.log(e);if(this.map.mapping!=undefined){this.map.mapping.forEach((t=>{console.log(t,t.mappedRoomID);const i=this.hostRoom.findIndex((e=>e.id===t.mappedRoomID));if(i!==-1){t.selectedPlans.forEach((t=>{const s=this.mapRoom[i].services.findIndex((e=>e.id===t.id));console.log(s);if(s!==-1){e[i]={room:"mapped",plans:[...e[i].plans.slice(0,s),{plan:"mapped",selectedPlan:t.id},...e[i].plans.slice(s+1)]}}else{e[i]={room:"mapped",plans:[...e[i].plans.slice(0,s),{plan:"notMapped",selectedPlan:""},...e[i].plans.slice(s+1)]}}}))}}))}this.mapState=e;console.log(this.mapState)}_onSelectMap(e,t){const i=JSON.parse(t);const s={mappingId:this.mapped.length+1,initialRoomID:e.id,mappedRoomID:i.id,availableRatePlans:i.services};if(this.mapped.length==0){this.mapped=[s]}else{const t=this.mapped.findIndex((t=>e.id==t.initialRoomID&&t.mappedRoomID==i.id));if(t==1){this.mapped[t]=s}else{this.mapped=[...this.mapped,s]}}}_onSelectRatePlan(e){const t=e.mappingId;this.mapped=this.mapped.map((i=>{if(i.mappingId===t){const t=i.selectedPlans||[];const s=e.availableRatePlans.find((t=>t.id===e.selectedPlan));console.log(s);return Object.assign(Object.assign({},i),{selectedPlans:[...t,s]})}return i}))}_deleteMapping(e){console.log(e);const t=this.mapped.findIndex((t=>t.initialRoomID===e.id));if(t!==-1){this.mapped.splice(t,1)}}_getMapNameFromId(e){if(this.mapped.length===0){return}const t=this.mapped.find((t=>t.initialRoomID===e));if(!t||t==undefined){return}const i=t.mappedRoomID;const s=this.mapRoom.find((e=>e.id===i));return[s.name,s.number_of_people]}_deleteRatePlan(e){console.log(e);console.log(this.mapped);this.mapped=this.mapped.map((t=>{const i=t.selectedPlans.findIndex((t=>t.id===e));if(i!==-1){const e=t.selectedPlans[i];t.availableRatePlans=[...t.availableRatePlans,e];t.selectedPlans.splice(i,1)}return t}))}_getRatePlanNameFromId(e){for(let t of this.mapped){for(let i of t.selectedPlans){if(i.id===e){return i.name}}}return undefined}_renderAlertModal(e){return i("div",{class:"row"},i("div",{class:"col-2 d-flex justify-content-center "},i("ir-icon",{icon:"ft-alert-triangle warning h1"})),i("div",{class:"col-10"},i("div",{class:"font-weight-bold h3"},e)))}_renderMapping(e,t,s){let n=this.mapped.find((t=>t.initialRoomID===e.id));const l=this.mapRoom.filter((e=>{const t=this.mapped.findIndex((t=>t.mappedRoomID===e.id));if(t===-1){return e}}));if(n===null||n===void 0?void 0:n.selectedPlans){n.availableRatePlans=n.availableRatePlans.filter((e=>{const t=n.selectedPlans.includes(e);return!t}))}let o=[];if(n!==undefined){o=n.availableRatePlans}return i("div",{class:"col-12 mb-1"},i("div",{class:"row mb-1"},i("div",{class:"col-6 d-flex justify-content-between align-items-center"},e.title,i("ir-icon",{icon:"la la-long-arrow-right"})),i("div",{class:`col-6 `},t.room==="notMapped"?i("div",{class:"text-danger",onClick:()=>{const t=document.querySelector(`select[id="${s}"]`);this.mapState=[...this.mapState.slice(0,s),{room:"mapping",plans:new Array(e.ratePlans.length).fill({plan:"notMapped",selectedPlan:""})},...this.mapState.slice(s+1)];setTimeout((()=>{t.click()}),100)}},"Not mapped"):t.room==="mapping"?i("select",{id:s,class:"form-control form-control-sm",onChange:t=>{this._onSelectMap(e,t.target.value);if(t.target.value!==""){this.mapState=[...this.mapState.slice(0,s),{room:"mapped",plans:new Array(e.ratePlans.length).fill({plan:"notMapped",selectedPlan:""})},...this.mapState.slice(s+1)]}}},i("option",{value:""},"Select Room"),l.map((t=>{if(this.map.mapping!==undefined){const s=this.map.mapping.findIndex((t=>t.itemId===e.id));if(s!==-1){return i("option",{value:JSON.stringify(t),selected:t.id===this.map.mapping[s].mappedId},t.name)}else{return i("option",{value:JSON.stringify(t)},t.name)}}else{return i("option",{value:JSON.stringify(t)},t.name)}}))):i("div",{class:"d-flex flex-grow-1 justify-content-between"},i("div",{class:"text-primary"},this._getMapNameFromId(e.id)[0],i("ir-icon",{icon:"ft-user"})," ",this._getMapNameFromId(e.id)[1]),i("ir-icon",{icon:"text-primary ft-trash",onClick:()=>{this._deleteMapping(e);this.mapState=[...this.mapState.slice(0,s),{room:"notMapped",plans:new Array(e.ratePlans.length).fill("notMapped")},...this.mapState.slice(s+1)]}})))),i("div",{class:"col-12 mb-1"},e.ratePlans&&e.ratePlans.length&&e.ratePlans.map(((l,a)=>i("div",{class:"row mb-1"},i("div",{class:"col-6 d-flex justify-content-between align-items-center"},i("div",null,l.name,i("ir-icon",{icon:"ft-user"})," ",e.number_of_people),t.room==="mapped"&&i("ir-icon",{icon:"la la-long-arrow-right"})),i("div",{class:"col-6 pr-0"},t.room==="mapped"&&(t.plans[a].plan==="notMapped"?i("div",{class:"text-danger",onClick:()=>{const e=document.querySelector(`select[id="${s}"]`);this.mapState=[...this.mapState.slice(0,s),{room:"mapped",plans:[...t.plans.slice(0,a),{plan:"mapping",selectedPlan:""},...t.plans.slice(a+1)]},...this.mapState.slice(s+1)];setTimeout((()=>{e.click()}),100)}},"Not mapped"):t.plans[a].plan==="mapping"?i("select",{class:"form-control form-control-sm",onChange:e=>{n.selectedPlan=e.target.value;this._onSelectRatePlan(n);if(e.target.value!==""){this.mapState=[...this.mapState.slice(0,s),{room:"mapped",plans:[...t.plans.slice(0,a),{plan:"mapped",selectedPlan:e.target.value},...t.plans.slice(a+1)]},...this.mapState.slice(s+1)]}}},i("option",{value:""},"Select Plan"),o.length>0&&o.map((e=>i("option",{value:e.id},e.name)))):i("div",{class:"d-flex flex-grow-1 justify-content-between"},i("div",{class:"text-primary"},this._getRatePlanNameFromId(t.plans[a].selectedPlan),i("ir-icon",{icon:"ft-user"})," ",this._getMapNameFromId(e.id)[1]),i("ir-icon",{icon:"text-primary ft-trash",onClick:()=>{this._deleteRatePlan(t.plans[a].selectedPlan);this.mapState=[...this.mapState.slice(0,s),{room:"mapped",plans:[...t.plans.slice(0,a),{plan:"notMapped",selectedPlan:""},...t.plans.slice(a+1)]},...this.mapState.slice(s+1)]}})))))))))}render(){return i("div",{class:"Mapping"},i("div",{class:"d-flex justify-content-end align-items-center"},i("a",{class:"text-primary"},"Refresh")),i("div",{class:"container-fluid"},i("div",{class:"row"},i("div",{class:"col-12 mb-1"},i("div",{class:"row "},i("div",{class:"col-6 d-flex justify-content-between align-items-center font-weight-bold"},"Iglooroom",i("ir-icon",{icon:"la la-long-arrow-right"})),i("div",{class:"col-6 font-weight-bold"},"Channel Manager"))),this.hostRoom.map(((e,t)=>this._renderMapping(e,this.mapState[t],t))))),i("ir-modal",{class:"mapAlert"},this._renderAlertModal("Can't have a mapped room with no rate plan!")))}static get watchers(){return{map:["mapChangedHandler"]}}};const c=".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding:0.5rem}.sidebar-right.active{right:0;overflow-y:scroll}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding:0.5rem}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";const r=class{constructor(i){e(this,i);this.irSidebarToggle=t(this,"irSidebarToggle",7);this.name=undefined;this.side="right";this.open=false}async toggleSidebar(){this.irSidebarToggle.emit(this.open)}render(){let e="";if(this.open){e="active"}else{e=""}return[i("div",{class:`backdrop ${e}`,onClick:()=>{this.toggleSidebar()}}),i("div",{class:`sidebar-${this.side} ${e}`},i("a",{class:"close",onClick:()=>{this.toggleSidebar()}},i("ir-icon",{icon:"ft-x"})),i("slot",null))]}};r.style=c;const d=class{constructor(i){e(this,i);this.openSidebar=t(this,"openSidebar",7);this.search=t(this,"search",7)}handleCreate(){this.openSidebar.emit()}render(){return i("div",{class:"card-head"},i("div",{class:"input-group input-group-sm"},i("input",{type:"text",class:"form-control border-light",placeholder:"Search",onInput:()=>{this.search.emit(event.target.value)}}),i("div",{class:"input-group-append"}),i("button",{class:"ml-1 btn btn-primary btn-sm openSidebar",onClick:()=>this.handleCreate()},"Create")),i("div",{class:"container-fluid"},i("div",{class:"row"},i("div",{class:"col-3 p-1 section-title"},"Title ",i("ir-icon",{icon:"la la-unsorted"})),i("div",{class:"col-3 p-1 section-title"},"Channel ",i("ir-icon",{icon:"la la-unsorted"})),i("div",{class:"col-3 p-1 section-title"},"Status ",i("ir-icon",{icon:"la la-unsorted"})))))}};export{s as ir_general_settings,n as ir_list_item,a as ir_mapping,r as ir_sidebar,d as ir_topbar};
//# sourceMappingURL=p-579ec8e4.entry.js.map
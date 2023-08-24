import{r as t,c as e,h as i}from"./p-e56e81c3.js";import{v as s}from"./p-d4c9256e.js";const n=":root{--sidebar-width:40rem}#container{padding:1rem;height:100%}.card{height:100%}#ir-list-item{height:100%}.cardBody{display:flex;justify-content:center;align-items:center;height:100%}.emptyBody{text-align:center}.emptyBody img{height:auto;width:100px;transform:translate(7%, 0);margin:1rem}.loader-position{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.card-head{background:#f8f8f8;padding:0.3rem}.section-title{display:flex;align-items:center;justify-content:space-between;font-weight:bold}.item-info{border-bottom:1px solid #e7e7e7}.item-info .row .col-3:last-child{text-align:end}.list-group{list-style:none;border-bottom:1px solid #e7e7e7}.list-group li{padding:0.5rem;color:#444;transition:all 0.3s ease-out}.list-group li:hover{color:#7c83eb}.list-group li.active{border-bottom:2px solid #7c83eb;color:#7c83eb}.btn-position{position:absolute;bottom:0;left:0;width:100%;padding:0.5rem;background:#f8f8f8;border-top:1px solid #e7e7e7}.test-icon{margin-right:0.2rem !important}.text-dark:hover{color:#444 !important}";const o=class{constructor(i){t(this,i);this.fetchApi=e(this,"fetchApi",7);this.requestApiDelete=e(this,"requestApiDelete",7);this.handelSearch=e(this,"handelSearch",7);this.tabs=["General Settings","Mapping","Channel Settings"];this.dropdownData={name:"Action",icon:"",children:[{name:"Edit",icon:"ft-edit"},{name:"Delete",icon:"ft-trash"},{name:"Disable",icon:"ft-alert-triangle"}]};this.listData=[];this.loader=false;this.mode="create";this.activeTab="General Settings";this.selectedItem={};this.item={};this.anyChanges=false}sendToParentHandler(t){console.log("From General Settings",t.detail);this.anyChanges=true;this.item=t.detail}searchHandler(t){console.log(t.detail);this.handelSearch.emit(t.detail)}sendMappingToParentHandler(t){const e=t.detail;this.anyChanges=true;if(this.mode==="edit"&&this.selectedItem){this.listData=this.listData.map((t=>{if(t.id===this.selectedItem.id){return Object.assign(Object.assign({},this.item),{mapping:e,status:"Active",id:s()})}return t}))}else{console.log(this.item);this.listData=[...this.listData,Object.assign(Object.assign({},this.item),{mapping:e,status:"Active",id:s()})]}this.fetchApi.emit(Object.assign(Object.assign({},this.item),{mapping:e,status:"Active",id:s()}));this.mode="create";this.activeTab="General Settings";const i=document.querySelector("ir-sidebar");if(i){i.open=!i.open}this._reset()}_reset(){this.item={};this.mode="create";this.activeTab="General Settings";this.selectedItem={};this.anyChanges=false}openSidebarHandler(t){console.log(t);const e=document.querySelector("ir-sidebar");e.open=!e.open;this.loader=true;this.mode="create";this.activeTab="General Settings";setTimeout((()=>{this.loader=false}),2e3)}requestDelete(t){this.requestApiDelete.emit(t.detail)}changeStatusHandler(t){console.log(t.detail);this.fetchApi.emit(t.detail)}componentDidLoad(){const t=document.querySelector("ir-topbar");t.addEventListener("openSidebar",(()=>{console.log("openSidebar");const t=document.querySelector("ir-sidebar");t.open=!t.open;this.loader=true;this.mode="create";this.activeTab="General Settings";setTimeout((()=>{this.loader=false}),2e3)}));const e=document.querySelector("ir-list-item");e.addEventListener("openSidebar",(t=>{if(t.detail.mode==="edit"){this.mode="edit";this.selectedItem=t.detail.item;console.log(this.selectedItem);const e=document.querySelector("ir-sidebar");e.open=!e.open}}));const i=document.querySelector("ir-modal.exit");i.addEventListener("confirmModal",(t=>{console.log(t.detail);s.open=false;i.closeModal();this._reset()}));const s=document.querySelector("ir-sidebar");s.addEventListener("irSidebarToggle",(t=>{if(t.detail==true&&this.anyChanges){if(this.listData){i.openModal()}}else{s.open=false;this._reset()}}))}componentDidUpdate(){console.log("this.selectedItem",this.selectedItem)}goNext(){if(this.activeTab=="General Settings"){if(!this.item.title||!this.item.channel||!this.item.group||!this.item.property||!this.item.hotelId){alert("Please fill all the fields")}else{this.activeTab="Mapping";this.loader=true;setTimeout((()=>{this.loader=false}),2e3)}}else if(this.activeTab=="Mapping"){const t=document.querySelector("ir-mapping");t._onSaveMapping()}}_exitWithoutSave(){return i("div",{class:"row"},i("div",{class:"col-2 d-flex justify-content-center "},i("ir-icon",{icon:"ft-alert-circle warning h1"})),i("div",{class:"col-10"},i("div",{class:"font-weight-bold"},"Exit without saving?"),i("br",null),i("div",{class:"font-size-small"},"All unsaved changes will be lost.")))}render(){return[i("div",{id:"container"},i("div",{class:"card"},i("ir-topbar",null),i("ir-list-item",{id:"ir-list-item",listData:this.listData,dropdownData:this.dropdownData}))),i("ir-sidebar",{side:"right",class:"font-size-small"},i("div",{class:"container pt-1"},i("h5",{class:"font-weight-bold"},this.mode==="create"?"Create":"Edit"," Channel")),i("ul",{class:"list-group list-group-horizontal mb-2"},this.tabs.map((t=>i("li",{class:this.activeTab===t?"active":""},i("a",{class:"","data-mdb-ripple-color":"dark",onClick:()=>{this.activeTab=t;this.loader=true;setTimeout((()=>{this.loader=false}),2e3)}},t))))),this.loader?i("div",{class:"loader-position"},i("ir-loader",null)):i("span",null,this.activeTab=="General Settings"&&i("ir-general-settings",{data:this.selectedItem,mode:this.mode}),this.activeTab=="Mapping"&&i("ir-mapping",{map:this.selectedItem})),i("div",{class:"btn-position"},i("button",{type:"button",class:"btn btn-primary btn-sm btn-block",onClick:()=>this.goNext()},this.activeTab=="General Settings"?"Next":"Save"))),i("ir-modal",{class:"exit"},this._exitWithoutSave())]}};o.style=n;export{o as ir_channel_manager};
//# sourceMappingURL=p-aa88e008.entry.js.map
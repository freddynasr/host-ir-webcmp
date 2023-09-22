import{r as t,c as s,h as i}from"./p-e56e81c3.js";import{h as e,_ as a,a as l}from"./p-ed750016.js";const o=".confirmed{color:#fff;display:flex;align-items:center}ir-select#update-status{transform:translateY(0.5rem)}.pointer{cursor:pointer}:root{--sidebar-width:50rem}.sm-padding-right{padding-right:0.2rem}.sm-padding-left{padding-left:0.2rem}.sm-padding-top{padding-top:0.2rem}.sm-padding-bottom{padding-bottom:0.2rem}.info-notes{list-style:none;padding-left:0}.light-blue-bg{background-color:#acecff;padding:0rem 0.1rem}";const r=class{constructor(i){t(this,i);this.sendDataToServer=s(this,"sendDataToServer",7);this.handlePrintClick=s(this,"handlePrintClick",7);this.handleReceiptClick=s(this,"handleReceiptClick",7);this.handleDeleteClick=s(this,"handleDeleteClick",7);this.handleMenuClick=s(this,"handleMenuClick",7);this.handleRoomAdd=s(this,"handleRoomAdd",7);this.handleRoomEdit=s(this,"handleRoomEdit",7);this.handleRoomDelete=s(this,"handleRoomDelete",7);this.handleAddPayment=s(this,"handleAddPayment",7);this.bookingDetails=null;this.setupDataCountries=null;this.setupDataCountriesCode=null;this.languageAbreviation="";this.dropdownStatuses=[];this.paymentDetailsUrl="";this.bookingStatuses=[];this.foodArrangeCats=[];this.arrivalTimes=[];this.statusCodes=[];this.hasPrint=false;this.hasReceipt=false;this.hasDelete=false;this.hasMenu=false;this.hasRoomEdit=false;this.hasRoomDelete=false;this.hasRoomAdd=false;this.hasCheckIn=false;this.hasCheckOut=false;this.statusData=[];this.tempStatus=null;this.guestData=null;this.rerenderFlag=false}handleIconClick(t){const s=t.target;switch(s.id){case"print":this.handlePrintClick.emit();return;case"receipt":this.handleReceiptClick.emit();return;case"book-delete":this.handleDeleteClick.emit();return;case"menu":this.handleMenuClick.emit();return;case"room-add":this.handleRoomAdd.emit();return;case"add-payment":this.handleAddPayment.emit();return}const i=s.id;if(i.includes("roomEdit")){const t=s.id.split("-")[1];this.handleRoomEdit.emit(t)}else if(s.id.includes("roomDelete")){const t=s.id.split("-")[1];this.handleRoomDelete.emit(t)}}handleSidebarToggle(){const t=document.querySelector("ir-sidebar#editGuestInfo");t.open=false}handleEditSidebar(){this.openEditSidebar()}handleFormSubmit(t){const s=t.detail;const i=this.bookingDetails;i.My_Guest.FIRST_NAME=s.firstName;i.My_Guest.LAST_NAME=s.lastName;i.My_Guest.COUNTRY_ID=s.country;i.My_Guest.CITY=s.city;i.My_Guest.ADDRESS=s.address;i.My_Guest.MOBILE=s.mobile;i.My_Guest.PHONE_PREFIX=s.prefix;i.My_Guest.IS_NEWS_LETTER=s.newsletter;i.My_Guest.My_User.CURRENCY=s.currency;i.My_Guest.My_User.DISCLOSED_EMAIL=s.altEmail;i.My_Guest.My_User.PASSWORD=s.password;i.My_Guest.My_User.EMAIL=s.email;this.bookingDetails=i;console.log("Form submitted with data: ",this.bookingDetails);this.rerenderFlag=!this.rerenderFlag;const e=document.querySelector("ir-sidebar#editGuestInfo");e.open=false;this.sendDataToServer.emit(this.bookingDetails)}handleSelectChange(t){const s=t.target;const i=s.id;switch(i){case"update-status":this.tempStatus=t.detail;break}}handleClick(t){const s=t.target;const i=s.id;switch(i){case"update-status-btn":this.updateStatus();break}}watchHandler(t,s){console.log("The new value of bookingDetails is: ",t);console.log("The old value of bookingDetails is: ",s);let i={firstName:t.My_Guest.FIRST_NAME,lastName:t.My_Guest.LAST_NAME,email:t.My_Guest.My_User.EMAIL,altEmail:t.My_Guest.My_User.DISCLOSED_EMAIL,password:t.My_Guest.My_User.PASSWORD,country:t.My_Guest.COUNTRY_ID,city:t.My_Guest.CITY,address:t.My_Guest.ADDRESS,mobile:t.My_Guest.MOBILE,prefix:t.My_Guest.PHONE_PREFIX,newsletter:t.My_Guest.IS_NEWS_LETTER,currency:t.My_Guest.My_User.CURRENCY,language:t.My_Guest.My_User.LANGUAGE};this.guestData=i;this.rerenderFlag=!this.rerenderFlag}watchDropdownStatuses(t,s){console.log("The new value of dropdownStatuses is: ",t);console.log("The old value of dropdownStatuses is: ",s);try{const s=t.map((t=>({value:t.CODE_NAME,text:this._getBookingStatus(t.CODE_NAME,"_BOOK_STATUS")})));this.statusData=s;console.log("The new value of statusData is: ",this.statusData);this.rerenderFlag=!this.rerenderFlag}catch(t){console.log("Error in watchDropdownStatuses: ",t)}}openEditSidebar(){const t=document.querySelector("ir-sidebar#editGuestInfo");t.open=true}_calculateNights(t,s){const i=e(s).diff(e(t),"days");return i}_getBookingStatus(t,s){const i=this.statusCodes.find((i=>i.CODE_NAME===t&&i.TBL_NAME===s));const e=i[`CODE_VALUE_${this.languageAbreviation}`];return e}updateStatus(){const t=this.bookingDetails;t.BOOK_STATUS_CODE=this.tempStatus;this.bookingDetails=t;this.rerenderFlag=!this.rerenderFlag;this.sendDataToServer.emit(this.bookingDetails)}render(){var t;if(!this.bookingDetails){return null}let s="";switch(this.bookingDetails.BOOK_STATUS_CODE){case"001":s="bg-ir-orange";break;case"002":s="bg-ir-green";break;case"003":s="bg-ir-red";break;case"004":s="bg-ir-red";break}return[i("div",{class:"fluid-container pt-1 mr-2 ml-2"},i("div",{class:"row"},i("div",{class:"col-lg-7 col-md-12 d-flex justify-content-start align-items-end"},i("div",{class:"font-size-large sm-padding-right"},`Booking#${this.bookingDetails.BOOK_NBR}`),i("div",null,"@ ",a(this.bookingDetails.BOOK_DATE)," ",l(this.bookingDetails.BOOK_HOUR,+" "+this.bookingDetails.BOOK_MINUTE))),i("div",{class:"col-lg-5 col-md-12 d-flex justify-content-end align-items-center"},i("span",{class:`confirmed btn-sm mr-2 ${s}`},this._getBookingStatus(this.bookingDetails.BOOK_STATUS_CODE,"_BOOK_STATUS")),i("ir-select",{id:"update-status",size:"sm","label-available":"false",data:this.statusData,textSize:"sm",class:"sm-padding-right"}),i("ir-button",{icon:"",id:"update-status-btn",size:"sm",text:"Update"}),this.hasReceipt&&i("ir-icon",{id:"receipt",icon:"ft-file-text h1 color-ir-dark-blue-hover ml-1 pointer"}),this.hasPrint&&i("ir-icon",{id:"print",icon:"ft-printer h1 color-ir-dark-blue-hover ml-1 pointer"}),this.hasDelete&&i("ir-icon",{id:"book-delete",icon:"ft-trash-2 h1 danger ml-1 pointer"}),this.hasMenu&&i("ir-icon",{id:"menu",icon:"ft-list h1 color-ir-dark-blue-hover ml-1 pointer"})))),i("div",{class:"fluid-container m-1"},i("div",{class:"row m-0"},i("div",{class:"col-lg-7 col-md-12 pl-0 pr-lg-1 p-0"},i("div",{class:"card"},i("div",{class:"p-1"},((t=this.bookingDetails.My_Ac)===null||t===void 0?void 0:t.NAME)||"",i("ir-label",{label:"Source:",value:this.bookingDetails.My_Source.Label,imageSrc:this.bookingDetails.My_Source.Icon}),i("ir-label",{label:"Booked by:",value:`${this.bookingDetails.My_Guest.FIRST_NAME} ${this.bookingDetails.My_Guest.LAST_NAME}`,iconShown:true}),i("ir-label",{label:"Phone:",value:this.bookingDetails.My_Guest.MOBILE}),i("ir-label",{label:"Email:",value:this.bookingDetails.My_Guest.My_User.EMAIL}),i("ir-label",{label:"Alternate Email:",value:this.bookingDetails.My_Guest.My_User.DISCLOSED_EMAIL}),i("ir-label",{label:"Address:",value:this.bookingDetails.My_Guest.ADDRESS}),i("ir-label",{label:"Arrival Time:",value:this._getBookingStatus(this.bookingDetails.ARRIVAL_TIME_CODE,"_ARRIVAL_TIME")}),i("ir-label",{label:"Notes:",value:this.bookingDetails.GUEST_REMARK}))),i("div",{class:"font-size-large d-flex justify-content-between align-items-center ml-1 mb-1"},`${a(this.bookingDetails.FROM_DATE)} - ${a(this.bookingDetails.TO_DATE)} (${this._calculateNights(this.bookingDetails.FROM_DATE,this.bookingDetails.TO_DATE)} ${this._calculateNights(this.bookingDetails.FROM_DATE,this.bookingDetails.TO_DATE)>1?"nights":"night"})`,this.hasRoomAdd&&i("ir-icon",{id:"room-add",icon:"ft-plus h3 color-ir-dark-blue-hover pointer"})),i("div",{class:"card"},this.bookingDetails.My_Bsa.map(((t,s)=>[i("ir-room",{currency:this.bookingDetails.My_Currency.REF,hasRoomEdit:this.hasRoomEdit,hasRoomDelete:this.hasRoomDelete,hasCheckIn:this.hasCheckIn,hasCheckOut:this.hasCheckOut,mealCode:this.foodArrangeCats,item:t}),s!==this.bookingDetails.My_Bsa.length-1&&i("hr",{class:"mr-2 ml-2 mt-1 mb-1"})])))),i("div",{class:"col-lg-5 col-md-12 pr-0 pl-0 pl-md-1"},i("ir-payment-details",{item:this.bookingDetails,paymentDetailsUrl:this.paymentDetailsUrl})))),i("ir-sidebar",{side:"right",id:"editGuestInfo"},i("ir-guest-info",{data:this.guestData,setupDataCountries:this.setupDataCountries,setupDataCountriesCode:this.setupDataCountriesCode}))]}static get watchers(){return{bookingDetails:["watchHandler"],dropdownStatuses:["watchDropdownStatuses"]}}};r.style=o;export{r as ir_booking_details};
//# sourceMappingURL=p-222b815e.entry.js.map
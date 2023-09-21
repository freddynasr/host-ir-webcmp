import{r as t,c as i,h as s}from"./p-e56e81c3.js";import{h as e,_ as a,a as l}from"./p-ed750016.js";const r=".confirmed{color:#fff;display:flex;align-items:center}ir-select#update-status{transform:translateY(0.5rem)}.pointer{cursor:pointer}:root{--sidebar-width:50rem}.sm-padding-right{padding-right:0.2rem}.sm-padding-left{padding-left:0.2rem}.sm-padding-top{padding-top:0.2rem}.sm-padding-bottom{padding-bottom:0.2rem}.info-notes{list-style:none;padding-left:0}.light-blue-bg{background-color:#acecff;padding:0rem 0.1rem}";const o=class{constructor(s){t(this,s);this.sendDataToServer=i(this,"sendDataToServer",7);this.handlePrintClick=i(this,"handlePrintClick",7);this.handleReceiptClick=i(this,"handleReceiptClick",7);this.handleDeleteClick=i(this,"handleDeleteClick",7);this.handleMenuClick=i(this,"handleMenuClick",7);this.handleRoomAdd=i(this,"handleRoomAdd",7);this.handleRoomEdit=i(this,"handleRoomEdit",7);this.handleRoomDelete=i(this,"handleRoomDelete",7);this.handleAddPayment=i(this,"handleAddPayment",7);this.bookingDetails=null;this.setupDataCountries=null;this.setupDataCountriesCode=null;this.dropdownStatuses=[];this.paymentDetailsUrl="";this.bookingStatuses=[];this.foodArrangeCats=[];this.arrivalTimes=[];this.hasPrint=false;this.hasReceipt=false;this.hasDelete=false;this.hasMenu=false;this.hasRoomEdit=false;this.hasRoomDelete=false;this.hasRoomAdd=false;this.hasCheckIn=false;this.hasCheckOut=false;this.statusData=[{value:"1",text:""},{value:"2",text:""},{value:"3",text:""}];this.tempStatus=null;this.guestData=null;this.rerenderFlag=false}handleIconClick(t){const i=t.target;switch(i.id){case"print":this.handlePrintClick.emit();return;case"receipt":this.handleReceiptClick.emit();return;case"book-delete":this.handleDeleteClick.emit();return;case"menu":this.handleMenuClick.emit();return;case"room-add":this.handleRoomAdd.emit();return;case"add-payment":this.handleAddPayment.emit();return}const s=i.id;if(s.includes("roomEdit")){const t=i.id.split("-")[1];this.handleRoomEdit.emit(t)}else if(i.id.includes("roomDelete")){const t=i.id.split("-")[1];this.handleRoomDelete.emit(t)}}handleSidebarToggle(){const t=document.querySelector("ir-sidebar#editGuestInfo");t.open=false}handleEditSidebar(){this.openEditSidebar()}handleFormSubmit(t){const i=t.detail;const s=this.bookingDetails;s.My_Guest.FIRST_NAME=i.firstName;s.My_Guest.LAST_NAME=i.lastName;s.My_Guest.COUNTRY_ID=i.country;s.My_Guest.CITY=i.city;s.My_Guest.ADDRESS=i.address;s.My_Guest.MOBILE=i.mobile;s.My_Guest.PHONE_PREFIX=i.prefix;s.My_Guest.IS_NEWS_LETTER=i.newsletter;s.My_Guest.My_User.CURRENCY=i.currency;s.My_Guest.My_User.DISCLOSED_EMAIL=i.altEmail;s.My_Guest.My_User.PASSWORD=i.password;s.My_Guest.My_User.EMAIL=i.email;this.bookingDetails=s;console.log("Form submitted with data: ",this.bookingDetails);this.rerenderFlag=!this.rerenderFlag;const e=document.querySelector("ir-sidebar#editGuestInfo");e.open=false;this.sendDataToServer.emit(this.bookingDetails)}handleSelectChange(t){const i=t.target;const s=i.id;switch(s){case"update-status":this.tempStatus=t.detail;break}}handleClick(t){const i=t.target;const s=i.id;switch(s){case"update-status-btn":this.updateStatus();break}}watchHandler(t,i){console.log("The new value of bookingDetails is: ",t);console.log("The old value of bookingDetails is: ",i);let s={firstName:t.My_Guest.FIRST_NAME,lastName:t.My_Guest.LAST_NAME,email:t.My_Guest.My_User.EMAIL,altEmail:t.My_Guest.My_User.DISCLOSED_EMAIL,password:t.My_Guest.My_User.PASSWORD,country:t.My_Guest.COUNTRY_ID,city:t.My_Guest.CITY,address:t.My_Guest.ADDRESS,mobile:t.My_Guest.MOBILE,prefix:t.My_Guest.PHONE_PREFIX,newsletter:t.My_Guest.IS_NEWS_LETTER,currency:t.My_Guest.My_User.CURRENCY,language:t.My_Guest.My_User.LANGUAGE};this.guestData=s;this.rerenderFlag=!this.rerenderFlag}watchDropdownStatuses(t,i){console.log("The new value of dropdownStatuses is: ",t);console.log("The old value of dropdownStatuses is: ",i);const s=t.map((t=>({value:t.CODE_NAME,text:this._getBookingStatus(t.CODE_NAME)})));this.statusData=s;this.rerenderFlag=!this.rerenderFlag}openEditSidebar(){const t=document.querySelector("ir-sidebar#editGuestInfo");t.open=true}_calculateNights(t,i){const s=e(i).diff(e(t),"days");return s}_getBookingStatus(t){const i=this.bookingStatuses.find((i=>i.CODE_NAME===t));return i.CODE_VALUE_EN}_getArrivalTime(t){const i=this.arrivalTimes.find((i=>i.CODE_NAME===t));return i.CODE_VALUE_EN}updateStatus(){const t=this.bookingDetails;t.BOOK_STATUS_CODE=this.tempStatus;this.bookingDetails=t;this.rerenderFlag=!this.rerenderFlag;this.sendDataToServer.emit(this.bookingDetails)}render(){var t;if(!this.bookingDetails){return null}let i="";console.log(this.bookingDetails.BOOK_STATUS_CODE);switch(this._getBookingStatus(this.bookingDetails.BOOK_STATUS_CODE)){case"Pending":i="bg-ir-orange";break;case"Confirmed":i="bg-ir-green";break;case"Cancelled":i="bg-ir-red";break;case"No show":i="bg-ir-red";break}return[s("div",{class:"fluid-container pt-1 mr-2 ml-2"},s("div",{class:"row"},s("div",{class:"col-lg-7 col-md-12 d-flex justify-content-start align-items-end"},s("div",{class:"font-size-large sm-padding-right"},`Booking#${this.bookingDetails.BOOK_NBR}`),s("div",null,"@ ",a(this.bookingDetails.BOOK_DATE)," ",l(this.bookingDetails.BOOK_HOUR,+" "+this.bookingDetails.BOOK_MINUTE))),s("div",{class:"col-lg-5 col-md-12 d-flex justify-content-end align-items-center"},s("span",{class:`confirmed btn-sm mr-2 ${i}`},this._getBookingStatus(this.bookingDetails.BOOK_STATUS_CODE)),s("ir-select",{id:"update-status",size:"sm","label-available":"false",data:this.statusData,textSize:"sm",class:"sm-padding-right"}),s("ir-button",{icon:"",id:"update-status-btn",size:"sm",text:"Update"}),this.hasReceipt&&s("ir-icon",{id:"receipt",icon:"ft-file-text h1 color-ir-dark-blue-hover ml-1 pointer"}),this.hasPrint&&s("ir-icon",{id:"print",icon:"ft-printer h1 color-ir-dark-blue-hover ml-1 pointer"}),this.hasDelete&&s("ir-icon",{id:"book-delete",icon:"ft-trash-2 h1 danger ml-1 pointer"}),this.hasMenu&&s("ir-icon",{id:"menu",icon:"ft-list h1 color-ir-dark-blue-hover ml-1 pointer"})))),s("div",{class:"fluid-container m-1"},s("div",{class:"row m-0"},s("div",{class:"col-lg-7 col-md-12 pl-0 pr-lg-1 p-0"},s("div",{class:"card"},s("div",{class:"p-1"},((t=this.bookingDetails.My_Ac)===null||t===void 0?void 0:t.NAME)||"",s("ir-label",{label:"Source:",value:this.bookingDetails.My_Source.Label,imageSrc:this.bookingDetails.My_Source.Icon}),s("ir-label",{label:"Booked by:",value:`${this.bookingDetails.My_Guest.FIRST_NAME} ${this.bookingDetails.My_Guest.LAST_NAME}`,iconShown:true}),s("ir-label",{label:"Phone:",value:this.bookingDetails.My_Guest.MOBILE}),s("ir-label",{label:"Email:",value:this.bookingDetails.My_Guest.My_User.EMAIL}),s("ir-label",{label:"Alternate Email:",value:this.bookingDetails.My_Guest.My_User.DISCLOSED_EMAIL}),s("ir-label",{label:"Address:",value:this.bookingDetails.My_Guest.ADDRESS}),s("ir-label",{label:"Arrival Time:",value:this._getArrivalTime(this.bookingDetails.ARRIVAL_TIME_CODE)}),s("ir-label",{label:"Notes:",value:this.bookingDetails.GUEST_REMARK}))),s("div",{class:"font-size-large d-flex justify-content-between align-items-center ml-1 mb-1"},`${a(this.bookingDetails.FROM_DATE)} - ${a(this.bookingDetails.TO_DATE)} (${this._calculateNights(this.bookingDetails.FROM_DATE,this.bookingDetails.TO_DATE)} ${this._calculateNights(this.bookingDetails.FROM_DATE,this.bookingDetails.TO_DATE)>1?"nights":"night"})`,this.hasRoomAdd&&s("ir-icon",{id:"room-add",icon:"ft-plus h3 color-ir-dark-blue-hover pointer"})),s("div",{class:"card"},this.bookingDetails.My_Bsa.map(((t,i)=>[s("ir-room",{currency:this.bookingDetails.My_Currency.REF,hasRoomEdit:this.hasRoomEdit,hasRoomDelete:this.hasRoomDelete,hasCheckIn:this.hasCheckIn,hasCheckOut:this.hasCheckOut,mealCode:this.foodArrangeCats,item:t}),i!==this.bookingDetails.My_Bsa.length-1&&s("hr",{class:"mr-2 ml-2 mt-1 mb-1"})])))),s("div",{class:"col-lg-5 col-md-12 pr-0 pl-0 pl-md-1"},s("ir-payment-details",{item:this.bookingDetails,paymentDetailsUrl:this.paymentDetailsUrl})))),s("ir-sidebar",{side:"right",id:"editGuestInfo"},s("ir-guest-info",{data:this.guestData,setupDataCountries:this.setupDataCountries,setupDataCountriesCode:this.setupDataCountriesCode}))]}static get watchers(){return{bookingDetails:["watchHandler"],dropdownStatuses:["watchDropdownStatuses"]}}};o.style=r;export{o as ir_booking_details};
//# sourceMappingURL=p-bf81cc7a.entry.js.map
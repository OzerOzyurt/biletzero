//  <div className="accordion" id="eventAccordion">
//   <div className="accordion-item">
//     <h2 className="accordion-header" id="headingOne">
//       <button
//         className="accordion-button"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#collapseOne"
//         aria-expanded="true"
//         aria-controls="collapseOne"
//       >
//         <i className="tz-md-ticket-white"></i>
//         Kullanıcı Bilgilerim
//       </button>
//     </h2>
//     <div
//       id="collapseOne"
//       className="accordion-collapse collapse show"
//       aria-labelledby="headingOne"
//       data-bs-parent="#eventAccordion"
//     >
//       <div className="accordion-body">
//         <section className="tab-section info-section" id="tab-section">
//           <ul className="nav nav-content" id="myTab" role="tablist">
//             <li className="nav-item" role="presentation">
//               <a
//                 className="nav-link active"
//                 id="info-tab"
//                 data-bs-toggle="tab"
//                 data-bs-target="#info"
//                 type="button"
//                 role="tab"
//                 aria-controls="info"
//                 aria-selected="true"
//               >
//                 Hesap Bilgilerim
//               </a>
//             </li>
//             <li className="nav-item" role="presentation">
//               <a
//                 className="nav-link"
//                 id="profile-tab"
//                 data-bs-toggle="tab"
//                 data-bs-target="#profile"
//                 type="button"
//                 role="tab"
//                 aria-controls="profile"
//                 aria-selected="false"
//                 tabindex="-1"
//               >
//                 Şifrem
//               </a>
//             </li>
//           </ul>
//           <div className="tab-content" id="formTabContent">
//             <div
//               className="tab-pane fade active show"
//               id="info"
//               role="tabpanel"
//               aria-labelledby="info-tab"
//             >
//               <form id="profile_info_form" method="put" novalidate="novalidate">
//                 <div className="profile-info container">
//                   <div className="row">
//                     <div className="col-md-6">
//                       <div className="input-wrapper">
//                         <input
//                           placeholder=""
//                           type="text"
//                           className="payment-input"
//                           id="firstName"
//                           maxlength="35"
//                           name="firstName"
//                           value=""
//                         />
//                         <span className="placeholder">Adın*</span>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="input-wrapper">
//                         <input
//                           placeholder=""
//                           type="text"
//                           className="payment-input"
//                           id="lastName"
//                           maxlength="35"
//                           name="lastName"
//                           value=""
//                         />
//                         <span className="placeholder">Soyadın*</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6">
//                       <div className="input-wrapper">
//                         <input
//                           placeholder=""
//                           type="email"
//                           className="payment-input"
//                           id="email"
//                           maxlength="35"
//                           name="email"
//                           value=""
//                           disabled=""
//                         />
//                         <span
//                           className="placeholder"
//                           style={{ backgroundColor: "#e5e5e5" }}
//                         >
//                           E-posta Adresin*
//                         </span>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="input-wrapper">
//                         <input
//                           placeholder=""
//                           type="text"
//                           className="payment-input"
//                           id="phone"
//                           maxlength="35"
//                           name="phone"
//                           value=""
//                           disabled=""
//                         />
//                         <span
//                           className="placeholder"
//                           style={{ backgroundColor: "#e5e5e5" }}
//                         >
//                           Cep Telefonun*
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6">
//                       <div className="input-wrapper">
//                         <input
//                           placeholder=""
//                           type="text"
//                           className="payment-input hasDatepicker"
//                           id="birthDay"
//                           name="birthDay"
//                           readonly="readonly"
//                           value=" "
//                         />
//                         <span className="placeholder">Doğum Günün*</span>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="input-wrapper select-box">
//                         <select
//                           placeholder=""
//                           className="payment-input"
//                           id="gender"
//                           name="sex"
//                         >
//                           <option value="Unknown" selected="selected">
//                             Belirtmek İstemiyorum
//                           </option>
//                           <option value="Male">Erkek</option>
//                           <option value="Female">Kadın</option>
//                         </select>
//                         <span className="placeholder">Cinsiyetin*</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6">
//                       <a className="submit-btn" id="form-submit">
//                         <span className="text">GÜNCELLE</span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <input
//                   name="__RequestVerificationToken"
//                   type="hidden"
//                   value=""
//                 />
//               </form>
//             </div>
//             <div
//               className="tab-pane fade"
//               id="profile"
//               role="tabpanel"
//               aria-labelledby="profile-tab"
//             >
//               <form id="profile_password_form" novalidate="novalidate">
//                 <div className="profile-info container">
//                   <div className="input-wrapper">
//                     <input
//                       placeholder=""
//                       type="password"
//                       className="payment-input"
//                       id="currentPassword"
//                       maxlength="35"
//                       name="currentPassword"
//                     />
//                     <span className="placeholder">Mevcut Şifrem*</span>
//                   </div>
//                   <div className="input-wrapper">
//                     <input
//                       placeholder=""
//                       type="password"
//                       className="payment-input"
//                       id="newPassword"
//                       maxlength="35"
//                       name="newPassword"
//                     />
//                     <span className="placeholder">Yeni Şifrem*</span>
//                   </div>
//                   <div className="input-wrapper">
//                     <input
//                       placeholder=""
//                       type="password"
//                       className="payment-input"
//                       id="passwordRepeat"
//                       maxlength="35"
//                       name="passwordRepeat"
//                     />
//                     <span className="placeholder">Yeni Şifrem Tekrar*</span>
//                   </div>
//                   <div className="container">
//                     <a href="#" className="submit-btn" id="change-password-btn">
//                       <span className="text">DEĞİŞTİR</span>
//                     </a>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header" id="headingTwo">
//       <button
//         className="accordion-button collapsed"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#collapseTwo"
//         aria-expanded="false"
//         aria-controls="collapseTwo"
//       >
//         <i className="tz-sm-location-white"></i>
//         Fatura Adreslerim
//       </button>
//     </h2>
//     <div
//       id="collapseTwo"
//       className="accordion-collapse collapse"
//       aria-labelledby="headingTwo"
//       data-bs-parent="#eventAccordion"
//     >
//       <div className="accordion-body">
//         <strong>Yakında</strong>
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header" id="headingThree">
//       <button
//         className="accordion-button collapsed"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#collapseThree"
//         aria-expanded="false"
//         aria-controls="collapseThree"
//       >
//         <i className="tz-sm-credit-card-white"></i>
//         Kayıtlı Kartlarım
//       </button>
//     </h2>
//     <div
//       id="collapseThree"
//       className="accordion-collapse collapse"
//       aria-labelledby="headingThree"
//       data-bs-parent="#eventAccordion"
//     >
//       <div className="accordion-body">
//         <strong>Yakında</strong>
//       </div>
//     </div>
//   </div>
// </div>



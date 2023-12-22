import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="d-none d-lg-block  footerbgcolor">
        <footer className="footer d-lg-none">
          <div className="frame">
            <img
              src="https://test.biletzero.com/images/ticketzero_logo.png"
              alt="logo"
              className="biletzero-main-logo"
            />
            <div className="container h-auto">
              <p className="text-wrapper">
                Bilet Zero, etkinlik düzenleyicileri için özel olarak
                tasarlanmış yenilikçi bir online bilet satış platformudur.
                Etkinlik düzenleyicilerin maliyetleri azaltmasına ve
                katılımcılarına daha iyi bir deneyim sunmalarına olanak tanır.
              </p>
            </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2">KURUMSAL</div>
            <div className="group-2">
              <a
                className="text-wrapper-3"
                href="https://test.biletzero.com/corporate/about-us"
              >
                HAKKIMIZDA
              </a>
              <a
                className="text-wrapper-3"
                href="https://test.biletzero.com/corporate/user-agreement"
              >
                ÜYELİK SÖZLEŞMESİ
              </a>
              <a
                className="text-wrapper-3"
                href="https://test.biletzero.com/corporate/product-service"
              >
                KULLANIM KOŞULLARI
              </a>
              <a
                className="text-wrapper-3"
                href="https://test.biletzero.com/corporate/cookie-policy"
              >
                ÇEREZ POLİTİKASI
              </a>
            </div>
          </div>
          <div className="frame-4">
            <div className="text-wrapper-2">İLETİŞİM</div>
            <div className="group-3">
              <div className="text-wrapper-3">info@biletzero.com</div>
            </div>
          </div>
          <div className="bottom">
            <div className="biletzero">
              <p className="biletzero-text">
                © 2023 BİLETZERO TÜM HAKLARI SAKLIDIR.
              </p>
            </div>
          </div>
        </footer>
        <footer
          className="d-none d-lg-flex"
          style={{ flexdirection: "column" }}
        >
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="footer1">
                    <div className="footer1-a">
                      <svg
                        width="11.8125rem"
                        height="5.375rem"
                        viewBox="0 0 189 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M61.7354 47.6213H51.6965V68.0803H17.9322V47.6213H8.96609C8.96609 51.8761 5.48739 55.3297 1.19152 55.3297C0.785218 55.3297 0.388043 55.2889 0 55.2301V85.8597H69.6241V55.3251C69.583 55.3251 69.5465 55.3297 69.51 55.3297C65.2187 55.3297 61.7354 51.8806 61.7354 47.6213Z"
                          fill="#DFFF00"
                        ></path>
                        <path
                          d="M0 30.6296C0.388043 30.5707 0.785218 30.53 1.19152 30.53C5.48283 30.53 8.96609 33.9791 8.96609 38.2383H17.9322V17.7794H51.6965V38.2383H61.7354C61.7354 33.9836 65.2141 30.53 69.51 30.53C69.5511 30.53 69.5876 30.5345 69.6241 30.5345V0H0V30.6296Z"
                          fill="#DFFF00"
                        ></path>
                        <path
                          d="M101.659 30.2039C101.759 30.1632 101.855 30.1179 101.956 30.0772C102.051 30.4302 102.152 30.7833 102.248 31.1363C102.335 31.4894 102.421 31.8424 102.535 32.191C103.092 33.911 104.005 35.4228 105.411 36.5951C107.265 38.1386 109.443 38.8447 111.848 38.8628C116.537 38.9035 120.372 36.2737 122.033 31.9284C122.732 30.1043 123.065 28.2169 123.074 26.2751C123.088 23.3103 122.517 20.4859 120.851 17.9602C119.669 16.1723 118.116 14.8009 116.09 14.0178C113.583 13.0492 111.018 12.9768 108.443 13.6874C105.676 14.4569 103.741 16.1769 102.659 18.8293C102.252 19.8251 102.01 20.8571 101.864 21.9117C101.805 22.2829 101.746 22.654 101.682 23.0207C101.545 22.989 101.408 22.9573 101.266 22.9301C101.421 21.8574 101.581 20.7982 101.727 19.7345C101.864 18.7342 102.083 17.7384 102.102 16.7381C102.152 13.8277 102.12 10.9173 102.12 8.00234C102.12 7.86655 102.106 7.73076 102.097 7.59497H96.7695V38.3468H102.408C102.156 35.6129 101.905 32.9061 101.654 30.2084L101.659 30.2039ZM101.841 23.4371C102.558 21.2011 104.138 19.7889 106.329 19.0782C108.603 18.3404 110.917 18.3495 113.172 19.1552C115.816 20.1012 117.327 22.0068 117.751 24.7497C117.97 26.1483 117.888 27.5379 117.441 28.8868C116.779 30.8829 115.46 32.2181 113.611 32.9514C113.483 32.9967 113.341 33.0464 113.2 33.0917C113.163 33.1053 113.122 33.1189 113.086 33.1279C112.725 33.2411 112.323 33.3452 111.885 33.4357C111.734 33.4629 111.579 33.49 111.428 33.5127C111.333 33.5262 111.241 33.5489 111.141 33.5624C111.127 33.5624 111.113 33.5624 111.1 33.567C110.506 33.6439 109.958 33.6711 109.47 33.6711C109.406 33.6711 109.338 33.6711 109.274 33.6711C109.182 33.6711 109.091 33.6711 109.004 33.662C107.79 33.6077 106.612 33.3814 105.494 32.879C103.298 31.8877 101.988 30.1994 101.586 27.8457C101.33 26.3611 101.38 24.881 101.846 23.4371H101.841Z"
                          fill="white"
                        ></path>
                        <path
                          d="M166.81 37.1293C167.098 36.98 167.381 36.8261 167.669 36.6767C167.705 36.6541 167.737 36.636 167.774 36.6133C167.774 36.4956 167.774 36.378 167.774 36.2603C167.76 34.8435 167.764 33.4268 167.764 32.0101C167.764 31.6978 167.769 31.3809 167.774 31.0686C167.39 31.313 167.007 31.562 166.623 31.8064C165.509 32.4672 164.304 32.9199 163.039 33.2231C160.309 33.8749 157.584 33.9609 154.881 33.0919C153.142 32.5351 151.667 31.6072 150.663 30.0457C149.823 28.7421 149.522 27.2982 149.517 25.7411C155.922 25.9358 162.295 26.1259 168.7 26.3205C168.732 26.2028 168.76 26.1168 168.773 26.0263C169.034 24.1841 168.974 22.3554 168.404 20.5766C167.678 18.318 166.345 16.4984 164.322 15.1993C162.528 14.0497 160.556 13.4296 158.433 13.2666C155.726 13.0629 153.137 13.4974 150.745 14.801C148.271 16.1499 146.477 18.1414 145.395 20.7305C143.952 24.1796 143.893 27.6874 145.354 31.1184C147.221 35.5044 150.791 37.7902 155.411 38.6049C157.538 38.9806 159.679 38.9037 161.816 38.6004C163.564 38.3514 165.249 37.9124 166.819 37.1203L166.81 37.1293ZM150.937 21.1831C153.06 18.155 157.68 17.2271 160.875 18.92C162.692 19.8841 164.085 22.0024 164.08 23.9397C159.291 24.0121 154.53 24.0845 149.727 24.1569C149.914 23.057 150.312 22.0793 150.937 21.1831Z"
                          fill="white"
                        ></path>
                        <path
                          d="M141.458 7.59497H135.902V38.3603H141.458V7.59497Z"
                          fill="white"
                        ></path>
                        <path
                          d="M128.93 15.9598C127.921 15.9643 126.994 15.6792 126.141 14.9776V38.3922H131.747V28.4026C131.747 24.1026 131.747 19.8026 131.747 15.5026V14.9595C130.879 15.6746 129.948 15.9553 128.939 15.9643L128.93 15.9598Z"
                          fill="white"
                        ></path>
                        <path
                          d="M126.52 13.5562C127.365 14.294 128.383 14.4524 129.474 14.3438C131.127 14.1808 132.332 12.9089 132.337 10.9716C132.3 9.92606 131.661 8.96648 130.401 8.4188C128.748 7.69459 126.105 8.23774 125.575 10.5824C125.315 11.7321 125.607 12.7595 126.52 13.5516V13.5562Z"
                          fill="white"
                        ></path>
                        <path
                          d="M172.887 17.6661C172.887 22.4006 172.887 27.1306 172.887 31.8651C172.887 32.8247 172.95 33.7752 173.234 34.6986C173.585 35.8392 174.165 36.8214 175.119 37.5773C176.046 38.3106 177.109 38.6772 178.278 38.804C179.999 38.9896 181.634 38.7632 183.126 37.8308C183.624 37.523 184.058 37.1745 184.19 36.663V35.9071C184.181 35.8438 184.19 35.7759 184.19 35.7125V32.5577C184.19 32.3359 184.19 32.1186 184.19 31.9014C184.012 32.1367 183.829 32.3676 183.651 32.6029C183.008 33.4177 182.195 33.8748 181.113 33.8703C179.817 33.8612 179.036 33.3452 178.712 32.1005C178.561 31.5211 178.502 30.901 178.502 30.299C178.484 26.0307 178.493 21.7624 178.493 17.4941V17.0731C180.419 17.2768 182.286 17.4714 184.167 17.6706V13.7191H178.474V9.67261H174.247C174.22 10.1433 174.201 10.5915 174.174 11.0396C174.069 12.8093 173.22 13.6693 171.439 13.7961C170.946 13.8323 170.458 13.864 169.965 13.9002V17.1456H172.887V17.6706V17.6661Z"
                          fill="white"
                        ></path>
                        <path
                          d="M188.219 55.6645C187.215 53.0754 185.499 51.0567 183.12 49.6083C181.002 48.3183 178.669 47.7162 176.199 47.6393C172.798 47.5397 169.639 48.2866 166.895 50.3822C164.371 52.3105 162.869 54.8678 162.271 57.9412C161.787 60.4307 162.001 62.8885 162.919 65.2693C163.745 67.4148 165.083 69.1846 166.936 70.5651C169.502 72.4752 172.442 73.222 175.724 73.2583C177.916 73.2175 180.153 72.8282 182.239 71.7917C185.508 70.1668 187.631 67.5868 188.612 64.1241C189.42 61.2816 189.292 58.4436 188.219 55.669V55.6645ZM180.408 66.9259C179.135 67.6592 177.359 68.0847 174.821 68.0756C173.812 68.0892 172.127 67.7271 170.602 66.8173C168.616 65.6359 167.489 63.8797 167.215 61.603C166.978 59.6567 167.27 57.8099 168.411 56.1578C169.347 54.7999 170.648 53.9218 172.2 53.4149C174.547 52.6545 176.907 52.6499 179.231 53.5009C182.371 54.6551 184.124 57.2441 184.061 60.5755C184.01 63.3456 182.869 65.5137 180.408 66.9259Z"
                          fill="white"
                        ></path>
                        <path
                          d="M160.394 47.6621C157.892 47.8613 155.847 48.8978 154.345 50.912C153.235 52.4012 152.601 54.1031 152.144 55.8819C151.656 57.8011 151.396 59.7564 151.277 61.7344C151.277 61.7435 151.277 61.7525 151.277 61.7616C151.268 61.9155 151.254 62.0739 151.245 62.2278C151.103 62.2007 150.962 62.1735 150.82 62.1463C150.829 62.0513 150.839 61.9562 150.848 61.8567C151.254 57.2805 151.66 52.7135 152.067 48.0967H151.615C150.008 48.0967 148.401 48.1147 146.794 48.0876C146.776 48.0876 146.762 48.0876 146.744 48.0876C146.598 48.0876 146.447 48.0876 146.301 48.0831V49.1196C146.314 56.837 146.31 64.5543 146.31 72.2717V72.7334H151.848C151.848 72.5478 151.848 72.3939 151.848 72.24C151.866 69.8999 151.852 67.5553 151.907 65.2152C151.962 62.8932 152.299 60.6164 153.171 58.4393C153.655 57.2353 154.313 56.1354 155.285 55.2663C156.901 53.8224 158.787 53.4105 160.887 53.9628C160.946 53.9809 161.005 53.999 161.069 54.0171C161.179 54.0533 161.284 54.0895 161.384 54.1302C161.384 54.094 161.384 54.0533 161.384 54.0171V47.6395C161.302 47.635 161.243 47.6214 161.179 47.6259C160.919 47.635 160.658 47.644 160.398 47.6666L160.394 47.6621Z"
                          fill="white"
                        ></path>
                        <path
                          d="M138.662 49.5992C136.868 48.4496 134.896 47.8295 132.773 47.6665C130.066 47.4628 127.477 47.8973 125.085 49.2009C122.611 50.5498 120.817 52.5413 119.735 55.1349C118.292 58.584 118.233 62.0919 119.694 65.5228C121.561 69.9088 125.131 72.1946 129.751 73.0093C131.878 73.385 134.019 73.3081 136.156 73.0048C137.904 72.7559 139.589 72.3168 141.159 71.5247L142.017 71.0721C142.054 71.0495 142.086 71.0314 142.123 71.0087C142.123 70.891 142.123 70.7734 142.123 70.6557C142.109 69.2389 142.113 67.8222 142.113 66.4055C142.113 66.0931 142.118 65.7763 142.123 65.464C141.739 65.7084 141.356 65.9574 140.972 66.2018C139.858 66.8626 138.653 67.3152 137.388 67.6185C134.658 68.2703 131.933 68.3563 129.23 67.4872C127.491 66.9305 126.016 66.0026 125.012 64.441C124.172 63.1375 123.871 61.6936 123.866 60.1365C130.271 60.3311 136.644 60.5212 143.049 60.7159C143.081 60.5982 143.109 60.5122 143.122 60.4217C143.382 58.5795 143.323 56.7508 142.752 54.972C142.027 52.7133 140.694 50.8938 138.671 49.5947L138.662 49.5992ZM124.072 58.5523C124.259 57.4524 124.656 56.4747 125.281 55.5785C127.404 52.5504 132.024 51.6225 135.22 53.3154C137.041 54.2795 138.429 56.3978 138.425 58.335C133.636 58.4075 128.874 58.4799 124.072 58.5523Z"
                          fill="white"
                        ></path>
                        <path
                          d="M117.652 68.0259C117.652 67.7679 117.652 67.5145 117.652 67.2565L116.492 67.2972C114.552 67.3515 112.612 67.3832 110.676 67.4828C109.298 67.5507 107.919 67.7227 106.545 67.8947C105.422 68.0395 104.299 68.2251 103.189 68.4469C102.614 68.5646 102.039 68.7049 101.468 68.8542C100.993 69.0036 100.519 69.153 100.044 69.2978C99.9799 69.248 99.9114 69.1937 99.8475 69.1439C100.067 68.9538 100.281 68.7592 100.5 68.5691C101.012 68.0938 101.532 67.6276 102.048 67.1569C106.837 62.789 111.621 58.4211 116.415 54.0577C116.657 53.8359 116.903 53.6141 117.145 53.3924V48.092H115.73C109.813 48.1011 103.897 48.1011 97.9849 48.092H96.5697C96.5697 48.2143 96.5697 48.3319 96.5697 48.4541C96.5697 48.4949 96.5651 48.5401 96.5651 48.5899C96.5697 49.0064 96.5651 49.4228 96.5697 49.8347C96.5697 51.0749 96.5697 52.3151 96.5697 53.5553C96.9486 53.5417 97.323 53.5282 97.7019 53.5146C100.016 53.4422 102.331 53.3878 104.641 53.2656C107.353 53.1253 110.042 52.7858 112.626 51.8987C112.849 51.7991 113.068 51.704 113.292 51.6045C113.338 51.6497 113.383 51.695 113.429 51.7448C113.242 51.9213 113.05 52.0978 112.863 52.2744C112.863 52.2744 112.854 52.2834 112.854 52.2879C112.831 52.306 112.813 52.3241 112.79 52.3422C112.744 52.3875 112.694 52.4282 112.648 52.4735C112.196 52.8854 111.744 53.2928 111.288 53.7001C106.736 57.7829 102.185 61.8656 97.6425 65.9529C97.0262 66.5051 96.4099 67.0573 95.7936 67.6095V69.8681C95.7936 70.7055 95.7936 71.5429 95.7891 72.3848C95.7891 72.4029 95.7891 72.4119 95.7936 72.4255V72.774H98.3273C104.394 72.774 110.462 72.7695 116.529 72.774H117.656V72.507C117.656 72.4798 117.666 72.4617 117.666 72.43C117.652 70.9635 117.656 69.497 117.666 68.0305C117.666 68.0305 117.666 68.0305 117.661 68.0305L117.652 68.0259Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <p className="footer1-b">
                      Bilet Zero, etkinlik düzenleyicileri için özel olarak
                      tasarlanmış yenilikçi bir online bilet satış platformudur.
                      etkinlik düzenleyicilerin maliyetleri azaltmasına ve
                      katılımcılarına daha iyi bir deneyim sunmalarına olanak
                      tanır.
                    </p>
                    <div className="footer1-svg">
                      <div className="footer1-svg1">
                        <svg
                          width="1.125rem"
                          height="1.125rem"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2886_5473)">
                            <path
                              d="M4.32472 10.7211L3.75038 12.8652L1.65117 12.9096C1.02381 11.746 0.667969 10.4147 0.667969 8.99991C0.667969 7.63186 1.00068 6.34176 1.59042 5.20581H1.59087L3.45976 5.54844L4.27844 7.40611C4.10709 7.90565 4.0137 8.44191 4.0137 8.99991C4.01376 9.60551 4.12346 10.1857 4.32472 10.7211Z"
                              fill="#FBBB00"
                            ></path>
                            <path
                              d="M17.0221 7.45874C17.1169 7.9578 17.1663 8.4732 17.1663 8.99994C17.1663 9.59059 17.1042 10.1667 16.9859 10.7225C16.5843 12.6136 15.5349 14.265 14.0812 15.4336L14.0807 15.4331L11.7268 15.313L11.3936 13.2333C12.3582 12.6676 13.1121 11.7823 13.5091 10.7225H9.09766V7.45874H13.5735H17.0221Z"
                              fill="#518EF8"
                            ></path>
                            <path
                              d="M14.0835 15.4332L14.084 15.4336C12.6702 16.5701 10.8742 17.25 8.91914 17.25C5.77734 17.25 3.04579 15.4939 1.65234 12.9097L4.32589 10.7212C5.0226 12.5806 6.8163 13.9042 8.91914 13.9042C9.823 13.9042 10.6698 13.6599 11.3964 13.2333L14.0835 15.4332Z"
                              fill="#28B446"
                            ></path>
                            <path
                              d="M14.1833 2.6493L11.5107 4.83736C10.7587 4.3673 9.86975 4.09576 8.91739 4.09576C6.76694 4.09576 4.9397 5.48012 4.27789 7.4062L1.59029 5.2059H1.58984C2.96289 2.55865 5.72889 0.75 8.91739 0.75C10.9191 0.75 12.7545 1.46304 14.1833 2.6493Z"
                              fill="#F14336"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_2886_5473">
                              <rect
                                width="16.5"
                                height="16.5"
                                fill="white"
                                transform="translate(0.667969 0.75)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="footer1-svg2">
                        <svg
                          width="1.325rem"
                          height="1.325rem"
                          viewBox="0 0 17 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2886_5484)">
                            <path
                              d="M16.9011 9.02548C16.9011 4.4901 13.2203 0.809326 8.68491 0.809326C4.14952 0.809326 0.46875 4.4901 0.46875 9.02548C0.46875 13.1293 3.4726 16.5309 7.40721 17.1401V11.3947H5.30875V9.02548H7.40721V7.21471C7.40721 5.15856 8.62568 4.01625 10.5041 4.01625C11.4011 4.01625 12.3318 4.18548 12.3318 4.18548V6.19087H11.2995C10.2757 6.19087 9.95414 6.83394 9.95414 7.47702V9.01702H12.2388L11.8749 11.3863H9.95414V17.1316C13.8972 16.5309 16.9011 13.1293 16.9011 9.02548Z"
                              fill="#1877F2"
                            ></path>
                            <path
                              d="M11.8826 11.4031L12.2464 9.03389H9.96179V7.49389C9.96179 6.84235 10.2918 6.20774 11.3072 6.20774H12.3395V4.19389C12.3395 4.19389 11.4087 4.02466 10.5118 4.02466C8.63333 4.02466 7.41487 5.16697 7.41487 7.22312V9.03389H5.31641V11.4031H7.41487V17.1485C7.82948 17.2162 8.26102 17.25 8.69256 17.25C9.1241 17.25 9.55564 17.2162 9.97025 17.1485V11.4031H11.8826Z"
                              fill="white"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_2886_5484">
                              <rect
                                width="1rem"
                                height="16.5"
                                fill="white"
                                transform="translate(0.417969 0.75)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="footer1-svg3">
                        <svg
                          width="2.75rem"
                          height="2.75rem"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="44"
                            height="44"
                            rx="22"
                            fill="#D9D9D9"
                            fillOpacity="0.05"
                          ></rect>
                          <path
                            d="M27.7803 22.2074C27.8088 25.115 30.4705 26.0826 30.5 26.095C30.4775 26.1632 30.0747 27.4738 29.0977 28.8276C28.2531 29.9981 27.3765 31.1642 25.9956 31.1884C24.6388 31.2121 24.2025 30.4255 22.6512 30.4255C21.1004 30.4255 20.6157 31.1642 19.3312 31.2121C17.9984 31.2599 16.9834 29.9464 16.1317 28.7803C14.3916 26.3949 13.0617 22.0397 14.8474 19.0999C15.7345 17.64 17.3197 16.7155 19.0404 16.6918C20.3493 16.6681 21.5847 17.5267 22.3848 17.5267C23.1844 17.5267 24.6857 16.4942 26.264 16.6458C26.9247 16.6719 28.7793 16.8989 29.9702 18.5517C29.8743 18.6081 27.7573 19.7766 27.7803 22.2074V22.2074ZM25.2303 15.0677C25.9379 14.2555 26.4142 13.1249 26.2842 12C25.2642 12.0389 24.0308 12.6445 23.2992 13.4562C22.6435 14.175 22.0693 15.3255 22.2242 16.4282C23.3611 16.5116 24.5226 15.8804 25.2303 15.0677"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offset-lg-2 col-lg-3">
                  <div className="footer2 fot1">
                    <p className="footer2-p1">KURUMSAL</p>
                    <a
                      className="footer2-p2"
                      href="https://test.biletzero.com/corporate/about-us"
                    >
                      HAKKIMIZDA
                    </a>
                    <a
                      className="footer2-p2"
                      href="https://test.biletzero.com/corporate/user-agreement"
                    >
                      ÜYELİK SÖZLEŞMESİ
                    </a>
                    <a
                      className="footer2-p2"
                      href="https://test.biletzero.com/corporate/product-service"
                    >
                      KULLANIM KOŞULLARI
                    </a>
                    <a
                      className="footer2-p2"
                      href="https://test.biletzero.com/corporate/cookie-policy"
                    >
                      ÇEREZ POLİTİKASI
                    </a>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer2 fot2">
                    <a
                      className="footer2-p1"
                      href="https://test.biletzero.com/corporate/contact"
                    >
                      İLETİŞİM
                    </a>
                    <p className="footer2-p2">info@biletzero.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer3">
          <p className="footer3-a1">© 2023 BİLETZERO TÜM HAKLARI SAKLIDIR.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

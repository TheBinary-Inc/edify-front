import React from "react";

/**@style => Payment.css */
import "./Payment.css";
import { Payment_Static } from '../../static/Table_Static';
import {ReactComponent as InfoIcon} from '../../assets/UI-icons/info.svg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Payment = () => {

  return (
    <div className="admin__payment">
      <h1>To’lov</h1>
      <div className="payment__balans">
        <div className="payment__students">
          <div className="paid">
            <span>To’lov qilganlar</span>
            <div className="indicator_pay">
              <span>100</span>
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.4805 63C35.7975 63 39.8545 62.1803 43.6514 60.5409C47.4483 58.9015 50.7966 56.6245 53.6963 53.71C56.596 50.7955 58.8715 47.4386 60.5229 43.6394C62.1743 39.8401 63 35.7937 63 31.5C63 27.2063 62.1743 23.1599 60.5229 19.3606C58.8715 15.5613 56.5894 12.2044 53.6767 9.28997C50.7641 6.37544 47.4093 4.0985 43.6124 2.45913C39.8155 0.819712 35.7585 0 31.4415 0C27.1505 0 23.1065 0.819712 19.3096 2.45913C15.5127 4.0985 12.1709 6.37544 9.28418 9.28997C6.39751 12.2044 4.12847 15.5613 2.47708 19.3606C0.825694 23.1599 0 27.2063 0 31.5C0 35.7937 0.825694 39.8401 2.47708 43.6394C4.12847 47.4386 6.404 50.7955 9.30367 53.71C12.2034 56.6245 15.5517 58.9015 19.3486 60.5409C23.1455 62.1803 27.1895 63 31.4805 63Z"
                  fill="#0CA409"
                />
                <path
                  d="M28.0477 46.5668C27.4496 46.5668 26.8969 46.4302 26.3898 46.157C25.8827 45.8837 25.3951 45.4479 24.927 44.8493L17.6713 35.7546C17.1251 35.0519 16.8521 34.2973 16.8521 33.4906C16.8521 32.7099 17.1186 32.0334 17.6518 31.4609C18.1848 30.8883 18.8545 30.6021 19.6607 30.6021C20.1548 30.6021 20.6099 30.7062 21.026 30.9144C21.4421 31.1226 21.8582 31.5129 22.2743 32.0854L27.8916 39.6188L40.3356 19.4385C40.9858 18.3716 41.818 17.8381 42.8322 17.8381C43.5864 17.8381 44.269 18.0724 44.8802 18.5408C45.4914 19.0092 45.797 19.6598 45.797 20.4925C45.797 20.8828 45.6994 21.2796 45.5043 21.683C45.3093 22.0863 45.1077 22.4702 44.8997 22.8344L30.9734 44.8493C30.2712 45.9943 29.296 46.5668 28.0477 46.5668Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div className="vertical__line"></div>
          <div className="paid">
            <span>To’lov qilmaganlar</span>
            <div className="indicator_pay">
              <span id="dont__pay">16</span>
              <svg
                width="71"
                height="71"
                viewBox="0 0 71 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.478 71C40.3432 71 44.9153 70.0762 49.1944 68.2286C53.4734 66.381 57.2469 63.815 60.5149 60.5304C63.7828 57.2457 66.3472 53.4626 68.2083 49.1809C70.0695 44.8992 71 40.3389 71 35.5C71 30.6611 70.0695 26.1008 68.2083 21.819C66.3472 17.5373 63.7754 13.7542 60.4928 10.4696C57.2103 7.18502 53.4295 4.61894 49.1505 2.7714C44.8714 0.923802 40.2993 0 35.434 0C30.5981 0 26.0407 0.923802 21.7616 2.7714C17.4826 4.61894 13.7164 7.18502 10.4631 10.4696C7.20989 13.7542 4.65272 17.5373 2.79163 21.819C0.930544 26.1008 0 30.6611 0 35.5C0 40.3389 0.930544 44.8992 2.79163 49.1809C4.65272 53.4626 7.21721 57.2457 10.4851 60.5304C13.753 63.815 17.5265 66.381 21.8056 68.2286C26.0846 70.0762 30.6421 71 35.478 71Z"
                  fill="#FF3B30"
                />
                <path
                  d="M35.478 42.0106C33.4265 42.0106 32.3714 40.9548 32.3127 38.8432L31.8292 20.1034C31.7999 19.077 32.1296 18.2266 32.8183 17.552C33.5071 16.8775 34.3936 16.5403 35.478 16.5403C36.5331 16.5403 37.4124 16.8849 38.1158 17.574C38.8192 18.2632 39.1563 19.121 39.127 20.1475L38.5994 38.8432C38.5408 40.9548 37.5004 42.0106 35.478 42.0106ZM35.478 53.9319C34.3644 53.9319 33.3899 53.5433 32.5546 52.7661C31.7193 51.9889 31.3016 51.0432 31.3016 49.9287C31.3016 48.8143 31.7193 47.8612 32.5546 47.0694C33.3899 46.2775 34.3644 45.8816 35.478 45.8816C36.6211 45.8816 37.6102 46.2702 38.4455 47.0474C39.2808 47.8245 39.6985 48.785 39.6985 49.9287C39.6985 51.0725 39.2808 52.0256 38.4455 52.788C37.6102 53.5506 36.6211 53.9319 35.478 53.9319Z"
                  fill="white"
                />
              </svg>
              <div></div>
            </div>
          </div>
        </div>
        <div className="balance">
          <div className="general__balance">
            <span>Umumiy balans</span>
            <p>Dekabr - Yanvar</p>
            <h1>4.000.000 so’m</h1>
            <span id="percent">Kelishilgan foiz: 60%</span>
          </div>
          <div className="general__fines">
            <span>Umumiy jarimalari</span>
            <p>Dekabr - Yanvar</p>
            <h1>100.000 so’m</h1>
            <span id="percent">Jarimalari soni: 2ta</span>
          </div>
        </div>
      </div>
      <div className="table__content">
      <table>
          <thead>
            <tr className="payment__tr-thead">
                <th>O’quvchi ismi</th>
                <th>To'lov summasi</th>
                <th>To'lov sanasi</th>
                <th>To'lov oyi</th>
                <th>Telefon raqami</th>
                <th>Shartnoma</th>
                <th>Batafsil</th>
            </tr>  
          </thead>
          
            {
              Payment_Static.map(student => 
                <tbody className="tb">
                  <tr className="space"></tr>
                  <tr className="payment__tr-tbody" key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.summa}</td>
                    <td>{student.date}</td>
                    <td>{student.oy}</td>
                    <td>{student.contract}</td>
                    <td>{student.telephone}</td>
                    <td> <InfoIcon/> </td>
                  </tr>
                  
                </tbody>

              )
            }
      </table>
      </div>
    </div>
  );
};

export default Payment;

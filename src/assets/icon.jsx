import React from "react";

/**
 * @typedef {Object} IconProps
 * @property {string} name - The name of the icon.
 * @property {string} [className] - Optional class name for the icon.
 */

/**
 * Icon component.
 * @param {IconProps} props - The props for the Icon component.
 * @returns {JSX.Element | null} - The rendered Icon component.
 */
const Icon = ({ name, className }) => {
  switch (name) {
    case "questIcon":
      return (
        <svg
          className={className}
          width="90"
          height="66"
          viewBox="0 0 90 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 54.9219C0 53.5367 0.301783 52.2977 0.90535 51.2049C1.50892 50.1051 2.34568 49.2489 3.41564 48.6363C4.49246 48.0238 5.70645 47.7175 7.05761 47.7175C8.41564 47.7175 9.6262 48.0203 10.6893 48.6259C11.7524 49.2315 12.5789 50.0807 13.1687 51.1735C13.7586 52.2594 14.0535 53.5019 14.0535 54.901C14.0535 56.5229 13.5905 57.9638 12.6646 59.2237L14.3004 60.9987C14.3073 61.0056 14.3107 61.0161 14.3107 61.03C14.3107 61.0578 14.297 61.0996 14.2695 61.1553C14.2284 61.2388 14.1564 61.3363 14.0535 61.4477C13.9506 61.5521 13.8306 61.6565 13.6934 61.7609C13.5631 61.8583 13.3951 61.9419 13.1893 62.0115C12.9904 62.0811 12.7846 62.1159 12.572 62.1159C11.9342 62.1159 11.3032 61.7713 10.679 61.0822C9.54047 61.7713 8.32648 62.1159 7.03704 62.1159C5.67901 62.1159 4.46502 61.8131 3.39506 61.2075C2.3251 60.6019 1.49177 59.7527 0.895062 58.6599C0.298354 57.5601 0 56.3141 0 54.9219ZM3.09671 54.9219C3.09671 56.2097 3.46708 57.2677 4.20782 58.096C4.94856 58.9174 5.89849 59.3281 7.05761 59.3281C7.72291 59.3281 8.31276 59.2098 8.82716 58.9731L7.5 57.5531C7.23251 57.2538 7.07819 56.9197 7.03704 56.5507C7.03018 56.502 7.02675 56.4533 7.02675 56.4046C7.02675 56.1053 7.13992 55.8407 7.36626 55.611L7.5 55.4857C7.74006 55.3187 7.97668 55.2352 8.20988 55.2352C8.29218 55.2352 8.37449 55.2421 8.45679 55.256C8.77915 55.3396 9.08436 55.5379 9.37243 55.8512L10.5967 57.1772C10.9054 56.5159 11.0597 55.7642 11.0597 54.9219C11.0597 53.6272 10.6893 52.5657 9.94856 51.7374C9.21468 50.9021 8.25789 50.4844 7.07819 50.4844C5.89163 50.4844 4.93141 50.8986 4.19753 51.7269C3.46365 52.5553 3.09671 53.6203 3.09671 54.9219Z"
            fill="#459BDA"
          />
          <path
            d="M15.7613 57.7932V52.7502C15.7613 51.7756 16.1968 51.2884 17.0679 51.2884H17.3868C18.2853 51.2884 18.7346 51.7756 18.7346 52.7502V57.3443C18.7346 58.0473 18.9026 58.5972 19.2387 58.994C19.5816 59.3907 20.0617 59.5891 20.679 59.5891C21.1591 59.5891 21.5912 59.4673 21.9753 59.2237C22.3663 58.9731 22.6715 58.639 22.8909 58.2213V52.7502C22.8909 51.7756 23.3333 51.2884 24.2181 51.2884H24.5062C24.9383 51.2884 25.2709 51.4032 25.5041 51.633C25.7373 51.8557 25.8539 52.2281 25.8539 52.7502V61.5729C25.8539 61.6078 25.8059 61.653 25.7099 61.7087C25.6139 61.7644 25.4733 61.8131 25.2881 61.8549C25.1097 61.8966 24.928 61.9175 24.7428 61.9175C23.7483 61.9175 23.1516 61.3676 22.9527 60.2678C22.1228 61.4999 20.9979 62.1159 19.5782 62.1159C18.9266 62.1159 18.3505 62.0045 17.8498 61.7818C17.3491 61.559 16.9479 61.2493 16.6461 60.8525C16.3512 60.4488 16.1283 59.9929 15.9774 59.4847C15.8333 58.9696 15.7613 58.4058 15.7613 57.7932Z"
            fill="#459BDA"
          />
          <path
            d="M27.5412 56.6969C27.5412 55.1029 28.0487 53.7838 29.0638 52.7397C30.0789 51.6886 31.3649 51.1631 32.9218 51.1631C34.4376 51.1631 35.6687 51.6504 36.6152 52.6249C37.5617 53.5994 38.035 54.8523 38.035 56.3837V56.5925C38.0213 56.8779 37.963 57.0902 37.8601 57.2294C37.7641 57.3617 37.5857 57.4278 37.3251 57.4278H30.2161C30.3189 58.2005 30.6413 58.8095 31.1831 59.255C31.725 59.6935 32.4006 59.9128 33.2099 59.9128C34.5542 59.9128 35.5247 59.3977 36.1214 58.3675C36.1283 58.3536 36.1797 58.3571 36.2757 58.3779C36.3717 58.3919 36.4883 58.4267 36.6255 58.4824C36.7696 58.538 36.9102 58.6146 37.0473 58.7121C37.1914 58.8026 37.3114 58.9383 37.4074 59.1193C37.5034 59.2933 37.5514 59.4917 37.5514 59.7144C37.5514 60.3339 37.1468 60.8908 36.3374 61.385C35.535 61.8723 34.4582 62.1159 33.107 62.1159C31.4266 62.1159 30.0789 61.6252 29.0638 60.6437C28.0487 59.6553 27.5412 58.3397 27.5412 56.6969ZM30.2161 55.6737H35.2778C35.2435 54.9428 35.0103 54.3581 34.5782 53.9196C34.1461 53.481 33.5768 53.2618 32.8704 53.2618C32.1776 53.2618 31.5878 53.488 31.1008 53.9405C30.6139 54.3859 30.3189 54.9637 30.2161 55.6737Z"
            fill="#459BDA"
          />
          <path
            d="M38.9815 59.798C38.9815 59.6518 39.0089 59.5091 39.0638 59.3699C39.1255 59.2306 39.1975 59.1123 39.2798 59.0149C39.369 58.9104 39.4547 58.8234 39.537 58.7538C39.6262 58.6773 39.7016 58.6251 39.7634 58.5972C39.832 58.5624 39.8731 58.552 39.8868 58.5659C40.2778 58.9835 40.7613 59.3211 41.3374 59.5787C41.9204 59.8293 42.5686 59.9546 43.2819 59.9546C44.489 59.9546 45.0926 59.6205 45.0926 58.9522C45.0926 58.806 45.0617 58.6807 45 58.5763C44.9383 58.465 44.8594 58.3745 44.7634 58.3049C44.6742 58.2283 44.537 58.1587 44.3519 58.096C44.1667 58.0334 43.9883 57.9812 43.8169 57.9394C43.6454 57.8977 43.4156 57.8455 43.1276 57.7828C43.0178 57.7619 42.9355 57.7445 42.8807 57.7306C41.9067 57.5079 41.2003 57.2781 40.7613 57.0415C39.7599 56.5055 39.2593 55.6806 39.2593 54.5669C39.2593 53.5437 39.6468 52.7258 40.4218 52.1132C41.2037 51.4937 42.2462 51.184 43.5494 51.184C44.88 51.184 45.9088 51.3963 46.6358 51.8209C47.3628 52.2455 47.7263 52.7745 47.7263 53.408C47.7263 53.6446 47.6475 53.8743 47.4897 54.0971C47.3388 54.3129 47.1845 54.4729 47.0267 54.5774C46.8759 54.6818 46.7867 54.7201 46.7593 54.6922C46.3958 54.2746 45.9465 53.9404 45.4115 53.6899C44.8834 53.4323 44.3278 53.3035 43.7449 53.3035C43.1824 53.3035 42.7503 53.394 42.4486 53.575C42.1468 53.749 41.9959 53.9996 41.9959 54.3268C41.9959 54.5426 42.0782 54.7201 42.2428 54.8593C42.4143 54.9985 42.596 55.0994 42.7881 55.1621C42.9801 55.2178 43.3128 55.3013 43.786 55.4127C43.8477 55.4266 43.8923 55.437 43.9198 55.444C43.9541 55.4509 43.9952 55.4614 44.0432 55.4753C44.0981 55.4892 44.1461 55.4997 44.1872 55.5066C45.216 55.7363 45.9636 55.9765 46.43 56.2271C47.4588 56.77 47.9733 57.5914 47.9733 58.6912C47.9733 59.7423 47.5686 60.5706 46.7593 61.1762C45.9568 61.7748 44.8525 62.0741 43.4465 62.0741C42.013 62.0741 40.9088 61.8549 40.1337 61.4163C39.3656 60.9778 38.9815 60.4383 38.9815 59.798Z"
            fill="#459BDA"
          />
          <path
            d="M48.8992 52.7084V52.51C48.8992 51.7722 49.3141 51.4032 50.144 51.4032H50.6481V50.0772C50.6481 49.5969 50.7647 49.235 50.9979 48.9913C51.2311 48.7407 51.5638 48.6155 51.9959 48.6155H52.2428C52.668 48.6155 52.9938 48.7268 53.2202 48.9496C53.4534 49.1723 53.57 49.5482 53.57 50.0772V51.4032H55.3601C55.7785 51.4032 56.0837 51.4903 56.2757 51.6643C56.4678 51.8383 56.5638 52.1063 56.5638 52.4682V52.6353C56.5638 53.3801 56.1557 53.7525 55.3395 53.7525H53.5082V58.2004C53.5082 58.7225 53.5974 59.1088 53.7757 59.3594C53.9609 59.61 54.2524 59.7353 54.6502 59.7353C55.1715 59.7353 55.6139 59.5021 55.9774 59.0357C55.9979 59.0079 56.0631 59.0357 56.1728 59.1193C56.2894 59.1958 56.4026 59.3351 56.5123 59.5369C56.6289 59.7318 56.6872 59.9546 56.6872 60.2052C56.6872 60.7411 56.4403 61.1936 55.9465 61.5625C55.4527 61.9314 54.7942 62.1159 53.9712 62.1159C51.7558 62.1159 50.6481 60.9256 50.6481 58.545V53.7525H50.144C49.3141 53.7525 48.8992 53.4045 48.8992 52.7084Z"
            fill="#459BDA"
          />
          <path
            d="M58.1996 64.5487V51.633C58.1996 51.6051 58.2476 51.5633 58.3436 51.5077C58.4465 51.452 58.5871 51.4032 58.7654 51.3615C58.9506 51.3128 59.1324 51.2884 59.3107 51.2884C59.7634 51.2884 60.1577 51.4276 60.4938 51.706C60.8299 51.9845 61.0391 52.4508 61.1214 53.1052C61.4506 52.4926 61.9033 52.0158 62.4794 51.6747C63.0556 51.3336 63.7277 51.1631 64.4959 51.1631C65.9019 51.1631 67.0473 51.6608 67.9321 52.6562C68.8169 53.6446 69.2593 54.9637 69.2593 56.6134C69.2593 58.2352 68.8134 59.5578 67.9218 60.581C67.0302 61.6043 65.8745 62.1159 64.4547 62.1159C63.7003 62.1159 63.0315 61.9384 62.4486 61.5834C61.8724 61.2214 61.4438 60.762 61.1626 60.2052V64.5487C61.1626 65.5162 60.727 66 59.856 66H59.5473C59.1152 66 58.7826 65.8886 58.5494 65.6659C58.3162 65.4431 58.1996 65.0707 58.1996 64.5487ZM61.1626 57.3234C61.1831 58.0195 61.4369 58.5937 61.9239 59.0462C62.4177 59.4917 63.0213 59.7144 63.7346 59.7144C64.537 59.7144 65.1783 59.4325 65.6584 58.8687C66.1454 58.2979 66.3889 57.5531 66.3889 56.6343C66.3889 55.7294 66.1454 54.995 65.6584 54.4312C65.1715 53.8604 64.537 53.575 63.7551 53.575C63.1447 53.575 62.6166 53.7281 62.1708 54.0344C61.725 54.3337 61.3889 54.7514 61.1626 55.2874V57.3234Z"
            fill="#459BDA"
          />
          <path
            d="M70.9568 60.4871V51.633C70.9568 51.6051 71.0048 51.5633 71.1008 51.5077C71.2037 51.452 71.3443 51.4032 71.5226 51.3615C71.7078 51.3128 71.8896 51.2884 72.0679 51.2884C73.1173 51.2884 73.7209 51.8801 73.8786 53.0634C74.3244 51.7965 75.1612 51.1631 76.3889 51.1631C76.9856 51.1631 77.452 51.3232 77.7881 51.6434C78.131 51.9566 78.3025 52.3812 78.3025 52.9172C78.3025 53.14 78.2716 53.3488 78.2099 53.5437C78.1482 53.7386 78.0727 53.8952 77.9835 54.0135C77.8944 54.1249 77.8018 54.2224 77.7058 54.3059C77.6166 54.3894 77.5377 54.4486 77.4691 54.4834C77.4074 54.5112 77.3697 54.5182 77.356 54.5043C76.9925 54.1562 76.5432 53.9822 76.0082 53.9822C75.3018 53.9822 74.7771 54.278 74.4342 54.8697C74.0912 55.4544 73.9198 56.2862 73.9198 57.3652V60.4871C73.9198 61.4407 73.4842 61.9175 72.6132 61.9175H72.3045C71.8724 61.9175 71.5398 61.8096 71.3066 61.5938C71.0734 61.378 70.9568 61.0091 70.9568 60.4871Z"
            fill="#459BDA"
          />
          <path
            d="M79.0021 56.6134C79.0021 55.0124 79.513 53.7038 80.535 52.6875C81.5638 51.6712 82.8944 51.1631 84.5267 51.1631C86.1454 51.1631 87.4623 51.6747 88.4774 52.6979C89.4925 53.7142 90 55.0333 90 56.6552C90 58.277 89.489 59.5926 88.4671 60.6019C87.452 61.6112 86.1248 62.1159 84.4856 62.1159C82.8532 62.1159 81.5295 61.6112 80.5144 60.6019C79.5062 59.5856 79.0021 58.2561 79.0021 56.6134ZM81.6152 56.6134C81.6152 57.5183 81.8861 58.2666 82.428 58.8582C82.9767 59.4429 83.6694 59.7353 84.5062 59.7353C85.3292 59.7353 86.0117 59.4429 86.5535 58.8582C87.0953 58.2735 87.3663 57.5392 87.3663 56.6552C87.3663 55.7433 87.0953 54.9915 86.5535 54.3999C86.0185 53.8082 85.3361 53.5124 84.5062 53.5124C83.6694 53.5124 82.9767 53.8047 82.428 54.3894C81.8861 54.9741 81.6152 55.7154 81.6152 56.6134Z"
            fill="#459BDA"
          />
          <path
            d="M21.353 30.5688C20.9755 30.5688 20.6359 30.3011 20.5541 29.9119C20.4584 29.4545 20.4093 28.9839 20.4093 28.5124C20.4093 25.2271 22.7233 22.443 25.9122 21.8911C26.2716 21.8273 26.6482 21.7949 27.0283 21.7949C27.4799 21.7949 27.8462 22.1666 27.8462 22.625C27.8462 23.0833 27.4799 23.455 27.0283 23.455C26.7421 23.455 26.4603 23.4795 26.1906 23.5276C23.7869 23.9431 22.0442 26.0406 22.0442 28.5133C22.0442 28.8684 22.0804 29.2235 22.1528 29.5673C22.2467 30.0151 21.9649 30.456 21.5228 30.5513C21.4668 30.5627 21.409 30.5688 21.353 30.5688Z"
            fill="#459BDA"
          />
          <path
            d="M63.7348 30.5688C64.1123 30.5688 64.4518 30.3011 64.5337 29.9119C64.6294 29.4545 64.6785 28.9839 64.6785 28.5124C64.6785 25.2271 62.3644 22.443 59.1756 21.8911C58.8162 21.8273 58.4396 21.7949 58.0595 21.7949C57.6079 21.7949 57.2416 22.1666 57.2416 22.625C57.2416 23.0833 57.6079 23.455 58.0595 23.455C58.3456 23.455 58.6274 23.4795 58.8972 23.5276C61.3009 23.9431 63.0436 26.0406 63.0436 28.5133C63.0436 28.8684 63.0074 29.2235 62.935 29.5673C62.841 30.0151 63.1228 30.456 63.565 30.5513C63.621 30.5627 63.6779 30.5688 63.7348 30.5688Z"
            fill="#459BDA"
          />
          <path
            d="M68.7805 28.1301C68.5478 22.5453 64.0507 18.0206 58.5486 17.8273C56.157 17.7416 53.9343 18.4606 52.1235 19.7376C52.1183 19.7411 52.1106 19.7472 52.1054 19.7507C50.7471 20.7111 49.1441 21.2561 47.4893 21.2561C46.6689 21.2561 45.938 20.7741 45.5536 20.0376C44.965 18.9093 43.8196 18.1431 42.4992 18.1431C41.1832 18.1431 40.0404 18.9049 39.45 20.0271C39.0604 20.768 38.3253 21.2552 37.4979 21.2552H37.4177C35.7621 21.2552 34.1599 20.7103 32.8017 19.7499C32.7965 19.7464 32.7887 19.7402 32.7836 19.7367C30.9728 18.4597 28.7492 17.7407 26.3585 17.8265C20.8547 18.0206 16.3576 22.5453 16.1249 28.1301C16.0369 30.2582 16.5549 32.256 17.5202 33.9599C17.5512 34.0115 17.5822 34.064 17.6133 34.1156C19.1844 36.723 21.7958 38.6184 24.8571 39.2036C24.8666 39.2053 24.8752 39.2071 24.8847 39.2071C25.5294 39.3313 26.1939 39.3951 26.873 39.3951C29.4051 39.3951 31.608 38.4977 33.3989 36.9862C34.1367 36.3679 34.8037 35.6445 35.3933 34.8363L35.395 34.8345C35.5337 34.636 35.6682 34.4296 35.794 34.2214C36.1181 33.7587 36.5499 33.387 37.0558 33.1394C37.4841 32.9295 37.9254 32.7099 37.9952 32.6618C38.0029 32.654 38.0133 32.6487 38.021 32.6417C38.1253 32.5691 38.2296 32.4948 38.3304 32.4187C38.6476 32.1773 38.876 31.8292 38.9424 31.4338L38.9398 31.4154C39.0311 29.4973 40.6359 27.9919 42.4984 27.9919C44.3806 27.9919 45.9156 29.5489 45.9759 31.4968C46.0526 31.8668 46.2741 32.1895 46.5749 32.4187C46.6758 32.4948 46.78 32.5691 46.8843 32.6417C46.8912 32.6496 46.9024 32.6548 46.9102 32.6618C46.98 32.7099 47.4212 32.9295 47.8496 33.1394C48.3546 33.387 48.7873 33.7578 49.1113 34.2214C49.238 34.4296 49.3716 34.636 49.5104 34.8345L49.5121 34.8363C50.1016 35.6445 50.7687 36.3679 51.5064 36.9862C53.2973 38.4968 55.5002 39.3951 58.0324 39.3951C58.7115 39.3951 59.376 39.3321 60.0206 39.2071C60.0301 39.2071 60.0387 39.2053 60.0482 39.2036C63.1095 38.6184 65.7209 36.723 67.2921 34.1156C67.3231 34.064 67.3541 34.0115 67.3852 33.9599C68.3504 32.2551 68.8684 30.2574 68.7805 28.1301ZM34.5254 31.3096C33.3593 34.4488 30.3669 36.6836 26.873 36.6836C22.3629 36.6836 18.6932 32.9592 18.6932 28.3821C18.6932 24.2824 21.6373 20.8668 25.4923 20.1994C25.9413 20.1216 26.4024 20.0805 26.873 20.0805C31.3831 20.0805 35.0528 23.8049 35.0528 28.3821C35.0528 29.4124 34.8667 30.3991 34.5254 31.3096ZM58.0315 36.6836C54.5376 36.6836 51.5461 34.4479 50.3791 31.3096C50.0387 30.3991 49.8517 29.4124 49.8517 28.3829C49.8517 23.8057 53.5214 20.0814 58.0315 20.0814C58.5021 20.0814 58.9632 20.1225 59.4122 20.2003C63.2664 20.8677 66.2113 24.2833 66.2113 28.3829C66.2113 32.9601 62.5416 36.6836 58.0315 36.6836Z"
            fill="#459BDA"
          />
          <path
            d="M49.7625 19.1739C48.6163 19.5888 47.4043 18.9323 46.574 18.0295C46.0537 17.4638 45.4361 17.0151 44.7563 16.7089C44.0766 16.4028 43.348 16.2452 42.6123 16.2452C41.8765 16.2452 41.148 16.4028 40.4682 16.7089C39.7885 17.0151 39.1708 17.4638 38.6506 18.0295C37.7927 18.9623 36.5341 19.6459 35.3606 19.1877C34.6278 18.9016 33.9346 18.5971 33.2903 18.2706C33.159 18.204 33.0239 18.1466 32.8863 18.0989C31.0358 16.7111 28.7421 15.8898 26.2579 15.8898C20.1723 15.8898 15.2294 20.8185 15.147 26.9299C13.8886 26.7535 12.8165 25.6533 12.8646 24.1883L13.2783 11.571C13.2785 11.5631 13.2853 11.5571 13.2931 11.5579C13.3016 11.5587 13.3088 11.5513 13.3078 11.5427C13.1663 10.3116 13.3796 8.98606 13.9969 7.63819C16.2594 2.69812 23.0923 -0.670876 29.2585 0.11333C31.5184 0.400744 33.3752 1.20614 34.7093 2.35444C35.6219 3.13988 36.8426 3.60439 38.0123 3.34876C39.403 3.04486 40.8905 2.88031 42.4365 2.88031C43.9967 2.88031 45.4973 3.04789 46.8989 3.35715C48.0706 3.61566 49.2948 3.15162 50.2098 2.36519C51.5436 1.21878 53.3988 0.414724 55.6564 0.127576C61.8225 -0.656719 68.6555 2.71218 70.9183 7.65221C71.4771 8.87232 71.705 10.0742 71.6382 11.2041L72.1238 26.0144C72.1677 27.3515 71.2306 28.5156 69.9308 28.7387L69.3565 28.8373C69.4455 28.2664 69.4918 27.6812 69.4918 27.085C69.4918 20.9021 64.5168 15.8898 58.3798 15.8898C55.5624 15.8898 52.9898 16.9463 51.0312 18.6874C50.9701 18.7084 50.9095 18.7312 50.8497 18.7557C50.5039 18.8975 50.1415 19.0366 49.7625 19.1739Z"
            fill="#459BDA"
          />
        </svg>
      );

    case "menuopenicon":
      return (
        <svg
          className={className}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 12.1162L10 12.1162"
            stroke="#464646"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 5.11621L4 5.11621"
            stroke="#464646"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 19.1162L4 19.1162"
            stroke="#464646"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "menucloseicon":
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.75781 17.359L12.0008 12.116L17.2438 17.359M17.2438 6.87305L11.9998 12.116L6.75781 6.87305"
            stroke="#494A4F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "searchicon":
      return (
        <svg
          className={className}
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0578 18.4606C15.967 18.4606 19.9467 14.7758 19.9467 10.2303C19.9467 5.68484 15.967 2 11.0578 2C6.14864 2 2.16895 5.68484 2.16895 10.2303C2.16895 14.7758 6.14864 18.4606 11.0578 18.4606Z"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.1693 20.5182L17.3359 16.043"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;
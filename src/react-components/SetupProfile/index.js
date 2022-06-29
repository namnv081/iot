import React, { useState, useContext, useEffect } from "react";
// import { AuthContext } from "./AuthContext";
// import { VerifyModal, VerificationError, EmailVerified, VerifyingEmail } from "./VerifyModal";
import { PageContainer } from "../layout/PageContainer";
import styles from "./styles.scss";
import { useListAvatar } from "../home/useListAvatar";
import { Column } from "../layout/Column";
import { TextInputField } from "../input/TextInputField";
import { ApplyButton } from "../input/Button";
import { FormattedMessage } from "react-intl";
import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
// export default function SetupProfile() {
//   return Setup profile;
// }
const SetupProfile = () => {
  const { results: listAvatar } = useListAvatar();
  console.log("listAvatar", listAvatar);
  const { handleSubmit, register } = useForm();
  return (
    <PageContainer>
      <div className={styles.modalSetup}>
        <div className={styles.title}>Your profile</div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
        <Column as="form" padding center onSubmit={handleSubmit()}>
          <div className={styles.formControl}>
            <div className={styles.label}>Display name</div>
            <TextInputField
              name="fullName"
              placeholder="Nam"
              required
              // ref={register}
              className={styles.inputName}
            />
          </div>
          <button type="submit" className={styles.submitSetup}>
            Save changes
          </button>
        </Column>
      </div>
    </PageContainer>
  );
};
export default SetupProfile;

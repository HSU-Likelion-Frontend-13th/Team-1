// 왼쪽 흰색 프로필 카드
import React from "react";
import styled from "styled-components";
import colors from "../../styles/color";
import PROFILE from "../../assets/profile.jpg";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

// Profile 스타일 컴포넌트
const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${colors.white};
  border: 0.05vw solid ${colors.white2};
  width: 19.79vw;
  height: 25.93vw;
  border-radius: 0.83vw;
  padding: 1.56vw 2.08vw;
`;

const ProfileImg = styled.img`
  width: 10.41vw;
  height: 10.41vw;
  border-radius: 100%;
`;

const ProfileName = styled.div`
  color: ${colors.mainColor};
  font-weight: 700;
  font-size: 2.08vw;
  padding: 1.3vw;
`;

const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.83vw;
  text-align: start;
  color: ${colors.profileTextColor};
  font-weight: 500;
  font-size: 0.83vw;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.83vw;
`;

const Icon = styled.div`
  font-size: 1.5vw;
  color: ${colors.iconColor};
`;

const Profile = () => {
  return (
    <ProfileLayout>
      <ProfileImg src={PROFILE} alt="프로필사진" />
      <ProfileName>김서희</ProfileName>
      <ProfileDetail>
        <DetailItem>
          <Icon>
            <FaPhone />
          </Icon>
          010.9339.4039
        </DetailItem>
        <DetailItem>
          <Icon>
            <FaEnvelope />
          </Icon>
          2171186@hansung.ac.kr
        </DetailItem>
        <DetailItem>
          <Icon>
            <FaLocationDot />
          </Icon>
          서울특별시 성북구 보문로 30가길(안암동1가)
        </DetailItem>
      </ProfileDetail>
    </ProfileLayout>
  );
};

export default Profile;

import { useDisclosure, useToast } from "@chakra-ui/react";
import styled from "styled-components";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import shareUrl from "../../../utils/shareUrl";

const ShareButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const toast = useToast();

  const url = location.pathname;

  const clickUrl = () => {
    shareUrl(url);
    toast({
      title: "링크가 복사되었습니다!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onClose();
  };
  return (
    <MainWrapper>
      <img onClick={onOpen} src="/assets/icon/ic-share.svg" alt="share" />

      <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <p className="h1">공유하기</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className="body1">산-책의 등산 정보를 공유해주세요</p>
            <BodyWrapper>
              {/* <img
                className="img"
                src="/assets/image/img-instagram.png"
                alt="instagram"
              />
              <img
                className="img"
                src="/assets/image/img-kakaotalk.png"
                alt="kakaotalk"
              /> */}
              <img
                onClick={clickUrl}
                className="img"
                src="/assets/icon/ic-link.svg"
                alt="link"
              />
            </BodyWrapper>
          </ModalBody>
        </ModalContent>
      </Modal>
    </MainWrapper>
  );
};

export default ShareButton;

const MainWrapper = styled.div`
  border-radius: 50%;
  background: var(--white, #fff);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.13);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.38rem;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  padding: 2rem 0;

  .img {
    width: 3rem;
    height: 3rem;
  }
`;

/* eslint-disable react/prop-types */
import React from 'react';
import { Modal } from 'antd';

import { ModalTabs } from '../modal/ModalTabs';
import { ModalPrevNextBtns } from '../modal/ModalPrevNextBtns';
import { ModalContentWithCurrentFilling } from '../modal/ModalContentWithCurrentFilling';

export function ModalWindow(props) {
  const { isShowModal, changeIsShowModal } = props;

  return (
    <Modal
      centered
      title="Выберите начинку"
      visible={isShowModal}
      onCancel={() => changeIsShowModal(false)}
    >
      <ModalTabs />
      <ModalPrevNextBtns />
      <ModalContentWithCurrentFilling />
    </Modal>
  );
}

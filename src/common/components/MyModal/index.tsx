/**
 * @desc 基于Antd Modal进行二次封装
 * @author pengdaokuan
 * @createTime 2020-04-02
 * @lastModify 2020-04-02
 */
import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "antd";

const WIDTH_EMUN = {
  sm: 420,
  md: 520,
  bg: 640,
  lg: 864
};
const MAXHEIGHT_EMUN = {
  sm: 430,
  md: 532,
  bg: 702,
  lg: 750
};

/**
 * @summary 基于Antd Modal进行二次封装，更多属性看Antd文档
 * @extends {React.hooks}
 * @property {String} title - 标题
 * @property {String} size - 大小
 * @property {String} visible - 是否显示
 * @property {Number} zIndex - 层级大小
 * @property {boolean} centered - 垂直居中展示 Modal
 * @property {String} wrapClassName - 自定义样式别名
 * @property {String/ReactNode} children
 * @property {String/ReactNode} footer - 底部内容，当不需要默认底部按钮时，可以设为 footer={null}
 */
function MyModal({
  title = "erek-resume 提示您",
  size = "sm",
  visible,
  zIndex = 11,
  centered = false,
  wrapClassName,
  footer,
  children,
  onCancel
}: any) {
  return createPortal(
    <Modal
      title={title}
      visible={visible}
      zIndex={zIndex}
      keyboard={false}
      centered={centered}
      onCancel={onCancel}
      width={WIDTH_EMUN[size]}
      maskClosable={false}
      wrapClassName={wrapClassName}
      footer={footer}
    >
      <div className="body" style={{ maxHeight: MAXHEIGHT_EMUN[size] }}>
        <div className="ctx">{children}</div>
      </div>
    </Modal>,
    document.body
  );
}

export default MyModal;

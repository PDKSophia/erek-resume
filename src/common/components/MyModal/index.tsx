/**
 * @desc 基于Antd Modal进行二次封装
 * @author pengdaokuan
 * @createTime 2020-04-02
 * @lastModify 2020-04-02
 */
import React from "react";
import { Modal } from "antd";
import styles from "./index.module.css";

const WIDTH_EMUN = {
  sm: 520,
  md: 640,
  bg: 864,
  lg: 1200
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
 * @property {Number} zIndex - 层级大小
 * @property {String} wrapClassName - 自定义样式别名
 * @property {String/ReactNode} children
 * @property {String/ReactNode} footer - 底部内容，当不需要默认底部按钮时，可以设为 footer={null}
 */
function MyModal({
  title = "erek-resume 提示您",
  size = "sm",
  zIndex = 11,
  wrapClassName,
  footer,
  children,
  onCancel
}: any) {
  console.log(title);
  return (
    <Modal
      title={title}
      visible={true}
      centered={true}
      footer={null}
      zIndex={zIndex}
      onCancel={onCancel}
      width={WIDTH_EMUN[size]}
      wrapClassName={wrapClassName}
    >
      <div className="body" style={{ maxHeight: MAXHEIGHT_EMUN[size] }}>
        <div className="ctx">{children}</div>
        {footer}
      </div>
    </Modal>
  );
}

export default MyModal;

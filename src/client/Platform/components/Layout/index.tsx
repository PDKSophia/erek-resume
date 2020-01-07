/**
 * @Desc: Layout 中间层组件
 * @Author: pengdaokuan
 * @CreateDate:  2020-01-07
 * @LastModify:  2019-10-17
 */
import React from "react";
import { LAYPUT_MAPS } from "../../../../common/constants";

interface Props {
  layout: string; // 左图右文 | 左文右图
  cssStyle?: object;
}

class Layout extends React.PureComponent<Props> {
  public static defaultProps: Props = {
    layout: LAYPUT_MAPS.TEXT_COVER
  };
  render() {
    const { layout } = this.props;
    return (
      <div>
        {layout === LAYPUT_MAPS.TEXT_COVER && <TextCover />}
        {layout === LAYPUT_MAPS.COVER_TEXT && <CoverText />}
      </div>
    );
  }
}

export function CoverText() {
  return <div>呵呵呵</div>;
}
export function TextCover() {
  return <div>嘻嘻嘻</div>;
}

export default Layout;

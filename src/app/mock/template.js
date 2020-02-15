import Mock from "mockjs";

export default Mock.mock("/template-list", () => {
  return {
    code: 1,
    msg: "获取所有的模板简历",
    data: [
      {
        text: "使用量",
        value: 131
      }
    ]
  };
});
